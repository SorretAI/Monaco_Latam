/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#38FF9C',
        obsidian: '#181C20',
        magenta: '#F0F',
        yellow: {
          DEFAULT: "#FFEB3B",
          dark: "#FFD600",
          accent: "#CA8A04",
        },
        // You can add even more, e.g., cool-blue, background-glow, etc.
      },
      boxShadow: {
        neon: '0 0 20px #38FF9C, 0 0 40px #38FF9C50',
        neonSubtle: '0 0 6px #38FF9C44',
        magenta: '0 0 16px #F0F, 0 0 32px #F0F4',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'Fira Mono', 'Consolas', 'monospace'],
        display: ['Inter', 'Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(90deg, #38FF9C 0%, #F0F 100%)',
      },
    },
  },
  plugins: [],
};
