import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  Users,
  Phone,
  Mail,
  Send,
  Download,
  AlertCircle,
  Flame,
  ShieldCheck,
} from 'lucide-react';
import { saveNewBooking } from '../utils/bookingStorage';

interface DiwaliGalaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: 'paid_member' | 'unpaid_member' | 'guest' | 'donor_table';
}

interface TicketTier {
  id: 'paid_member' | 'unpaid_member' | 'guest' | 'donor_table';
  name: string;
  price: number;
  badge: string;
  desc: string;
  requiresContact?: boolean;
}

const TIERS: TicketTier[] = [
  {
    id: 'guest',
    name: 'Guest Ticket',
    price: 125,
    badge: 'Popular',
    desc: 'Full Gala access, gourmet dinner, drinks, live concert & dance performance.',
  },
  {
    id: 'unpaid_member',
    name: 'Old Unpaid Member (Advance)',
    price: 100,
    badge: 'Advance Rate',
    desc: 'Special advance rate for registered returning IASA members.',
  },
  {
    id: 'paid_member',
    name: 'Paid IASA Member',
    price: 0,
    badge: 'Complimentary',
    desc: 'Free entry for all active verified IASA Annual & Life Members.',
  },
  {
    id: 'donor_table',
    name: 'Donor Table & VIP Sponsor Table',
    price: 0,
    badge: 'VIP Priority',
    desc: 'Reserved premium front-row table for donors supporting IASA Health Programs. Call 909-510-0050.',
    requiresContact: true,
  },
];

