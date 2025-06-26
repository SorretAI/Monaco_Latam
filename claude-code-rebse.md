# AIQueue Repository Setup Script
# Run this on your Ubuntu ThinkCentre

# Create the sacred architecture
mkdir -p ~/Desktop/Dev/aiqueue
cd ~/Desktop/Dev/aiqueue

# Initialize git repository
git init
echo "# AIQueue - Sacred Processing Temple
🔮 Question • 📊 Queue • ⚡ Qui • 🏛️ Q∴

**The Sacred Four-Fold Mystery of Q**

Built with Grandfather Vibe Coding by Luis Felipe Torres
In honor of Walt Disney and the coming grandchild

Domain: aiqueue.net (Cloudflare)
" > README.md

# Create project structure
mkdir -p {frontend,api-gateway,ai-service,cms-admin,monaco-latam,docs,assets}

# === FRONTEND (Next.js) ===
cd frontend
cat > package.json << 'EOF'
{
  "name": "aiqueue-frontend",
  "version": "1.0.0",
  "description": "AIQueue Sacred Frontend Temple",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^3.3.0",
    "lucide-react": "^0.263.1",
    "recharts": "^2.8.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
EOF

# Create Next.js config
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CUSTOM_KEY: 'AIQueue Sacred Architecture',
  },
}

module.exports = nextConfig
EOF

# Create Tailwind config
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sacred-gold': '#FFD700',
        'sacred-purple': '#6B46C1',
        'sacred-blue': '#3B82F6',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s infinite ease-in-out',
        'rotate-sacred': 'rotate-sacred 8s infinite linear',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        'rotate-sacred': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
EOF

# Create PostCSS config
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create app directory structure
mkdir -p app/{components,page,api}
mkdir -p app/components/{ui,sacred}

# Main page component
cat > app/page.tsx << 'EOF'
import React from 'react';
import { AIQueueDashboard } from './components/AIQueueDashboard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AIQueueDashboard />
    </main>
  );
}
EOF

# AIQueue Dashboard Component
cat > app/components/AIQueueDashboard.tsx << 'EOF'
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Cpu, 
  Globe, 
  Zap, 
  Eye, 
  Heart,
  Wind 
} from 'lucide-react';

