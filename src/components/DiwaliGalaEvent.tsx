import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  Ticket,
  Flame,
  Music,
  Users,
  Phone,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Check,
  HeartHandshake,
  Star,
  Send,
} from 'lucide-react';
import rramImg from '../assets/images/rram_tasildar_1787694021586.jpg';
import simantineeImg from '../assets/images/female_singer_gold_1787689575516.jpg';
import concertFireworksImg from '../assets/images/concert_fireworks_gold_1787689601656.jpg';
import { DiwaliGalaBookingModal } from './DiwaliGalaBookingModal';

export const DiwaliGalaEvent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTier, setSelectedTier] = useState<
    'paid_member' | 'unpaid_member' | 'guest' | 'donor_table'
  >('guest');

  // Live dynamic countdown timer to November 15, 5:00 PM
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 72, hours: 5, minutes: 16, seconds: 0 });

  useEffect(() => {
    // Target date: November 15 of current year at 17:00 (5:00 PM)
    const currentYear = new Date().getFullYear();
    let target = new Date(currentYear, 10, 15, 17, 0, 0); // Month 10 is November (0-indexed)
    
    // If target has passed this year, set for next year
    if (Date.now() > target.getTime()) {
      target = new Date(currentYear + 1, 10, 15, 17, 0, 0);
    }

    const interval = setInterval(() => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenBooking = (
    tier: 'paid_member' | 'unpaid_member' | 'guest' | 'donor_table' = 'guest'
  ) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const handleOpenMaps = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Swad+of+India+Banquets+1410+W.+7th+Street,+Upland,+CA+91786',
      '_blank'
    );
  };

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent('IASA Diwali Gala 2026 • Live Concert & Dinner');
    const details = encodeURIComponent(
      'IASA Diwali Gala featuring Bollywood Singer Rram Tasildar, Simantinee Roy, Vinaini Jayasinghe & Live Band.\nSupporting IASA Health Programs.\nAppetizers, Royal Dinner, Drinks & Dancing.'
    );
    const location = encodeURIComponent(
      'Swad of India Banquets, 1410 W. 7th Street, Upland, CA 91786'
    );
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261115T170000/20261115T233000&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank');
  };

  return (
    <section
      id="diwali-gala-event"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFFDF8] via-[#FFF8EC] to-[#FFFDF8] border-b border-[#D4AF37]/40 overflow-hidden"
    >
      {/* Ambient festive royal glow circles */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-br from-[#7B1FA2]/15 via-[#D4AF37]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-[#FF6F00]/15 via-[#D4AF37]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Top Header Badge & Tagline */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4A154B] to-[#7B1FA2] text-[#FFF3B0] border border-[#D4AF37] shadow-[0_2px_18px_rgba(123,31,162,0.3)]">
            <Flame className="w-4 h-4 text-[#FFD54F] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">
              Upcoming Festival Event • Official Announcement
            </span>
          </div>

          <div className="pt-2">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-extrabold text-[#8B6508]">
              Indo American Social Association (IASA) Proudly Presents
            </p>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] font-serif leading-tight mt-1"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              IASA <span className="text-[#8B2282] italic">Diwali Gala</span>
            </h2>
            <div className="inline-flex items-center gap-2 mt-2 px-3.5 py-1 rounded-md bg-[#FFF3D6] border border-[#D4AF37]/60 text-[#8B6508] text-xs font-semibold">
              <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
              <span>To Support IASA Health Programs • In Concert With Band</span>
            </div>
          </div>
        </div>

        {/* Master Showcase Container */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#25102D] via-[#1F0D24] to-[#120616] text-[#FFFDF8] border-2 border-[#D4AF37] shadow-[0_25px_80px_rgba(212,175,55,0.3)] overflow-hidden p-6 sm:p-10 lg:p-12">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]/70 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#D4AF37]/70 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#D4AF37]/70 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]/70 rounded-br-xl pointer-events-none" />

          {/* Top Bar: Live Countdown + Date / Venue Snapshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-8 border-b border-[#D4AF37]/30">
            {/* Left: Date & Venue Pill */}
            <div className="lg:col-span-6 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-[10px] font-extrabold uppercase tracking-widest">
                  Live in California
                </span>
                <span className="text-xs text-[#FFD54F] font-semibold flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>Diwali 2026 Celebration</span>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 pt-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[#D4AF37]" />
                  <span>15 NOVEMBER</span>
                </div>
                <div className="text-sm sm:text-base text-[#FFD54F] font-semibold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>5:00 PM ONWARDS</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  <strong className="text-white">Swad of India Banquets</strong> — 1410 W. 7th Street, Upland, CA 91786
                </span>
              </div>
            </div>

            {/* Right: Live Event Countdown Clock */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-3 sm:gap-4">
              <div className="text-[11px] uppercase tracking-widest text-[#FFD54F] font-bold text-center lg:text-right">
                Gala Countdown
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="px-3 py-2 rounded-xl bg-black/50 border border-[#D4AF37]/50 min-w-[62px]">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white block">
                    {timeLeft.days}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-400">Days</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/50 border border-[#D4AF37]/50 min-w-[62px]">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#D4AF37] block">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-400">Hours</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/50 border border-[#D4AF37]/50 min-w-[62px]">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white block">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-400">Mins</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/50 border border-[#D4AF37]/50 min-w-[62px]">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#D4AF37] block">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-400">Secs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content: Star Artists & Band Lineup */}
          <div className="py-8 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37]">
                Live Stage Headliners
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white font-serif"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                In Concert with Bollywood Band & Dance Troupe
              </h3>
            </div>

            {/* Artists Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Rram Tasildar Card */}
              <div className="group rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-black/60 border-2 border-[#D4AF37]/60 overflow-hidden p-5 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shrink-0 shadow-md">
                    <img
                      src={rramImg}
                      alt="Rram Tasildar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#FFD54F] bg-[#D4AF37]/20 px-2 py-0.5 rounded-full border border-[#D4AF37]/40">
                      Bollywood Singer
                    </span>
                    <h4 className="text-lg font-bold text-white font-serif mt-1">
                      RRAM TASILDAR
                    </h4>
                    <p className="text-[11px] text-[#D4AF37] font-semibold">
                      Music on T-Series & Times Music
                    </p>
                    <p className="text-[10px] text-stone-300">Global Touring Performer</p>
                  </div>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed border-t border-white/10 pt-3">
                  Delivering dynamic, high-octane Bollywood vocals, romantic anthems, and stadium hits for the festive gala night.
                </p>
              </div>

              {/* Simantinee Roy Card */}
              <div className="group rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-black/60 border-2 border-[#D4AF37]/60 overflow-hidden p-5 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shrink-0 shadow-md">
                    <img
                      src={simantineeImg}
                      alt="Simantinee Roy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#FFD54F] bg-[#D4AF37]/20 px-2 py-0.5 rounded-full border border-[#D4AF37]/40">
                      Bollywood Singer
                    </span>
                    <h4 className="text-lg font-bold text-white font-serif mt-1">
                      SIMANTINEE ROY
                    </h4>
                    <p className="text-[11px] text-[#D4AF37] font-semibold">
                      Playback Vocalist
                    </p>
                    <p className="text-[10px] text-stone-300">Global Performer</p>
                  </div>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed border-t border-white/10 pt-3">
                  Sensational playback vocalist presenting captivating evergreen melodies, upbeat dance tracks, and live festival duet classics.
                </p>
              </div>

              {/* Vinaini Jayasinghe Dance Card */}
              <div className="group rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-black/60 border-2 border-[#D4AF37]/60 overflow-hidden p-5 flex flex-col justify-between hover:border-[#D4AF37] transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7B1FA2] to-[#D4AF37] flex items-center justify-center border-2 border-[#D4AF37] shrink-0 shadow-md text-white font-bold text-2xl font-serif">
                    VJ
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#FFD54F] bg-[#D4AF37]/20 px-2 py-0.5 rounded-full border border-[#D4AF37]/40">
                      Featured Dance Act
                    </span>
                    <h4 className="text-lg font-bold text-white font-serif mt-1">
                      VINAINI JAYASINGHE
                    </h4>
                    <p className="text-[11px] text-[#D4AF37] font-semibold">
                      Dance Performance
                    </p>
                    <p className="text-[10px] text-stone-300">Traditional & Bollywood Fusion</p>
                  </div>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed border-t border-white/10 pt-3">
                  A mesmerizing theatrical dance showcase blending Indian classical elegance with vibrant festive Bollywood rhythm and grace.
                </p>
              </div>
            </div>

            {/* The Live Band Musicians Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-[#D4AF37]/40 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FFD54F] uppercase tracking-wider shrink-0">
                  <Music className="w-4 h-4 text-[#D4AF37]" />
                  <span>The Live Concert Band:</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full sm:w-auto">
                  <div className="text-center px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-white">Rishi Thakkar</p>
                    <p className="text-[10px] text-[#D4AF37]">Percussions</p>
                  </div>
                  <div className="text-center px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-white">Simien Xavier</p>
                    <p className="text-[10px] text-[#D4AF37]">Lead Guitar</p>
                  </div>
                  <div className="text-center px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-white">Hari Bhatt</p>
                    <p className="text-[10px] text-[#D4AF37]">Acoustic Drums</p>
                  </div>
                  <div className="text-center px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-white">Zeeshan</p>
                    <p className="text-[10px] text-[#D4AF37]">Keyboards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Pricing & Entry Rules Grid */}
          <div className="pt-6 pb-8 border-t border-[#D4AF37]/30 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
                <Ticket className="w-5 h-5 text-[#D4AF37]" />
                <span>Entry & Ticket Categories</span>
              </h4>
              <span className="text-[10px] uppercase font-bold text-[#FFD54F] tracking-widest">
                Private Event • Strict Entry
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Paid IASA Member */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-[#D4AF37]/50 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Complimentary
                  </span>
                  <h5 className="font-bold text-sm text-white mt-1.5">Paid IASA Members</h5>
                  <p className="text-[11px] text-stone-300 mt-1">
                    Free admission with verified active member badge.
                  </p>
                </div>
                <div className="flex items-baseline justify-between pt-2 border-t border-white/10">
                  <span className="text-xl font-extrabold text-emerald-400">FREE</span>
                  <button
                    onClick={() => handleOpenBooking('paid_member')}
                    className="text-[11px] font-bold text-[#FFD54F] hover:underline cursor-pointer"
                  >
                    RSVP Member →
                  </button>
                </div>
              </div>

              {/* Old Unpaid Member */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-[#D4AF37]/50 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Advance Rate
                  </span>
                  <h5 className="font-bold text-sm text-white mt-1.5">Old Unpaid Members</h5>
                  <p className="text-[11px] text-stone-300 mt-1">
                    Advance discounted admission for returning members.
                  </p>
                </div>
                <div className="flex items-baseline justify-between pt-2 border-t border-white/10">
                  <span className="text-xl font-extrabold text-[#FFD54F]">$100.00</span>
                  <button
                    onClick={() => handleOpenBooking('unpaid_member')}
                    className="text-[11px] font-bold text-[#FFD54F] hover:underline cursor-pointer"
                  >
                    Book Advance →
                  </button>
                </div>
              </div>

              {/* Guest Ticket */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#D4AF37]/25 via-white/10 to-white/5 border-2 border-[#D4AF37] flex flex-col justify-between space-y-3 shadow-lg relative">
                <span className="absolute -top-2.5 right-4 text-[9px] font-extrabold uppercase bg-[#D4AF37] text-black px-2 py-0.5 rounded-full shadow-xs">
                  Guest Entry
                </span>
                <div>
                  <h5 className="font-bold text-sm text-white mt-1">Guest Ticket</h5>
                  <p className="text-[11px] text-stone-200 mt-1">
                    Full dinner buffet, drinks, appetizers, live concert & dance show.
                  </p>
                </div>
                <div className="flex items-baseline justify-between pt-2 border-t border-white/10">
                  <span className="text-xl font-extrabold text-white">$125.00</span>
                  <button
                    onClick={() => handleOpenBooking('guest')}
                    className="text-[11px] font-bold text-[#FFD54F] hover:underline cursor-pointer"
                  >
                    Buy Pass →
                  </button>
                </div>
              </div>

              {/* Donor / VIP Table */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#7B1FA2]/30 via-white/10 to-white/5 border border-[#D4AF37]/60 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-200 border border-purple-500/40">
                    VIP & Donor
                  </span>
                  <h5 className="font-bold text-sm text-white mt-1.5">Donor & VIP Tables</h5>
                  <p className="text-[11px] text-stone-300 mt-1">
                    Reserved front tables supporting IASA Health Programs.
                  </p>
                </div>
                <div className="flex items-baseline justify-between pt-2 border-t border-white/10">
                  <a
                    href="tel:9095100050"
                    className="text-xs font-extrabold text-[#FFD54F] hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 909-510-0050</span>
                  </a>
                  <button
                    onClick={() => handleOpenBooking('donor_table')}
                    className="text-[11px] font-bold text-white hover:underline cursor-pointer"
                  >
                    Inquire →
                  </button>
                </div>
              </div>
            </div>

            {/* Inclusions Pill Banner */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center text-xs text-stone-300 font-medium">
              <span className="text-[#FFD54F] font-bold uppercase tracking-wider mr-2">
                All Entries Include:
              </span>
              <span>
                Appetizers • Royal Dinner Buffet • Drinks • High-Energy Dancing • Live Singers • Live Performers • Strict Security Entry
              </span>
            </div>
          </div>

          {/* Organizing Committee Contacts Directory (Direct from Poster) */}
          <div className="pt-6 pb-6 border-t border-[#D4AF37]/30 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-xs uppercase font-bold tracking-widest text-[#FFD54F]">
                IASA Organizing Committee & Table Bookings
              </p>
              <p className="text-[11px] text-stone-400">
                Direct phone inquiries for table reservations & donor badges
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Rajbir Singh */}
              <a
                href="tel:9095100050"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37] transition-all block text-left group"
              >
                <p className="text-[10px] uppercase font-bold text-[#D4AF37]">Founder / Chairman</p>
                <p className="text-xs font-bold text-white group-hover:text-[#FFD54F] transition-colors">
                  Rajbir Singh
                </p>
                <p className="text-xs text-stone-300 font-mono mt-0.5">90951 00050</p>
              </a>

              {/* Reena Singh */}
              <a
                href="tel:9095657685"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37] transition-all block text-left group"
              >
                <p className="text-[10px] uppercase font-bold text-[#D4AF37]">Co-Chair</p>
                <p className="text-xs font-bold text-white group-hover:text-[#FFD54F] transition-colors">
                  Reena Singh
                </p>
                <p className="text-xs text-stone-300 font-mono mt-0.5">909-565-7685</p>
              </a>

              {/* Seema Sagar */}
              <a
                href="tel:9099961618"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37] transition-all block text-left group"
              >
                <p className="text-[10px] uppercase font-bold text-[#D4AF37]">President</p>
                <p className="text-xs font-bold text-white group-hover:text-[#FFD54F] transition-colors">
                  Seema Sagar
                </p>
                <p className="text-xs text-stone-300 font-mono mt-0.5">909-996-1618</p>
              </a>

              {/* Neeru Seth */}
              <a
                href="tel:9099257666"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37] transition-all block text-left group"
              >
                <p className="text-[10px] uppercase font-bold text-[#D4AF37]">Secretary</p>
                <p className="text-xs font-bold text-white group-hover:text-[#FFD54F] transition-colors">
                  Neeru Seth
                </p>
                <p className="text-xs text-stone-300 font-mono mt-0.5">909-925-7666</p>
              </a>

              {/* Falguniba Zala */}
              <a
                href="tel:8186442536"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37] transition-all block text-left group"
              >
                <p className="text-[10px] uppercase font-bold text-[#D4AF37]">Cultural Manager</p>
                <p className="text-xs font-bold text-white group-hover:text-[#FFD54F] transition-colors">
                  Falguniba Zala
                </p>
                <p className="text-xs text-stone-300 font-mono mt-0.5">818-644-2536</p>
              </a>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleOpenBooking('guest')}
                id="btn-book-gala-tickets"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD54F] to-[#B38728] text-black font-extrabold text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Ticket className="w-4 h-4 text-black" />
                <span>Reserve Gala Tickets / Passes</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={handleGoogleCalendar}
                className="w-full sm:w-auto px-5 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Add to Calendar</span>
              </button>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={handleOpenMaps}
                className="text-xs text-stone-300 hover:text-[#FFD54F] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Directions to Swad of India</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking & RSVP Modal */}
      <DiwaliGalaBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTier={selectedTier}
      />
    </section>
  );
};
