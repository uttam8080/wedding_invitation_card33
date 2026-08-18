import React, { useState, useMemo } from 'react';
import { GALLERY_IMAGES, photoGallery } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import { MasonryGallery } from '../components/MasonryGallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map our gallery images to MasonryItem format with deterministic heights
  const masonryItems = useMemo(() => {
    const heights = [400, 250, 600, 350, 500, 300, 450, 280, 550, 320];
    return GALLERY_IMAGES.map((img, idx) => ({
      id: img.id,
      img: img.url,
      title: img.title,
      caption: img.caption,
      height: heights[idx % heights.length]
    }));
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-[#FDF8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#AA771C] uppercase block mb-2">
            {photoGallery.sectionLabel || "Memories Together"}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F]">
            {photoGallery.sectionTitle || "Photo Gallery"}
          </h2>
          {photoGallery.description && (
            <p className="font-poppins text-xs text-[#3A2E2A]/70 mt-3 max-w-md mx-auto italic">
              {photoGallery.description}
            </p>
          )}
          <div className="mt-4">
             <SectionDivider type="vine" />
          </div>
        </div>

        {/* GSAP Masonry Gallery */}
        <MasonryGallery 
          items={masonryItems}
          animateFrom="bottom"
          blurToFocus={true}
          stagger={0.08}
          scaleOnHover={true}
          hoverScale={0.96}
          colorShiftOnHover={true}
          onItemClick={openLightbox}
        />
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm touch-none"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-black/50 text-white hover:bg-[#8B1E3F] transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <button 
            className="absolute left-2 sm:left-8 p-3 rounded-full bg-black/50 text-white hover:bg-[#8B1E3F] transition-colors"
            onClick={showPrev}
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <div className="w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center px-16 relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={GALLERY_IMAGES[currentIndex].url} 
              alt={GALLERY_IMAGES[currentIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            />
            
            <div className="mt-6 text-center">
               <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#D4AF37] mb-1">{GALLERY_IMAGES[currentIndex].title}</h3>
               <p className="font-poppins text-sm text-[#FDF8F2]/70">{GALLERY_IMAGES[currentIndex].caption}</p>
               <div className="mt-2 text-xs font-cinzel text-[#D4AF37]/50 tracking-widest">
                 {currentIndex + 1} / {GALLERY_IMAGES.length}
               </div>
            </div>
          </div>
          
          <button 
            className="absolute right-2 sm:right-8 p-3 rounded-full bg-black/50 text-white hover:bg-[#8B1E3F] transition-colors"
            onClick={showNext}
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}
    </section>
  );
};
