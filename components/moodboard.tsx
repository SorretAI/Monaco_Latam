import React from 'react';

export default function MoodBoard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center py-12">
      <div className="w-full max-w-5xl flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden">
        {/* Left column: Color palette, typography, vibes */}
        <div className="hidden md:flex flex-col gap-6 bg-gray-950 p-8 w-1/3 justify-between">
          <div>
            <h3 className="text-neon text-lg font-bold mb-2">Palette</h3>
            <div className="flex gap-2">
              <span className="w-6 h-6 rounded-full bg-[#38FF9C] border-2 border-white" />
              <span className="w-6 h-6 rounded-full bg-[#F0F]" />
              <span className="w-6 h-6 rounded-full bg-blue-500" />
              <span className="w-6 h-6 rounded-full bg-yellow-300" />
              <span className="w-6 h-6 rounded-full bg-black border-2 border-white" />
            </div>
          </div>
          <div>
            <h3 className="text-neon text-lg font-bold mb-2">Typography</h3>
            <div className="text-xs text-gray-400">Geometric Sans / Inter / Space Grotesk</div>
            <div className="font-extrabold text-2xl tracking-tight mt-1">HEADLINE</div>
            <div className="font-medium text-base mt-1 lowercase text-gray-200">body sample</div>
          </div>
          <div>
            <h3 className="text-neon text-lg font-bold mb-2">Core Vibe</h3>
            <div className="text-gray-300 text-sm">Electric, bold, cyber, community, cinematic.</div>
          </div>
        </div>

        {/* Middle column: Figma-style mood board canvas */}
        <div className="bg-gradient-to-br from-gray-950 to-gray-900 flex-1 p-8 flex flex-col items-center justify-center relative">
          {/* SVG Accent as a chip centerpiece */}
          <div className="mb-8">
            <svg width="180" height="90" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="10" width="80" height="40" rx="8" fill="#181C20" stroke="#38FF9C" strokeWidth="2"/>
              <rect x="28" y="18" width="64" height="24" rx="4" fill="#222629" stroke="#38FF9C" strokeWidth="1"/>
              <rect x="44" y="27" width="32" height="6" rx="2" fill="#1A1F22"/>
              <g opacity="0.22">
                <line x1="10" y1="30" x2="20" y2="30" stroke="#38FF9C" strokeWidth="2"/>
                <line x1="100" y1="30" x2="110" y2="30" stroke="#38FF9C" strokeWidth="2"/>
                <line x1="60" y1="2" x2="60" y2="10" stroke="#38FF9C" strokeWidth="2"/>
                <line x1="60" y1="50" x2="60" y2="58" stroke="#38FF9C" strokeWidth="2"/>
              </g>
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold neon-gradient mb-4 text-center tracking-tight">Vibe Branding Board</h1>
          <div className="text-xl text-gray-300 font-semibold mb-6 text-center max-w-md">Amplify your brand's energy.<br />Curate your own digital mood.</div>
          {/* Example mood board cards */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-[#38FF9C] text-black font-bold rounded-2xl px-6 py-4 shadow-neon">Neon Green</div>
            <div className="bg-[#181C20] text-[#38FF9C] font-extrabold rounded-2xl px-6 py-4 border-2 border-neon">Obsidian Black</div>
            <div className="bg-[#F0F] text-white font-bold rounded-2xl px-6 py-4 shadow-lg">Vivid Magenta</div>
            <div className="bg-gradient-to-r from-yellow-300 to-blue-500 text-black font-bold rounded-2xl px-6 py-4 shadow">Gradient Accent</div>
          </div>
        </div>

        {/* Right column: Inspirational tagline & vibes */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gray-950 w-1/3 p-8">
          <div className="text-neon text-xl font-extrabold mb-4">Unleash Your Genius</div>
          <div className="text-gray-400 italic text-base mb-4 text-center">"Create loud. Automate bold.  
          Let your brand pulse with clarity and confidence."</div>
          <div className="mt-8">
            {/* Drop future inspiration images or mini-mood SVGs here */}
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" stroke="#38FF9C" strokeWidth="4" />
              <circle cx="20" cy="20" r="8" fill="#38FF9C" opacity="0.1"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
