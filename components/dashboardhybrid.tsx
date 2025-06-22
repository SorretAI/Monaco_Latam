import React, { useRef } from 'react';
import gsap from 'gsap';
import MoodBoardDashboard from './MoodBoardDashboard'; // Your mood board!
import { FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function DashboardHybrid() {
  const leftDrawerRef = useRef<HTMLDivElement>(null);
  const rightDrawerRef = useRef<HTMLDivElement>(null);

  // Animate drawers open/close
  const toggleDrawer = (side: 'left' | 'right') => {
    const drawer = side === 'left' ? leftDrawerRef.current : rightDrawerRef.current;
    if (!drawer) return;
    const isOpen = drawer.classList.contains('open');
    gsap.to(drawer, {
      x: isOpen ? (side === 'left' ? '-100%' : '100%') : '0%',
      duration: 0.7,
      ease: 'power3.inOut',
      onStart: () => {
        if (!isOpen) drawer.classList.add('open');
      },
      onComplete: () => {
        if (isOpen) drawer.classList.remove('open');
      }
    });
  };

  return (
    <div className="relative min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Left Drawer - Classic Control */}
      <div ref={leftDrawerRef} className="fixed top-0 left-0 h-full w-72 bg-gray-900 bg-opacity-90 shadow-xl z-30 -translate-x-full open:translate-x-0 transition-transform duration-700">
        <div className="flex items-center p-4 border-b border-gray-700">
          <FaCog className="text-neon text-xl mr-2" />
          <span className="font-bold text-neon">Control Center</span>
        </div>
        <div className="p-4 text-gray-300">
          {/* Classic options, nav, or future content */}
          <button className="mt-2 mb-4 px-4 py-2 rounded bg-neon/90 text-black font-bold">Classic Action</button>
        </div>
        <button
          onClick={() => toggleDrawer('left')}
          className="absolute top-4 right-0 transform translate-x-full bg-gray-800 p-2 rounded-l-lg shadow"
        >
          <FaChevronLeft className="text-neon" />
        </button>
      </div>

      {/* Main Mood Board */}
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <MoodBoardDashboard />
        {/* Floating classic toggle */}
        <button
          onClick={() => toggleDrawer('left')}
          className="fixed left-2 top-1/2 z-40 bg-neon p-2 rounded-full shadow-lg"
        >
          <FaChevronRight className="text-black" />
        </button>
        <button
          onClick={() => toggleDrawer('right')}
          className="fixed right-2 top-1/2 z-40 bg-neon p-2 rounded-full shadow-lg"
        >
          <FaChevronLeft className="text-black" />
        </button>
      </div>

      {/* Right Drawer - Windmill Workflows */}
      <div ref={rightDrawerRef} className="fixed top-0 right-0 h-full w-96 bg-gray-950 bg-opacity-90 shadow-2xl z-30 translate-x-full open:translate-x-0 transition-transform duration-700">
        <div className="flex items-center p-4 border-b border-gray-800">
          <span className="font-bold text-neon text-xl">Workflows</span>
        </div>
        <div className="p-4">
          {/* Place Windmill workflow cards or embed here */}
          <div className="text-gray-300">Windmill workflows, status, run controls, etc.</div>
        </div>
      </div>
    </div>
  );
}
