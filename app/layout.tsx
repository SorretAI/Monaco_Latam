// app/layout.tsx
import '../styles/globals.css'; // Make sure this path is correct for your structure
import type { ReactNode } from 'react';
import RetroModeToggle from '../components/RetroModeToggle'; // Adjust the import path if needed
// You can import custom fonts here or use <link> in <head>

export const metadata = {
  title: 'Vibe Branding Dashboard',
  description: 'Mood board, memory lane, retro mode, and all the vibes.',
  // You can add more meta tags here
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Example font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Add favicon or theme-color if you want */}
      </head>
      <body className="bg-gradient-to-br from-gray-900 via-gray-950 to-black min-h-screen relative font-mono">
        {/* Floating retro mode toggle */}
        <RetroModeToggle />
        {/* Main app content */}
        {children}
        {/* You can add other global elements, e.g., a global notification component */}
      </body>
    </html>
  );
}
