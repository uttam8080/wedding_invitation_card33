import React from 'react';

export const CurveDivider = ({ 
  position = 'bottom', 
  fillColor = '#FDF8F2',
  className = ''
}) => {
  return (
    <div 
      className={`absolute left-0 w-full overflow-hidden leading-[0] z-10 ${
        position === 'top' ? '-top-[1px] rotate-180' : '-bottom-[1px]'
      } ${className}`}
      style={{ height: '60px' }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[60px]"
      >
        <path d="M0,0V120H1200V0C1000,120,200,120,0,0Z" fill={fillColor}></path>
      </svg>
    </div>
  );
};
