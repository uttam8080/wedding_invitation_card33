import React from 'react';

export const DropsDivider = ({ className = '', fill = '#FDF8F2', flip = false }) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className} ${flip ? 'rotate-180' : ''}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]"
      >
        <path 
          d="M 0,0 V 40 Q 15,40 25,60 T 50,40 Q 65,40 75,70 T 100,40 Q 115,40 125,50 T 150,40 Q 165,40 175,80 T 200,40 Q 215,40 225,60 T 250,40 Q 265,40 275,75 T 300,40 Q 315,40 325,55 T 350,40 Q 365,40 375,90 T 400,40 Q 415,40 425,65 T 450,40 Q 465,40 475,50 T 500,40 Q 515,40 525,85 T 550,40 Q 565,40 575,60 T 600,40 Q 615,40 625,70 T 650,40 Q 665,40 675,55 T 700,40 Q 715,40 725,80 T 750,40 Q 765,40 775,50 T 800,40 Q 815,40 825,95 T 850,40 Q 865,40 875,65 T 900,40 Q 915,40 925,50 T 950,40 Q 965,40 975,75 T 1000,40 Q 1015,40 1025,60 T 1050,40 Q 1065,40 1075,85 T 1100,40 Q 1115,40 1125,55 T 1150,40 Q 1165,40 1175,70 T 1200,40 V 0 Z" 
          fill={fill} 
        />
      </svg>
    </div>
  );
};
