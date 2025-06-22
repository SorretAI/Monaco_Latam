// components/YellowSubmarineIcon.tsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function YellowSubmarineIcon({ className = "" }) {
  const subRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (subRef.current) {
      // Animate up and down in a smooth floating loop
      gsap.to(subRef.current, {
        y: -12,
        duration: 1.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      // Optional: slow rotation for more charm
      gsap.to(subRef.current, {
        rotate: 5,
        duration: 3.3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <svg
      ref={subRef}
      width="90"
      height="30"
      viewBox="0 0 120 40"
      fill="none"
      className={className}
      style={{ willChange: 'transform' }} // Better performance
    >
      <ellipse cx="60" cy="24" rx="38" ry="12" fill="#FFEB3B" stroke="#CA8A04" strokeWidth="2"/>
      <rect x="50" y="12" width="20" height="10" rx="4" fill="#FFD600" stroke="#CA8A04" strokeWidth="2"/>
      <circle cx="82" cy="24" r="3" fill="#FFF176" stroke="#CA8A04" strokeWidth="1.5"/>
      <circle cx="68" cy="24" r="3" fill="#FFFDE7" stroke="#CA8A04" strokeWidth="1.5"/>
      <circle cx="54" cy="24" r="3" fill="#FFFDE7" stroke="#CA8A04" strokeWidth="1.5"/>
      <rect x="58" y="7" width="4" height="8" rx="1.5" fill="#FFFDE7" stroke="#CA8A04" strokeWidth="1"/>
      <rect x="97" y="22" width="5" height="4" rx="1" fill="#FFD600" stroke="#CA8A04" strokeWidth="1"/>
      <ellipse cx="22" cy="24" rx="3" ry="7" fill="#FFD600" stroke="#CA8A04" strokeWidth="1"/>
      <circle cx="60" cy="34" r="2.3" fill="#FFD600" stroke="#CA8A04" strokeWidth="1"/>
    </svg>
  );
}
