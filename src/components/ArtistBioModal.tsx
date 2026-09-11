import React from 'react';
import {
  X,
  Sparkles,
  Crown,
  Mic2,
  Award,
  Music2,
  Disc,
  Radio,
  Instagram,
  Youtube,
  Facebook,
  Film,
  Globe,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import snehaaImg from '../assets/images/sneha02110.jpg';
import rramImg from '../assets/images/Rram01002.png';

export interface ArtistBioData {
  id: 'snehaa' | 'rram';
  name: string;
  stageName: string;
  role: string;
  tagline: string;
  image: string;
  quote: string;
  overview: string;
  earlyLifeAndTraining: string;
  breakthroughAndCareer: string;
  stagePresenceAndGenre: string;
  milestones: string[];
  vocalStyle: string[];
  signatureRepertoire: string[];
  social: {
    instagram?: string;
    youtube?: string;
    spotify: string;
    facebook?: string;
    imdb?: string;
  };
}

export const ARTISTS_BIO_DATA: Record<'snehaa' | 'rram', ArtistBioData> = {
  rram: {
    id: 'rram',
    name: 'Rram Tasildar',
    stageName: 'Rram Tasildar',
    role: 'Music Director, Bollywood Artist & Playback Singer',
    tagline: 'Ramshankar Tasildar • Mumbai, Maharashtra • Contemporary Pop & Bollywood',
    image: rramImg,
    quote:
      'Music is an emotional bridge connecting modern production with deeply moving melodic roots. Every song is an exploration of melody, soul, and shared human feeling.',
    overview:
      'Ramshankar Tasildar, professionally credited as Rram Tasildar, is an established Indian music director, Bollywood artist, and playback singer based out of Mumbai, Maharashtra. Rising to prominence in the early 2000s through collaborative ventures with major music industry icons, he has carved out a distinct identity in contemporary pop, Bollywood melodies, and regional music circuits. He is widely recognized for his versatile musical choices and creative partnerships—most notably alongside artist Bhavna Chawla as a dynamic musical duo.',
    earlyLifeAndTraining:
      'Based out of Mumbai, Maharashtra, Rram Tasildar developed his craft through classical fundamentals and decades of studio recording, composition, and vocal arrangement. His signature style effortlessly bridges contemporary music production techniques with deeply moving Indian melodic roots.',
    breakthroughAndCareer:
      'Operating extensively within the commercial and independent indie spaces, Rram has produced and delivered popular audio tracks including "Muntazir," "Ishq," and "Dil". He generated notable regional success in the Bengali music scene with the widely acclaimed romantic track "Mon Bechara" (composed alongside Joy Sarkar and Rajiv Dutta). With a career spanning multiple decades, his adaptive approach to modern streaming trends has solidified his presence as a respected name in independent studio recording and live acts.',
    stagePresenceAndGenre:
      'On stage and in the studio, Rram Tasildar commands an authentic, soulful presence. His musical versatility spans heartfelt romantic ballads, high-energy Bollywood stage anthems, regional collaborations, and dynamic duo concerts with Bhavna Chawla that resonate with audiences across generations.',
    milestones: [
      'Established Music Director, Bollywood Artist & Playback Singer (Mumbai)',
      'Hit Bollywood & Indie Audio Releases: "Muntazir", "Ishq", and "Dil"',
      'Acclaimed Regional Bengali Hit Track "Mon Bechara" (with Joy Sarkar & Rajiv Dutta)',
      'Creative Duo Partnership alongside Bhavna Chawla ("Rram & Bhavna")',
      'Multi-Decade Career Spanning Top Record Labels, Digital Streaming & Live Stages',
      'Lead Headline Artist for Bollywood Milestones North America Arena Tour 2027',
    ],
    vocalStyle: [
      'Contemporary Bollywood Pop & Melodic Playback',
      'Soulful Ballads with Deep Melodic Resonance',
      'Music Direction, Vocal Arrangements & Studio Production',
      'Dynamic Live Concert Acts & Signature Duo Performances',
    ],
    signatureRepertoire: [
      '"Muntazir" — Popular Audio Release',
      '"Ishq" — Contemporary Bollywood Melodic Track',
      '"Dil" — Signature Hit Single & Tinsel Town Anthem',
      '"Mon Bechara" — Acclaimed Romantic Bengali Track (Joy Sarkar & Rajiv Dutta)',
      'Celebrated Duo Concert Sets with Bhavna Chawla',
    ],
    social: {
      spotify: 'https://open.spotify.com/artist/5H1hbPnT2nRUi0HB6JKR7P',
      youtube: 'https://youtube.com',
      facebook: 'https://www.facebook.com/rrambhavna/',
      imdb: 'https://www.imdb.com/name/nm15746914/',
      instagram: 'https://www.instagram.com/tinseltown_us/',
    },
  },
  snehaa: {
    id: 'snehaa',
    name: 'Sneha Bhattacharya',
    stageName: 'Sneha Bhattacharya',
    role: 'Bollywood Playback Singer & Live Performer',
    tagline: 'Sa Re Ga Ma Pa 2023 (4th Runner-Up) • Kolkata, West Bengal',
    image: snehaaImg,
    quote:
      'Music is the language of the soul. On stage, every note is an emotional bridge connecting hearts across continents.',
    overview:
      'Sneha Bhattacharya is a versatile Indian playback singer, dynamic live performer, and independent musical artist. Blessed with a powerful yet soulful voice, she shot to national fame as a celebrated finalist on Zee TV’s premier singing reality show, Sa Re Ga Ma Pa 2023, where she finished as the 4th runner-up. Hailing from Kolkata, West Bengal, Sneha beautifully bridges the gap between traditional Indian sounds and modern pop sensibilities. Her musical portfolio spans across diverse genres including Bollywood melodies, contemporary Indian pop, devotional bhajans, and soulful Bengali folk.',
    earlyLifeAndTraining:
      'Hailing from Kolkata, West Bengal, Sneha grew up immersed in the rich musical traditions of Bengal and Indian classical music. With disciplined vocal training from early childhood, she developed an uncanny ability to balance emotive classical nuances and folk ornamentation with crisp, contemporary global vocal styles.',
    breakthroughAndCareer:
      'Following her breakthrough on Zee TV’s Sa Re Ga Ma Pa 2023 where she finished as 4th runner-up, Sneha debuted her first major commercial track, "Mangalvaar," released under the prestigious Zee Music Company banner. She also lent her vocals to the popular title track of Hindi television serial Kyunki… Saas Maa Bahu Beti Hoti Hai, cementing her standing as a prominent emerging playback vocalist.',
    stagePresenceAndGenre:
      'Beyond television, Sneha has built a robust independent discography with tracks such as "Akela Rasta," "Eso Bondhu," "Thakur Jamai," and widely cherished Rabindra Sangeet mashups. Known for her magnetic stage presence, warm audience rapport, and extraordinary vocal versatility, she regularly headlines corporate events, college fests, and cultural festivals across India and international arena stages.',
    milestones: [
      'Zee TV Sa Re Ga Ma Pa 2023 Finalist & 4th Runner-Up',
      'Commercial Track "Mangalvaar" (Zee Music Company Banner)',
      'Title Track Playback Singer for TV Serial "Kyunki… Saas Maa Bahu Beti Hoti Hai"',
      'Popular Independent Releases: "Akela Rasta", "Eso Bondhu", "Thakur Jamai"',
      'Beloved Rabindra Sangeet & Bengali Folk Fusion Mashups',
      'Lead Headline Vocalist for Bollywood Milestones North America Tour 2027',
    ],
    vocalStyle: [
      'Bollywood Melodies & Romantic Playback Duets',
      'Contemporary Indian Pop & Youth Anthems',
      'Devotional Bhajans & Semi-Classical Mastery',
      'Soulful Bengali Folk & Rabindra Sangeet Fusion',
    ],
    signatureRepertoire: [
      '"Mangalvaar" — Zee Music Company',
      '"Kyunki… Saas Maa Bahu Beti Hoti Hai" Title Track',
      '"Akela Rasta" & "Eso Bondhu" (Independent Releases)',
      '"Thakur Jamai" & Folk Fusion Anthems',
      'Rabindra Sangeet Modern Mashups',
    ],
    social: {
      instagram: 'https://www.instagram.com/sneha_bhattacharya_official/',
      youtube: 'https://www.youtube.com/channel/UCEDUCoV3AB_cz1x9AMRr9DQ',
      spotify: 'https://open.spotify.com/artist/4R3pfd3q5R5aMZcobk8InD',
      facebook: 'https://www.facebook.com/snehaaBhattacharyaofficial/',
    },
  },
};

interface ArtistBioModalProps {
  isOpen: boolean;
  initialArtistId?: 'snehaa' | 'rram';
  onClose: () => void;
  onOpenBooking?: () => void;
}

export const ArtistBioModal: React.FC<ArtistBioModalProps> = ({
  isOpen,
  initialArtistId = 'rram',
  onClose,
  onOpenBooking,
}) => {
  const [selectedArtist, setSelectedArtist] = React.useState<'snehaa' | 'rram'>(initialArtistId);

  React.useEffect(() => {
    if (initialArtistId) {
      setSelectedArtist(initialArtistId);
    }
  }, [initialArtistId]);

  // Lock background scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const current = ARTISTS_BIO_DATA[selectedArtist];

  return (
    <div
      id="artist-bio-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FFFDF8] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border-2 border-[#D4AF37] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Artist Switcher Tabs */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#1A1A1A] via-[#2A1F0C] to-[#1A1A1A] text-white border-b border-[#D4AF37]/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37] block">
                Official Artist Biography
              </span>
              <h3
                className="text-lg sm:text-xl font-bold font-serif text-white tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                Lead Headline Vocalists
              </h3>
            </div>
          </div>

          {/* Tab Switcher: Rram vs Sneha */}
          <div className="flex items-center p-1 bg-black/40 rounded-2xl border border-[#D4AF37]/40 w-full sm:w-auto">
            <button
              id="bio-tab-rram"
              onClick={() => setSelectedArtist('rram')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                selectedArtist === 'rram'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#1A1A1A] shadow-md'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Mic2 className="w-3.5 h-3.5" />
              <span>Rram Tasildar</span>
            </button>
            <button
              id="bio-tab-snehaa"
              onClick={() => setSelectedArtist('snehaa')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                selectedArtist === 'snehaa'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#1A1A1A] shadow-md'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Mic2 className="w-3.5 h-3.5" />
              <span>Sneha Bhattacharya</span>
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* Top Profile Summary Banner */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 bg-gradient-to-br from-[#FFF9E6]/60 via-white to-[#FFF9E6]/40 p-6 rounded-3xl border border-[#D4AF37]/40 shadow-xs">
            {/* Artist Circular Glowing Portrait */}
            <div className="relative shrink-0">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-[#B38728] via-[#FBF5B7] to-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.45)]">
                <img
                  src={current.image}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_20%] rounded-full"
                />
              </div>
              <div className="absolute -bottom-2 right-3 p-2 rounded-full bg-[#1A1A1A] text-[#FFF3B0] border border-[#D4AF37] shadow-md">
                <Crown className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>

            {/* Main Header Info */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9E6] border border-[#D4AF37]/50 text-[#8B6508] text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>{current.role}</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] font-serif tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                {current.name}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-[#8B6508]">
                {current.tagline}
              </p>

              {/* Quote Card */}
              <div className="mt-3 p-3.5 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-2xs flex items-start gap-2.5 text-left">
                <Quote className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 rotate-180" />
                <p className="text-xs italic text-[#635544] leading-relaxed">
                  "{current.quote}"
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                {current.social.instagram && (
                  <a
                    href={current.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-pink-50 border border-[#D4AF37]/40 text-xs font-bold text-[#8B6508] hover:text-pink-600 transition-all shadow-2xs"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                )}
                {current.social.youtube && (
                  <a
                    href={current.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-red-50 border border-[#D4AF37]/40 text-xs font-bold text-[#8B6508] hover:text-red-600 transition-all shadow-2xs"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </a>
                )}
                <a
                  href={current.social.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50 border border-[#D4AF37]/40 text-xs font-bold text-[#8B6508] hover:text-emerald-600 transition-all shadow-2xs"
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>Spotify</span>
                </a>
                {current.social.facebook && (
                  <a
                    href={current.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-blue-50 border border-[#D4AF37]/40 text-xs font-bold text-[#8B6508] hover:text-blue-600 transition-all shadow-2xs"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </a>
                )}
                {current.social.imdb && (
                  <a
                    href={current.social.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-amber-50 border border-[#D4AF37]/40 text-xs font-bold text-[#8B6508] hover:text-amber-800 transition-all shadow-2xs"
                  >
                    <Film className="w-3.5 h-3.5 text-amber-600" />
                    <span>IMDb</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Section 1: Detailed Biography Narration */}
          <div className="space-y-4">
            <h4
              className="text-xl sm:text-2xl font-bold text-[#1A1A1A] font-serif border-b border-[#D4AF37]/30 pb-2 flex items-center gap-2"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              <Mic2 className="w-5 h-5 text-[#D4AF37]" />
              <span>Artistic Journey & Biography</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#4A3F2C] leading-relaxed">
              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/30 space-y-2">
                <h5 className="font-bold text-[#8B6508] uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  Musical Roots & Classical Foundation
                </h5>
                <p>{current.earlyLifeAndTraining}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/30 space-y-2">
                <h5 className="font-bold text-[#8B6508] uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  National Breakthrough & Global Stage
                </h5>
                <p>{current.breakthroughAndCareer}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/30 text-xs sm:text-sm text-[#4A3F2C] leading-relaxed space-y-1.5">
              <h5 className="font-bold text-[#8B6508] uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Concert Energy & Live Stage Persona
              </h5>
              <p>{current.stagePresenceAndGenre}</p>
            </div>
          </div>

          {/* Section 2: Career Milestones & Accolades */}
          <div className="space-y-3">
            <h4
              className="text-lg sm:text-xl font-bold text-[#1A1A1A] font-serif border-b border-[#D4AF37]/30 pb-2 flex items-center gap-2"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <span>Career Milestones & Accolades</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {current.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#D4AF37]/30 shadow-2xs text-xs text-[#2A241A] font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Vocal Style & Signature Repertoire */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vocal Highlights */}
            <div className="p-4 rounded-2xl bg-[#FFF9E6]/50 border border-[#D4AF37]/40 space-y-2.5">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#8B6508] flex items-center gap-1.5">
                <Disc className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Vocal Style & Artistry</span>
              </h5>
              <ul className="space-y-1.5">
                {current.vocalStyle.map((style, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#4A3F2C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{style}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature Repertoire */}
            <div className="p-4 rounded-2xl bg-[#FFF9E6]/50 border border-[#D4AF37]/40 space-y-2.5">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#8B6508] flex items-center gap-1.5">
                <Music2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Signature Repertoire</span>
              </h5>
              <ul className="space-y-1.5">
                {current.signatureRepertoire.map((rep, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#4A3F2C]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{rep}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 bg-[#FFF9E6]/70 border-t border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold text-[#1A1A1A]">
              Booking Inquiries for {current.name} & The Live Band
            </p>
            <p className="text-[11px] text-[#7A6B53]">
              Available for Arena Tours, Corporate Galas, and Elite Concert Performances.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {onOpenBooking && (
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37] text-[#FFF3B0] hover:text-[#1A1A1A] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer text-center"
              >
                Inquire Show Booking
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white border border-[#D4AF37]/50 text-xs font-bold text-[#8B6508] hover:bg-[#FFF3B0] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
