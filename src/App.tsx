/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TourDatesMarquee } from './components/TourDatesMarquee';
import { BollywoodMilestonesEvent } from './components/BollywoodMilestonesEvent';
import { FeaturedArtistsSection } from './components/FeaturedArtistsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { UpcomingEventSidebar } from './components/UpcomingEventSidebar';
import { MouseVisualTrail } from './components/MouseVisualTrail';
import { BookingModal } from './components/BookingModal';
import { TourExploreModal } from './components/TourExploreModal';
import { Crown, Sparkles, Heart, Instagram } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isExploreOpen, setIsExploreOpen] = useState<boolean>(false);
  const [selectedCityId, setSelectedCityId] = useState<string>('nyc');

  const handleOpenBooking = (cityId?: string) => {
    if (cityId) {
      setSelectedCityId(cityId);
    }
    setIsBookingOpen(true);
  };

  const handleOpenExplore = () => {
    setIsExploreOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#E6C87A] selection:text-[#1A1A1A]">
      {/* Top Luxury Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenExplore={handleOpenExplore}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenExplore={handleOpenExplore}
        />

        {/* Dynamic Tour Dates Marquee */}
        <TourDatesMarquee onSelectCity={(cityId) => handleOpenBooking(cityId)} />

        {/* Upcoming Event — BOLLYWOOD MILESTONES Official Tour 2027 */}
        <BollywoodMilestonesEvent onBookShow={() => handleOpenBooking()} />

        {/* Featured Artists & Live Bollywood Band Section */}
        <FeaturedArtistsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Official Tour Gallery & Video Highlights with Upload Capabilities */}
        <GallerySection />

        {/* Premium White & Gold Contact Section */}
        <ContactSection />
      </main>

      {/* Persistent Side Dock: Upcoming Event — USA & Canada Tour 2027 */}
      <UpcomingEventSidebar onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Instant WhatsApp Button with Luxury Music Icon */}
      <FloatingWhatsApp />

      {/* Visual Cursor Flow Trail (Golden Music Notes & Stardust Sparkles - Completely Silent) */}
      <MouseVisualTrail />

      {/* Luxury Artistic Footer */}
      <footer className="border-t border-[#D4AF37]/30 bg-[#F9F6EF]/90 py-8 text-xs text-[#635544]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 pb-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-1">
                Tour Cities
              </p>
              <p
                className="text-sm font-serif italic text-[#1A1A1A] opacity-90"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                New York • Los Angeles • Toronto • Chicago • Vancouver • Dallas
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-1">
                Featured Production
              </p>
              <p
                className="text-sm font-serif italic text-[#1A1A1A] opacity-90"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                40-Piece Grand Symphony & Bollywood Living Legends
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37] mb-1">
                Hospitality & VIP
              </p>
              <p
                className="text-sm font-serif italic text-[#1A1A1A] opacity-90"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                Royal Box Suites, Red Carpet Access & Backstage Passes
              </p>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#795503]">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 inline-block" />
              <span className="font-bold uppercase tracking-wider text-[#1A1A1A]">
                Tinsel Town Entertainment Inc.
              </span>
              <span className="hidden sm:inline text-stone-300">|</span>
              <span className="text-stone-500 font-medium">Official USA & Canada Tour Management</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px]">
              <span className="text-stone-600">© 2027 All Rights Reserved.</span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#D4AF37]/60 text-[#1A1A1A] shadow-xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8B6508]">
                  Developed by
                </span>
                <span className="font-extrabold text-[#1A1A1A] tracking-wide">
                  UBS Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Booking & VIP Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedCityId={selectedCityId}
      />

      {/* Tour Exploration & Eras Modal */}
      <TourExploreModal
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
