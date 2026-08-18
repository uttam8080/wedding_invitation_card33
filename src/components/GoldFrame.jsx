import React from 'react';

export const GoldFrame = ({
  children,
  className = '',
  innerClassName = 'p-6 md:p-10',
}) => {
  return (
    <div className={`relative p-[3px] rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#FFF8EF] to-[#AA771C] royal-shadow ${className}`}>
      {/* Inner background container */}
      <div className={`relative bg-[#FFF8EF] rounded-[9px] border border-[#D4AF37]/30 ${innerClassName}`}>
        {/* Four Decorative Corner Accents */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none rounded-tl-sm" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none rounded-tr-sm" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none rounded-bl-sm" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none rounded-br-sm" />

        {/* Subtle Inner Gold Line */}
        <div className="absolute inset-3 border border-[#D4AF37]/20 pointer-events-none rounded-lg" />

        {children}
      </div>
    </div>
  );
};
