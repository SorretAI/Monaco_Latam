"""
ai_news_agent.py

A minimalist, production-ready AI news agent for static blog generation.
- Monitors RSS feeds, summarizes articles using your choice of LLM API (Vertex, Ollama, OpenRouter).
- Outputs Markdown blog posts to /posts/ (ready for static site deployment).
- Easily extensible: add WordPress publishing or advanced scheduling later.
- Configurable, with clear structure and solid error handling.
"""

import requests
import feedparser
import time
import os
import logging
from datetime import datetime
from pathlib import Path
import asyncio

# ======================= CONFIGURATION =======================

CONFIG = {
    "RSS_FEEDS_URLS": [
        "https://www.example.com/feed/",
        "https://www.anothersite.com/rss/"
    ],
    "LLM_SERVICE": "OLLAMA",  # Or "VERTEX_AI", "OPENROUTER"
    "LLM_PROMPT_TEMPLATE": "Summarize the following article into a concise, human-friendly blog post (250 words, catchy title):\n\nArticle: {}",
    # Ollama
    "OLLAMA_API_ENDPOINT": "http://localhost:11434/api/generate",
    "OLLAMA_MODEL_NAME": "gemma:2b",
    # OpenRouter
    "OPENROUTER_API_ENDPOINT": "https://openrouter.ai/api/v1/chat/completions",
    "OPENROUTER_API_KEY": os.getenv("OPENROUTER_API_KEY", ""),
    "OPENROUTER_MODEL_NAME": "google/gemma-2b-it",
    # Vertex AI (future use)
    "GCP_PROJECT_ID": "",
    "GCP_LOCATION": "",
    "VERTEX_AI_MODEL_ID": "gemini-1.0-pro",
    # Output
    "POSTS_DIR": "posts",
    "RUN_INTERVAL_MINUTES": 60,
}

logging.basicConfig(level=logging.INFO, format='[%(levelname)s] %(message)s')

# ======================= UTILS =======================

def ensure_posts_dir():
    Path(CONFIG["POSTS_DIR"]).mkdir(parents=True, exist_ok=True)

def sanitize_filename(title):
    """Converts a post title to a filesystem-safe filename."""
    return "".join(c for c in title if c.isalnum() or c in (' ', '-', '_')).rstrip().replace(" ", "_")

# ======================= RSS FETCHER =======================

def fetch_new_articles(feed_urls):
    """
    Parses RSS feeds and yields new articles as dicts with 'title' and 'content'.
    """
    articles = []
    for url in feed_urls:
        logging.info(f"Fetching feed: {url}")
        try:
            feed = feedparser.parse(url)
            for entry in feed.entries:
                content = entry.get("content", [{}])[0].get("value") or entry.get("summary") or ""
                title = entry.get("title", "Untitled")
                if content:
                    articles.append({
                        "title": title,
                        "content": content
                    })
        except Exception as e:
            logging.warning(f"Error fetching/parsing RSS feed {url}: {e}")
    return articles

# ======================= LLM CLIENT =======================

async def get_ai_summary(article_text, llm_service=CONFIG["LLM_SERVICE"]):
    """
    Calls the specified LLM service to generate a blog post (title + body).
    """
    prompt = CONFIG["LLM_PROMPT_TEMPLATE"].format(article_text[:2000])  # Limit to first 2000 chars for API safety

    if llm_service == "OLLAMA":
        payload = {"model": CONFIG["OLLAMA_MODEL_NAME"], "prompt": prompt, "stream": False}
        try:
            r = requests.post(CONFIG["OLLAMA_API_ENDPOINT"], json=payload)
            r.raise_for_status()
            data = r.json()
            return data.get("response", "").strip()
        except Exception as e:
            logging.error(f"Ollama error: {e}")
            return ""
    elif llm_service == "OPENROUTER":
        headers = {
            "Authorization": f"Bearer {CONFIG['OPENROUTER_API_KEY']}",
            "Content-Type": "application/json"
        }
        payload = {
            "model": CONFIG["OPENROUTER_MODEL_NAME"],
            "messages": [{"role": "user", "content": prompt}],
            "stream": False
        }
        try:
            r = requests.post(CONFIG["OPENROUTER_API_ENDPOINT"], headers=headers, json=payload)
            r.raise_for_status()
            data = r.json()
            return data['choices'][0]['message']['content'].strip()
        except Exception as e:
            logging.error(f"OpenRouter error: {e}")
            return ""
    elif llm_service == "VERTEX_AI":
        # Placeholder for Vertex AI (future)
        logging.warning("Vertex AI support not implemented yet.")
        return ""
    else:
        logging.error(f"Unknown LLM service: {llm_service}")
        return ""

# ======================= MARKDOWN BLOGGER =======================

def save_markdown_post(title, content):
    """Save the blog post as a markdown file in POSTS_DIR."""
    ensure_posts_dir()
    filename = f"{datetime.now().strftime('%Y-%m-%d')}_{sanitize_filename(title)[:60]}.md"
    path = Path(CONFIG["POSTS_DIR"]) / filename
    markdown = f"# {title}\n\n{content}\n"
    with open(path, "w", encoding="utf-8") as f:
        f.write(markdown)
    logging.info(f"Saved post: {path}")

# ======================= MAIN AGENT LOOP =======================

async def run_ai_agent():
    logging.info("AI News Agent started")
    articles = fetch_new_articles(CONFIG["RSS_FEEDS_URLS"])

    for article in articles:
        logging.info(f"Processing: {article['title']}")
        summary = await get_ai_summary(article["content"])
        if not summary:
            logging.warning(f"Empty summary for: {article['title']}")
            continue

        # Try to extract a title if LLM returns one, else use RSS title
        if summary.startswith("**") and "Title:" in summary:
            title_start = summary.find("Title:") + len("Title:")
            title_end = summary.find("**", title_start)
            blog_title = summary[title_start:title_end].strip() if title_end > title_start else article["title"]
            blog_body = summary[title_end+2:].strip() if title_end > 0 else summary
        else:
            blog_title = article["title"]
            blog_body = summary

        save_markdown_post(blog_title, blog_body)
        time.sleep(1)  # Small delay to avoid hitting rate limits

    logging.info("AI News Agent run finished.")

# ======================= ADVANCED SCHEDULING (PLACEHOLDER) =======================
# To be implemented: use APScheduler or cron for advanced scheduling
# For now, simple loop:

def main_loop():
    while True:
        asyncio.run(run_ai_agent())
        logging.info(f"Sleeping for {CONFIG['RUN_INTERVAL_MINUTES']} minutes...")
        time.sleep(CONFIG["RUN_INTERVAL_MINUTES"] * 60)

# ======================= ENTRY POINT =======================

if __name__ == "__main__":
    main_loop()

    # Uncomment below to enable WordPress API publishing in the future
    # def publish_to_wordpress(...): ...
    # See previous code for implementation details

