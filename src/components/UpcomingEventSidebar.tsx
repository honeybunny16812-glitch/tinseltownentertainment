import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  MapPin,
  Crown,
  Ticket,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Send,
} from 'lucide-react';
import tourBannerImg from '../assets/images/bollywood_grand_premiere_1788967886009.jpg';
import rramImg from '../assets/images/Rram01002.png';
import snehaaImg from '../assets/images/sneha02110.jpg';

interface UpcomingEventSidebarProps {
  onOpenBooking: () => void;
}

export const UpcomingEventSidebar: React.FC<UpcomingEventSidebarProps> = ({
  onOpenBooking,
}) => {
  // Collapsed by default - only opens when user explicitly taps/clicks
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!isExpanded) return;

    const handleClickOutside = (event: MouseEvent) => {
      const dock = document.getElementById('upcoming-event-sidebar-dock');
      if (dock && !dock.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  const faizWhatsAppUrl = `https://wa.me/19094356603?text=${encodeURIComponent(
    'Hello Faiz Baig, I am contacting you regarding International Promotion & Management for the USA & Canada Tour 2027 (Bollywood Milestones).'
  )}`;

  const handleScrollToTour = () => {
    const el = document.getElementById('upcoming-event-milestones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToArtists = () => {
    const el = document.getElementById('featured-artists-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="upcoming-event-sidebar-dock"
      className="fixed right-0 top-20 sm:top-24 z-40 select-none pointer-events-auto"
    >
      {/* ========================================================================= */}
      {/* 1. COLLAPSED DOCK TAB (Right screen edge, compact luxury gold & black)    */}
      {/* ========================================================================= */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          id="upcoming-event-sidebar-collapsed-btn"
          aria-label="Expand Upcoming Event USA & Canada Tour 2027"
          title="Upcoming Event: USA & Canada Tour 2027 • Faiz Baig (International Promoter & Management)"
          className="group flex items-center gap-2 bg-[#121212]/95 hover:bg-black backdrop-blur-xl border-2 border-r-0 border-[#D4AF37] rounded-l-2xl py-3 px-2.5 shadow-[0_10px_35px_rgba(212,175,55,0.4)] hover:shadow-[0_14px_45px_rgba(212,175,55,0.6)] transition-all duration-300 cursor-pointer text-left"
        >
          <div className="flex flex-col items-center gap-2">
            {/* Pulsing Gold Beacon */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E6C87A]" />
            </span>

            {/* Expand Icon pointing left (since dock is on the right) */}
            <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" />
            </div>

            {/* Vertical Label */}
            <div className="flex items-center gap-1.5 [writing-mode:vertical-lr] rotate-180">
              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#E6C87A]">
                Upcoming Event
              </span>
              <span className="text-[11px] font-bold text-white font-serif tracking-wide">
                USA & Canada Tour 2027
              </span>
            </div>
          </div>
        </button>
      )}

      {/* ========================================================================= */}
      {/* 2. EXPANDED COMPACT SIDEBAR PANEL (Luxury Black & Gold Theme on Right)     */}
      {/* ========================================================================= */}
      {isExpanded && (
        <aside
          id="upcoming-event-sidebar-panel"
          aria-label="Upcoming Event Sidebar: USA & Canada Tour 2027"
          className="relative mr-2 sm:mr-4 w-68 sm:w-72 max-w-[calc(100vw-16px)] rounded-2xl bg-gradient-to-b from-[#181613] via-[#121212] to-[#0D0D0D] border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,55,0.3)] text-white p-3 sm:p-3.5 backdrop-blur-2xl animate-in slide-in-from-right-4 fade-in duration-300 overflow-hidden"
        >
          {/* Subtle Royal Gold Radial Glow */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl pointer-events-none" />

          {/* Top Mini Header: Badges & Collapse to Right Button */}
          <div className="flex items-center justify-between gap-1.5 border-b border-[#D4AF37]/30 pb-2 mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#D4AF37] text-black text-[9px] font-black uppercase tracking-wider shadow-xs">
                <Sparkles className="w-2.5 h-2.5 text-black" />
                Upcoming Event
              </span>
              <span className="inline-flex items-center gap-1 text-[8px] font-bold text-[#E6C87A] bg-[#2A2318] px-1.5 py-0.5 rounded-full border border-[#D4AF37]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                2027
              </span>
            </div>

            {/* Collapse Arrow pointing right */}
            <button
              onClick={() => setIsExpanded(false)}
              aria-label="Minimize upcoming event sidebar"
              className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Minimize to right edge"
            >
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          {/* Compact Event Banner Artwork */}
          <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/50 shadow-xs mb-2.5 group">
            <img
              src={tourBannerImg}
              alt="USA & Canada Tour 2027 Bollywood Milestones"
              className="w-full h-20 sm:h-22 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-2 flex flex-col justify-end">
              <h3
                className="text-sm font-bold text-white font-serif leading-tight text-shadow"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                USA & Canada Tour 2027
              </h3>
              <p className="text-[9px] text-[#E6C87A] font-medium leading-none mt-0.5">
                Bollywood Milestones • 100 Years Symphony
              </p>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* PROMOTER & MANAGEMENT HIGHLIGHT: FAIZ BAIG                            */}
          {/* ===================================================================== */}
          <div className="p-2 rounded-xl bg-gradient-to-r from-[#221D15] via-[#1B1813] to-[#221D15] border border-[#D4AF37]/60 mb-2.5 flex items-center justify-between gap-2 shadow-xs">
            <div className="min-w-0">
              <p className="text-[7.5px] uppercase tracking-[0.18em] font-extrabold text-[#D4AF37]">
                International Promoter & Management
              </p>
              <h4 className="text-[12px] font-bold text-white tracking-wide truncate">
                Faiz Baig
              </h4>
            </div>
            <a
              href={faizWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded-lg bg-[#D4AF37] hover:bg-[#B8860B] text-black text-[9px] font-extrabold flex items-center gap-1 shrink-0 transition-colors shadow-xs cursor-pointer"
              title="Inquire directly with Faiz Baig"
            >
              <Send className="w-2.5 h-2.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Lead Headline Artists: Rram Tasildar & Sneha Bhattacharya */}
          <div
            onClick={handleScrollToArtists}
            className="p-1.5 px-2 rounded-xl bg-[#1A1815] border border-[#D4AF37]/35 flex items-center justify-between gap-2 mb-2.5 hover:bg-[#252019] transition-colors cursor-pointer shadow-2xs"
            title="Click to view artists"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex -space-x-2 shrink-0">
                <img
                  src={rramImg}
                  alt="Rram Tasildar"
                  className="w-7 h-7 rounded-full object-cover border-2 border-[#D4AF37] shadow-xs z-10"
                />
                <img
                  src={snehaaImg}
                  alt="Sneha Bhattacharya"
                  className="w-7 h-7 rounded-full object-cover object-[center_20%] border-2 border-[#D4AF37] shadow-xs"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[7.5px] uppercase tracking-wider font-extrabold text-[#D4AF37]">
                  Lead Artists
                </p>
                <p className="text-[10.5px] font-bold text-white truncate leading-tight">
                  Rram Tasildar & Sneha
                </p>
              </div>
            </div>
            <Crown className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          </div>

          {/* Compact Tour Specs */}
          <div className="space-y-1 text-[10px] text-stone-300 mb-3 px-0.5">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#D4AF37] shrink-0" />
              <span><strong>Season:</strong> Fall 2027 Arena Tour</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#D4AF37] shrink-0" />
              <span className="truncate"><strong>Cities:</strong> NYC, LA, Toronto, Dallas...</span>
            </div>
          </div>

          {/* Action Buttons: Book Seats & Details */}
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={onOpenBooking}
              id="sidebar-book-tickets-btn"
              className="w-full py-2 px-1.5 rounded-xl bg-gradient-to-r from-[#E6C87A] via-[#D4AF37] to-[#B8860B] hover:brightness-110 text-black font-extrabold text-[10px] uppercase tracking-wider shadow-[0_4px_12px_rgba(212,175,55,0.35)] transition-all cursor-pointer flex items-center justify-center gap-1"
            >
              <Ticket className="w-3 h-3" />
              <span>Book Seats</span>
            </button>

            <button
              onClick={handleScrollToTour}
              id="sidebar-view-tour-btn"
              className="w-full py-2 px-1.5 rounded-xl bg-black/50 hover:bg-black/80 border border-[#D4AF37]/70 text-[#E6C87A] font-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1"
            >
              <span>Details</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Micro Footer Note */}
          <div className="mt-2 pt-1.5 border-t border-[#D4AF37]/20 flex items-center justify-between text-[8px] text-stone-400">
            <span>Tinsel Town Entertainment</span>
            <button
              onClick={() => setIsExpanded(false)}
              className="hover:text-[#D4AF37] underline cursor-pointer"
            >
              Minimize
            </button>
          </div>
        </aside>
      )}
    </div>
  );
};
