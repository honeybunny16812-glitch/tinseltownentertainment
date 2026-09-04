import React from 'react';
import { Sparkles, ArrowRight, Compass, Star, Users, Music2 } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { SpotlightBeams } from './SpotlightBeams';
import { CollageShowcase } from './CollageShowcase';
import { WelcomeVoicePlayer } from './WelcomeVoicePlayer';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenExplore,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#FFFDF8]"
    >
      {/* Background Soft White-to-Gold Gradient Base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(230, 200, 122, 0.28) 0%, rgba(249, 246, 239, 0.6) 40%, #FFFDF8 85%)',
        }}
      />

      {/* Cinematic Golden Spotlight Beams, Diagonal Artistic Rays & Watermarks */}
      <SpotlightBeams />

      {/* Canvas for Floating Gold Glitter Particles, Musical Notes, and Bokeh Orbs */}
      <ParticleCanvas />

      {/* Main Grid Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Brand Story, Badges, Typography, Waveform, Actions */}
          <div className="lg:col-span-6 xl:col-span-6 text-left space-y-4 sm:space-y-5">
            
            {/* Small Gold Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#D4AF37] bg-[#D4AF3711] text-[#D4AF37] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#996515]"></span>
              </span>
              <span>Pre-Seat Booking • Coming Soon 2027</span>
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            </div>

            {/* Large Luxury Heading (Artistic Flair Light Serif & Gold Accent) */}
            <div className="space-y-1">
              <h1
                id="hero-main-title"
                className="text-4xl sm:text-5xl md:text-6xl font-light text-[#1A1A1A] leading-[1.06] tracking-tight font-serif"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                Tinsel Town
                <span className="block text-[#D4AF37] font-normal italic">
                  Entertainment Inc.
                </span>
              </h1>

              {/* Subtitle with decorative mini-equalizer */}
              <div className="flex items-end gap-3 pt-1">
                <h2
                  id="hero-subtitle"
                  className="text-2xl sm:text-3xl italic text-[#1A1A1A] opacity-90 font-serif leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                >
                  Bollywood Milestones
                </h2>
                <div className="flex items-end gap-[3px] h-5 mb-0.5 opacity-80">
                  <div className="w-[2.5px] h-2.5 bg-[#D4AF37] rounded-full" />
                  <div className="w-[2.5px] h-4.5 bg-[#D4AF37] rounded-full" />
                  <div className="w-[2.5px] h-3 bg-[#D4AF37] rounded-full" />
                  <div className="w-[2.5px] h-5 bg-[#D4AF37] rounded-full" />
                </div>
              </div>

              {/* Tagline */}
              <p
                id="hero-tagline"
                className="text-xs sm:text-sm font-semibold tracking-wider text-[#524430] uppercase font-montserrat pt-1"
              >
                The Timeless Journey of Bollywood Music.
              </p>
            </div>

            {/* Description */}
            <p
              id="hero-description"
              className="text-xs sm:text-sm text-[#555] leading-relaxed max-w-lg font-normal"
            >
              Experience unforgettable live Bollywood concerts, celebrity performances, and musical nights across the USA & Canada.
            </p>

            {/* Official Voice Welcome Greeting for Tinsel Town Entertainment */}
            <WelcomeVoicePlayer />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              
              {/* Button 1: Book Your Show (Solid Gold with high-contrast White text & subtle glow shadow) */}
              <button
                id="btn-book-your-show"
                onClick={onOpenBooking}
                className="relative group px-8 py-3.5 bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-widest shadow-[0_8px_20px_#D4AF3744] hover:bg-[#B8860B] active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center gap-2"
              >
                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                <span className="relative font-bold">Book Your Show</span>
                <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
              </button>

              {/* Button 2: Explore Tour (White button with gold border) */}
              <button
                id="btn-explore-tour"
                onClick={onOpenExplore}
                className="px-8 py-3.5 border border-[#D4AF37] text-[#D4AF37] bg-white/60 backdrop-blur-sm hover:bg-[#F9F6EF] text-xs font-bold uppercase tracking-widest shadow-sm active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Explore Tour</span>
              </button>

            </div>

            {/* Micro Trust & Highlight Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#635544]">
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="font-semibold text-[#1A1A1A]">18 Major Arena Stops</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Music2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-semibold text-[#1A1A1A]">40-Piece Symphony</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-semibold text-[#1A1A1A]">100K+ Fans Expected</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Arched Artistic Collage Showcase */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <CollageShowcase />
          </div>

        </div>
      </div>
    </section>
  );
};