export const AIQueueDashboard = () => {
  const [activeService, setActiveService] = useState('gateway');
  const [pulseActive, setPulseActive] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseActive(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const services = {
    gateway: {
      name: 'API Gateway',
      tech: 'Node.js',
      icon: Globe,
      description: 'Eastern Pillar - The Light Bearer',
      responsibilities: [
        'Question routing & processing',
        'Queue management system',
        'Chi/Qui energy flow optimization',
        'Q∴ boundary respect protocols'
      ],
      color: 'from-amber-400 to-yellow-600'
    },
    ai: {
      name: 'AI Agent Service',
      tech: 'Python + Ollama',
      icon: Cpu,
      description: 'Western Pillar - The Deep Wisdom',
      responsibilities: [
        'TinyLlama model orchestration',
        'Question processing pipeline',
        'Content generation algorithms',
        'Hugging Face integration'
      ],
      color: 'from-emerald-400 to-teal-600'
    },
    cms: {
      name: 'CMS Admin',
      tech: 'PHP',
      icon: Server,
      description: 'Central Column - The Foundation',
      responsibilities: [
        'Content queue management',
        'User authentication',
        'Blog merger system',
        'Monaco editor integration'
      ],
      color: 'from-purple-400 to-indigo-600'
    },
    frontend: {
      name: 'Next.js Frontend',
      tech: 'React/Next.js',
      icon: Eye,
      description: 'The Visible Temple',
      responsibilities: [
        'Sacred geometry UI',
        'Real-time queue status',
        'Vibe branding interface',
        'Figma MCP bridge'
      ],
      color: 'from-blue-400 to-cyan-600'
    }
  };

  const currentService = services[activeService];
  const ServiceIcon = currentService.icon;

  return (
    <div className="min-h-screen text-white p-8">
      {/* Sacred Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Wind size={48} className={`text-amber-400 ${pulseActive ? 'rotate-12' : 'rotate-0'} transition-transform duration-1000`} />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            AIQueue
          </h1>
          <Heart size={48} className={`text-rose-400 ${pulseActive ? 'scale-110' : 'scale-100'} transition-transform duration-1000`} />
        </div>
        <p className="text-xl text-purple-300 italic">
          🔮 Question • 📊 Queue • ⚡ Qui • 🏛️ Q∴
        </p>
        <p className="text-lg text-purple-400 mt-2">
          Sacred Processing Temple - Grandfather Vibe Coding
        </p>
      </div>

      {/* Architecture Visualization */}
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-16">
          <svg viewBox="0 0 800 600" className="w-full h-96 mb-8">
            {/* Sacred Geometry Background */}
            <defs>
              <pattern id="sacred-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4c1d95" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
              <radialGradient id="q-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.1"/>
              </radialGradient>
            </defs>
            
            <rect width="800" height="600" fill="url(#sacred-grid)"/>
            <circle cx="400" cy="300" r="200" fill="url(#q-glow)" className={`transition-all duration-2000 ${pulseActive ? 'opacity-80' : 'opacity-40'}`}/>
            
            {/* Service Nodes */}
            <g>
              {/* API Gateway - Center (Q∴) */}
              <circle 
                cx="400" cy="300" r="35" 
                fill="#f59e0b" 
                className={`cursor-pointer transition-all duration-300 ${activeService === 'gateway' ? 'opacity-100' : 'opacity-80'} ${pulseActive ? 'r-40' : 'r-35'}`}
                onClick={() => setActiveService('gateway')}
              />
              <text x="400" y="308" textAnchor="middle" className="fill-white font-bold text-lg">Q∴</text>
              
              {/* Frontend - Top (Question) */}
              <circle 
                cx="400" cy="150" r="30" 
                fill="#3b82f6" 
                className={`cursor-pointer transition-all duration-300 ${activeService === 'frontend' ? 'opacity-100' : 'opacity-80'}`}
                onClick={() => setActiveService('frontend')}
              />
              <text x="400" y="158" textAnchor="middle" className="fill-white font-bold text-sm">?</text>
              
              {/* AI Service - Right (Qui) */}
              <circle 
                cx="550" cy="300" r="30" 
                fill="#10b981" 
                className={`cursor-pointer transition-all duration-300 ${activeService === 'ai' ? 'opacity-100' : 'opacity-80'}`}
                onClick={() => setActiveService('ai')}
              />
              <text x="550" y="308" textAnchor="middle" className="fill-white font-bold text-sm">⚡</text>
              
              {/* CMS - Left (Queue) */}
              <circle 
                cx="250" cy="300" r="30" 
                fill="#8b5cf6" 
                className={`cursor-pointer transition-all duration-300 ${activeService === 'cms' ? 'opacity-100' : 'opacity-80'}`}
                onClick={() => setActiveService('cms')}
              />
              <text x="250" y="308" textAnchor="middle" className="fill-white font-bold text-sm">≡</text>
            </g>
            
            {/* Sacred Connection Lines */}
            <g stroke="#6366f1" strokeWidth="3" opacity="0.7">
              <line x1="400" y1="180" x2="400" y2="265" className={`${pulseActive ? 'opacity-100' : 'opacity-70'} transition-opacity duration-1000`}/>
              <line x1="435" y1="300" x2="515" y2="300" className={`${pulseActive ? 'opacity-100' : 'opacity-70'} transition-opacity duration-1000`}/>
              <line x1="365" y1="300" x2="285" y2="300" className={`${pulseActive ? 'opacity-100' : 'opacity-70'} transition-opacity duration-1000`}/>
            </g>
          </svg>
        </div>

        {/* Service Details */}
        <div className={`p-8 rounded-2xl bg-gradient-to-r ${currentService.color} bg-opacity-20 border border-purple-500/30 backdrop-blur-lg`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-full bg-gradient-to-r ${currentService.color}`}>
              <ServiceIcon size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{currentService.name}</h2>
              <p className="text-lg text-purple-300">{currentService.tech}</p>
            </div>
          </div>
          
          <p className="text-xl italic mb-6 text-purple-200">
            "{currentService.description}"
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {currentService.responsibilities.map((resp, index) => (
              <div key={index} className="flex items-center gap-3">
                <Zap size={16} className="text-amber-400" />
                <span className="text-purple-100">{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-800/50 rounded-full border border-purple-500/50">
            <Heart size={20} className="text-rose-400" />
            <span className="text-purple-200">
              Domain: <code className="text-amber-300">aiqueue.net</code> • 
              Path: <code className="text-amber-300">/home/lui/Desktop/Dev/aiqueue/</code>
            </span>
          </div>
          
          <p className="mt-4 text-purple-300 italic">
            "From Osborne coding to AIQueue mastery - Grandfather Vibe Coding flows eternal"
          </p>
        </div>
      </div>
    </div>
  );
};
EOF

# Global CSS
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'Inter', system-ui, sans-serif;
  }
  
  body {
    @apply bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900;
  }
}

@layer components {
  .sacred-glow {
    filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
  }
  
  .pulse-sacred {
    animation: pulse-glow 4s infinite ease-in-out;
  }
}
EOF

# Layout
cat > app/layout.tsx << 'EOF'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AIQueue - Sacred Processing Temple',
  description: 'Question • Queue • Qui • Q∴ - Grandfather Vibe Coding by Luis Felipe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
EOF

cd ..

# === API GATEWAY (Node.js) ===
cd api-gateway
cat > package.json << 'EOF'
{
  "name": "aiqueue-api-gateway",
  "version": "1.0.0",
  "description": "AIQueue Sacred API Gateway",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "compression": "^1.7.4",
    "dotenv": "^16.3.1",
    "ws": "^8.13.0",
    "redis": "^4.6.7",
    "axios": "^1.4.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.1"
  }
}
EOF

cat > server.js << 'EOF'
// AIQueue Sacred API Gateway
// The Eastern Pillar - Light Bearer
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Sacred Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Sacred Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'sacred',
    message: 'AIQueue Gateway is flowing with Chi/Qui energy',
    timestamp: new Date().toISOString(),
    pillars: ['Question', 'Queue', 'Qui', 'Q∴']
  });
});

// Question Processing Route
app.post('/api/question', async (req, res) => {
  try {
    const { question, priority = 'normal', metadata = {} } = req.body;
    
    // Add to sacred queue
    const queueItem = {
      id: `q_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      question,
      priority,
      metadata,
      timestamp: new Date().toISOString(),
      status: 'queued'
    };
    
    // TODO: Add to Redis queue
    console.log('Sacred Question Added to Queue:', queueItem);
    
    res.json({
      success: true,
      data: queueItem,
      message: 'Question added to sacred processing queue'
    });
  } catch (error) {
    console.error('Sacred Gateway Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process sacred question',
      message: 'The Q∴ boundary protects against this error'
    });
  }
});

