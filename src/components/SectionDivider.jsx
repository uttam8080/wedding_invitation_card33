import React from 'react';

export const SectionDivider = ({ type = 'mandala', className = '' }) => {
  return (
    <div className={`flex items-center justify-center my-8 md:my-12 px-4 ${className}`}>
      {/* Left Vine Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-[#8B1E3F] w-16 sm:w-28 md:w-40 opacity-70" />

      {/* Central Motif */}
      <div className="mx-4 text-[#D4AF37] flex items-center justify-center">
        {type === 'mandala' && (
          <div className="relative w-10 h-10 flex items-center justify-center animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-10 h-10 fill-none stroke-[#D4AF37] stroke-[1.5]">
              <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="30" />
              <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
              <circle cx="50" cy="50" r="10" className="fill-[#8B1E3F]" />
            </svg>
          </div>
        )}

        {type === 'lotus' && (
          <svg className="w-12 h-10 fill-[#D4AF37]" viewBox="0 0 100 80">
            <path d="M50 10 C60 30 80 40 90 60 C80 65 60 70 50 75 C40 70 20 65 10 60 C20 40 40 30 50 10 Z" opacity="0.8" />
            <path d="M50 20 C58 35 72 45 80 60 C70 63 58 66 50 70 C42 66 30 63 20 60 C28 45 42 35 50 20 Z" className="fill-[#8B1E3F]" />
            <path d="M50 35 C54 45 64 50 70 60 C62 62 54 64 50 66 C46 64 38 62 30 60 C36 50 46 45 50 35 Z" className="fill-[#D4AF37]" />
            <circle cx="50" cy="45" r="4" className="fill-[#FFF8EF]" />
          </svg>
        )}

        {type === 'peacock' && (
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-great-vibes text-[#8B1E3F]">✦</span>
          </div>
        )}

        {type === 'vine' && (
          <div className="flex items-center space-x-1 text-[#D4AF37]">
            <span className="text-lg">❖</span>
            <span className="text-2xl text-[#8B1E3F]">⚜</span>
            <span className="text-lg">❖</span>
          </div>
        )}
      </div>

      {/* Right Vine Line */}
      <div className="h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37] to-[#8B1E3F] w-16 sm:w-28 md:w-40 opacity-70" />
    </div>
  );
};
