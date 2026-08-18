import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#FFF8EF] border-2 border-[#D4AF37] text-[#8B1E3F] shadow-xl hover:bg-[#D4AF37] hover:text-[#FFF8EF] transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Back to Top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};