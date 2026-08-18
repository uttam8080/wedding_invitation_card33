import React, { useState, useRef } from 'react';
import { WEDDING_EVENTS, venueLocation } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import { Calendar, Clock, MapPin, Sparkles, X } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

const blobShapes = [
  '45% 55% 40% 60% / 55% 45% 60% 40%',
  '60% 40% 50% 50% / 40% 50% 50% 60%',
  '50% 50% 35% 65% / 60% 40% 60% 40%',
  '40% 60% 60% 40% / 50% 55% 45% 50%',
  '55% 45% 50% 50% / 45% 60% 40% 55%',
  '50% 50% 60% 40% / 40% 50% 50% 60%'
];

export const WeddingEventsSection = () => {
  const [selectedEventMap, setSelectedEventMap] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="events" className="py-24 px-4 bg-gradient-to-b from-[#FDF8F2] via-[#FFF8EF] to-[#FDF8F2] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 right-8 w-40 h-40 rounded-full bg-gradient-to-br from-white/80 via-[#FFF3A7]/30 to-[#D4AF37]/20 backdrop-blur-md border border-white/70 shadow-[0_10px_30px_rgba(212,175,55,0.15)] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute bottom-12 left-10 w-48 h-48 rounded-full bg-gradient-to-tr from-white/70 via-[#8B1E3F]/15 to-[#D4AF37]/20 backdrop-blur-lg border border-white/80 shadow-[0_15px_35px_rgba(139,30,63,0.12)] pointer-events-none animate-bounce duration-[9s]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-[#D4AF37]/40 shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#AA771C] uppercase">
              Celestial Celebrations
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F] drop-shadow-xs">
            Wedding Ceremonies
          </h2>
          <SectionDivider type="mandala" />
        </motion.div>

        <div className="relative w-full" ref={containerRef}>
          {/* Central Straight Line Path */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1.5 bg-[#D4AF37]/20 rounded-full overflow-hidden z-0">
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-[#D4AF37] via-[#8B1E3F] to-[#D4AF37]"
              style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {WEDDING_EVENTS.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              const blobShape = blobShapes[idx % blobShapes.length];

              return (
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  key={evt.id}
                  className={`flex flex-col md:flex-row items-center w-full relative ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#8B1E3F] border-4 border-[#FDF8F2] shadow-[0_0_15px_rgba(212,175,55,0.6)] z-20 items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-[#FFF3A7] rounded-full animate-pulse" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Blob Card Content */}
                  <div className="w-full md:w-[45%] flex justify-center">
                    <div
                      className={`group relative overflow-hidden bg-white/70 backdrop-blur-2xl shadow-[0_15px_40px_rgba(139,30,63,0.15)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.25)] transition-all duration-700 flex flex-col justify-between animate-blob-${(idx % 3) + 1}`}
                      style={{ 
                        width: '100%', 
                        maxWidth: '400px', 
                        aspectRatio: '0.85/1' 
                      }}
                    >
                      <div className="w-full h-[45%] relative overflow-hidden shrink-0">
                        <img
                          src={evt.image}
                          alt={evt.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#8B1E3F]/90 via-[#8B1E3F]/40 to-transparent" />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-white px-4">
                          <span className="font-cinzel text-xs font-semibold text-[#FFF3A7] block tracking-widest uppercase mb-1">
                            {evt.hindiTitle}
                          </span>
                          <h3 className="font-cinzel text-xl sm:text-2xl font-bold leading-tight">
                            {evt.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col justify-center flex-grow space-y-3 bg-gradient-to-b from-transparent to-[#FDF8F2]/50">
                        <div className="space-y-1.5 font-poppins text-xs text-[#3A2E2A] mx-auto w-fit">
                          <div className="flex items-center space-x-2 text-[#8B1E3F] font-semibold">
                            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>{evt.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-[#3A2E2A]/90">
                            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>{evt.time}</span>
                          </div>
                        </div>

                        <p className="font-poppins text-xs text-[#3A2E2A]/80 leading-relaxed text-center line-clamp-3">
                          {evt.description}
                        </p>

                        <div className="pt-2 flex flex-col items-center justify-center gap-2">
                          <span className="font-cinzel text-[10px] font-bold text-[#AA771C] uppercase tracking-wider">
                            Dress Code: {evt.dressCode}
                          </span>
                          <div className="flex items-center space-x-1.5">
                            {evt.dressColorPalette.map((color, cIdx) => (
                              <span
                                key={cIdx}
                                className="w-3.5 h-3.5 rounded-full border border-white/80 shadow-xs"
                                style={{ backgroundColor: color }}
                                title={color}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-0 mt-auto shrink-0 flex justify-center">
                        <button
                          onClick={() => setSelectedEventMap(evt)}
                          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-white font-cinzel text-[10px] font-bold tracking-[0.2em] hover:scale-105 transition-all flex items-center justify-center space-x-1.5 shadow-md cursor-pointer border border-[#D4AF37]/50"
                        >
                          <MapPin className="w-3 h-3 text-[#FFF3A7]" />
                          <span>VENUE MAP</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Venue Map Modal */}
      {selectedEventMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white/95 backdrop-blur-2xl rounded-3xl border-2 border-white/80 shadow-[0_25px_60px_rgba(139,30,63,0.3)] p-6 sm:p-8">
            <button
              onClick={() => setSelectedEventMap(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#8B1E3F]/10 text-[#8B1E3F] hover:bg-[#8B1E3F] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#8B1E3F] mb-1">
              {selectedEventMap.title}
            </h3>
            <p className="font-poppins text-xs text-[#AA771C] font-semibold mb-4">
              {selectedEventMap.venue} • {selectedEventMap.address}
            </p>

            <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#D4AF37]/50 mb-6 shadow-inner">
              <iframe
                src={venueLocation.mapEmbedIframeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Venue Map"
              />
            </div>

            <div className="flex justify-end">
              <a
                href={selectedEventMap.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8B1E3F] to-[#A82848] text-white font-cinzel text-xs font-bold tracking-widest shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                OPEN IN GOOGLE MAPS ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
