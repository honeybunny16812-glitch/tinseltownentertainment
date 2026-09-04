import React, { useState } from 'react';
import {
  Sparkles,
  Mic2,
  Music2,
  Instagram,
  Youtube,
  Radio,
  Crown,
  Disc,
  Play,
  Heart,
  Share2,
  Volume2,
  ExternalLink,
  Award,
} from 'lucide-react';

import snehaaImg from '../assets/images/snehaa_bhattacharya_1787694004960.jpg';
import rramImg from '../assets/images/rram_tasildar_1787694021586.jpg';
import bijanImg from '../assets/images/bijan_drummer_1787694035648.jpg';
import somImg from '../assets/images/som_guitarist_1787694048151.jpg';
import arijitImg from '../assets/images/arijit_bassist_1787694061499.jpg';
import prosenjitImg from '../assets/images/prosenjit_keys_1787694075600.jpg';
import swarnavaImg from '../assets/images/swarnava_percuss_1787694089318.jpg';

interface LeadArtist {
  id: string;
  name: string;
  role: string;
  title: string;
  badges: string[];
  description: string;
  image: string;
  highlights: string[];
  social: {
    instagram: string;
    youtube: string;
    spotify: string;
  };
}

interface BandMusician {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  instrumentType: string;
  social: {
    instagram: string;
    youtube: string;
  };
}

const LEAD_ARTISTS: LeadArtist[] = [
  {
    id: 'snehaa',
    name: 'Snehaa Bhattacharya',
    role: 'Bollywood Playback Singer',
    title: 'Sa Re Ga Ma Finalist | Live Concert Performer',
    badges: ['Sa Re Ga Ma Finalist', 'Playback Singer', 'USA & Canada Tour Lead'],
    description:
      'Snehaa Bhattacharya is a talented Bollywood playback singer known for her soulful voice and energetic live performances. She has performed on prestigious music stages and is recognized as a Sa Re Ga Ma finalist. She brings Bollywood classics and modern hits to audiences across the USA and Canada.',
    image: snehaaImg,
    highlights: [
      'Soulful Bollywood Romantic Melodies & 90s Evergreen Duets',
      'High-Energy Modern Dance & Festival Anthems',
      'Nationally Acclaimed Sa Re Ga Ma Finalist',
    ],
    social: {
      instagram: 'https://www.instagram.com/tinseltown_us/',
      youtube: 'https://youtube.com',
      spotify: 'https://spotify.com',
    },
  },
  {
    id: 'rram',
    name: 'Rram Tasildar',
    role: 'Bollywood Singer & Global Performer',
    title: 'T-Series Artist | Times Music Artist',
    badges: ['T-Series Artist', 'Times Music Artist', 'Global Live Performer'],
    description:
      'Rram Tasildar is an international Bollywood singer who has released music with T-Series and Times Music. He is known for powerful live vocals, romantic Bollywood songs, and high-energy stage performances worldwide.',
    image: rramImg,
    highlights: [
      'Official Releases on T-Series & Times Music',
      'Powerhouse Vocal Range & Stadium Rock Bollywood',
      'Dynamic Global Tour Headline Performer',
    ],
    social: {
      instagram: 'https://www.instagram.com/tinseltown_us/',
      youtube: 'https://youtube.com',
      spotify: 'https://spotify.com',
    },
  },
];

