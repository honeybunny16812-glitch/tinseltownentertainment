import React from 'react';
import { MapPin, Sparkles, Ticket } from 'lucide-react';
import { CITIES_DATA } from './BookingModal';

interface TourDatesMarqueeProps {
  onSelectCity: (cityId: string) => void;
}

export const TourDatesMarquee: React.FC<TourDatesMarqueeProps> = ({ onSelectCity }) => {
  // Duplicate for seamless infinite marquee loop
  const duplicatedCities = [...CITIES_DATA, ...CITIES_DATA];

  return (
    <div
      id="tour-dates-marquee-wrapper"
      className="relative w-full overflow-hidden bg-[#F9F6EF]/90 border-y border-[#D4AF37]/35 py-3.5 backdrop-blur-md z-20"
    >
      <div className="flex items-center gap-2 px-4 sm:px-8 mb-2 max-w-7xl mx-auto justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#8B6508] font-cinzel">
            USA & Canada 2027 Arena Routing — Coming Soon
          </span>
        </div>
        <span className="text-[10px] text-[#7A6B53] font-medium hidden sm:inline-block">
          Pre-Seat Booking Open • Select any city below to lock in priority seats
        </span>
      </div>

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 pl-4">
        {duplicatedCities.map((city, idx) => (
          <button
            key={`${city.id}-${idx}`}
            onClick={() => onSelectCity(city.id)}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#FFFDF8] hover:shadow-gold-sm transition-all duration-200 cursor-pointer shrink-0 text-left group"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#F9F6EF] text-[#996515] group-hover:bg-gold-btn group-hover:text-[#1A1A1A] transition-colors">
              <Ticket className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#8B6508] transition-colors">
                  {city.city}
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#D4AF37]/15 text-[#8B6508] font-bold">
                  {city.country}
                </span>
              </div>
              <p className="text-[10px] text-[#7A6B53] truncate">
                {city.venue} • <span className="text-[#8B6508] font-semibold">Coming Soon 2027</span>
              </p>
            </div>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};
