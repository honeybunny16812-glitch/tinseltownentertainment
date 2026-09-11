import React from 'react';
import {
  Sparkles,
  Calendar,
  MapPin,
  Music,
  Crown,
  Building2,
  Ticket,
  Clock,
  ArrowRight,
  ShieldCheck,
  Star,
  Award,
  Globe2,
} from 'lucide-react';
import bannerImg from '../assets/images/bollywood_grand_premiere_1788967886009.jpg';
import rramImg from '../assets/images/Rram01002.png';
import snehaaImg from '../assets/images/sneha02110.jpg';

interface BollywoodMilestonesEventProps {
  onBookShow: () => void;
}

export const BollywoodMilestonesEvent: React.FC<BollywoodMilestonesEventProps> = ({ onBookShow }) => {
  return (
    <section
      id="upcoming-event-milestones"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFFDF8] via-[#FFF9E6]/60 to-[#FFFDF8] border-y border-[#D4AF37]/30 overflow-hidden"
    >
      {/* Ambient background gold glow & stage lighting effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/15 via-[#FFF3B0]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#D4AF37]/12 via-[#E6C87A]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Top Header Tag / Prestige Badges */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/60 shadow-[0_2px_15px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#8B6508]">
              Upcoming Mega Event • Official Tour Announcement
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#8B6508]">
              The Grand Symphony 2027
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </div>

        {/* Main Event Showcase Glass Container */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white/95 via-[#FFFDF8]/90 to-white/95 border-2 border-[#D4AF37]/60 shadow-[0_25px_70px_rgba(212,175,55,0.22)] backdrop-blur-xl overflow-hidden p-6 sm:p-10 lg:p-14">
          
          {/* Subtle Decorative Gold Corner Lines */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Visual Banner & Luxury Coming Soon Badge (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_15px_40px_rgba(212,175,55,0.3)] group">
                <img
                  src={bannerImg}
                  alt="Bollywood Milestones Live Concert"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Luxury "COMING SOON" Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A]/90 backdrop-blur-md border border-[#D4AF37] text-[#FFF3B0] shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em]">
                    Coming Soon • 2027
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#FFF3B0] tracking-widest">
                        Tour Season
                      </p>
                      <p className="text-base sm:text-lg font-bold font-serif">
                        March – May 2027
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-2xl">
                      <span>🇺🇸</span>
                      <span className="text-sm text-[#D4AF37] font-bold">•</span>
                      <span>🇨🇦</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Presenter & Association Credentials */}
              <div className="p-5 rounded-2xl bg-[#FFF9E6]/80 border border-[#D4AF37]/40 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#8B6508]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B6508]">
                    Official Presentation
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-[#1A1A1A]">
                  <p className="font-semibold text-stone-700">
                    Presented by{' '}
                    <strong className="text-[#8B6508] font-bold">
                      Tinsel Town Entertainment Inc.
                    </strong>
                  </p>
                  <p className="font-semibold text-stone-700">
                    In Association with{' '}
                    <strong className="text-[#1A1A1A] font-bold">
                      Tisha Entertainment Inc. (Since 1978)
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Headline, Features, and Call To Action (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Event Main Title */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF9E6] border border-[#D4AF37]/50 text-[#8B6508] text-[10px] font-bold uppercase tracking-widest">
                  <Music className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Live in Concert with Bollywood Band</span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] font-serif leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                >
                  BOLLYWOOD <span className="text-[#B38728] italic">MILESTONES</span>
                </h3>

                <p className="text-base sm:text-lg text-[#8B6508] font-medium tracking-wide">
                  The Timeless Journey of Bollywood Music
                </p>
              </div>

              {/* Prominent Tour Location & Duration Banner */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#1A1A1A] via-[#2D2311] to-[#1A1A1A] text-[#FFF3B0] border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.2)] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D4AF37]/30 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#D4AF37] text-[#1A1A1A] flex items-center justify-center font-bold shadow-md shrink-0">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                        Official International Arena Tour
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white font-serif">
                        USA & Canada Tour 2027
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2.5 text-xs text-stone-200">
                    <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>
                      <strong className="text-white">Tour Duration:</strong> March – May 2027
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs text-stone-200">
                    <Music className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>
                      <strong className="text-white">Live Ensemble:</strong> Full Bollywood Band
                    </span>
                  </div>
                </div>

                {/* Headline Featured Artists Showcase */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                    Headline Singers:
                  </span>
                  <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xs">
                    <img
                      src={rramImg}
                      alt="Rram Tasildar"
                      referrerPolicy="no-referrer"
                      className="w-7 h-7 rounded-full object-cover border border-[#D4AF37]"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block leading-none">Rram Tasildar</span>
                      <span className="text-[9px] text-[#FFD54F]">Vocalist & Guitar</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xs">
                    <img
                      src={snehaaImg}
                      alt="Snehaa Bhattacharya"
                      referrerPolicy="no-referrer"
                      className="w-7 h-7 rounded-full object-cover object-[center_20%] border border-[#D4AF37]"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block leading-none">Snehaa Bhattacharya</span>
                      <span className="text-[9px] text-[#FFD54F]">Playback Singer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Tour Highlights Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-xs space-y-1 text-center sm:text-left">
                  <Award className="w-4 h-4 text-[#D4AF37] mx-auto sm:mx-0" />
                  <p className="text-xs font-bold text-[#1A1A1A]">Evergreen Golden Era</p>
                  <p className="text-[11px] text-[#7A6B53]">50s, 70s, 90s Classics to Modern Anthems</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-xs space-y-1 text-center sm:text-left">
                  <Building2 className="w-4 h-4 text-[#D4AF37] mx-auto sm:mx-0" />
                  <p className="text-xs font-bold text-[#1A1A1A]">Premier Arena Stages</p>
                  <p className="text-[11px] text-[#7A6B53]">Top Auditoriums & Arena Venues</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-xs space-y-1 text-center sm:text-left">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] mx-auto sm:mx-0" />
                  <p className="text-xs font-bold text-[#1A1A1A]">48-Year Heritage</p>
                  <p className="text-[11px] text-[#7A6B53]">Tisha Entertainment Since 1978</p>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onBookShow}
                  id="btn-book-your-show-milestones"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E6C87A] to-[#B38728] text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Book Your Show</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('featured-artists-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-white hover:bg-[#FFF9E6] text-[#8B6508] border border-[#D4AF37]/60 font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer text-center"
                >
                  Explore Lead Artists & Band
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
