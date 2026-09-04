import React, { useState } from 'react';
import { X, Check, Calendar, MapPin, Sparkles, ShieldCheck, Ticket, Download, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { TourCity, VIPTier } from '../types';
import { saveNewBooking } from '../utils/bookingStorage';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCityId?: string;
}

export const CITIES_DATA: TourCity[] = [
  {
    id: 'nyc',
    city: 'New York City',
    country: 'USA',
    venue: 'Madison Square Garden',
    season: 'Coming Soon 2027',
    preSeatStatus: 'Pre-Seat Booking Open',
    status: 'Pre-Seat Booking Open',
    capacity: '20,000 Seats',
  },
  {
    id: 'tor',
    city: 'Toronto',
    country: 'Canada',
    venue: 'Scotiabank Arena',
    season: 'Coming Soon 2027',
    preSeatStatus: 'Pre-Seat Booking Open',
    status: 'Limited VIP Seats',
    capacity: '19,800 Seats',
  },
  {
    id: 'lax',
    city: 'Los Angeles',
    country: 'USA',
    venue: 'Crypto.com Arena',
    season: 'Coming Soon 2027',
    preSeatStatus: 'Pre-Seat Booking Open',
    status: 'Pre-Seat Booking Open',
    capacity: '19,000 Seats',
  },
  {
    id: 'chi',
    city: 'Chicago',
    country: 'USA',
    venue: 'United Center',
    season: 'Coming Soon 2027',
    preSeatStatus: 'Pre-Seat Booking Open',
    status: 'Pre-Seat Booking Open',
    capacity: '21,000 Seats',
  },
  {
    id: 'van',
    city: 'Vancouver',
    country: 'Canada',
    venue: 'Rogers Arena',
    season: 'Coming Soon 2027',
    preSeatStatus: 'Pre-Seat Booking Open',
    status: 'Limited VIP Seats',
    capacity: '18,500 Seats',
  },
  {
    id: 'dfw',
    city: 'Dallas',
    country: 'USA',
    venue: 'American Airlines Center',
    season: 'Coming Soon 2027',
    preSeatStatus: 'Pre-Seat Booking Open',
    status: 'Priority Waitlist',
    capacity: '19,500 Seats',
  },
  {
    id: 'sfo',
    city: 'San Francisco',
    country: 'USA',
    venue: 'Chase Center',
    season: 'Coming Soon 2027',
    preSeatStatus: 'Pre-Seat Booking Open',
    status: 'Pre-Seat Booking Open',
    capacity: '18,000 Seats',
  },
];

