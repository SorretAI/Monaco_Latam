# AI Agent: News Curator and Blogger

## 1. Agent Name:
NewsBreeze (or choose a name that fits your "orchestra"!)

## 2. Primary Goal:
To automatically discover, summarize, and publish relevant news from specified RSS feeds to a WordPress blog, ensuring fresh and engaging content for users.

## 3. Core Capabilities:
-   **RSS Feed Monitoring:** Periodically check a list of configured RSS feeds for new articles.
-   **Content Fetching:** Extract full article content when possible (or rely on summary if full content not available in feed).
-   **AI Summarization/Generation:** Use an LLM (OLLAMA's Gemma 2B/Llama 3 or OpenRouter's DeepSeek) to:
    -   Summarize fetched news articles into concise blog post formats.
    -   Potentially generate creative headlines or introductions.
    -   (Optional) Rewrite content for specific tone/audience.
-   **WordPress Publishing:** Authenticate with WordPress and publish the generated content as new posts.
-   **Error Handling:** Manage issues like failed API calls, network errors, or LLM generation failures.
-   **Logging:** Record activities, successes, and failures.

## 4. Operational Flow (High-Level):

1.  **Initialize:** Load configuration (RSS feeds, WordPress credentials, LLM API key).
2.  **Loop (e.g., every hour/day):**
    a.  **Fetch RSS Feeds:** Get new entries from each RSS URL.
    b.  **Process New Articles:** For each new article:
        i.   Clean/extract text.
        ii.  Send text to LLM (via OLLAMA API or OpenRouter API) with a specific prompt (e.g., "Summarize this article into a 300-word blog post with a catchy title.").
        iii. Receive LLM response (title, body).
        iv.  Format content for WordPress.
        v.   Publish to WordPress.
    c.  **Log Results.**

## 5. Configuration Parameters (Updated for Global Trusted News Feeds)

- `RSS_FEEDS_URLS`: List of **RSS feed URLs** from only the most **trusted, verified news brands globally**. These sources are renowned for editorial standards, international reach, or local expertise. The selection balances regions and perspectives to ensure no "echo chamber"—curation can be easily expanded or tuned per project.

### Global & Regional Trusted News Feeds

```python
RSS_FEEDS_URLS = [
    # Europe
    "https://www.dw.com/en/top-stories/s-9097/rss",            # Deutsche Welle (Germany)
    "http://feeds.bbci.co.uk/news/rss.xml",                    # BBC News (UK/global)
    "https://www.lemonde.fr/rss/une.xml",                      # Le Monde (France)
    "https://www.france24.com/en/rss",                         # France24 (global, France perspective)

    # Middle East & Africa
    "https://www.aljazeera.com/xml/rss/all.xml",               # Al Jazeera (Qatar/global)
    "https://www.i24news.tv/en/rss",                           # i24NEWS (Tel Aviv/global)
    "https://english.alarabiya.net/.mrss/en/rss.xml",          # Al Arabiya English (UAE/global)
    # Consider adding "Haaretz" or "The Times of Israel" for wider spectrum

    # Asia-Pacific
    "https://www.scmp.com/rss/91/feed",                        # South China Morning Post (Hong Kong)
    "https://www.channelnewsasia.com/rssfeeds/8395986",        # Channel NewsAsia (Singapore/SE Asia)
    # Add Nikkei Asia or Japan Times if more East Asia is needed

    # Americas
    "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",    # New York Times
    "https://feeds.washingtonpost.com/rss/world",                    # Washington Post World
    "https://www.latimes.com/local/rss2.0.xml",                      # LA Times (local + SoCal)
    "https://www.hollywoodreporter.com/t/news/feed/",                # Hollywood Reporter (industry, SoCal)
    "https://www.redondobeachlocalnews.com/feed/",                   # Redondo Beach Local News (hyperlocal, LA boutique)

    # Africa (optional, for expansion)
    "https://allafrica.com/tools/headlines/rdf/latest/headlines.rdf", # AllAfrica News

    # Tech/AI Boutique (blend for the West Coast "glow")
    "https://spectrum.ieee.org/feed",                                # IEEE Spectrum (tech/AI)
    "https://www.technologyreview.com/feed/",                        # MIT Technology Review (US/global)
    # For boutique, consider Substack RSS feeds of AI/Tech LA writers/magazines
]
### U.S. Public & White House Journalism / Podcaster Feeds (for Agent Curation)

**A. Official White House and Public Journalism**
- White House official briefings:  
  `https://www.whitehouse.gov/briefing-room/feed/`
