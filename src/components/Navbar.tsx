import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Phone, Instagram } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenExplore: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenExplore }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF8]/95 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/30 py-4'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Diamond Crest & Artistic Brand Typography */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-[#D4AF37] flex items-center justify-center rotate-45 transition-transform hover:scale-105">
            <div className="-rotate-45 font-bold text-[#D4AF37] text-base sm:text-lg font-cinzel">
              TT
            </div>
          </div>
          <div className="flex flex-col">
            <span className="uppercase tracking-[0.3em] font-medium text-xs sm:text-sm text-[#1A1A1A]">
              Tinsel Town
            </span>
            <span className="text-[8px] uppercase tracking-[0.25em] text-[#8B6508] font-semibold -mt-0.5">
              Entertainment Inc.
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-widest font-semibold opacity-85 text-[#1A1A1A]">
          <button
            onClick={() => {
              const el = document.getElementById('upcoming-event-milestones');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#D4AF37] hover:opacity-100 transition-all cursor-pointer text-[#8B6508] font-bold flex items-center gap-1"
          >
            <span>Tour 2027</span>
          </button>
          <button
            onClick={onOpenExplore}
            className="hover:text-[#D4AF37] hover:opacity-100 transition-all cursor-pointer"
          >
            The Experience
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('featured-artists-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#D4AF37] hover:opacity-100 transition-all cursor-pointer"
          >
            Featured Artists
          </button>
          <button
            onClick={onOpenBooking}
            className="hover:text-[#D4AF37] hover:opacity-100 transition-all cursor-pointer"
          >
            Tours & Arenas
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('gallery-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#D4AF37] hover:opacity-100 transition-all cursor-pointer"
          >
            Gallery & Videos
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('contact-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#D4AF37] hover:opacity-100 transition-all cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Action Button & Social */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="https://www.instagram.com/tinseltown_us/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on Instagram @tinseltown_us"
            className="hidden sm:flex p-2 rounded-xl border border-[#D4AF37]/50 text-[#8B6508] hover:text-pink-600 hover:border-pink-400 bg-white/70 backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-xs hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenBooking}
            className="hidden sm:flex px-4 sm:px-5 py-2.5 bg-[#D4AF37] text-white text-[11px] font-bold uppercase tracking-widest shadow-[0_4px_14px_#D4AF3744] hover:bg-[#B8860B] transition-all duration-200 cursor-pointer items-center gap-1.5"
          >
            <span>Pre-Seat Booking</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 text-[#1A1A1A] hover:text-[#D4AF37] cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slide-out Navigation Drawer for Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Sidebar Drawer Panel */}
          <aside
            id="app-navigation-sidebar"
            className="relative w-full max-w-sm sm:max-w-md bg-[#FFFDF8] h-screen shadow-2xl border-l-2 border-[#D4AF37]/50 flex flex-col z-10 animate-in slide-in-from-right duration-300"
          >
            {/* Sidebar Header */}
            <div className="p-5 border-b border-[#D4AF37]/30 flex items-center justify-between bg-gradient-to-r from-[#FFFDF8] via-[#FFF9E6] to-[#FFFDF8]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-[#D4AF37] flex items-center justify-center rotate-45">
                  <div className="-rotate-45 font-bold text-[#D4AF37] text-xs font-cinzel">
                    TT
                  </div>
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-sm text-[#1A1A1A] tracking-wider uppercase">
                    Tinsel Town
                  </h3>
                  <p className="text-[10px] text-[#8B6508] font-medium tracking-wide">
                    Live Entertainment Inc.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* Navigation Menu Links */}
              <div>
                <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8B6508] mb-3">
                  Navigation
                </p>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setSidebarOpen(false);
                      const el = document.getElementById('upcoming-event-milestones');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#FFF9E6] text-xs uppercase tracking-wider font-bold text-[#8B6508] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>★ Bollywood Milestones Tour 2027</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>

                  <button
                    onClick={() => {
                      setSidebarOpen(false);
                      onOpenExplore();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    The Experience & Eras
                  </button>

                  <button
                    onClick={() => {
                      setSidebarOpen(false);
                      const el = document.getElementById('featured-artists-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    Featured Artists & Live Band
                  </button>

                  <button
                    onClick={() => {
                      setSidebarOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    Tour Cities (USA & Canada)
                  </button>

                  <button
                    onClick={() => {
                      setSidebarOpen(false);
                      const el = document.getElementById('gallery-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    Gallery & Videos
                  </button>

                  <button
                    onClick={() => {
                      setSidebarOpen(false);
                      const el = document.getElementById('contact-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    Contact & Inquiries
                  </button>
                </div>
              </div>

              {/* Social & Booking Button */}
              <div className="pt-2 border-t border-[#D4AF37]/30 space-y-3">
                <a
                  href="https://www.instagram.com/tinseltown_us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center justify-center gap-2 w-full p-2.5 rounded-xl bg-pink-50 text-pink-700 hover:bg-pink-100 text-xs uppercase tracking-wider font-bold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram (@tinseltown_us)</span>
                </a>

                <button
                  onClick={() => {
                    setSidebarOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-[#D4AF37] hover:bg-[#B8860B] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
                >
                  Book Your Show
                </button>
              </div>

              {/* Developer Credit */}
              <div className="pt-4 text-center border-t border-stone-200">
                <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                  Developed by <strong className="text-[#8B6508] font-bold">UBS Solutions</strong>
                </span>
              </div>

            </div>
          </aside>
        </div>
      )}
    </header>
  );
};
