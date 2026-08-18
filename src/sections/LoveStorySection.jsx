import React from 'react';
import { LOVE_STORY, groomAndBride } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import { MapPin, Sparkles, Heart } from 'lucide-react';

export const LoveStorySection = () => {
  return (
    <section id="story" className="py-24 px-4 bg-[#F7E1D7] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#AA771C] uppercase block mb-2">
            Our Journey Together
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F]">
            The Love Story
          </h2>
          <p className="font-poppins font-bold text-xs sm:text-sm text-[#3A2E2A]/70 mt-3 max-w-md mx-auto italic">
            Scroll down to watch our chapters stack smoothly like a royal deck of memories
          </p>
          <SectionDivider type="peacock" />
        </div>

        {/* Stacking Cards Container */}
        <div className="relative space-y-16 pb-20">
          {LOVE_STORY.map((item, index) => {
            const chapterNum = String(index + 1).padStart(2, '0');
            // Staggered top offsets so stacked headers align neatly
            const topOffset = 90 + index * 24; // 90px, 114px, 138px, 162px...

            return (
              <div
                key={item.id}
                className="sticky rounded-3xl transition-all duration-300"
                style={{
                  top: `${topOffset}px`,
                  zIndex: 10 + index,
                }}
              >
                {/* Royal Stacking Card with Solid Opacity & Deep Shadow to cleanly overlap prior cards */}
                <div className="relative rounded-3xl bg-[#FAF4EB] border-2 border-[#D4AF37] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(139,30,63,0.22)]">
                  {/* Gold Corner Decorative Accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

                  {/* Top Bar Header */}
                  <div className="flex items-center justify-between border-b border-[#D4AF37]/40 pb-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 rounded-full bg-[#8B1E3F] text-[#FFF8EF] font-cinzel text-xs font-bold tracking-widest shadow-xs">
                        CHAPTER {chapterNum}
                      </span>
                      <span className="font-cinzel text-xs font-bold text-[#AA771C] tracking-wider">
                        • {item.year}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1 text-[#8B1E3F]">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      <span className="font-cinzel text-xs font-bold text-[#8B1E3F]">
                        {index + 1} of {LOVE_STORY.length}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                    {/* Image Column */}
                    <div className="md:col-span-5">
                      <div className="relative h-56 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md group">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#8B1E3F]/40 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Story Details Column */}
                    <div className="md:col-span-7 flex flex-col justify-center">
                      <div className="flex items-center space-x-2 text-[#AA771C] font-poppins text-xs font-bold uppercase tracking-wider mb-2">
                        <MapPin className="w-4 h-4 text-[#8B1E3F]" />
                        <span>{item.location}</span>
                      </div>

                      <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8B1E3F] mb-4">
                        {item.title}
                      </h3>

                      <p className="font-poppins text-xs sm:text-sm md:text-base text-[#3A2E2A] leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>

                      <div className="flex items-center space-x-2 text-[#8B1E3F]">
                        <Heart className="w-4 h-4 fill-[#8B1E3F]" />
                        <span className="font-great-vibes text-xl text-[#AA771C]">
                          {groomAndBride.bride.name} & {groomAndBride.groom.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
