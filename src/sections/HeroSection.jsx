import React from 'react';
import { Heart } from 'lucide-react';
import { COUPLE_DETAILS, hero, groomAndBride } from '../data/weddingData';
import mobileViewers from '../assets/mobileviewers.png';
import lowerViewer from '../assets/lowerviewer.png';
import lata1 from '../assets/lata1.png';
import lata2 from '../assets/lata2.png';
import lata3 from '../assets/lata3.png';
import swan1 from '../assets/swan1.png';

export const HeroSection = ({ onOpenInvitation }) => {
  const groomInit = groomAndBride?.groom?.name ? groomAndBride.groom.name[0] : 'A';
  const brideInit = groomAndBride?.bride?.name ? groomAndBride.bride.name[0] : 'A';

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#FDF8F2] overflow-visible px-4 py-16"
    >
      {/* Background Arch Image stretched to cover the complete section and show every part */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[1]">
        <img
          src={mobileViewers}
          alt="Royal Archway Background"
          className="w-full h-full object-fill opacity-95 block"
        />
      </div>
      {/* Lata3 (Long Garland) — Far TOP-LEFT edge */}
      <div className="absolute pointer-events-none z-[4]" style={{ top: '-10px', left: '0%' }}>
        <img src={lata3} alt="Decorative Long Vine Top Left"
          className="w-16 sm:w-20 md:w-28 lg:w-32 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '0.4s', animationDuration: '3.5s' }} />
      </div>

      {/* Lata3 — slightly inward left */}
      <div className="absolute pointer-events-none z-[4]" style={{ top: '-10px', left: '5%' }}>
        <img src={lata3} alt="Decorative Long Vine Top Left 2"
          className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '0.9s', animationDuration: '4s' }} />
      </div>

      {/* Lata3 — slightly inward right */}
      <div className="absolute pointer-events-none z-[4]" style={{ top: '-10px', right: '5%' }}>
        <img src={lata3} alt="Decorative Long Vine Top Right 2"
          className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '1.7s', animationDuration: '4s', transform: 'scaleX(-1)' }} />
      </div>

      {/* Lata3 (Long Garland) — Far TOP-RIGHT edge, mirrored */}
      <div className="absolute pointer-events-none z-[4]" style={{ top: '-10px', right: '0%' }}>
        <img src={lata3} alt="Decorative Long Vine Top Right"
          className="w-16 sm:w-20 md:w-28 lg:w-32 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '1.2s', animationDuration: '3.5s', transform: 'scaleX(-1)' }} />
      </div>

      {/* Lata2 (Hanging Ivy) — Top center, anchored top, bottom swings */}
      <div
        className="absolute pointer-events-none z-[4]"
        style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <img
          src={lata2}
          alt="Decorative Hanging Vine Top Center"
          className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center' }}
        />
      </div>

      {/* Lata2 (Hanging Ivy) — Top LEFT, smaller size */}
      <div
        className="absolute pointer-events-none z-[4]"
        style={{ top: '-20px', left: '10%' }}
      >
        <img
          src={lata2}
          alt="Decorative Hanging Vine Top Left"
          className="w-16 sm:w-20 md:w-28 lg:w-32 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '0.8s' }}
        />
      </div>

      {/* Lata2 (Hanging Ivy) — Top LEFT-CENTER, medium-small */}
      <div
        className="absolute pointer-events-none z-[4]"
        style={{ top: '-20px', left: '25%' }}
      >
        <img
          src={lata2}
          alt="Decorative Hanging Vine Top Left Center"
          className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '0.3s' }}
        />
      </div>

      {/* Lata2 (Hanging Ivy) — Top RIGHT-CENTER, medium-large */}
      <div
        className="absolute pointer-events-none z-[4]"
        style={{ top: '-20px', right: '25%' }}
      >
        <img
          src={lata2}
          alt="Decorative Hanging Vine Top Right Center"
          className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '1.1s' }}
        />
      </div>

      {/* Lata2 (Hanging Ivy) — Top RIGHT, larger size */}
      <div
        className="absolute pointer-events-none z-[4]"
        style={{ top: '-20px', right: '10%' }}
      >
        <img
          src={lata2}
          alt="Decorative Hanging Vine Top Right"
          className="w-36 sm:w-44 md:w-56 lg:w-64 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '1.5s' }}
        />
      </div>

      {/* Lata3 between lata2 @ 10% and 25% → placed at ~18% */}
      <div className="absolute pointer-events-none z-[4]" style={{ top: '-10px', left: '18%' }}>
        <img src={lata3} alt="Lata3 between L10 and L25"
          className="w-18 sm:w-24 md:w-32 lg:w-40 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '0.5s', animationDuration: '3.8s' }} />
      </div>

      {/* Lata3 between lata2 @ 25% and 50% → placed at ~37% */}
      <div className="absolute pointer-events-none z-[4]" style={{ top: '-10px', left: '37%' }}>
        <img src={lata3} alt="Lata3 between L25 and center"
          className="w-22 sm:w-30 md:w-38 lg:w-46 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '1.0s', animationDuration: '3.2s' }} />
      </div>

      {/* Lata3 between center 50% and right 25% → placed at ~63% */}
      <div className="absolute pointer-events-none z-[4]" style={{ top: '-10px', left: '63%' }}>
        <img src={lata3} alt="Lata3 between center and R25"
          className="w-22 sm:w-30 md:w-38 lg:w-46 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '0.6s', animationDuration: '3.5s' }} />
      </div>

      {/* Lata3 between right 25% and right 10% → placed at ~82% */}
      <div className="absolute pointer-events-none z-[4]" style={{ top: '-10px', left: '82%' }}>
        <img src={lata3} alt="Lata3 between R25 and R10"
          className="w-28 sm:w-36 md:w-48 lg:w-56 h-auto object-contain block animate-lata2-sway"
          style={{ transformOrigin: 'top center', animationDelay: '1.3s', animationDuration: '4.2s' }} />
      </div>

      {/* Lata (Vine) — Left side, vertically centered */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none z-[3]">
        <img
          src={lata1}
          alt="Decorative Vine Left Center"
          className="w-32 sm:w-44 md:w-56 lg:w-64 h-auto object-contain block animate-vine-sway"
          style={{ transformOrigin: 'top left' }}
        />
      </div>

      {/* Lata (Vine) — Right side, facing LEFT (flipped) */}
      <div
        className="absolute pointer-events-none z-[3]"
        style={{ right: '-40px', top: '50%', transform: 'translateY(-50%) scaleX(-1)' }}
      >
        <img
          src={lata1}
          alt="Decorative Vine Right Center"
          className="w-32 sm:w-44 md:w-56 lg:w-64 h-auto object-contain block animate-vine-sway"
        />
      </div>

      {/* Lower Viewer — Royal Palace Domes & Lotus Pond — full natural height, no compression */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-[2]">
        <img
          src={lowerViewer}
          alt="Royal Palace Lower Decoration"
          className="w-full h-auto block"
          style={{ display: 'block' }}
        />
      </div>

      {/* Swan LEFT — faces RIGHT toward center */}
      <div className="absolute pointer-events-none z-[5]"
        style={{ bottom: '-5%', left: '6%' }}>
        <div style={{ animation: 'swan-float 4s ease-in-out infinite alternate' }}>
          <div style={{ lineHeight: 0 }}>
            <img src={swan1} alt="Royal Swan Left"
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
              style={{ display: 'block' }} />
            <img src={swan1} alt="" aria-hidden="true"
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
              style={{ display: 'block', transform: 'scaleY(-1)', opacity: 0.28, filter: 'blur(2px)', marginTop: '-2px' }} />
          </div>
        </div>
      </div>

      {/* Swan RIGHT — scaleX(-1) on outer so flip never conflicts with animation */}
      <div className="absolute pointer-events-none z-[5]"
        style={{ bottom: '-5%', right: '6%', transform: 'scaleX(-1)' }}>
        <div style={{ animation: 'swan-float 4s ease-in-out infinite alternate', animationDelay: '1.5s' }}>
          <div style={{ lineHeight: 0 }}>
            <img src={swan1} alt="Royal Swan Right"
              className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain"
              style={{ display: 'block' }} />
            <img src={swan1} alt="" aria-hidden="true"
              className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain"
              style={{ display: 'block', transform: 'scaleY(-1)', opacity: 0.28, filter: 'blur(2px)', marginTop: '-2px' }} />
          </div>
        </div>
      </div>

      {/* Main Center Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center pointer-events-none">
        {/* Shubh Vivah Auspicious Mantra */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#8B1E3F]/10 backdrop-blur-md border border-[#8B1E3F]/30 text-[#8B1E3F] mb-6 shadow-sm">
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-widest uppercase">
            {hero.badge || "|| Shree Ganeshay Namah ||"}
          </span>
        </div>

        {/* Central Rotating Mandala Emblem */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#D4AF37] stroke-[1.2] animate-spin-slow">
            <circle cx="50" cy="50" r="46" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="38" />
            <circle cx="50" cy="50" r="28" strokeDasharray="4 2" />
            <polygon points="50,12 60,35 85,35 65,50 72,75 50,60 28,75 35,50 15,35 40,35" className="fill-[#8B1E3F]/10 stroke-[#D4AF37]" />
          </svg>
          <div className="absolute text-[#8B1E3F] font-great-vibes text-3xl sm:text-4xl font-bold drop-shadow">
            {groomInit}&{brideInit}
          </div>
        </div>

        <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] font-semibold text-[#AA771C] uppercase mb-3">
          The Wedding Celebration Of
        </p>

        {/* Bride & Groom Names & Royal Couple Photos */}
        <div className="flex flex-col items-center justify-center gap-3 my-2">
          {/* Royal Couple Photos Display */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 my-2">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#FFF3A7] to-[#8B1E3F] shadow-xl border-2 border-[#D4AF37] transition-transform duration-500 hover:scale-105">
                <img
                  src={COUPLE_DETAILS.bride.photo}
                  alt={COUPLE_DETAILS.bride.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full border border-[#FFF8EF]"
                />
              </div>
              <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#AA771C] tracking-wider uppercase mt-1.5">
                The Bride
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#8B1E3F] fill-[#D4AF37] animate-bounce" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-[#8B1E3F] via-[#FFF3A7] to-[#D4AF37] shadow-xl border-2 border-[#D4AF37] transition-transform duration-500 hover:scale-105">
                <img
                  src={COUPLE_DETAILS.groom.photo}
                  alt={COUPLE_DETAILS.groom.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full border border-[#FFF8EF]"
                />
              </div>
              <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#AA771C] tracking-wider uppercase mt-1.5">
                The Groom
              </span>
            </div>
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-1">
            {/* Strong spray glow behind names for readability */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-40px -100px',
                background: 'radial-gradient(ellipse at center, rgba(253, 248, 242, 0.95) 0%, rgba(253, 248, 242, 0.8) 35%, rgba(255, 215, 0, 0.3) 60%, transparent 80%)',
                filter: 'blur(15px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />
            <h1 className="relative z-[1] font-great-vibes text-5xl sm:text-7xl md:text-8xl text-[#85001E] font-bold drop-shadow-lg">
              {groomAndBride.bride.name}
            </h1>
            <span className="relative z-[1] font-great-vibes text-3xl sm:text-5xl text-[#85001E] font-bold drop-shadow-lg">
              &
            </span>
            <h1 className="relative z-[1] font-great-vibes text-5xl sm:text-7xl md:text-8xl text-[#85001E] font-bold drop-shadow-lg">
              {groomAndBride.groom.name}
            </h1>

          </div>
        </div>

        {/* Tagline */}
        <p className="font-cormorant italic text-lg sm:text-2xl text-[#3A2E2A]/90 mt-2 mb-8 max-w-lg drop-shadow-sm font-medium">
          "{hero.subtitle}"
        </p>

        {/* CTA Button to Open Envelope */}
        <div className="relative z-10 mt-2 pointer-events-auto">
          <button
            onClick={onOpenInvitation}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-white font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] shadow-[0_8px_20px_rgba(139,30,63,0.3)] hover:shadow-[0_12px_25px_rgba(139,30,63,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#D4AF37]/50 cursor-pointer"
          >
            {hero.ctaText || "Explore Invitation & RSVP"}
          </button>
        </div>
      </div>
    </section>
  );
};

