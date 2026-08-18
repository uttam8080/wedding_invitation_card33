import React, { useState, useRef, useEffect } from 'react';
const openingVideo = 'https://res.cloudinary.com/n0c7bqpd/video/upload/v1785327946/0728_qd0brk.mp4';

export const LoadingScreen = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  const handleTap = () => {
    if (hasStarted || !videoRef.current) return;
    setHasStarted(true);
    // Slow down the envelope animation (video)
    videoRef.current.playbackRate = 0.6;
    videoRef.current.play();
  };

  return (
    <div
      onClick={handleTap}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] transition-opacity duration-1000 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${!hasStarted ? 'cursor-pointer' : ''}`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={openingVideo}
        muted
        playsInline
        onEnded={() => {
          setIsFading(true);
          setTimeout(() => onComplete(), 1000);
        }}
      />

      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${hasStarted ? 'opacity-0' : 'opacity-100'}`} />

      {!hasStarted && (
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.2)] animate-pulse">
            <span className="font-cinzel text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
              Tap to Open Invitation
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