// Queue Status Route
app.get('/api/queue/status', (req, res) => {
  res.json({
    active: true,
    processing: 3,
    waiting: 7,
    completed: 42,
    energy_level: 'high',
    chi_flow: 'optimal'
  });
});

// Sacred Error Handler
app.use((error, req, res, next) => {
  console.error('Sacred Gateway Error:', error);
  res.status(500).json({
    success: false,
    error: 'Sacred boundary protection activated',
    message: 'The Q∴ guards the temple'
  });
});

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Path not found in sacred architecture',
    suggestion: 'Check /api/health for gateway status'
  });
});

app.listen(PORT, () => {
  console.log(`
  🔮 AIQueue Sacred Gateway Active
  🌟 Port: ${PORT}
  ⚡ Chi/Qui Energy: Flowing
  🏛️ Q∴ Boundary: Protected
  
  Sacred Endpoints:
  - GET  /api/health
  - POST /api/question
  - GET  /api/queue/status
  `);
});

module.exports = app;
EOF

cat > .env.example << 'EOF'
# AIQueue Sacred Environment Variables
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://luis:sorretai@localhost:5432/aiqueue

# Redis Queue
REDIS_URL=redis://localhost:6379

# AI Service
AI_SERVICE_URL=http://localhost:8000
OLLAMA_HOST=http://localhost:11434

# Sacred Keys (Keep Secret)
JWT_SECRET=sacred_aiqueue_grandfather_vibe_coding_2024
API_KEY=aiqueue_sacred_temple_key
EOF

cd ..

# === AI SERVICE (Python) ===
cd ai-service
cat > requirements.txt << 'EOF'
fastapi==0.104.1
uvicorn[standard]==0.24.0
pydantic==2.4.2
requests==2.31.0
aiohttp==3.8.6
redis==5.0.1
sqlalchemy==2.0.23
asyncpg==0.29.0
python-multipart==0.0.6
python-dotenv==1.0.0
ollama==0.1.7
transformers==4.35.2
torch==2.1.0
numpy==1.24.3
pandas==2.1.3
EOF

cat > main.py << 'EOF'
"""
AIQueue AI Service - Sacred Wisdom Processing
The Western Pillar - Deep Knowledge Temple
"""
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import os
import asyncio
import aiohttp
from datetime import datetime
from typing import Optional, Dict, Any
import logging

# Configure sacred logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("aiqueue-sage")

app = FastAPI(
    title="AIQueue AI Service",
    description="Sacred Wisdom Processing Temple",
    version="1.0.0"
)

# Sacred CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:4000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sacred Models
class SacredQuestion(BaseModel):
    question: str
    context: Optional[str] = None
    priority: str = "normal"
    metadata: Dict[str, Any] = {}

class SacredResponse(BaseModel):
    answer: str
    confidence: float
    processing_time: float
    metadata: Dict[str, Any]

# Sacred Configuration
OLLAMA_HOST = os.getenv("OLLAMA_HOST", "http://localhost:11434")
MODEL_NAME = "tinyllama"