export const DiwaliGalaBookingModal: React.FC<DiwaliGalaBookingModalProps> = ({
  isOpen,
  onClose,
  defaultTier = 'guest',
}) => {
  const [selectedTier, setSelectedTier] = useState<TicketTier['id']>(defaultTier);
  const [ticketCount, setTicketCount] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [reservationCode, setReservationCode] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const currentTier = TIERS.find((t) => t.id === selectedTier) || TIERS[0];
  const totalPrice = currentTier.requiresContact ? 0 : currentTier.price * ticketCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestEmail.trim() || !guestPhone.trim()) {
      setErrorMsg('Please enter your Name, Email, and Phone Number.');
      return;
    }

    const code = `IASA-GALA-${Math.floor(100000 + Math.random() * 900000)}`;
    setReservationCode(code);

    saveNewBooking({
      guestName: guestName.trim(),
      guestEmail: guestEmail.trim(),
      phone: guestPhone.trim(),
      city: 'Upland, California',
      venue: 'Swad of India Banquets (1410 W. 7th St)',
      tier: currentTier.name,
      tierPrice: currentTier.price,
      ticketCount: currentTier.requiresContact ? 1 : ticketCount,
      totalAmount: totalPrice,
      reservationCode: code,
      source: 'diwali_gala_modal',
      notes: `[IASA Diwali Gala] ${ticketCount}x ${currentTier.name}. Notes: ${notes || 'None'}`,
      status: 'confirmed',
    });

    setIsSubmitted(true);
    setErrorMsg('');
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Rajbir Ji / IASA Team,\n\nI would like to confirm my reservation for the IASA Diwali Gala:\n\n` +
      `• Reservation Code: ${reservationCode}\n` +
      `• Name: ${guestName}\n` +
      `• Phone: ${guestPhone}\n` +
      `• Email: ${guestEmail}\n` +
      `• Category: ${currentTier.name}\n` +
      `• Passes: ${currentTier.requiresContact ? 'VIP Donor Table Request' : `${ticketCount} Passes ($${totalPrice})`}\n` +
      `• Venue: Swad of India Banquets, Upland CA (Nov 15, 5:00 PM)\n` +
      (notes ? `• Special Notes: ${notes}\n\n` : '\n') +
      `Please confirm my spot on the guest list. Thank you!`
    );
    window.open(`https://wa.me/19095100050?text=${text}`, '_blank');
  };

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent('IASA Diwali Gala 2026 • Live Concert & Dinner');
    const details = encodeURIComponent(
      'IASA Diwali Gala featuring Bollywood Singer Rram Tasildar, Simantinee Roy, Vinaini Jayasinghe & Live Band.\nSupporting IASA Health Programs.\nAppetizers, Royal Dinner, Drinks & Dancing.'
    );
    const location = encodeURIComponent('Swad of India Banquets, 1410 W. 7th Street, Upland, CA 91786');
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261115T170000/20261115T233000&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FFFDF8] border-2 border-[#D4AF37] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.5)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Festival Accent Header */}
        <div className="bg-gradient-to-r from-[#4A154B] via-[#7B1FA2] to-[#311B92] p-5 sm:p-6 text-white relative overflow-hidden border-b-2 border-[#D4AF37]">
          {/* Subtle Fireworks overlay circles */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#FF6F00]/20 rounded-full blur-xl pointer-events-none" />

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/90 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-[#D4AF37] text-black font-bold text-xs flex items-center gap-1 shadow-xs">
              <Flame className="w-3.5 h-3.5 fill-current text-amber-950" />
              <span>IASA Diwali Gala</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFD54F]">
              To Support IASA Health Programs
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#FFFDF8] pt-1">
            Gala Passes & VIP Table Reservation
          </h3>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-stone-200">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#FFD54F]" />
              <span className="font-semibold text-white">Friday, 15 November</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FFD54F]" />
              <span>5:00 PM Onwards</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FFD54F]" />
              <span className="truncate">Swad of India Banquets, Upland CA</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 max-h-[78vh] overflow-y-auto space-y-6 text-[#1A1A1A]">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* 1. Ticket Tier Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] mb-2 font-montserrat">
                  1. Select Pass Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TIERS.map((tier) => {
                    const isSelected = selectedTier === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTier(tier.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all relative cursor-pointer ${
                          isSelected
                            ? 'bg-[#FFF9E6] border-[#D4AF37] shadow-[0_4px_15px_rgba(212,175,55,0.25)] ring-1 ring-[#D4AF37]'
                            : 'bg-white border-stone-200 hover:border-[#D4AF37]/60 hover:bg-[#FFFDF8]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-bold text-sm text-[#1A1A1A]">
                            {tier.name}
                          </span>
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#8B6508]">
                            {tier.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#635544] line-clamp-2 leading-relaxed">
                          {tier.desc}
                        </p>
                        <div className="mt-2 text-sm font-extrabold text-[#8B6508]">
                          {tier.requiresContact ? (
                            <span className="text-xs text-[#7B1FA2] uppercase tracking-wider">
                              Donor Inquiry (Call 909-510-0050)
                            </span>
                          ) : tier.price === 0 ? (
                            <span className="text-emerald-700">FREE for Paid Members</span>
                          ) : (
                            <span>${tier.price}.00 <span className="text-[11px] font-normal text-stone-500">per person</span></span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Number of Passes (Only for non-table inquiries) */}
              {!currentTier.requiresContact && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] font-montserrat">
                      2. Number of Passes
                    </label>
                    <span className="text-xs font-semibold text-[#8B6508]">
                      {ticketCount} {ticketCount === 1 ? 'Guest Pass' : 'Guest Passes'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setTicketCount(num)}
                        className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          ticketCount === num
                            ? 'bg-[#D4AF37] text-white border-[#B38728] shadow-sm'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-[#D4AF37]'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Attendee Details */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] font-montserrat">
                  3. Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Raj Patel"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Phone Number (Mobile) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="e.g. (909) 555-0199"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="e.g. raj.patel@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                    Special Notes / Member ID / Table Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Vegetarian preference, sitting with family, or IASA Member ID..."
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Inclusions summary pill */}
              <div className="p-3.5 rounded-2xl bg-[#FFF9E6] border border-[#D4AF37]/50 text-xs text-[#7A6B53] space-y-1">
                <p className="font-bold text-[#8B6508] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>All Passes Include:</span>
                </p>
                <p className="text-[11px] text-stone-700">
                  Appetizers • Royal Dinner Buffet • Drinks • High-Energy Dancing • Live Singers (Rram Tasildar & Simantinee Roy) • Live Band & Classical Dance Performance.
                </p>
              </div>

              {/* Total & Action Bar */}
              <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-500 block">
                    Estimated Total
                  </span>
                  <div className="text-xl font-extrabold text-[#1A1A1A]">
                    {currentTier.requiresContact ? (
                      <span className="text-sm font-bold text-[#7B1FA2]">
                        VIP Table Inquiry
                      </span>
                    ) : totalPrice === 0 ? (
                      <span className="text-emerald-700 font-bold">FREE (Member Entry)</span>
                    ) : (
                      <span className="text-[#8B6508]">${totalPrice}.00 USD</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-3 rounded-xl border border-stone-300 text-stone-600 font-semibold text-xs hover:bg-stone-100 transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E6C87A] to-[#B38728] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    {currentTier.requiresContact ? 'Submit Table Inquiry' : 'Confirm Gala Reservation'}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-4 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] bg-[#FFF9E6] px-3 py-1 rounded-full border border-[#D4AF37]/40">
                  Reservation Confirmed
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-cinzel text-[#1A1A1A] mt-2">
                  You're Booked for the IASA Diwali Gala!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-black">{guestName}</strong>! Your reservation code has been generated and recorded.
                </p>
              </div>

              {/* Code Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1A1A1A] via-[#2A1810] to-[#1A1A1A] text-white border-2 border-[#D4AF37] max-w-md mx-auto space-y-2 shadow-lg">
                <p className="text-[10px] uppercase tracking-widest text-[#FFD54F]">
                  Official Reservation Code
                </p>
                <p className="text-2xl font-mono font-bold tracking-wider text-white select-all">
                  {reservationCode}
                </p>
                <div className="pt-2 border-t border-[#D4AF37]/30 text-[11px] text-stone-300 space-y-0.5 text-left">
                  <p><strong>Category:</strong> {currentTier.name}</p>
                  <p><strong>Quantity:</strong> {ticketCount} Guest Passes</p>
                  <p><strong>Date & Time:</strong> Friday, 15 November • 5:00 PM Onwards</p>
                  <p><strong>Venue:</strong> Swad of India Banquets, 1410 W. 7th St, Upland, CA 91786</p>
                </div>
              </div>

              {/* WhatsApp / Committee Confirmation Actions */}
              <div className="space-y-3 max-w-md mx-auto pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Confirmation to Chairman Rajbir Singh via WhatsApp</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleGoogleCalendar}
                    className="py-2.5 px-3 rounded-xl border border-[#D4AF37] bg-white hover:bg-[#FFF9E6] text-[#8B6508] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Add to Calendar</span>
                  </button>

                  <a
                    href="tel:9095100050"
                    className="py-2.5 px-3 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Call Hotline</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-stone-500 hover:text-stone-800 underline pt-2 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
