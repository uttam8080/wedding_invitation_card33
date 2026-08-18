import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

// Components
import { FloatingPetals } from './components/FloatingPetals';

// Sections
import { LoadingScreen } from './sections/LoadingScreen';
import { HeroSection } from './sections/HeroSection';
import { StarScratchSection } from './sections/StarScratchSection';
import { OpeningEnvelopeSection } from './sections/OpeningEnvelopeSection';
import { BrideGroomSection } from './sections/BrideGroomSection';
import { LoveStorySection } from './sections/LoveStorySection';
import { WeddingEventsSection } from './sections/WeddingEventsSection';

import { CurveAsymmetricalDivider } from './components/CurveAsymmetricalDivider';
import { CountdownSection } from './sections/CountdownSection';
import { GallerySection } from './sections/GallerySection';
import { VenueSection } from './sections/VenueSection';
import { GiftMessageSection } from './sections/GiftMessageSection';

import { FooterSection } from './sections/FooterSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    const element = document.getElementById('invitation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDF8F2] text-[#3A2E2A] overflow-x-clip font-poppins selection:bg-[#D4AF37] selection:text-white">
      {/* 1. Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Floating Flowers Effect */}
      <FloatingPetals />

      {/* Main Page Sections */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection onOpenInvitation={handleOpenEnvelope} />
        <div className="bg-[#FFF8EF]"><CurveAsymmetricalDivider fill="#FDF8F2" /></div>

        {/* 2.5. Wedding Star Scratch Card Section */}
        <StarScratchSection />
        <div className="bg-[#F7E1D7]"><CurveAsymmetricalDivider fill="#FFF8EF" /></div>

        {/* 3 & 4. Opening Envelope & Invitation Letter Section */}
        <OpeningEnvelopeSection
          isOpen={isEnvelopeOpen}
          onToggleOpen={() => setIsEnvelopeOpen(!isEnvelopeOpen)}
        />
        <div className="bg-[#FFF8EF]"><CurveAsymmetricalDivider fill="#F7E1D7" /></div>

        {/* 5. Bride & Groom Section */}
        <BrideGroomSection />
        <div className="bg-[#F7E1D7]"><CurveAsymmetricalDivider fill="#FFF8EF" /></div>

        {/* 6. Love Story Timeline */}
        <LoveStorySection />
        <div className="bg-[#FDF8F2]"><CurveAsymmetricalDivider fill="#F7E1D7" /></div>

        {/* 7. Wedding Events Ceremonies */}
        <WeddingEventsSection />
        <div className="bg-[#F7E1D7]"><CurveAsymmetricalDivider fill="#FDF8F2" /></div>

        {/* 8. Countdown Timer */}
        <CountdownSection />
        <div className="bg-[#FDF8F2]"><CurveAsymmetricalDivider fill="#F7E1D7" /></div>

        {/* 9. Photo Gallery */}
        <GallerySection />
        <div className="bg-[#F7E1D7]"><CurveAsymmetricalDivider fill="#FDF8F2" /></div>

        {/* 11. Venue & Maps Section */}
        <VenueSection />
        <div className="bg-[#FDF8F2]"><CurveAsymmetricalDivider fill="#F7E1D7" /></div>

        {/* 12. Gift Message */}
        <GiftMessageSection />

      </main>

      {/* 15. Footer */}
      <FooterSection />


    </div>
  );
}