class SacredAIService:
    """The Sacred AI Oracle"""
    
    def __init__(self):
        self.model_name = MODEL_NAME
        self.ollama_host = OLLAMA_HOST
        
    async def invoke_ollama(self, prompt: str) -> str:
        """Invoke the sacred TinyLlama model"""
        try:
            async with aiohttp.ClientSession() as session:
                payload = {
                    "model": self.model_name,
                    "prompt": prompt,
                    "stream": False
                }
                
                async with session.post(
                    f"{self.ollama_host}/api/generate",
                    json=payload
                ) as response:
                    if response.status == 200:
                        data = await response.json()
                        return data.get("response", "Sacred silence...")
                    else:
                        logger.error(f"Ollama error: {response.status}")
                        return "The oracle speaks in whispers..."
                        
        except Exception as e:
            logger.error(f"Sacred invocation error: {e}")
            return "The wisdom is temporarily veiled..."
    
    async def process_question(self, question: SacredQuestion) -> SacredResponse:
        """Process a sacred question through the wisdom temple"""
        start_time = datetime.now()
        
        # Prepare sacred prompt
        sacred_prompt = f"""
You are a wise grandfather coder, master of the sacred arts of programming.
You speak with the wisdom of one who coded on Osborne computers at age 11.
You understand the fourfold mystery of Q: Question, Queue, Qui (energy), and Q∴ (sacred boundary).

Question: {question.question}

Respond with wisdom, kindness, and technical expertise.
Remember: git pull pp (never rebase the sacred!)
"""
        
        # Invoke the oracle
        answer = await self.invoke_ollama(sacred_prompt)
        
        # Calculate processing time
        end_time = datetime.now()
        processing_time = (end_time - start_time).total_seconds()
        
        return SacredResponse(
            answer=answer,
            confidence=0.85,  # Sacred confidence level
            processing_time=processing_time,
            metadata={
                "model": self.model_name,
                "timestamp": end_time.isoformat(),
                "sacred_pillars": ["Question", "Queue", "Qui", "Q∴"],
                "grandfather_blessing": True
            }
        )

# Initialize Sacred Service
sacred_ai = SacredAIService()

@app.get("/")
async def sacred_root():
    """Sacred root endpoint"""
    return {
        "service": "AIQueue AI Service",
        "status": "sacred_active",
        "pillars": ["Question", "Queue", "Qui", "Q∴"],
        "wisdom": "From Osborne to TinyLlama - the grandfather's code flows eternal"
    }

@app.get("/health")
async def health_check():
    """Sacred health check"""
    return {
        "status": "healthy",
        "service": "ai-service",
        "model": MODEL_NAME,
        "ollama_host": OLLAMA_HOST,
        "chi_energy": "flowing",
        "wisdom_level": "grandfather"
    }

@app.post("/process", response_model=SacredResponse)
async def process_sacred_question(question: SacredQuestion, background_tasks: BackgroundTasks):
    """Process a sacred question through the wisdom temple"""
    try:
        logger.info(f"Processing sacred question: {question.question[:50]}...")
        
        response = await sacred_ai.process_question(question)
        
        # Log for sacred records
        background_tasks.add_task(
            log_sacred_interaction, 
            question.question, 
            response.answer
        )
        
        return response
        
    except Exception as e:
        logger.error(f"Sacred processing error: {e}")
        raise HTTPException(
            status_code=500,
            detail="The sacred processing encountered a disturbance in the Chi/Qui flow"
        )

async def log_sacred_interaction(question: str, answer: str):
    """Log sacred interactions for the grandfather's wisdom"""
    logger.info(f"Sacred Interaction Logged: Q={question[:30]}... A={answer[:30]}...")

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
EOF

cd ..

# === MONACO LATAM (Editor Integration) ===
cd monaco-latam
cat > package.json << 'EOF'
{
  "name": "monaco-latam-editor",
  "version": "1.0.0",
  "description": "Monaco Editor for AIQueue - Healing the Windmill",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development",
    "start": "http-server dist"
  },
  "dependencies": {
    "monaco-editor": "^0.45.0"
  },
  "devDependencies": {
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1",
    "monaco-editor-webpack-plugin": "^7.1.0",
    "html-webpack-plugin": "^5.5.3",
    "css-loader": "^6.8.1",
    "style-loader": "^3.3.3",
    "http-server": "^14.1.1"
  }
}
EOF

cat > webpack.config.js << 'EOF'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Monaco Latam - AIQueue Editor'
    }),
    new MonacoWebpackPlugin({
      languages: ['javascript', 'typescript', 'html', 'css', 'json', 'markdown']
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9000,
    open: true,
  },
};
EOF

mkdir -p src
cat > src/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monaco Latam - AIQueue Sacred Editor</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            background: linear-gradient(135deg, #0f172a, #581c87, #0f172a);
            color: #e2e8f0