- NPR Politics:  
  `https://feeds.npr.org/1014/rss.xml`
- PBS NewsHour:  
  `https://www.pbs.org/newshour/feeds/rss/headlines`
- Politico:  
  `https://www.politico.com/rss/politics08.xml`
- Associated Press (AP):  
  `https://apnews.com/rss`
- Reuters:  
  `http://feeds.reuters.com/reuters/topNews`
- C-SPAN (for transcripts):  
  `https://www.c-span.org/rss/video/?all`

**B. Trusted U.S. Podcasters & Creators**
- Joe Rogan Experience (“hand curated” selections, as needed):  
  _Note: No official RSS; for podcast, see:_  
  `https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk`  
  _For curated episode summaries:_  
  Consider using a **third-party Joe Rogan transcript feed**, e.g. via [JRE Library](https://www.jrelibrary.com/rss/) or [Listen Notes](https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/rss/), but always verify source and filter for relevance.

- The Daily (New York Times):  
  `https://rss.art19.com/the-daily`
- NPR Up First:  
  `https://feeds.npr.org/510318/podcast.xml`
- Vox Today, Explained:  
  `https://feeds.megaphone.fm/VMP5705694068`
- TED Talks Daily:  
  `https://feeds.feedburner.com/tedtalks_audio`

**C. Blend for Mood/Region—The Full Example List**

```python
RSS_FEEDS_URLS = [
    # Official journalism & White House
    "https://www.whitehouse.gov/briefing-room/feed/",
    "https://feeds.npr.org/1014/rss.xml",
    "https://www.pbs.org/newshour/feeds/rss/headlines",
    "https://www.politico.com/rss/politics08.xml",
    "https://apnews.com/rss",
    "http://feeds.reuters.com/reuters/topNews",
    "https://www.c-span.org/rss/video/?all",

    # Trusted global (from previous answer)
    "https://www.dw.com/en/top-stories/s-9097/rss",
    "http://feeds.bbci.co.uk/news/rss.xml",
    "https://www.lemonde.fr/rss/une.xml",
    "https://www.france24.com/en/rss",
    "https://www.aljazeera.com/xml/rss/all.xml",
    "https://www.i24news.tv/en/rss",
    "https://english.alarabiya.net/.mrss/en/rss.xml",
    "https://www.scmp.com/rss/91/feed",
    "https://www.channelnewsasia.com/rssfeeds/8395986",
    "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    "https://feeds.washingtonpost.com/rss/world",
    "https://www.latimes.com/local/rss2.0.xml",
    "https://www.hollywoodreporter.com/t/news/feed/",
    "https://www.redondobeachlocalnews.com/feed/",
    "https://allafrica.com/tools/headlines/rdf/latest/headlines.rdf",
    "https://spectrum.ieee.org/feed",
    "https://www.technologyreview.com/feed/",

    # Podcasts & Creators
    "https://rss.art19.com/the-daily",                   # NYT The Daily
    "https://feeds.npr.org/510318/podcast.xml",          # NPR Up First
    "https://feeds.megaphone.fm/VMP5705694068",          # Vox Today, Explained
    "https://feeds.feedburner.com/tedtalks_audio",       # TED Talks
    # Joe Rogan - add handpicked/curated episodes or use Listen Notes if acceptable
    # e.g., "https://www.jrelibrary.com/rss/" (verify for relevance and reliability)
]
### D. Historical Context Feeds – “Grandpa Vibe”

**British Pathé (Historical Newsreels)**
- British Pathé on YouTube:  
  https://www.youtube.com/@britishpathe

**How to integrate:**
- While YouTube does not provide direct RSS feeds for channels anymore, you *can* use this format to generate a feed:
https://www.youtube.com/feeds/videos.xml?channel_id=UCggQp7x3j7N0E8W2p4kT6dA

**Add to RSS_FEEDS_URLS:**

```python
RSS_FEEDS_URLS = [
  # ... all your previous sources ...
  # Historical/grandpa vibe
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCggQp7x3j7N0E8W2p4kT6dA",  # British Pathé (YouTube historical)
]



## 6. Dependencies:
-   Python 3
-   `requests` library (for HTTP calls to LLM API and WordPress API)
-   `feedparser` (for RSS parsing)
-   `python-wordpress-xmlrpc` (or similar for WordPress API)
-   `ollama` (if running LLM locally)

