import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Phone, Instagram } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenExplore: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenExplore }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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

        {/* Desktop Navigation Links (Artistic Editorial Style) */}
        <nav className="hidden md:flex items-center gap-5 text-[11px] uppercase tracking-widest font-semibold opacity-85 text-[#1A1A1A]">
          <button
            onClick={() => {
              const el = document.getElementById('diwali-gala-event');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#8B2282] hover:opacity-100 transition-all cursor-pointer text-[#8B2282] font-extrabold flex items-center gap-1 bg-[#8B2282]/10 px-2.5 py-1 rounded-full border border-[#8B2282]/30"
          >
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Diwali Gala (Nov 15)</span>
          </button>
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
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.instagram.com/tinseltown_us/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on Instagram @tinseltown_us"
            className="p-2 rounded-xl border border-[#D4AF37]/50 text-[#8B6508] hover:text-pink-600 hover:border-pink-400 bg-white/70 backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#D4AF37] text-white text-[11px] font-bold uppercase tracking-widest shadow-[0_4px_14px_#D4AF3744] hover:bg-[#B8860B] transition-all duration-200 cursor-pointer flex items-center gap-1.5"
          >
            <span>Pre-Seat Booking</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-[#1A1A1A] hover:text-[#D4AF37] cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF8]/98 backdrop-blur-xl border-b border-[#D4AF37]/30 px-8 py-6 space-y-4 shadow-xl animate-in fade-in duration-200">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenExplore();
            }}
            className="block w-full text-left text-xs uppercase tracking-widest font-bold text-[#1A1A1A] py-1 hover:text-[#D4AF37]"
          >
            The Experience & Eras
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('diwali-gala-event');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left text-xs uppercase tracking-widest font-extrabold text-[#8B2282] py-1 hover:text-[#D4AF37]"
          >
            🪔 Immediate Event: IASA Diwali Gala (Nov 15)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('upcoming-event-milestones');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left text-xs uppercase tracking-widest font-bold text-[#8B6508] py-1 hover:text-[#D4AF37]"
          >
            ★ Arena Tour 2027 (Bollywood Milestones)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('featured-artists-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left text-xs uppercase tracking-widest font-bold text-[#1A1A1A] py-1 hover:text-[#D4AF37]"
          >
            Featured Artists & Live Band
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="block w-full text-left text-xs uppercase tracking-widest font-bold text-[#1A1A1A] py-1 hover:text-[#D4AF37]"
          >
            Tour Cities (USA & Canada)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('gallery-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left text-xs uppercase tracking-widest font-bold text-[#1A1A1A] py-1 hover:text-[#D4AF37]"
          >
            Gallery & Videos
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('contact-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left text-xs uppercase tracking-widest font-bold text-[#8B6508] py-1 hover:text-[#D4AF37]"
          >
            Contact & Inquiries
          </button>
          <a
            href="https://www.instagram.com/tinseltown_us/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 w-full text-left text-xs uppercase tracking-widest font-bold text-pink-700 py-1 hover:text-pink-600"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Follow on Instagram (@tinseltown_us)</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 bg-[#D4AF37] text-white font-bold text-xs uppercase tracking-widest shadow-md"
          >
            Book Your Show
          </button>
        </div>
      )}
    </header>
  );
};
