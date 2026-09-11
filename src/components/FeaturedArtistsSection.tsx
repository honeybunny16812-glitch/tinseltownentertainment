import React, { useState } from 'react';
import {
  Sparkles,
  Mic2,
  Music2,
  Instagram,
  Youtube,
  Radio,
  Facebook,
  Film,
  Crown,
  Disc,
  Play,
  Heart,
  Share2,
  Volume2,
  ExternalLink,
  Award,
  BookOpen,
  Quote,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

import snehaaImg from '../assets/images/sneha02110.jpg';
import rramImg from '../assets/images/Rram01002.png';
import bijanImg from '../assets/images/bijan_drummer_1787694035648.jpg';
import somImg from '../assets/images/som_guitarist_1787694048151.jpg';
import arijitImg from '../assets/images/arijit_bassist_1787694061499.jpg';
import prosenjitImg from '../assets/images/prosenjit_keys_1787694075600.jpg';
import swarnavaImg from '../assets/images/swarnava_percuss_1787694089318.jpg';
import { ArtistBioModal, ARTISTS_BIO_DATA } from './ArtistBioModal';

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
    instagram?: string;
    youtube?: string;
    spotify: string;
    facebook?: string;
    imdb?: string;
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
    id: 'rram',
    name: 'Rram Tasildar',
    role: 'Music Director, Bollywood Artist & Playback Singer',
    title: 'Ramshankar Tasildar | Mumbai, Maharashtra',
    badges: ['Music Director', 'Bollywood Artist', 'Playback Singer'],
    description:
      'Ramshankar Tasildar, professionally credited as Rram Tasildar, is an established Indian music director, Bollywood artist, and playback singer based in Mumbai. Known for hit releases "Muntazir", "Ishq", "Dil", and the acclaimed Bengali track "Mon Bechara", he brings decades of studio mastery and electrifying stage presence.',
    image: rramImg,
    highlights: [
      'Hit Audio Tracks: "Muntazir", "Ishq" & "Dil"',
      'Acclaimed Regional Romantic Hit "Mon Bechara" (Joy Sarkar & Rajiv Dutta)',
      'Creative Duo Collaboration alongside Bhavna Chawla ("Rram & Bhavna")',
      'Established Music Director & Multi-Decade Live Performer',
    ],
    social: {
      spotify: 'https://open.spotify.com/artist/5H1hbPnT2nRUi0HB6JKR7P',
      youtube: 'https://youtube.com',
      facebook: 'https://www.facebook.com/rrambhavna/',
      imdb: 'https://www.imdb.com/name/nm15746914/',
      instagram: 'https://www.instagram.com/tinseltown_us/',
    },
  },
  {
    id: 'snehaa',
    name: 'Sneha Bhattacharya',
    role: 'Bollywood Playback Singer & Live Performer',
    title: 'Sa Re Ga Ma Pa 2023 (4th Runner-Up) | Kolkata, West Bengal',
    badges: ['Sa Re Ga Ma Pa 2023 Finalist', 'Zee Music Debutant', 'Kolkata, West Bengal'],
    description:
      'Sneha Bhattacharya is a versatile Indian playback singer, dynamic live performer, and independent musical artist. Finalist on Zee TV’s Sa Re Ga Ma Pa 2023 (4th runner-up) from Kolkata, she bridges traditional Indian sounds, devotional bhajans, Bengali folk, and modern Bollywood pop.',
    image: snehaaImg,
    highlights: [
      'Zee TV Sa Re Ga Ma Pa 2023 Finalist & 4th Runner-Up',
      'Commercial Track "Mangalvaar" (Zee Music Company)',
      'TV Serial Title Track "Kyunki… Saas Maa Bahu Beti Hoti Hai"',
      'Hit Tracks: "Akela Rasta", "Eso Bondhu", "Thakur Jamai" & Rabindra Sangeet Mashups',
    ],
    social: {
      instagram: 'https://www.instagram.com/sneha_bhattacharya_official/',
      youtube: 'https://www.youtube.com/channel/UCEDUCoV3AB_cz1x9AMRr9DQ',
      spotify: 'https://open.spotify.com/artist/4R3pfd3q5R5aMZcobk8InD',
      facebook: 'https://www.facebook.com/snehaaBhattacharyaofficial/',
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
  const [activeLead, setActiveLead] = useState<string>('rram');
  const [isBioModalOpen, setIsBioModalOpen] = useState<boolean>(false);
  const [bioModalArtist, setBioModalArtist] = useState<'rram' | 'snehaa'>('rram');
  const [inlineBioTab, setInlineBioTab] = useState<'rram' | 'snehaa'>('rram');

  const handleOpenBio = (artistId: 'snehaa' | 'rram') => {
    setBioModalArtist(artistId);
    setIsBioModalOpen(true);
  };

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
                          className="w-full h-full object-cover object-[center_20%] rounded-full transition-transform duration-700 group-hover:scale-105"
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
                      <div className="pt-3 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2">
                          {artist.social.instagram && (
                            <a
                              href={artist.social.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-[#FFFDF8] hover:bg-pink-50 border border-[#D4AF37]/40 hover:border-pink-400 text-[#8B6508] hover:text-pink-600 transition-all hover:scale-110 shadow-xs"
                              title={`Follow ${artist.name} on Instagram`}
                            >
                              <Instagram className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {artist.social.youtube && (
                            <a
                              href={artist.social.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-[#FFFDF8] hover:bg-red-50 border border-[#D4AF37]/40 hover:border-red-400 text-[#8B6508] hover:text-red-600 transition-all hover:scale-110 shadow-xs"
                              title={`Watch ${artist.name} on YouTube`}
                            >
                              <Youtube className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <a
                            href={artist.social.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-[#FFFDF8] hover:bg-emerald-50 border border-[#D4AF37]/40 hover:border-emerald-400 text-[#8B6508] hover:text-emerald-600 transition-all hover:scale-110 shadow-xs"
                            title={`Listen to ${artist.name} on Spotify`}
                          >
                            <Radio className="w-3.5 h-3.5" />
                          </a>
                          {artist.social.facebook && (
                            <a
                              href={artist.social.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-[#FFFDF8] hover:bg-blue-50 border border-[#D4AF37]/40 hover:border-blue-400 text-[#8B6508] hover:text-blue-600 transition-all hover:scale-110 shadow-xs"
                              title={`Follow ${artist.name} on Facebook`}
                            >
                              <Facebook className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {artist.social.imdb && (
                            <a
                              href={artist.social.imdb}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-[#FFFDF8] hover:bg-amber-50 border border-[#D4AF37]/40 hover:border-amber-400 text-[#8B6508] hover:text-amber-800 transition-all hover:scale-110 shadow-xs"
                              title={`${artist.name} on IMDb`}
                            >
                              <Film className="w-3.5 h-3.5 text-amber-600" />
                            </a>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            id={`btn-read-bio-${artist.id}`}
                            onClick={() => handleOpenBio(artist.id as 'snehaa' | 'rram')}
                            className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#8B6508] px-3 py-1.5 rounded-full bg-white hover:bg-[#FFF9E6] border border-[#D4AF37]/60 transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Read Bio</span>
                          </button>

                          {onOpenBooking && (
                            <button
                              onClick={onOpenBooking}
                              className="text-[11px] font-bold uppercase tracking-wider text-[#8B6508] hover:text-[#1A1A1A] px-3.5 py-1.5 rounded-full bg-[#FFF9E6] hover:bg-[#FFF3B0] border border-[#D4AF37]/50 transition-all shadow-xs cursor-pointer"
                            >
                              Book Show →
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* DEDICATED INDIVIDUAL BIOGRAPHIES: SNEHAA & RRAM           */}
        {/* ========================================================= */}
        <div id="artist-biographies-spotlight" className="mb-20">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#D4AF37]/40 shadow-[0_16px_50px_rgba(212,175,55,0.14)] space-y-8">
            {/* Header & Biography Tab Switcher */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#D4AF37]/30">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#8B6508]">
                    Detailed Artist Profiles
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-serif"
                  style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                >
                  Artist Biographies & Musical Roots
                </h3>
                <p className="text-xs text-[#7A6B53] mt-0.5">
                  Explore Rram Tasildar and Sneha Bhattacharya's classical training, career breakthroughs, and stage journeys.
                </p>
              </div>

              {/* Toggle Buttons: Rram vs Sneha */}
              <div className="flex items-center p-1.5 bg-[#FFF9E6] rounded-2xl border border-[#D4AF37]/50 shadow-inner w-full md:w-auto">
                <button
                  id="tab-inline-bio-rram"
                  onClick={() => setInlineBioTab('rram')}
                  className={`flex-1 md:flex-initial px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    inlineBioTab === 'rram'
                      ? 'bg-[#1A1A1A] text-[#FFF3B0] shadow-md border border-[#D4AF37]'
                      : 'text-[#635544] hover:text-[#1A1A1A]'
                  }`}
                >
                  <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Rram Tasildar</span>
                </button>
                <button
                  id="tab-inline-bio-snehaa"
                  onClick={() => setInlineBioTab('snehaa')}
                  className={`flex-1 md:flex-initial px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    inlineBioTab === 'snehaa'
                      ? 'bg-[#1A1A1A] text-[#FFF3B0] shadow-md border border-[#D4AF37]'
                      : 'text-[#635544] hover:text-[#1A1A1A]'
                  }`}
                >
                  <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Sneha Bhattacharya</span>
                </button>
              </div>
            </div>

            {/* Render Selected Artist's Full Bio */}
            {(() => {
              const currentBio = ARTISTS_BIO_DATA[inlineBioTab];
              return (
                <div key={currentBio.id} className="space-y-8 animate-fade-in">
                  {/* Top Intro with Portrait & Quote */}
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-gradient-to-br from-[#FFFDF8] via-[#FFF9E6]/50 to-[#FFFDF8] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/40 shadow-xs">
                    {/* Portrait */}
                    <div className="relative shrink-0">
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-[#B38728] via-[#FBF5B7] to-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                        <img
                          src={currentBio.image}
                          alt={currentBio.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-[center_20%] rounded-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 right-4 p-2.5 rounded-full bg-[#1A1A1A] text-[#FFF3B0] border border-[#D4AF37] shadow-lg">
                        <Mic2 className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                    </div>

                    {/* Bio Headline & Overview */}
                    <div className="flex-1 text-center lg:text-left space-y-3">
                      <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#D4AF37]/60 text-[11px] font-bold text-[#8B6508] uppercase tracking-wider">
                          {currentBio.role}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[11px] font-bold text-emerald-800">
                          USA & Canada Tour 2027
                        </span>
                      </div>

                      <h4
                        className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-serif tracking-tight"
                        style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                      >
                        {currentBio.name}
                      </h4>

                      <p className="text-xs sm:text-sm font-semibold text-[#8B6508]">
                        {currentBio.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#554530] leading-relaxed">
                        {currentBio.overview}
                      </p>

                      {/* Artist Quote */}
                      <div className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/30 flex items-start gap-3 text-left">
                        <Quote className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 rotate-180" />
                        <p className="text-xs italic text-[#635544] leading-relaxed font-medium">
                          "{currentBio.quote}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3 Pillars of Biography */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Pillar 1 */}
                    <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#D4AF37]/40 shadow-xs space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FFF9E6] border border-[#D4AF37]/50 flex items-center justify-center text-[#8B6508]">
                        <Music2 className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-sm text-[#1A1A1A]">
                        Musical Roots & Training
                      </h5>
                      <p className="text-xs text-[#635544] leading-relaxed">
                        {currentBio.earlyLifeAndTraining}
                      </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#D4AF37]/40 shadow-xs space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FFF9E6] border border-[#D4AF37]/50 flex items-center justify-center text-[#8B6508]">
                        <Award className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-sm text-[#1A1A1A]">
                        Breakthrough & Releases
                      </h5>
                      <p className="text-xs text-[#635544] leading-relaxed">
                        {currentBio.breakthroughAndCareer}
                      </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#D4AF37]/40 shadow-xs space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FFF9E6] border border-[#D4AF37]/50 flex items-center justify-center text-[#8B6508]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h5 className="font-bold text-sm text-[#1A1A1A]">
                        Stage Presence & Energy
                      </h5>
                      <p className="text-xs text-[#635544] leading-relaxed">
                        {currentBio.stagePresenceAndGenre}
                      </p>
                    </div>
                  </div>

                  {/* Milestones & Vocal Style */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                    {/* Milestones */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D4AF37]/35 space-y-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#D4AF37]" />
                        <h5 className="font-bold text-sm uppercase tracking-wider text-[#1A1A1A]">
                          Career Milestones & Accolades
                        </h5>
                      </div>
                      <div className="space-y-2">
                        {currentBio.milestones.map((m, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3D3325]">
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Vocal Style & Signature Songs */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D4AF37]/35 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Disc className="w-4 h-4 text-[#D4AF37]" />
                          <h5 className="font-bold text-sm uppercase tracking-wider text-[#1A1A1A]">
                            Vocal Style & Artistry
                          </h5>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {currentBio.vocalStyle.map((v, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#FFF9E6] border border-[#D4AF37]/40 text-[#8B6508]"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#D4AF37]/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Music2 className="w-4 h-4 text-[#D4AF37]" />
                          <h5 className="font-bold text-sm uppercase tracking-wider text-[#1A1A1A]">
                            Signature Repertoire
                          </h5>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {currentBio.signatureRepertoire.map((song, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#FFFDF8] border border-stone-200 text-[#4A3F2C]"
                            >
                              ♪ {song}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio Actions Footer */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D4AF37]/25">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-[#8B6508]">Connect with {currentBio.name}:</span>
                      {currentBio.social.instagram && (
                        <a
                          href={currentBio.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white hover:bg-pink-50 border border-[#D4AF37]/40 text-[#8B6508] hover:text-pink-600 transition-all"
                          title="Instagram"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {currentBio.social.youtube && (
                        <a
                          href={currentBio.social.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white hover:bg-red-50 border border-[#D4AF37]/40 text-[#8B6508] hover:text-red-600 transition-all"
                          title="YouTube"
                        >
                          <Youtube className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={currentBio.social.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white hover:bg-emerald-50 border border-[#D4AF37]/40 text-[#8B6508] hover:text-emerald-600 transition-all"
                        title="Spotify"
                      >
                        <Radio className="w-3.5 h-3.5" />
                      </a>
                      {currentBio.social.facebook && (
                        <a
                          href={currentBio.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white hover:bg-blue-50 border border-[#D4AF37]/40 text-[#8B6508] hover:text-blue-600 transition-all"
                          title="Facebook"
                        >
                          <Facebook className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {currentBio.social.imdb && (
                        <a
                          href={currentBio.social.imdb}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white hover:bg-amber-50 border border-[#D4AF37]/40 text-[#8B6508] hover:text-amber-800 transition-all"
                          title="IMDb"
                        >
                          <Film className="w-3.5 h-3.5 text-amber-600" />
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleOpenBio(currentBio.id)}
                        className="px-4 py-2 rounded-xl bg-white hover:bg-[#FFF9E6] border border-[#D4AF37] text-xs font-bold text-[#8B6508] transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Open Modal View</span>
                      </button>

                      {onOpenBooking && (
                        <button
                          onClick={onOpenBooking}
                          className="px-4 py-2 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37] text-[#FFF3B0] hover:text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                        >
                          Book {currentBio.name.split(' ')[0]} →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
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
              Bring Rram, Sneha & The Live Band To Your City
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

      {/* Artist Biography Detail Modal */}
      <ArtistBioModal
        isOpen={isBioModalOpen}
        initialArtistId={bioModalArtist}
        onClose={() => setIsBioModalOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
