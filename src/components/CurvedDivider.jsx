import React from 'react';

export const CurvedDivider = ({ className = '', fill = '#FDF8F2', flip = false }) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className} ${flip ? 'rotate-180' : ''}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="relative block w-full h-[50px] sm:h-[70px] md:h-[90px]"
      >
        <path 
          d="M0,0 C300,150 900,150 1200,0 L1200,0 L0,0 Z" 
          fill={fill} 
        />
      </svg>
    </div>
  );
};
