import React, { useState } from 'react';
import { Music, Sparkles, X, MessageCircle, Phone, ArrowRight, User } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const babuWhatsAppUrl = `https://wa.me/15628601135?text=${encodeURIComponent(
    'Hello Babu Patel / Tinsel Town Entertainment, I would like to inquire about booking a show / VIP tickets for the Bollywood Milestones Tour 2027.'
  )}`;

  const faizWhatsAppUrl = `https://wa.me/19094356603?text=${encodeURIComponent(
    'Hello Faiz Baig / Tinsel Town Entertainment, I would like to inquire about booking a show / VIP tickets for the Bollywood Milestones Tour 2027.'
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-2 w-72 rounded-2xl bg-[#FFFDF8]/98 backdrop-blur-2xl border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(212,175,55,0.35)] p-3.5 text-[#1A1A1A] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8B6508] font-mono">
                Tour Concierge • WhatsApp
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-[#1A1A1A] transition-colors p-1 rounded-full hover:bg-stone-100 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-[#D4AF37] text-[#1A1A1A] flex items-center justify-center font-bold shrink-0">
              <Music className="w-3.5 h-3.5" />
            </div>
            <div>
              <p
                className="text-xs font-bold text-[#1A1A1A] font-serif leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                Tinsel Town Entertainment
              </p>
              <p className="text-[9px] text-[#8B6508] font-semibold">
                Bollywood Milestones Tour 2027
              </p>
            </div>
          </div>

          <p className="text-[10px] text-[#635544] mb-2 leading-tight">
            Direct WhatsApp contact for tickets, city bookings & promoter inquiries:
          </p>

          <div className="space-y-1.5 mb-2">
            {/* Babu Patel */}
            <a
              href={babuWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 rounded-xl bg-[#FFF9E6] hover:bg-emerald-50 border border-[#D4AF37]/40 hover:border-emerald-400 transition-all group/babu"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#8B6508] flex items-center justify-center text-[10px] font-bold">
                  BP
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-xs text-[#1A1A1A]">Babu Patel</p>
                    <span className="text-[8px] bg-[#D4AF37]/20 text-[#8B6508] font-bold px-1.5 py-0.2 rounded-full">
                      Organizer
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-[#8B6508] flex items-center gap-1">
                    <Phone className="w-2.5 h-2.5 text-[#D4AF37]" />
                    <span>+1 (562) 860-1135</span>
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-emerald-600 group-hover/babu:bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-3 h-3 fill-white" />
              </div>
            </a>

            {/* Faiz Baig */}
            <a
              href={faizWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 rounded-xl bg-[#FFF9E6] hover:bg-emerald-50 border border-[#D4AF37]/40 hover:border-emerald-400 transition-all group/faiz"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#8B6508] flex items-center justify-center text-[10px] font-bold">
                  FB
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-xs text-[#1A1A1A]">Faiz Baig</p>
                    <span className="text-[8px] bg-[#D4AF37]/20 text-[#8B6508] font-bold px-1.5 py-0.2 rounded-full">
                      Int'l Promoter & Mgmt
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-[#8B6508] flex items-center gap-1">
                    <Phone className="w-2.5 h-2.5 text-[#D4AF37]" />
                    <span>+1 (909) 435-6603</span>
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-emerald-600 group-hover/faiz:bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-3 h-3 fill-white" />
              </div>
            </a>
          </div>

          <a
            href="mailto:info@tinseltownentertainment.com?cc=faiz@baiginsurance.com&subject=Bollywood%20Milestones%20Tour%20Inquiry"
            className="block text-center text-[10px] text-[#8B6508] hover:underline font-semibold"
          >
            Or Email: info@tinseltownentertainment.com
          </a>
        </div>
      )}

      {/* Floating Action Trigger Button with Gold Music Icon */}
      <div className="relative group">
        {/* Animated Gold Glow Aura */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#AA771C] opacity-75 blur-xs group-hover:opacity-100 transition duration-300 animate-pulse" />

        <div className="relative flex items-center">
          {/* Label Tooltip for Desktop */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden sm:flex items-center gap-1.5 mr-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37] text-[11px] font-bold uppercase tracking-wider text-[#8B6508] shadow-lg hover:bg-white hover:text-[#1A1A1A] transition-all cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>WhatsApp Booking</span>
          </button>

          {/* Compact Floating Music Icon Button (Opens WhatsApp Concierge) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Contact on WhatsApp"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#1A1A1A] via-[#332611] to-[#D4AF37] text-[#FFF3B0] flex items-center justify-center shadow-[0_6px_20px_rgba(212,175,55,0.45)] border-2 border-[#D4AF37] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer relative"
          >
            {/* Music Note Icon */}
            <Music className="w-4.5 h-4.5 text-[#FFF3B0]" />

            {/* Small green WhatsApp indicator badge */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-[#1A1A1A] shadow-xs">
              <MessageCircle className="w-2 h-2 fill-white" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
