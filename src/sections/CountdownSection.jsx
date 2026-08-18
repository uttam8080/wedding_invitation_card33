import React from 'react';
import { CountdownTimer } from '../components/CountdownTimer';
import { COUPLE_DETAILS, countdown, hero } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import lowerSide from '../assets/lowerside.png';

export const CountdownSection = () => {
  return (
    <section id="countdown" className="py-24 px-4 bg-[#F7E1D7] relative overflow-hidden text-center">
      {/* Lower Decorative Side Background Image */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-0">
        <img 
          src={lowerSide} 
          alt="Decorative bottom border" 
          className="w-full h-auto min-h-[220px] sm:min-h-[350px] md:min-h-[480px] object-cover object-bottom block opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-[#D4AF37]/40 shadow-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#AA771C] uppercase">
            Counting Down To Eternity
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F] drop-shadow-xs">
          {countdown.sectionTitle || 'Until We Say "I Do"'}
        </h2>

        <p className="font-cormorant italic text-lg sm:text-xl text-[#3A2E2A]/85 my-4 max-w-lg mx-auto font-semibold">
          "{countdown.quote || 'Every second brings us closer to the most magical day of our lives.'}"
        </p>

        <SectionDivider type="lotus" />

        {/* Live Countdown Component */}
        <CountdownTimer targetDate={countdown.targetDate} />

        {/* Date & Venue Glass Badge */}
        <div className="mt-8 px-6 py-3.5 rounded-full bg-white/70 backdrop-blur-xl border-2 border-white/90 shadow-[0_10px_25px_rgba(139,30,63,0.1),inset_0_0_15px_rgba(255,255,255,0.9)] max-w-lg mx-auto inline-flex items-center justify-center space-x-3 text-[#8B1E3F]">
          <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wider">
            {(hero.eventDate || 'February 14, 2027').toUpperCase()}
          </span>
          <span className="text-[#D4AF37]">•</span>
          <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wider">
            {(countdown.locationStr || hero.venue).toUpperCase()}
          </span>
        </div>
      </div>
    </section>
  );
};
