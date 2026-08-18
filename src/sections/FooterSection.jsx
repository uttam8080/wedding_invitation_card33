import React from 'react';
import { CurveDivider } from '../components/CurveDivider';
import { COUPLE_DETAILS, footer, groomAndBride } from '../data/weddingData';

export const FooterSection = () => {
  const groomInit = groomAndBride?.groom?.name ? groomAndBride.groom.name[0] : 'A';
  const brideInit = groomAndBride?.bride?.name ? groomAndBride.bride.name[0] : 'A';

  return (
    <footer className="bg-[#1E1215] text-[#FFF8EF] pt-16 pb-12 px-4 relative overflow-hidden">
      <CurveDivider position="top" fillColor="#FDF8F2" />
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-32 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Royal Crest Emblem */}
        <div className="w-16 h-16 rounded-full bg-[#8B1E3F] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-great-vibes text-3xl font-bold mx-auto mb-6 royal-shadow">
          {groomInit}{brideInit}
        </div>

        <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#D4AF37] mb-2">
          {COUPLE_DETAILS.bride.name} & {COUPLE_DETAILS.groom.name}
        </h3>

        <p className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#FFF8EF]/80 uppercase mb-6">
          {COUPLE_DETAILS.hashtag}
        </p>

        <p className="font-cormorant italic text-lg sm:text-xl text-[#FFF8EF]/90 max-w-md mx-auto mb-8">
          "With overflowing hearts and eternal gratitude for your presence in our lives."
        </p>

        {/* Dynamic Footer Links */}
        {footer.links && (
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 pointer-events-auto">
            {footer.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="font-cinzel text-xs font-bold tracking-[0.15em] text-[#D4AF37] hover:text-[#FFF8EF] transition-colors uppercase cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="w-full h-[1px] bg-[#D4AF37]/30 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-poppins text-[#FFF8EF]/60 space-y-2 sm:space-y-0">
          <p>{footer.copyright || "© 2027 Arjun & Ananya Wedding. Designed with love."}</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <a 
              href="https://tekkzy.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D4AF37] hover:text-white transition-colors font-semibold underline decoration-[#D4AF37]/50 underline-offset-4"
            >
              Tekkzy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
