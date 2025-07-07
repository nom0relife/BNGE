// /app/loading.tsx or /app/(protected)/movies/loading.tsx
import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1e1b26] bg-opacity-95">
      {/* Animated SVG Geek Glasses */}
      <div className="animate-spin-slow">
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glasses frame */}
          <rect x="10" y="18" width="22" height="12" rx="6" stroke="#fe4141" strokeWidth="3" fill="#2d2d44" />
          <rect x="48" y="18" width="22" height="12" rx="6" stroke="#fe4141" strokeWidth="3" fill="#2d2d44" />
          {/* Bridge */}
          <rect x="32" y="22" width="16" height="4" rx="2" fill="#fe4141" />
          {/* Eyes (circles) */}
          <circle cx="21" cy="24" r="3" fill="#fff" className="animate-blink" />
          <circle cx="59" cy="24" r="3" fill="#fff" className="animate-blink delay-500" />
          {/* Geeky highlight (pixel) */}
          <rect x="18" y="21" width="1.5" height="1.5" fill="#f1e5fe" />
          <rect x="56" y="21" width="1.5" height="1.5" fill="#f1e5fe" />
        </svg>
      </div>
      <span className="mt-5 text-2xl font-bold text-white tracking-wide font-mono">Loading BNGE...</span>

      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            45% { opacity: 1; }
            55% { opacity: 0.1; }
            65% { opacity: 1; }
          }
          .animate-blink {
            animation: blink 1.8s infinite;
          }
          .delay-500 {
            animation-delay: 0.9s;
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin-slow 2.5s linear infinite;
            display: inline-block;
          }
        `}
      </style>
    </div>
  );
}
