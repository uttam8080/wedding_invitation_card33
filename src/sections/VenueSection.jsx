import React from 'react';
import { VENUE_INFO, venueLocation } from '../data/weddingData';
import { SectionDivider } from '../components/SectionDivider';
import { MapPin, Navigation, Compass, Plane, Train, Car, Building } from 'lucide-react';

export const VenueSection = () => {
  return (
    <section id="venue" className="py-24 px-4 bg-[#F7E1D7] relative overflow-hidden">
      {/* Glossy Background Bubbles & Floating Orbs */}
      <div className="absolute top-10 left-8 w-32 h-32 rounded-full bg-gradient-to-br from-white/80 via-[#FFF3A7]/40 to-[#D4AF37]/20 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(212,175,55,0.15),inset_0_0_15px_rgba(255,255,255,0.8)] pointer-events-none animate-bounce duration-[8s]" />
      <div className="absolute bottom-16 right-10 w-44 h-44 rounded-full bg-gradient-to-tr from-white/70 via-[#8B1E3F]/15 to-[#D4AF37]/20 backdrop-blur-lg border border-white/80 shadow-[0_15px_35px_rgba(139,30,63,0.15),inset_0_0_20px_rgba(255,255,255,0.9)] pointer-events-none animate-pulse duration-[6s]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#AA771C] uppercase block mb-2">
            Palatial Setting & Serenity
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B1E3F] drop-shadow-xs">
            {venueLocation.sectionTitle || "The Royal Venue"}
          </h2>
          <SectionDivider type="mandala" />
        </div>

        {/* Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Guest Hospitality & Features (Glassmorphic Cards) */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <Building className="w-5 h-5 text-[#8B1E3F]" />
              <h3 className="font-cinzel text-2xl font-bold text-[#8B1E3F]">
                Guest Services & Hospitality
              </h3>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              {/* Airport Card */}
              {venueLocation.airport && (
                <div className="p-4 rounded-xl bg-white/70 border border-[#D4AF37]/35 shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#8B1E3F]/10 text-[#8B1E3F] border border-[#D4AF37]/30 shrink-0">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-[#8B1E3F] mb-1 uppercase tracking-wide">
                      Airport Transit
                    </h4>
                    <p className="font-poppins text-xs text-[#3A2E2A]/90 leading-relaxed">
                      {venueLocation.airport}
                    </p>
                  </div>
                </div>
              )}

              {/* Railway Card */}
              {venueLocation.railway && (
                <div className="p-4 rounded-xl bg-white/70 border border-[#D4AF37]/35 shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#8B1E3F]/10 text-[#8B1E3F] border border-[#D4AF37]/30 shrink-0">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-[#8B1E3F] mb-1 uppercase tracking-wide">
                      Railway Transit
                    </h4>
                    <p className="font-poppins text-xs text-[#3A2E2A]/90 leading-relaxed">
                      {venueLocation.railway}
                    </p>
                  </div>
                </div>
              )}

              {/* Parking Card */}
              {venueLocation.parking && (
                <div className="p-4 rounded-xl bg-white/70 border border-[#D4AF37]/35 shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#8B1E3F]/10 text-[#8B1E3F] border border-[#D4AF37]/30 shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-[#8B1E3F] mb-1 uppercase tracking-wide">
                      Valet Parking
                    </h4>
                    <p className="font-poppins text-xs text-[#3A2E2A]/90 leading-relaxed">
                      {venueLocation.parking}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Location & Google Map Box */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#8B1E3F]" />
                <h3 className="font-cinzel text-2xl font-bold text-[#8B1E3F]">
                  Location & Venue Map
                </h3>
              </div>
              <span className="font-poppins text-xs font-semibold px-3 py-1 rounded-full bg-[#8B1E3F]/10 text-[#8B1E3F] border border-[#8B1E3F]/20">
                Udaipur, Rajasthan
              </span>
            </div>

            {/* Glassmorphic Map Container with Google Maps iframe */}
            <div className="relative w-full h-[400px] sm:h-[440px] rounded-3xl overflow-hidden p-2.5 bg-white/50 backdrop-blur-xl border-2 border-white/80 shadow-[0_20px_50px_rgba(139,30,63,0.15),inset_0_0_20px_rgba(255,255,255,0.9)] group">
              {/* Top-Left Floating "Open in Maps" Badge */}
              <div className="absolute top-5 left-5 z-20">
                <a
                  href={venueLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 text-[#1A73E8] hover:bg-white text-xs font-semibold font-poppins cursor-pointer"
                >
                  <span>Open in Maps</span>
                  <Navigation className="w-3.5 h-3.5 text-[#1A73E8]" />
                </a>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="w-full h-full rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-inner">
                <iframe
                  src={venueLocation.mapEmbedIframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title={`${venueLocation.venueName} Map Location`}
                />
              </div>
            </div>

            {/* Directions Button */}
            <div className="text-center pt-2">
              <a
                href={venueLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-widest text-[#FFF8EF] shadow-[0_12px_28px_rgba(139,30,63,0.35)] hover:shadow-[0_18px_35px_rgba(139,30,63,0.5),0_0_20px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/80 cursor-pointer relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(180deg, #A82848 0%, #8B1E3F 45%, #6B122E 50%, #8B1E3F 100%)',
                }}
              >
                {/* Top Gloss Highlight Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                <Navigation className="w-4 h-4 text-[#FFF3A7] transition-transform duration-300 group-hover:rotate-45" />
                <span>GET DIRECTIONS TO {venueLocation.venueName.toUpperCase()}</span>
                <Compass className="w-4 h-4 text-[#FFF3A7]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
