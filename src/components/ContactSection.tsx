import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Send,
  Sparkles,
  User,
  Building2,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Crown,
  Navigation,
  Instagram,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Award,
  Star,
  HeartHandshake,
} from 'lucide-react';
import { saveNewBooking } from '../utils/bookingStorage';

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    eventDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = `TT-CITY-2027-${Math.floor(100000 + Math.random() * 900000)}`;

    // Save locally for reliability
    saveNewBooking({
      guestName: formData.name.trim(),
      guestEmail: formData.email.trim(),
      phone: formData.phone.trim(),
      city: formData.city.trim(),
      tier: 'Promoter City Request',
      tierPrice: 0,
      ticketCount: 1,
      totalAmount: 0,
      reservationCode: generatedCode,
      source: 'contact_form',
      status: 'pending',
      notes: `Target Date: ${formData.eventDate} | Message: ${formData.message}`,
    });

    // Formulate Email Dispatch
    const emailSubject = encodeURIComponent(`[Show Booking Inquiry] ${formData.city} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Tinsel Town Entertainment,\n\nI would like to submit a show booking inquiry for the Bollywood Milestones Tour 2027.\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Email: ${formData.email}\n` +
      `• Requested City/Venue: ${formData.city}\n` +
      `• Preferred Date/Month: ${formData.eventDate}\n` +
      `• Requirements / Message:\n${formData.message}\n\n` +
      `Reference Code: ${generatedCode}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@tinseltownentertainment.com&cc=faiz@baiginsurance.com&su=${emailSubject}&body=${emailBody}`;

    // Open directly in Gmail (Web) so Outlook does NOT auto-launch
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      eventDate: '',
      message: '',
    });
  };

  const babuWhatsAppUrl = `https://wa.me/15628601135?text=${encodeURIComponent(
    `Hello Babu Patel, My name is ${formData.name || 'a promoter/guest'}. I submitted a show booking inquiry for ${formData.city || 'my city'} on ${formData.eventDate || '2027 season'}.`
  )}`;

  const faizWhatsAppUrl = `https://wa.me/19094356603?text=${encodeURIComponent(
    `Hello Faiz Baig, My name is ${formData.name || 'a promoter/guest'}. I submitted a show booking inquiry for ${formData.city || 'my city'} on ${formData.eventDate || '2027 season'}.`
  )}`;

  const gmailDirectUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@tinseltownentertainment.com&cc=faiz@baiginsurance.com&su=${encodeURIComponent(
    `Show Booking Inquiry - ${formData.city || 'Tour 2027'} - ${formData.name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCity: ${formData.city}\nDate: ${formData.eventDate}\nMessage: ${formData.message}`
  )}`;

  const outlookDirectUrl = `mailto:info@tinseltownentertainment.com?cc=faiz@baiginsurance.com&subject=${encodeURIComponent(
    `Show Booking Inquiry - ${formData.city || 'Tour 2027'} - ${formData.name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCity: ${formData.city}\nDate: ${formData.eventDate}\nMessage: ${formData.message}`
  )}`;

  return (
    <section
      id="contact-section"
      className="relative py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#FFFDF8] via-[#FDFBF4] to-[#F7F2E6] overflow-hidden"
    >
      {/* Subtle Background Radial Gold Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#D4AF37]/10 via-[#FFF3B0]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E6C87A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B6508]">
              Tinsel Town Entertainment Inc.
            </span>
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-serif italic text-[#1A1A1A] tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Book Shows In Your City
          </h2>

          <p className="text-sm sm:text-base text-[#635544] max-w-2xl mx-auto leading-relaxed">
            Partner with USA & Canada's premier Bollywood tour management. Inquire now for arena routing, city bookings, private sponsorships, and exclusive grand symphony concerts.
          </p>
        </div>

        {/* 4 Glassmorphism Contact & Social Cards with Gold Icons & Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Babu Patel */}
          <div className="group relative rounded-3xl p-7 bg-white/70 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)] hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div>
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#FFFDF8] to-[#F9F4E5] border border-[#D4AF37]/50 flex items-center justify-center text-[#996515] shadow-gold-sm group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#AA771C] group-hover:text-white transition-all duration-300 mb-5">
                <User className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B6508] bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full">
                Tour Executive & Promoter
              </span>

              <h3
                className="text-2xl font-serif italic text-[#1A1A1A] mt-3 mb-1"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                Babu Patel
              </h3>

              <p className="text-xs text-[#7A6B53] leading-relaxed mb-5">
                Direct promoter desk for tour routing, arena dates, and city bookings.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 space-y-2.5">
              <a
                href="tel:+15628601135"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#FFFDF8] transition-all group/link"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-bold text-xs text-[#1A1A1A] group-hover/link:text-[#8B6508]">
                    +1 (562) 860-1135
                  </span>
                </div>
                <span className="text-[9px] font-bold uppercase text-[#8B6508] tracking-wider">
                  Call
                </span>
              </a>

              <a
                href="https://wa.me/15628601135?text=Hello%20Babu%20Patel,%20I%20would%20like%20to%20book%20a%20show%20in%20my%20city."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-300 text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white" />
                <span>WhatsApp Babu Patel</span>
              </a>
            </div>
          </div>

          {/* Card 2: Faiz Baig */}
          <div className="group relative rounded-3xl p-7 bg-white/70 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)] hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#FFFDF8] to-[#F9F4E5] border border-[#D4AF37]/50 flex items-center justify-center text-[#996515] shadow-gold-sm group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#AA771C] group-hover:text-white transition-all duration-300 mb-5">
                <User className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B6508] bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full">
                International Promoter & Management
              </span>

              <h3
                className="text-2xl font-serif italic text-[#1A1A1A] mt-3 mb-1"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                Faiz Baig
              </h3>

              <p className="text-xs text-[#7A6B53] leading-relaxed mb-5">
                Executive coordinator for venue partnerships, tickets, and regional sponsorships.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 space-y-2.5">
              <a
                href="tel:+19094356603"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#FFFDF8] transition-all group/link"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-bold text-xs text-[#1A1A1A] group-hover/link:text-[#8B6508]">
                    +1 (909) 435-6603
                  </span>
                </div>
                <span className="text-[9px] font-bold uppercase text-[#8B6508] tracking-wider">
                  Call
                </span>
              </a>

              <a
                href="https://wa.me/19094356603?text=Hello%20Faiz%20Baig,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20show."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-300 text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white" />
                <span>WhatsApp Faiz Baig</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email Desk */}
          <div className="group relative rounded-3xl p-7 bg-white/70 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)] hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#FFFDF8] to-[#F9F4E5] border border-[#D4AF37]/50 flex items-center justify-center text-[#996515] shadow-gold-sm group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#AA771C] group-hover:text-white transition-all duration-300 mb-5">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B6508] bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full">
                Direct Electronic Inbox
              </span>

              <h3
                className="text-2xl font-serif italic text-[#1A1A1A] mt-3 mb-1"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                Official Email
              </h3>

              <p className="text-xs text-[#7A6B53] leading-relaxed mb-5">
                Send formal proposals, city requests, artist collaboration riders, or inquiries.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 space-y-2.5">
              <a
                href="mailto:info@tinseltownentertainment.com?cc=faiz@baiginsurance.com"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#FFFDF8] transition-all group/link"
              >
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="font-bold text-[11px] text-[#1A1A1A] truncate group-hover/link:text-[#8B6508]">
                    info@tinseltownentertainment.com
                  </span>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=info@tinseltownentertainment.com&cc=faiz@baiginsurance.com&su=${encodeURIComponent('Book Shows In Our City Inquiry')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Via Gmail</span>
                </a>
                <a
                  href="mailto:info@tinseltownentertainment.com?cc=faiz@baiginsurance.com&subject=Book%20Shows%20In%20Our%20City%20Inquiry"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-stone-800 hover:bg-black text-white font-bold text-[11px] uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Via Outlook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: Official Instagram */}
          <div className="group relative rounded-3xl p-7 bg-white/70 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.22)] hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#FFFDF8] to-[#FDF0F5] border border-pink-300/60 flex items-center justify-center text-pink-600 shadow-gold-sm group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-rose-500 group-hover:to-amber-500 group-hover:text-white transition-all duration-300 mb-5">
                <Instagram className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-700 bg-pink-50 border border-pink-200 px-2.5 py-0.5 rounded-full">
                Social & Updates
              </span>

              <h3
                className="text-2xl font-serif italic text-[#1A1A1A] mt-3 mb-1"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                Instagram
              </h3>

              <p className="text-xs text-[#7A6B53] leading-relaxed mb-5">
                Behind-the-scenes, celebrity concert teasers, tour reels & live updates.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 space-y-2.5">
              <a
                href="https://www.instagram.com/tinseltown_us/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/90 border border-pink-200 hover:border-pink-500 hover:bg-[#FFFDF8] transition-all group/link"
              >
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <Instagram className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                  <span className="font-bold text-[11px] text-[#1A1A1A] truncate group-hover/link:text-pink-600">
                    @tinseltown_us
                  </span>
                </div>
                <ExternalLink className="w-3 h-3 text-stone-400 group-hover/link:text-pink-600" />
              </a>

              <a
                href="https://www.instagram.com/tinseltown_us/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all duration-200"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Dual Layout: Interactive Form (Left) & Google Maps Office Location Placeholder (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* "Book Your Show" Inquiry Form (7 Columns) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-white/80 backdrop-blur-xl border border-[#D4AF37]/45 shadow-[0_15px_40px_rgba(212,175,55,0.12)]">
            <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B6508]">
                    Priority Tour Concierge
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-serif italic text-[#1A1A1A] mt-1"
                  style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                >
                  Book Your Show
                </h3>
              </div>
              <span className="text-[11px] font-bold text-[#8B6508] bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                Direct Email Delivery
              </span>
            </div>

            {isSubmitted ? (
              <div className="py-10 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA771C] text-white flex items-center justify-center mx-auto shadow-gold-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h4
                    className="text-2xl sm:text-3xl font-serif italic text-[#1A1A1A]"
                    style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                  >
                    Inquiry Forwarded to Email Desk
                  </h4>
                  <p className="text-xs sm:text-sm text-[#635544] max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you, <strong className="text-[#1A1A1A]">{formData.name}</strong>! Your inquiry has been routed to{' '}
                    <strong className="text-[#8B6508]">info@tinseltownentertainment.com</strong> for Babu Patel & Faiz Baig.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFDF8] border border-[#D4AF37]/40 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                    <span className="text-[#7A6B53]">Requested City:</span>
                    <span className="font-bold text-[#1A1A1A]">{formData.city || 'Not Specified'}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                    <span className="text-[#7A6B53]">Event Date:</span>
                    <span className="font-bold text-[#1A1A1A]">{formData.eventDate || 'Coming Soon 2027'}</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                    <span className="text-[#7A6B53]">Contact:</span>
                    <span className="font-semibold text-[#1A1A1A]">{formData.phone} • {formData.email}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    <a
                      href={gmailDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Gmail (Web)</span>
                    </a>
                    <a
                      href={outlookDirectUrl}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Outlook / Mail</span>
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <a
                      href={babuWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Babu Patel</span>
                    </a>
                    <a
                      href={faizWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Faiz Baig</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs text-stone-500 hover:text-[#1A1A1A] underline cursor-pointer"
                  >
                    Submit Another City Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 1: Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] mb-1.5 font-montserrat">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FFFDF8] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all placeholder:text-stone-400"
                    />
                  </div>

                  {/* Field 2: Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] mb-1.5 font-montserrat">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FFFDF8] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 3: Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] mb-1.5 font-montserrat">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FFFDF8] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all placeholder:text-stone-400"
                    />
                  </div>

                  {/* Field 4: City */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] mb-1.5 font-montserrat">
                      City & Arena Requested *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Houston, Los Angeles, Toronto"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FFFDF8] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Field 5: Event Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] mb-1.5 font-montserrat">
                    Target Event Date / Preferred Month *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. October 2027 or Specific Weekend"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FFFDF8] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all placeholder:text-stone-400 pl-10"
                    />
                    <Calendar className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Field 6: Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#795503] mb-1.5 font-montserrat">
                    Message / Show Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the venue, expected audience size, sponsorship interest, or specific artist inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-[#FFFDF8] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all resize-none placeholder:text-stone-400"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gold-btn text-[#1A1A1A] font-bold text-sm tracking-wider uppercase shadow-gold-sm hover:shadow-gold-lg hover:scale-[1.01] active:scale-98 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 font-cinzel"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Show Booking Inquiry to Email Desk</span>
                </button>
              </form>
            )}
          </div>

          {/* Google Maps Placeholder & Office Location Card (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Maps Interactive Style Showcase */}
            <div className="rounded-3xl p-6 bg-white/80 backdrop-blur-xl border border-[#D4AF37]/45 shadow-[0_15px_40px_rgba(212,175,55,0.1)] space-y-5">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <div>
                    <h4
                      className="text-xl font-serif italic text-[#1A1A1A]"
                      style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                    >
                      Office & Production Hub
                    </h4>
                    <p className="text-[10px] text-[#7A6B53] uppercase font-bold tracking-wider">
                      USA & Canada Tour Operations
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-[#8B6508] bg-[#D4AF37]/15 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Navigation className="w-3 h-3" />
                  <span>Active Hub</span>
                </span>
              </div>

              {/* Google Maps Visual Canvas */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-inner group">
                {/* Styled Map Background */}
                <div className="absolute inset-0 bg-[#EFECE6] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-80" />
                
                {/* Simulated Roads & Geography Grid */}
                <svg className="absolute inset-0 w-full h-full stroke-[#D4AF37]/30" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="35%" x2="100%" y2="35%" strokeWidth="2" />
                  <line x1="0" y1="65%" x2="100%" y2="65%" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="30%" y1="0" x2="30%" y2="100%" strokeWidth="1.5" />
                  <line x1="70%" y1="0" x2="70%" y2="100%" strokeWidth="2" />
                  <path d="M 0 100 Q 150 50 300 180 T 600 80" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.6" />
                </svg>

                {/* Animated Gold Location Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <span className="animate-ping absolute -inset-2 rounded-full bg-[#D4AF37] opacity-60" />
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#996515] via-[#D4AF37] to-[#FFF3B0] p-0.5 shadow-xl flex items-center justify-center text-[#1A1A1A]">
                      <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#D4AF37]">
                        <Building2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-lg bg-[#1A1A1A]/95 text-white backdrop-blur-md border border-[#D4AF37]/60 shadow-lg text-center">
                    <p className="text-[10px] font-bold tracking-wider uppercase text-[#D4AF37]">
                      Tinsel Town Ent.
                    </p>
                    <p className="text-[9px] text-stone-300">USA & Canada Operations</p>
                  </div>
                </div>

                {/* Map Control Overlay */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                  <a
                    href="https://maps.google.com/?q=Los+Angeles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/95 text-[#1A1A1A] border border-[#D4AF37]/40 text-[10px] font-bold uppercase tracking-wider shadow-md hover:bg-[#FFFDF8] hover:text-[#8B6508] transition-all flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                  </a>
                </div>
              </div>

              {/* Address & Direct Assistance Details */}
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#FFFDF8] border border-[#D4AF37]/30 space-y-1">
                  <p className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <span>Corporate Office & Tour Operations</span>
                  </p>
                  <p className="text-[#635544]">
                    Tinsel Town Entertainment Inc. • USA & Canada Operations HQ
                  </p>
                  <p className="text-[11px] text-[#8B6508] font-medium pt-1">
                    Serving New York, Los Angeles, Toronto, Chicago, Dallas, Vancouver & 18 Arenas.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <a
                    href="tel:+15628601135"
                    className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-gold-sm transition-all"
                  >
                    <p className="text-[10px] uppercase font-bold text-[#8B6508]">Babu Patel</p>
                    <p className="text-xs font-bold text-[#1A1A1A] mt-0.5">+1 (562) 860-1135</p>
                  </a>
                  <a
                    href="tel:+19094356603"
                    className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-gold-sm transition-all"
                  >
                    <p className="text-[10px] uppercase font-bold text-[#8B6508]">Faiz Baig</p>
                    <p className="text-xs font-bold text-[#1A1A1A] mt-0.5">+1 (909) 435-6603</p>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Official Event Sponsors & Community Partners (Elevated Prestige Pavilion) */}
        <div
          id="official-sponsors-partners"
          className="mt-16 pt-10 border-t-2 border-[#D4AF37]/40 relative"
        >
          {/* Ornate Pavilion Container */}
          <div className="rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#F5EEDB] border-2 border-[#D4AF37]/50 p-6 sm:p-9 lg:p-11 shadow-[0_10px_35px_rgba(212,175,55,0.14)] relative overflow-hidden">
            {/* Subtle Royal Watermark / Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header / Title Block */}
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8B6508] text-[10px] font-extrabold uppercase tracking-[0.25em]">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Official Prestige Alliances</span>
              </div>

              <h4
                className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#1A1A1A] tracking-tight leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                Official Event Sponsors & Community Partners
              </h4>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-2" />

              <p className="text-xs sm:text-sm text-[#635544] max-w-lg mx-auto leading-relaxed">
                With highest appreciation to our visionary corporate leaders and community pillars whose esteemed patronage powers grand cultural productions across North America.
              </p>
            </div>

            {/* 4 Majestic Gold-Accented Sponsor Plaques */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
              {/* SoCal Aviation Inc */}
              <div className="p-5 rounded-2xl bg-white/95 border-2 border-[#D4AF37]/45 hover:border-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.22)] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#8B6508] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                      <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-[#8B6508]">
                        <Plane className="w-6 h-6 text-[#8B6508]" />
                      </div>
                    </div>
                    <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#8B6508] bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-2.5 py-1 rounded-full">
                      Aviation Sponsor
                    </span>
                  </div>

                  <h5
                    className="font-bold text-lg text-[#1A1A1A] font-serif group-hover:text-[#8B6508] transition-colors leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                  >
                    SoCal Aviation Inc
                  </h5>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#8B6508] mt-0.5">
                    Official Aerospace Partner
                  </p>
                  <p className="text-xs text-[#7A6B53] mt-2 leading-relaxed">
                    Premier aviation solutions, private charter logistics & executive flight operations.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D4AF37]/25">
                  <a
                    href="tel:9099258036"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FFF9E6] to-[#FAF3DD] hover:from-[#D4AF37] hover:to-[#B8860B] border border-[#D4AF37]/50 text-[#1A1A1A] hover:text-white font-bold text-xs flex items-center justify-between transition-all duration-200 group-hover:shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#8B6508] group-hover:text-white transition-colors" />
                      <span className="font-mono text-xs">909.925.8036</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">
                      Call Direct
                    </span>
                  </a>
                </div>
              </div>

              {/* Baig Insurance Agency */}
              <div className="p-5 rounded-2xl bg-white/95 border-2 border-[#D4AF37]/45 hover:border-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.22)] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#8B6508] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                      <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-[#8B6508]">
                        <ShieldCheck className="w-6 h-6 text-[#8B6508]" />
                      </div>
                    </div>
                    <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#8B6508] bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-2.5 py-1 rounded-full">
                      Official Sponsor
                    </span>
                  </div>

                  <h5
                    className="font-bold text-lg text-[#1A1A1A] font-serif group-hover:text-[#8B6508] transition-colors leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                  >
                    Baig Insurance Agency
                  </h5>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#8B6508] mt-0.5">
                    Commercial & Personal
                  </p>
                  <p className="text-xs text-[#7A6B53] mt-2 leading-relaxed">
                    Trusted commercial liability, event protection, auto, home & family financial security.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D4AF37]/25">
                  <a
                    href="tel:5624031786"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FFF9E6] to-[#FAF3DD] hover:from-[#D4AF37] hover:to-[#B8860B] border border-[#D4AF37]/50 text-[#1A1A1A] hover:text-white font-bold text-xs flex items-center justify-between transition-all duration-200 group-hover:shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#8B6508] group-hover:text-white transition-colors" />
                      <span className="font-mono text-xs">562.403.1786</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">
                      Call Direct
                    </span>
                  </a>
                </div>
              </div>

              {/* Ram Babu Products */}
              <div className="p-5 rounded-2xl bg-white/95 border-2 border-[#D4AF37]/45 hover:border-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.22)] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#8B6508] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                      <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-[#8B6508]">
                        <ShoppingBag className="w-6 h-6 text-[#8B6508]" />
                      </div>
                    </div>
                    <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#8B6508] bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-2.5 py-1 rounded-full">
                      Consumer Goods
                    </span>
                  </div>

                  <h5
                    className="font-bold text-lg text-[#1A1A1A] font-serif group-hover:text-[#8B6508] transition-colors leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                  >
                    Ram Babu Products
                  </h5>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#8B6508] mt-0.5">
                    Distribution & Trade
                  </p>
                  <p className="text-xs text-[#7A6B53] mt-2 leading-relaxed">
                    High-standard consumer supplies, authentic specialty goods & nationwide retail distribution.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D4AF37]/25">
                  <a
                    href="tel:5625657512"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FFF9E6] to-[#FAF3DD] hover:from-[#D4AF37] hover:to-[#B8860B] border border-[#D4AF37]/50 text-[#1A1A1A] hover:text-white font-bold text-xs flex items-center justify-between transition-all duration-200 group-hover:shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#8B6508] group-hover:text-white transition-colors" />
                      <span className="font-mono text-xs">562.565.7512</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">
                      Call Direct
                    </span>
                  </a>
                </div>
              </div>

              {/* U-Insurance & Financial Services */}
              <div className="p-5 rounded-2xl bg-white/95 border-2 border-[#D4AF37]/45 hover:border-[#D4AF37] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.22)] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#8B6508] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                      <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-[#8B6508]">
                        <Building2 className="w-6 h-6 text-[#8B6508]" />
                      </div>
                    </div>
                    <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#8B6508] bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-2.5 py-1 rounded-full">
                      Executive Sponsor
                    </span>
                  </div>

                  <h5
                    className="font-bold text-lg text-[#1A1A1A] font-serif group-hover:text-[#8B6508] transition-colors leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                  >
                    U-Insurance & Financial Services
                  </h5>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#8B6508] mt-0.5">
                    Commercial & Personal
                  </p>
                  <p className="text-xs text-[#7A6B53] mt-2 leading-relaxed">
                    Comprehensive commercial liability & personal coverage, business risk packages, auto, home & family financial security.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D4AF37]/25">
                  <a
                    href="tel:3467581901"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FFF9E6] to-[#FAF3DD] hover:from-[#D4AF37] hover:to-[#B8860B] border border-[#D4AF37]/50 text-[#1A1A1A] hover:text-white font-bold text-xs flex items-center justify-between transition-all duration-200 group-hover:shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#8B6508] group-hover:text-white transition-colors" />
                      <span className="font-mono text-xs">346.758.1901</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">
                      Call Direct
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Partnership Invitation Ribbon */}
            <div className="mt-8 pt-6 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#8B6508] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1A1A1A]">
                    Join as an Official Corporate Sponsor or Community Partner
                  </p>
                  <p className="text-[11px] text-[#7A6B53]">
                    Inquire for North America Arena Tour 2027 brand placement, VIP boxes & gala tables.
                  </p>
                </div>
              </div>

              <a
                href="#contact-form"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] text-[#1A1A1A] text-xs font-extrabold uppercase tracking-wider shadow-sm hover:shadow-gold transition-all duration-200 shrink-0 cursor-pointer"
              >
                Inquire for Sponsorship
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
