import React, { useState } from 'react';
import { Sparkles, Mic, Music, Radio, Star } from 'lucide-react';
import snehaaImg from '../assets/images/sneha02110.jpg';
import rramTasildarImg from '../assets/images/Rram01002.png';
import concertFireworksImg from '../assets/images/concert_fireworks_gold_1787689601656.jpg';
import goldInstrumentsImg from '../assets/images/gold_instruments_lights_1787689616854.jpg';

export const CollageShowcase: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div
      id="hero-collage-showcase"
      className="relative w-full max-w-[580px] lg:max-w-none mx-auto min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex items-center justify-center p-2 sm:p-4"
    >
      {/* Background Soft Golden Halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(230, 200, 122, 0.35) 0%, rgba(212, 175, 55, 0.12) 50%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Collage Arched Cards Container */}
      <div className="relative w-full max-w-[520px] h-[480px] sm:h-[540px] flex items-center justify-center">

        {/* 1. Left Arched Card (Female Bollywood Vocalist — Artistic Arch -rotate-6) */}
        <div
          id="collage-female-singer"
          onMouseEnter={() => setHoveredCard('female')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute w-[260px] sm:w-[320px] h-[380px] sm:h-[450px] bg-[#E6C87A22] border border-white/70 backdrop-blur-md rounded-t-full -rotate-6 -translate-x-8 sm:-translate-x-12 z-10 overflow-hidden shadow-2xl transition-all duration-500 ease-out ${
            hoveredCard === 'female'
              ? 'scale-105 z-30 shadow-gold-glow -rotate-3'
              : 'hover:scale-[1.02]'
          }`}
        >
          <img
            src={snehaaImg}
            alt="Snehaa Bhattacharya Bollywood Playback Singer Live"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
          />
          {/* Artistic Gold Lighting Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF3733] via-transparent to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF3744] via-transparent to-[#F9F6EF]/20 pointer-events-none mix-blend-overlay" />

          {/* Top Floating Badge */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/30 text-white flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-2.5 h-2.5 text-[#E6C87A] animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest font-semibold whitespace-nowrap">
              Sa Re Ga Ma Finalist
            </span>
          </div>

          <div className="absolute bottom-8 left-6 sm:left-8 right-6 text-white text-left">
            <div className="h-[2px] w-12 bg-[#D4AF37] mb-2" />
            <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#E6C87A] mb-0.5">
              Bollywood Playback Singer
            </p>
            <h3
              className="text-xl sm:text-2xl font-serif italic text-white"
              style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
            >
              Snehaa Bhattacharya
            </h3>
            <p className="text-[10px] mt-1 text-white/80 leading-tight">
              Soulful melodies & evergreen Bollywood hits live on tour.
            </p>
          </div>
        </div>

        {/* 2. Right Arched Card (Male Singer & Orchestral Stage — Artistic Arch rotate-3) */}
        <div
          id="collage-male-singer"
          onMouseEnter={() => setHoveredCard('male')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute w-[250px] sm:w-[310px] h-[370px] sm:h-[440px] bg-white border border-[#D4AF3744] shadow-2xl rounded-t-full rotate-3 translate-x-8 sm:translate-x-12 z-20 overflow-hidden transition-all duration-500 ease-out group ${
            hoveredCard === 'male'
              ? 'scale-105 z-30 shadow-gold-glow rotate-1'
              : 'hover:scale-[1.02]'
          }`}
        >
          <img
            src={rramTasildarImg}
            alt="Rram Tasildar Bollywood Singer & Guitarist Live"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          {/* Artistic Gold Overlays */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF3755] via-transparent to-[#F9F6EF]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Concentric Decorative Artistic Rings in Center */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full border border-[#FFF3B0]/40 flex items-center justify-center pointer-events-none">
            <div className="w-28 h-28 rounded-full border border-dashed border-[#D4AF37]/50 animate-spin" style={{ animationDuration: '40s' }} />
          </div>

          <div className="absolute bottom-8 left-6 sm:left-8 right-6 text-white text-left">
            <div className="h-[2px] w-12 bg-[#D4AF37] mb-2" />
            <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#E6C87A] mb-0.5">
              Music Director & Playback Singer
            </p>
            <h3
              className="text-xl sm:text-2xl font-serif italic text-white"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              Rram Tasildar
            </h3>
            <p className="text-[10px] mt-1 text-white/80 leading-tight">
              Hit tracks "Muntazir", "Ishq", "Dil" & "Mon Bechara" live on tour.
            </p>
          </div>
        </div>

        {/* 3. Luxury Circular Seal Stamp (Artistic Flair Seal) */}
        <div
          id="collage-floating-seal"
          className="absolute -bottom-2 -right-1 sm:-bottom-4 sm:-right-4 w-36 h-36 sm:w-44 sm:h-44 bg-[#D4AF37] rounded-full flex items-center justify-center text-white z-30 shadow-2xl border-4 border-[#FFFDF8] animate-float-slow"
        >
          {/* Subtle concentric inner border */}
          <div className="absolute inset-2 rounded-full border border-dashed border-white/50" />
          <div className="text-center px-2">
            <p className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold text-[#FFFDF8]/90">
              Pre-Seat Booking
            </p>
            <p
              className="text-base sm:text-xl font-serif font-bold text-white leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              USA & Canada
            </p>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-[#FFF3B0]">
              Coming Soon 2027
            </p>
          </div>
        </div>

        {/* 4. Left Floating Orchestra Mini-Badge */}
        <div
          id="collage-symphony-badge"
          className="absolute top-1/2 -left-4 sm:-left-8 z-30 px-3 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-[#D4AF37]/50 shadow-gold-sm flex items-center gap-2 animate-float-reverse"
        >
          <div className="w-7 h-7 rounded-lg overflow-hidden border border-[#D4AF37]/30">
            <img
              src={goldInstrumentsImg}
              alt="Violin instruments"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[8px] uppercase tracking-wider font-bold text-[#8B6508] block">
              40-Piece
            </span>
            <span className="text-[10px] font-bold text-[#1A1A1A]">
              Grand Symphony
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
