import React from 'react';

// Example SVGs as React components
const SvgChip = () => (
  <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
);

const SvgPulse = () => (
  <svg width="60" height="60" fill="none" viewBox="0 0 60 60">
    <circle cx="30" cy="30" r="27" stroke="#38FF9C" strokeWidth="4" />
    <circle cx="30" cy="30" r="12" fill="#38FF9C" opacity="0.13"/>
  </svg>
);

// Mood board data (extend this array for new moods, accents, or SVGs)
const moodTiles = [
  {
    type: 'svg',
    title: 'Chip Accent',
    description: 'Signature neon motherboard chip for high-tech edge.',
    svg: <SvgChip />,
    className: "col-span-2 row-span-2 flex items-center justify-center"
  },
  {
    type: 'color',
    title: 'Neon Green',
    description: '#38FF9C',
    color: '#38FF9C',
    className: ''
  },
  {
    type: 'color',
    title: 'Obsidian Black',
    description: '#181C20',
    color: '#181C20',
    text: '#38FF9C',
    className: ''
  },
  {
    type: 'color',
    title: 'Vivid Magenta',
    description: '#F0F',
    color: '#F0F',
    className: ''
  },
  {
    type: 'color',
    title: 'Cool Blue',
    description: '#38BDF8',
    color: '#38BDF8',
    className: ''
  },
  {
    type: 'svg',
    title: 'Pulse',
    description: 'Neon pulse, energy, and movement.',
    svg: <SvgPulse />,
    className: 'flex items-center justify-center'
  },
  {
    type: 'font',
    title: 'Headlines',
    font: 'Inter, Space Grotesk, sans-serif',
    sample: 'AMPLIFY',
    className: ''
  },
  {
    type: 'tagline',
    tagline: 'Create Loud. Automate Bold.',
    subtext: 'Your brand, amplified by AI.',
    className: 'col-span-2 text-center'
  },
  {
    type: 'vibe',
    vibe: 'Cinematic, cyber, electric, community.',
    className: ''
  }
];

export default function MoodBoardDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold neon-gradient mb-8 text-center tracking-tight">Vibe Branding Dashboard</h1>
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-950/70 rounded-3xl p-6 shadow-2xl">
        {moodTiles.map((tile, i) => {
          switch (tile.type) {
            case 'svg':
              return (
                <div key={i} className={`bg-gray-900 rounded-2xl p-4 flex flex-col items-center shadow-xl ${tile.className}`}>
                  {tile.svg}
                  <div className="font-bold text-neon mt-2">{tile.title}</div>
                  <div className="text-xs text-gray-400">{tile.description}</div>
                </div>
              );
            case 'color':
              return (
                <div key={i} className={`rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 ${tile.className}`} style={{ background: tile.color }}>
                  <div className="font-bold text-lg" style={{ color: tile.text || '#222' }}>{tile.title}</div>
                  <div className="text-xs" style={{ color: tile.text || '#222' }}>{tile.description}</div>
                </div>
              );
            case 'font':
              return (
                <div key={i} className={`bg-gray-800 rounded-2xl p-4 flex flex-col items-center shadow-xl ${tile.className}`}>
                  <div className="font-extrabold text-2xl" style={{ fontFamily: tile.font }}>{tile.sample}</div>
                  <div className="text-xs text-gray-400 mt-2">{tile.title} ({tile.font})</div>
                </div>
              );
            case 'tagline':
              return (
                <div key={i} className={`bg-gradient-to-r from-gray-900 via-black to-gray-950 rounded-2xl p-6 flex flex-col justify-center shadow-xl ${tile.className}`}>
                  <div className="font-extrabold text-neon text-2xl mb-2">{tile.tagline}</div>
                  <div className="text-xs text-gray-300">{tile.subtext}</div>
                </div>
              );
            case 'vibe':
              return (
                <div key={i} className="bg-gray-900 rounded-2xl p-4 flex flex-col items-center shadow-xl">
                  <div className="italic text-gray-200 text-base">{tile.vibe}</div>
                  <div className="text-xs text-neon mt-2">Core Vibe</div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
