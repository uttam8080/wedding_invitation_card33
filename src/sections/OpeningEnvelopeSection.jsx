import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GoldFrame } from '../components/GoldFrame';
import { INVITATION_MESSAGE, invitationCards } from '../data/weddingData';
import { Sparkles } from 'lucide-react';

export const OpeningEnvelopeSection = ({
  isOpen,
  onToggleOpen,
}) => {
  const [animating, setAnimating] = useState(false);
  const [cardType, setCardType] = useState('traditional');


  const handleOpenClick = () => {
    if (animating) return;
    setAnimating(true);
    onToggleOpen();

    // Trigger golden confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#8B1E3F', '#F3E5AB', '#AA771C'],
    });

    setTimeout(() => {
      setAnimating(false);
    }, 2000);
  };

  return (
    <section id="invitation" className="relative min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-[#F7E1D7] overflow-hidden">
      {/* Background Mandala Watermark */}
      <div className="absolute w-[600px] h-[600px] opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#8B1E3F]">
          <circle cx="100" cy="100" r="90" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-8">
          <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#AA771C] uppercase block mb-2">
            Royal Proclamation
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F]">
            The Formal Invitation
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Envelope Container */}
        <div className="relative w-full max-w-2xl mx-auto my-8 perspective-1000">
          {!isOpen ? (
            /* Premium Royal Velvet Box state */
            <div
              onClick={handleOpenClick}
              className="group cursor-pointer relative w-full max-w-[600px] mx-auto aspect-[4/3] bg-gradient-to-br from-[#6A1128] via-[#8B1E3F] to-[#510A1D] rounded-lg border-[6px] border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 sm:p-10 flex flex-col items-center justify-center transition-all duration-1500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Subtle inner velvet texture/glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

              {/* Ornate Gold Inner Frame */}
              <div className="absolute inset-3 border-2 border-dashed border-[#D4AF37]/70 rounded-md pointer-events-none" />
              <div className="absolute inset-5 border border-[#D4AF37]/40 rounded-sm pointer-events-none" />

              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />

              {/* Royal Wax Seal / Gold Medallion */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#B8860B] via-[#FFD700] to-[#D4AF37] border-[3px] border-[#FFF8EF]/20 shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-1500 hover:rotate-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#8B1E3F]/30 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFDF00] to-[#DAA520]">
                    <span className="font-great-vibes text-4xl sm:text-5xl font-bold text-[#8B1E3F] drop-shadow-sm block leading-none">A&R</span>
                  </div>
                </div>

                <p className="font-cinzel text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#FFD700] uppercase mt-8 group-hover:text-[#FFF] transition-colors flex items-center space-x-3 drop-shadow-md">
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                  <span>UNSEAL INVITATION</span>
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                </p>
              </div>

              {/* Recipient Ribbon */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-2 border-t border-b border-[#D4AF37]/50 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent text-[#FFD700] min-w-[250px] text-center">
                <span className="font-cormorant italic text-sm sm:text-base font-medium tracking-wide">For our beloved guest</span>
              </div>
            </div>
          ) : (
            /* Open Letter View with Interactive Traditional & Lavender switcher */
            <div className="flex flex-col items-center w-full animate-fadeIn">
              {/* Tab Switcher */}
              <div className="flex space-x-4 mb-6 z-20 pointer-events-auto">
                <button
                  onClick={(e) => { e.stopPropagation(); setCardType('traditional'); }}
                  className={`px-4 py-2 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 border cursor-pointer shadow-md ${
                    cardType === 'traditional'
                      ? 'bg-[#8B1E3F] text-white border-[#D4AF37]'
                      : 'bg-white/90 text-[#8B1E3F] border-[#8B1E3F]/30 hover:bg-white'
                  }`}
                >
                  Traditional Royal Card
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setCardType('lavender'); }}
                  className={`px-4 py-2 rounded-full font-cinzel text-xs font-bold tracking-wider transition-all duration-300 border cursor-pointer shadow-md ${
                    cardType === 'lavender'
                      ? 'bg-[#4B3F72] text-white border-[#D4AF37]'
                      : 'bg-white/90 text-[#4B3F72] border-[#4B3F72]/30 hover:bg-white'
                  }`}
                >
                  Elegant Lavender Card
                </button>
              </div>

              {/* Card Container */}
              <div className="w-full max-w-lg mx-auto pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                {cardType === 'traditional' ? (
                  /* Traditional Royal Card */
                  <div className="relative w-full aspect-[3/4.5] sm:aspect-[3/4.2] rounded-2xl bg-gradient-to-b from-[#7A0D23] via-[#8B1E3F] to-[#510A1D] border-[6px] border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 sm:p-8 flex flex-col items-center justify-between text-center overflow-hidden">
                    {/* Background Soft Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_rgba(0,0,0,0.5)_100%)] pointer-events-none" />
                    {/* Inner gold borders */}
                    <div className="absolute inset-2 border-2 border-dashed border-[#D4AF37]/50 rounded-lg pointer-events-none" />
                    
                    {/* Ganesha Crest */}
                    <div className="relative flex flex-col items-center mt-2">
                      <div className="w-14 h-14 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-[#FFF8EF]/10 mb-1">
                        <span className="text-[#D4AF37] font-bold text-2xl font-cinzel">🕉</span>
                      </div>
                      <p className="font-cinzel text-[10px] text-[#D4AF37]/80 tracking-widest uppercase">
                        {invitationCards.traditional.familyHeading}
                      </p>
                    </div>

                    {/* Invitation Header */}
                    <div className="my-2">
                      <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#FFD700] tracking-widest uppercase mb-1">
                        {invitationCards.traditional.invitationTitle}
                      </h3>
                      <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto my-2" />
                    </div>

                    {/* Groom and Bride Names */}
                    <div className="flex flex-col items-center my-2">
                      <h4 className="font-great-vibes text-4xl sm:text-5xl text-white font-bold drop-shadow">
                        {invitationCards.traditional.groomName}
                      </h4>
                      <p className="font-cormorant italic text-lg sm:text-xl text-[#FFD700] my-0.5">weds</p>
                      <h4 className="font-great-vibes text-4xl sm:text-5xl text-white font-bold drop-shadow">
                        {invitationCards.traditional.brideName}
                      </h4>
                    </div>

                    {/* Date and Time */}
                    <div className="my-2 font-poppins text-white/90 text-xs sm:text-sm">
                      <p className="font-semibold text-[#FFD700] tracking-wide">
                        {invitationCards.traditional.dateStr}
                      </p>
                      <p className="text-[10px] sm:text-xs text-white/70 mt-1 uppercase tracking-widest">
                        at {invitationCards.traditional.timeStr}
                      </p>
                    </div>

                    {/* Venue details */}
                    <div className="my-2 font-poppins text-xs text-white/80">
                      <span className="font-cinzel text-[#FFD700] tracking-wider block font-bold mb-1">
                        VENUE
                      </span>
                      <p className="font-bold">{invitationCards.traditional.venueLine1}</p>
                      <p>{invitationCards.traditional.venueLine2}</p>
                    </div>

                    {/* Invitee names and card number */}
                    <div className="mb-2 w-full flex justify-between items-end border-t border-[#D4AF37]/35 pt-4 text-[10px] text-[#D4AF37]/70 font-cinzel">
                      <div className="text-left">
                        <p className="text-[9px] uppercase tracking-wider">{invitationCards.traditional.inviteeTitle}</p>
                        <p className="font-bold text-[#FFF8EF]">{invitationCards.traditional.inviteeNames}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px]">Card No.</p>
                        <p className="font-bold text-[#FFF8EF]">#{invitationCards.traditional.cardNumber}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Lavender Card */
                  <div className="relative w-full aspect-[3/4.5] sm:aspect-[3/4.2] rounded-2xl bg-gradient-to-b from-[#3E345D] via-[#4B3F72] to-[#271E42] border-[6px] border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 sm:p-8 flex flex-col items-center justify-between text-center overflow-hidden">
                    {/* Background Soft Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_rgba(0,0,0,0.5)_100%)] pointer-events-none" />
                    {/* Inner gold borders */}
                    <div className="absolute inset-2 border border-[#D4AF37]/50 rounded-lg pointer-events-none" />
                    <div className="absolute inset-4 border border-dashed border-[#D4AF37]/30 rounded-md pointer-events-none" />

                    {/* Top floral badge */}
                    <div className="relative flex flex-col items-center mt-2">
                      <span className="text-[#D4AF37] text-2xl">❊</span>
                      <p className="font-cinzel text-[9px] text-[#D4AF37] tracking-[0.25em] uppercase mt-1">
                        WEDDING INVITE
                      </p>
                    </div>

                    {/* Groom and Bride Names */}
                    <div className="flex flex-col items-center my-3">
                      <h4 className="font-great-vibes text-4xl sm:text-5xl text-white font-bold drop-shadow">
                        {invitationCards.lavender.groomName}
                      </h4>
                      <p className="font-cinzel text-xs text-[#D4AF37]/80 tracking-widest my-1.5">&</p>
                      <h4 className="font-great-vibes text-4xl sm:text-5xl text-white font-bold drop-shadow">
                        {invitationCards.lavender.brideName}
                      </h4>
                    </div>

                    {/* Date Block */}
                    <div className="my-2 py-3 px-4 border-t border-b border-[#D4AF37]/30 flex justify-between items-center w-full max-w-[280px] text-white/95">
                      <div className="text-right flex-1">
                        <p className="font-cinzel text-[10px] font-bold text-[#D4AF37] tracking-wider">{invitationCards.lavender.dayName}</p>
                        <p className="font-poppins text-[10px] text-white/70">{invitationCards.lavender.timeStr}</p>
                      </div>
                      <div className="px-4 border-l border-r border-[#D4AF37]/30 flex flex-col items-center mx-2">
                        <span className="font-cinzel text-3xl font-extrabold leading-none text-[#FFD700]">{invitationCards.lavender.dayNum}</span>
                        <span className="font-cinzel text-[9px] tracking-wider uppercase mt-1">{invitationCards.lavender.monthStr}</span>
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-cinzel text-[10px] font-bold text-[#D4AF37] tracking-wider">{invitationCards.lavender.yearStr}</p>
                        <p className="font-poppins text-[10px] text-white/70">Shubh Vivah</p>
                      </div>
                    </div>

                    {/* Venue details */}
                    <div className="my-3 font-poppins text-xs text-white/95 max-w-[280px]">
                      <span className="font-cinzel text-[#FFD700] tracking-wider block font-bold mb-1">
                        THE VENUE
                      </span>
                      <p className="font-bold text-sm text-[#FFF8EF] mb-1">{invitationCards.lavender.venueName}</p>
                      <p className="text-[10px] text-white/75 leading-relaxed">{invitationCards.lavender.venueAddress}</p>
                    </div>

                    {/* Bottom Close Button / Re-seal prompt */}
                    <button
                      onClick={handleOpenClick}
                      className="mb-1 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#FFF8EF]/5 hover:bg-[#FFF8EF]/15 text-[#D4AF37] text-[9px] font-cinzel font-bold tracking-widest uppercase transition-all duration-300"
                    >
                      Click to Re-Seal Envelope
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