const VIP_TIERS: VIPTier[] = [
  {
    id: 'royal-diamond',
    name: 'Royal Diamond VIP',
    badge: 'Front Row & Red Carpet',
    perks: [
      'Front Row Center Seating',
      'Exclusive Celebrity Meet & Greet',
      'VIP Champagne & Canapés Lounge',
      'Commemorative Metallic Gold Laminate Pass',
      'Dedicated Fast-Track Arena Entry',
    ],
    recommended: true,
  },
  {
    id: 'platinum-symphony',
    name: 'Platinum Symphony',
    badge: 'Prime Orchestra',
    perks: [
      'Orchestra Floor Reserved Seating',
      'VIP Early Merchandise Access',
      'Collector Edition Tour Program',
      'Dedicated Priority Check-in',
    ],
  },
  {
    id: 'gold-circle',
    name: 'Gold Circle Tier',
    badge: 'Lower Bowl Premium',
    perks: [
      'Lower Bowl Direct Sightline Seat',
      'Official Tour Lanyard',
      'Digital Souvenir Package',
    ],
  },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedCityId,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>(selectedCityId || 'nyc');
  const [selectedTier, setSelectedTier] = useState<string>('royal-diamond');
  const [ticketCount, setTicketCount] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [reservationCode, setReservationCode] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentCityObj = CITIES_DATA.find((c) => c.id === selectedCity) || CITIES_DATA[0];
  const currentTierObj = VIP_TIERS.find((t) => t.id === selectedTier) || VIP_TIERS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = `TT-PRE-2027-${Math.floor(100000 + Math.random() * 900000)}`;
    setReservationCode(generatedCode);

    saveNewBooking({
      guestName: guestName.trim(),
      guestEmail: guestEmail.trim(),
      phone: guestPhone.trim() || undefined,
      city: `${currentCityObj.city}, ${currentCityObj.country}`,
      venue: currentCityObj.venue,
      tier: currentTierObj.name,
      tierPrice: 0,
      ticketCount,
      totalAmount: 0,
      reservationCode: generatedCode,
      source: 'pre_seat_modal',
      status: 'confirmed',
      notes: `${ticketCount}x ${currentTierObj.name} requested for ${currentCityObj.venue}`,
    });

    const emailSubject = encodeURIComponent(`[Pre-Seat Booking ${generatedCode}] ${currentCityObj.city}, ${currentCityObj.country} - ${guestName}`);
    const emailBody = encodeURIComponent(
      `Hello Tinsel Town Entertainment,\n\nI have submitted a Pre-Seat Booking on your website.\n\n` +
      `• Reservation Code: ${generatedCode}\n` +
      `• Guest Name: ${guestName}\n` +
      `• Email: ${guestEmail}\n` +
      `• Phone: ${guestPhone || 'Not provided'}\n` +
      `• City & Venue: ${currentCityObj.city}, ${currentCityObj.country} (${currentCityObj.venue})\n` +
      `• Seating Tier: ${currentTierObj.name}\n` +
      `• Quantity: ${ticketCount} Passes (Pre-Seat Priority Access)\n` +
      `• Status: Priority Reservation Request\n`
    );

    // Trigger email client directly to official inbox
    window.location.href = `mailto:info@tinseltownentertainment.com?subject=${emailSubject}&body=${emailBody}`;

    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-3xl border-2 border-[#D4AF37] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#1A1A1A] via-[#2A2416] to-[#1A1A1A] text-[#FFFDF8] px-6 py-5 border-b border-[#D4AF37]/50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gold-btn flex items-center justify-center text-[#1A1A1A]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] font-cinzel">
                Priority Arena Access
              </p>
              <h3 className="text-lg font-bold font-cinzel text-[#FFFDF8]">
                Pre-Seat Booking — USA & Canada (Coming Soon 2027)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#FFFDF8] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Step 1: Select Tour City */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] font-montserrat">
                  1. Select Arena & City — USA & Canada (Coming Soon 2027)
                </label>
                <span className="text-[10px] uppercase font-bold text-[#8B6508] bg-[#D4AF37]/15 px-2 py-0.5 rounded-full">
                  Pre-Seat Booking Open
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto p-1">
                {CITIES_DATA.map((city) => {
                  const isSelected = selectedCity === city.id;
                  return (
                    <button
                      type="button"
                      key={city.id}
                      onClick={() => setSelectedCity(city.id)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#D4AF37] bg-[#F9F6EF] shadow-gold-sm ring-1 ring-[#D4AF37]'
                          : 'border-stone-200 hover:border-[#D4AF37]/40 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#1A1A1A]">
                          {city.city}, {city.country}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#8B6508] font-semibold">
                          {city.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#7A6B53] mt-0.5">{city.venue}</p>
                      <p className="text-[11px] text-[#996515] font-semibold mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>Coming Soon 2027 • Pre-Seat Booking Open</span>
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Seating Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] mb-2 font-montserrat">
                2. Select Seating & VIP Experience
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VIP_TIERS.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`relative text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#D4AF37] bg-[#F9F6EF] shadow-gold-sm ring-2 ring-[#D4AF37]'
                          : 'border-stone-200 hover:border-[#D4AF37]/50 bg-white'
                      }`}
                    >
                      {tier.recommended && (
                        <span className="absolute -top-2.5 right-3 bg-gradient-to-r from-[#D4AF37] to-[#B38728] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Most Popular
                        </span>
                      )}
                      <div>
                        <p className="text-xs font-bold text-[#1A1A1A]">{tier.name}</p>
                        <p className="text-[10px] text-[#996515] font-medium">{tier.badge}</p>
                        <div className="mt-2.5">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#8B6508] text-[11px] font-bold uppercase tracking-wider">
                            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                            <span>VIP Priority Pass</span>
                          </span>
                        </div>
                      </div>
                      <ul className="mt-2.5 space-y-1 text-[10px] text-[#635544]">
                        {tier.perks.slice(0, 2).map((perk, i) => (
                          <li key={i} className="flex items-center gap-1">
                            <Check className="w-2.5 h-2.5 text-[#D4AF37] shrink-0" />
                            <span className="truncate">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Quantity & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-bold uppercase text-[#795503] mb-1">
                  Passes (Qty)
                </label>
                <select
                  value={ticketCount}
                  onChange={(e) => setTicketCount(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-sm font-semibold focus:outline-none focus:border-[#D4AF37]"
                >
                  {[1, 2, 3, 4, 6, 8, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Pass' : 'Passes'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#795503] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#795503] mb-1">
                  Email for Passes *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#795503] mb-1">
                Phone Number (WhatsApp Instant Confirmation)
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Guarantee and Pass Summary */}
            <div className="p-4 rounded-2xl bg-[#F9F6EF] border border-[#E6C87A]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div className="text-xs text-[#635544]">
                  <p className="font-bold text-[#1A1A1A]">Official Tinsel Town Box Office Guarantee</p>
                  <p>100% verified seats • Priority pass confirmation</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs text-stone-500 block">Pre-Seat Priority</span>
                <span className="text-sm font-bold font-montserrat text-[#8B6508] bg-white px-3 py-1.5 rounded-xl border border-[#D4AF37]/40 inline-flex items-center gap-1.5 shadow-sm">
                  <Ticket className="w-4 h-4 text-[#D4AF37]" />
                  {ticketCount} {ticketCount === 1 ? 'Pass' : 'Passes'} Reserved
                </span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gold-btn text-[#1A1A1A] font-bold text-sm tracking-wider uppercase shadow-gold-sm hover:shadow-gold-lg transition-all hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2 font-cinzel"
            >
              <span>Confirm & Lock In Pre-Seat Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center mx-auto text-[#1A1A1A] shadow-gold-glow">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#8B6508] uppercase tracking-widest">
                Pre-Seat Booking Confirmed
              </span>
              <h4 className="text-2xl font-bold font-cinzel text-[#1A1A1A] mt-1">
                You're Priority Reserved for 2027!
              </h4>
              <p className="text-sm text-[#635544] mt-2 max-w-md mx-auto">
                Thank you, <span className="font-bold text-[#1A1A1A]">{guestName || 'VIP Guest'}</span>! Your {ticketCount}x {currentTierObj.name} pre-seat reservation for {currentCityObj.city}, {currentCityObj.country} (Coming Soon 2027) is secured.
              </p>
            </div>

            {/* Digital Pass Card */}
            <div className="p-5 rounded-2xl bg-[#1A1A1A] text-[#FFFDF8] border-2 border-[#D4AF37] max-w-md mx-auto text-left relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest">
                    Tinsel Town Entertainment
                  </p>
                  <p className="text-base font-bold font-cinzel text-white">
                    Bollywood Milestones (Coming Soon 2027)
                  </p>
                </div>
                <Ticket className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <div className="py-3.5 space-y-1 text-xs">
                <p className="flex justify-between">
                  <span className="text-stone-400">Venue & City:</span>
                  <span className="font-semibold text-white">{currentCityObj.venue}, {currentCityObj.city}, {currentCityObj.country}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-400">Tour Timeline:</span>
                  <span className="font-semibold text-[#E6C87A]">Coming Soon 2027 • Pre-Seat Priority</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-400">Reserved Tier:</span>
                  <span className="font-bold text-[#E6C87A]">{currentTierObj.name} ({ticketCount} Passes)</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-stone-400">Reservation Code:</span>
                  <span className="font-mono font-bold text-[#D4AF37]">{reservationCode || `TT-PRE-2027-991204`}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
                <span>Priority pass sent to {guestEmail || 'your email'}</span>
                <span className="text-[#D4AF37] font-semibold">Verified Pre-Seat</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
              <a
                href={`https://wa.me/15628601135?text=${encodeURIComponent(
                  `Hello Babu Patel, I have confirmed my Pre-Seat Reservation on your website!\n\nCode: ${reservationCode}\nName: ${guestName}\nCity: ${currentCityObj.city} (${currentCityObj.venue})\nTier: ${currentTierObj.name} (${ticketCount} passes)\nEmail: ${guestEmail}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Babu Patel</span>
              </a>

              <a
                href={`https://wa.me/19094356603?text=${encodeURIComponent(
                  `Hello Faiz Baig, I have confirmed my Pre-Seat Reservation on your website!\n\nCode: ${reservationCode}\nName: ${guestName}\nCity: ${currentCityObj.city} (${currentCityObj.venue})\nTier: ${currentTierObj.name} (${ticketCount} passes)\nEmail: ${guestEmail}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Faiz Baig</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#D4AF37] hover:text-[#1A1A1A] font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