const BAND_MEMBERS: BandMusician[] = [
  {
    id: 'som',
    name: 'Som Chakraborty',
    role: 'Music Director • Guitarist • Show Designer',
    description:
      'Creative music director and guitarist leading live musical productions, dynamic arrangements, and signature stage shows.',
    image: somImg,
    instrumentType: 'Lead & Rhythm Guitars',
    social: {
      instagram: 'https://www.instagram.com/tinseltown_us/',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: 'bijan',
    name: 'Bijan Bhattacharjee',
    role: 'Acoustic Drummer',
    description:
      'Professional live drummer delivering energetic Bollywood concert performances with thunderous rhythms and precision timing.',
    image: bijanImg,
    instrumentType: 'Custom Acoustic Drum Kit',
    social: {
      instagram: 'https://www.instagram.com/tinseltown_us/',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: 'arijit',
    name: 'Arijit Modak',
    role: 'Bass Guitarist',
    description:
      'Bass guitarist creating rich rhythm, deep low-end resonance, and irresistible groove for live Bollywood arena concerts.',
    image: arijitImg,
    instrumentType: '5-String Electric Bass',
    social: {
      instagram: 'https://www.instagram.com/tinseltown_us/',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: 'prosenjit',
    name: 'Prosenjit Ghosh',
    role: 'Keyboardist',
    description:
      'Virtuoso keyboard player weaving timeless Bollywood melodies, symphonic orchestral layers, and harmonic synth magic during live concerts.',
    image: prosenjitImg,
    instrumentType: 'Synthesizers & Grand Piano',
    social: {
      instagram: 'https://www.instagram.com/tinseltown_us/',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: 'swarnava',
    name: 'Swarnava Ghosh',
    role: 'Percussionist',
    description:
      'Live percussion artist adding traditional and modern Bollywood beats, tabla rhythms, congas, and dhol accents to every performance.',
    image: swarnavaImg,
    instrumentType: 'Tabla, Dhol, Congas & Octapad',
    social: {
      instagram: 'https://www.instagram.com/tinseltown_us/',
      youtube: 'https://youtube.com',
    },
  },
];

interface FeaturedArtistsSectionProps {
  onOpenBooking?: () => void;
}

export const FeaturedArtistsSection: React.FC<FeaturedArtistsSectionProps> = ({ onOpenBooking }) => {
  const [activeLead, setActiveLead] = useState<string>('snehaa');

  return (
    <section
      id="featured-artists-section"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFFDF8] via-[#FFF9E6]/40 to-[#FFFDF8] border-t border-[#D4AF37]/25 overflow-hidden"
    >
      {/* Background Decorative Gold Ambient Rings & Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#D4AF37]/10 via-[#FFF3B0]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#D4AF37]/60 shadow-[0_2px_12px_rgba(212,175,55,0.18)]">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#8B6508]">
              Tinsel Town Entertainment Inc.
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] font-serif"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Meet the <span className="text-[#B38728] italic">Artists</span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2" />

          <p className="text-xs sm:text-sm text-[#635544] max-w-2xl mx-auto leading-relaxed pt-1">
            Featuring powerhouse Bollywood playback voices and a world-class live touring ensemble delivering unforgettable stadium-level concerts across the USA & Canada.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 1. LEAD HEADLINE ARTISTS (Large HD Glassmorphism Showcase) */}
        {/* ========================================================= */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
                Headline Vocalists
              </h3>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#8B6508] bg-[#FFF9E6] px-2.5 py-1 rounded-full border border-[#D4AF37]/40">
              Live Concert Stars
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {LEAD_ARTISTS.map((artist) => {
              const isSelected = activeLead === artist.id;
              return (
                <div
                  key={artist.id}
                  id={`artist-card-${artist.id}`}
                  onMouseEnter={() => setActiveLead(artist.id)}
                  className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-500 backdrop-blur-xl border ${
                    isSelected
                      ? 'bg-white/95 border-[#D4AF37] shadow-[0_16px_45px_rgba(212,175,55,0.24)] scale-[1.01]'
                      : 'bg-white/80 border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:border-[#D4AF37] hover:shadow-[0_14px_40px_rgba(212,175,55,0.2)]'
                  }`}
                >
                  {/* Top Golden Halo Glow on hover */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D4AF37]/25 transition-all" />

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                    {/* Large Circular HD Portrait with Glowing Golden Ring */}
                    <div className="relative shrink-0">
                      <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-[#B38728] via-[#FBF5B7] to-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all duration-500">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-full ring-1 ring-white/50" />
                      </div>

                      {/* Floating Mic/Artist Badge */}
                      <div className="absolute -bottom-2 right-2 p-2 rounded-full bg-[#1A1A1A] text-[#FFF3B0] border border-[#D4AF37] shadow-md group-hover:scale-110 transition-transform">
                        <Mic2 className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                    </div>

                    {/* Artist Details */}
                    <div className="flex-1 text-center sm:text-left space-y-3">
                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF9E6] text-[#8B6508] border border-[#D4AF37]/40">
                            {artist.role}
                          </span>
                        </div>

                        <h4
                          className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-serif tracking-wide group-hover:text-[#B38728] transition-colors"
                          style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                        >
                          {artist.name}
                        </h4>

                        <p className="text-xs sm:text-sm font-semibold text-[#8B6508] mt-0.5">
                          {artist.title}
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-xs sm:text-sm text-[#635544] leading-relaxed line-clamp-4">
                        {artist.description}
                      </p>

                      {/* Badges / Highlights */}
                      <div className="space-y-1 pt-1">
                        {artist.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#4A3F2C] font-medium justify-center sm:justify-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Social Links & Action Button */}
                      <div className="pt-3 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-center sm:justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <a
                            href={artist.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-[#FFFDF8] hover:bg-pink-50 border border-[#D4AF37]/40 hover:border-pink-400 text-[#8B6508] hover:text-pink-600 transition-all hover:scale-110 shadow-xs"
                            title={`Follow ${artist.name} on Instagram`}
                          >
                            <Instagram className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={artist.social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-[#FFFDF8] hover:bg-red-50 border border-[#D4AF37]/40 hover:border-red-400 text-[#8B6508] hover:text-red-600 transition-all hover:scale-110 shadow-xs"
                            title={`Watch ${artist.name} on YouTube`}
                          >
                            <Youtube className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={artist.social.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-[#FFFDF8] hover:bg-emerald-50 border border-[#D4AF37]/40 hover:border-emerald-400 text-[#8B6508] hover:text-emerald-600 transition-all hover:scale-110 shadow-xs"
                            title={`Listen to ${artist.name} on Spotify`}
                          >
                            <Radio className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {onOpenBooking && (
                          <button
                            onClick={onOpenBooking}
                            className="text-[11px] font-bold uppercase tracking-wider text-[#8B6508] hover:text-[#1A1A1A] px-3.5 py-1.5 rounded-full bg-[#FFF9E6] hover:bg-[#FFF3B0] border border-[#D4AF37]/50 transition-all shadow-xs cursor-pointer"
                          >
                            Book For Live Show →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. LIVE BOLLYWOOD BAND (Musician Profile Cards)           */}
        {/* ========================================================= */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <Music2 className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
                Live Bollywood Band
              </h3>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#8B6508] bg-[#FFF9E6] px-2.5 py-1 rounded-full border border-[#D4AF37]/40">
              5-Piece Master Ensemble
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {BAND_MEMBERS.map((musician) => (
              <div
                key={musician.id}
                id={`musician-card-${musician.id}`}
                className="group relative rounded-3xl p-5 bg-white/85 backdrop-blur-md border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-[0_8px_25px_rgba(212,175,55,0.1)] hover:shadow-[0_14px_35px_rgba(212,175,55,0.22)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Circular HD Musician Image with Gold Glowing Border */}
                  <div className="relative mx-auto w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#B38728] via-[#FBF5B7] to-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.35)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.55)] transition-all duration-500 mb-4">
                    <img
                      src={musician.image}
                      alt={musician.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Musician Info */}
                  <div className="text-center space-y-1.5">
                    <h5
                      className="text-base sm:text-lg font-bold text-[#1A1A1A] font-serif group-hover:text-[#B38728] transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                    >
                      {musician.name}
                    </h5>

                    <p className="text-[11px] font-bold text-[#8B6508] uppercase tracking-wider">
                      {musician.role}
                    </p>

                    <div className="inline-block px-2 py-0.5 rounded-md bg-[#FFF9E6] border border-[#D4AF37]/30 text-[9px] font-semibold text-[#8B6508]">
                      {musician.instrumentType}
                    </div>

                    <p className="text-[11px] text-[#635544] leading-relaxed pt-1.5 line-clamp-3">
                      {musician.description}
                    </p>
                  </div>
                </div>

                {/* Social Icons Footer */}
                <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-center gap-2.5">
                  <a
                    href={musician.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-[#FFFDF8] hover:bg-pink-50 border border-[#D4AF37]/40 text-[#8B6508] hover:text-pink-600 transition-all hover:scale-110 shadow-xs"
                    title={`${musician.name} on Instagram`}
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={musician.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-[#FFFDF8] hover:bg-red-50 border border-[#D4AF37]/40 text-[#8B6508] hover:text-red-600 transition-all hover:scale-110 shadow-xs"
                    title={`${musician.name} on YouTube`}
                  >
                    <Youtube className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner with VIP Booking CTA */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1A1A1A] via-[#2E2412] to-[#1A1A1A] text-[#FFF3B0] border border-[#D4AF37] shadow-[0_12px_40px_rgba(212,175,55,0.25)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37]">
                Exclusive Live Performance Booking
              </span>
            </div>
            <h4
              className="text-xl sm:text-2xl font-bold font-serif"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              Bring Snehaa, Rram & The Live Band To Your City
            </h4>
            <p className="text-xs text-stone-300 max-w-xl">
              Now accepting promoter, venue, and private corporate festival inquiries for USA & Canada Tour dates.
            </p>
          </div>

          {onOpenBooking && (
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#B38728] text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all cursor-pointer shrink-0 hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Inquire Show Booking</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
