import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Play,
  Pause,
  Film,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Crown,
  Camera,
  Music,
  Video,
} from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'promo' | 'live' | 'symphony' | 'artists' | 'bts';
  type: 'video';
  thumbnail: string;
  mediaUrl: string;
  youtubeId: string;
  city: string;
  duration?: string;
  description: string;
}

const CURATED_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'vid-1',
    title: '1. Bollywood Milestones Tour 2027 • Official 4K Arena Teaser',
    category: 'promo',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/PpismmwZR4E/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=PpismmwZR4E',
    youtubeId: 'PpismmwZR4E',
    city: 'USA & Canada Tour 2027',
    duration: '4K Official Teaser',
    description: 'Official promotional showcase for the grand Bollywood Milestones Tour presented by Tinsel Town Entertainment Inc. & Tisha Entertainment.',
  },
  {
    id: 'vid-2',
    title: '2. Tinsel Town Live Concert Symphony & Golden Musical Journey',
    category: 'symphony',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/NhScQ8trvbQ/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=NhScQ8trvbQ',
    youtubeId: 'NhScQ8trvbQ',
    city: 'New York (Madison Square Garden)',
    duration: 'Live Symphony 4K',
    description: '40-piece grand orchestra performing Bollywood golden era hits with synchronized pyrotechnics, sitar solos, and laser staging.',
  },
  {
    id: 'vid-3',
    title: '3. Grand Live Concert Symphony & Arena Spectacular',
    category: 'live',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/8z64VbOSeuE/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=8z64VbOSeuE',
    youtubeId: '8z64VbOSeuE',
    city: 'Los Angeles (Crypto.com Arena)',
    duration: 'Concert Highlight',
    description: 'Electrifying live stage performance featuring maestro musicians and grand symphonic arrangements.',
  },
  {
    id: 'vid-4',
    title: '4. Bollywood Melodies & Orchestral Live Showcase',
    category: 'symphony',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/zmcL1Mc1DVk/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=zmcL1Mc1DVk',
    youtubeId: 'zmcL1Mc1DVk',
    city: 'Toronto (Scotiabank Arena)',
    duration: 'Live Symphony',
    description: 'Timeless Bollywood melodies re-imagined with a full acoustic strings and rhythm section.',
  },
  {
    id: 'vid-5',
    title: '5. Soulful Playback Classics & Instrumental Ensemble',
    category: 'artists',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/DRCHF5g6gRw/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=DRCHF5g6gRw',
    youtubeId: 'DRCHF5g6gRw',
    city: 'Chicago (United Center)',
    duration: 'Playback Classics',
    description: 'Heartwarming vocal and instrumental performances bringing the golden era to life on arena stage.',
  },
  {
    id: 'vid-6',
    title: '6. Tinsel Town Musical Extravaganza & Live Stage Glory',
    category: 'live',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/X8hXp5BqQZU/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=X8hXp5BqQZU',
    youtubeId: 'X8hXp5BqQZU',
    city: 'Dallas (American Airlines Center)',
    duration: 'Live Extravaganza',
    description: 'Grand scale production with magnificent lighting choreography and live orchestral dynamics.',
  },
  {
    id: 'vid-7',
    title: '7. Golden Hits & Bollywood Playback Journey',
    category: 'artists',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/s4ciUVbrUN0/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=s4ciUVbrUN0',
    youtubeId: 's4ciUVbrUN0',
    city: 'Houston (Toyota Center)',
    duration: 'Golden Hits 4K',
    description: 'Legendary hits and evergreen melodies celebrating Indian cinematic music history.',
  },
  {
    id: 'vid-8',
    title: '8. Grand Concert Live Overture & Acoustic Brilliance',
    category: 'symphony',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/W84OQUZrKA8/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=W84OQUZrKA8',
    youtubeId: 'W84OQUZrKA8',
    city: 'San Jose (SAP Center)',
    duration: 'Concert Overture',
    description: 'High-energy musical overture featuring sitar, violins, flute, and rhythmic percussion masterclasses.',
  },
  {
    id: 'vid-9',
    title: '9. Live Arena Atmosphere & Crowd Singalong Special',
    category: 'live',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/D0tYhSIx4RQ/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=D0tYhSIx4RQ',
    youtubeId: 'D0tYhSIx4RQ',
    city: 'Atlanta (State Farm Arena)',
    duration: 'Live Arena Special',
    description: 'Thousands of passionate fans singing together with our live orchestra in full harmonic resonance.',
  },
  {
    id: 'vid-10',
    title: '10. Immortal Melodies & Soulful Vocal Harmonies',
    category: 'artists',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/jgdYQe4KfpY/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=jgdYQe4KfpY',
    youtubeId: 'jgdYQe4KfpY',
    city: 'Vancouver (Rogers Arena)',
    duration: 'Vocal Harmonies',
    description: 'Emotive renditions honoring Bollywood’s most celebrated composers, singers, and lyricists.',
  },
  {
    id: 'vid-11',
    title: '11. Grand Bollywood Stage Celebration & Symphony Finale',
    category: 'promo',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/CcpkHN3EECo/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=CcpkHN3EECo',
    youtubeId: 'CcpkHN3EECo',
    city: 'Seattle (Climate Pledge Arena)',
    duration: 'Grand Showcase',
    description: 'Spectacular visual and acoustic tour trailer showing the grandeur of Bollywood Milestones live.',
  },
  {
    id: 'vid-12',
    title: '12. Pyrotechnics & Golden Confetti Laser Light Finale',
    category: 'live',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/cfW5WO1w75g/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=cfW5WO1w75g',
    youtubeId: 'cfW5WO1w75g',
    city: 'Boston (TD Garden)',
    duration: 'Grand Finale 4K',
    description: 'Synchronized flame cannons, golden sparkle confetti showers, and 360-degree arena laser choreography.',
  },
  {
    id: 'vid-13',
    title: '13. Master Percussion Ensemble: Tabla, Dholak & Timpani Fusion',
    category: 'symphony',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/XQFsqnwYe9U/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=XQFsqnwYe9U',
    youtubeId: 'XQFsqnwYe9U',
    city: 'Washington DC (Capital One Arena)',
    duration: 'Percussion Solo',
    description: 'High-octane rhythmic jugalbandi between Indian classical percussion masters and Western symphonic timpanists.',
  },
  {
    id: 'vid-14',
    title: '14. Royal VIP Red Carpet & Backstage Artist Rehearsals',
    category: 'bts',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/e8XhV2u4SPU/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=e8XhV2u4SPU',
    youtubeId: 'e8XhV2u4SPU',
    city: 'Denver (Ball Arena)',
    duration: 'VIP Feature',
    description: 'Exclusive red carpet moments and intimate acoustic warmups with our featured tour vocalists.',
  },
  {
    id: 'vid-15',
    title: '15. Kishore Kumar Immortal Classics Live Symphony Tribute',
    category: 'artists',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/pYVRCQ4-Byg/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=pYVRCQ4-Byg',
    youtubeId: 'pYVRCQ4-Byg',
    city: 'Philadelphia (Wells Fargo Center)',
    duration: 'Legendary Tribute',
    description: 'Joyous, energetic melodies celebrating the undisputed king of Bollywood playback singing.',
  },
  {
    id: 'vid-16',
    title: '16. Lata Mangeshkar & Asha Bhosle Nightingale Tribute Set',
    category: 'artists',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/EJiu-6m2OeI/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=EJiu-6m2OeI',
    youtubeId: 'EJiu-6m2OeI',
    city: 'Phoenix (Footprint Center)',
    duration: 'Nightingale Tribute',
    description: 'Pristine acoustic renditions of iconic Bollywood melodies accompanied by delicate harp, flutes, and grand piano.',
  },
  {
    id: 'vid-17',
    title: '17. Sound Check & Acoustic Balancing with D&B Engineers',
    category: 'bts',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/7ST0dZXkbZ0/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=7ST0dZXkbZ0',
    youtubeId: '7ST0dZXkbZ0',
    city: 'Orlando (Amway Center)',
    duration: 'Audio BTS',
    description: 'Step inside the sound desk as acoustic engineers dial in pristine audio clarity across 15,000 arena seats.',
  },
  {
    id: 'vid-18',
    title: '18. 90s Romantic Bollywood Era Flashback Medley',
    category: 'live',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/3QjuRn0QgCY/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=3QjuRn0QgCY',
    youtubeId: '3QjuRn0QgCY',
    city: 'Calgary (Scotiabank Saddledome)',
    duration: '90s Flashback',
    description: 'Nostalgic journey through the golden nineties hits of Nadeem-Shravan, Jatin-Lalit, and Anand-Milind.',
  },
  {
    id: 'vid-19',
    title: '19. Canadian Tour Special: Toronto & Calgary Highlights',
    category: 'promo',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/cx1WSNLIySg/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=cx1WSNLIySg',
    youtubeId: 'cx1WSNLIySg',
    city: 'Detroit (Little Caesars Arena)',
    duration: 'Tour Special',
    description: 'Captivating tour recap of enthusiastic Canadian arenas and grand standing ovations.',
  },
  {
    id: 'vid-20',
    title: '20. Grand Piano & Santoor Classical Harmony Live',
    category: 'symphony',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/xdz2l6I80IA/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=xdz2l6I80IA',
    youtubeId: 'xdz2l6I80IA',
    city: 'Las Vegas (T-Mobile Arena)',
    duration: 'Instrumental',
    description: 'A soothing instrumental dialogue between a concert grand Steinway piano and the Kashmiri Santoor.',
  },
  {
    id: 'vid-21',
    title: '21. Tinsel Town Arena Stage Setup & Time-Lapse Build',
    category: 'bts',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/PpismmwZR4E/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=PpismmwZR4E',
    youtubeId: 'PpismmwZR4E',
    city: 'Miami (Kaseya Center)',
    duration: 'Time-Lapse BTS',
    description: '12-hour transformation of empty arena floors into a multi-tiered Bollywood luxury concert colosseum.',
  },
  {
    id: 'vid-22',
    title: '22. Sufi Qawwali & Soulful Ghazal Arena Performance',
    category: 'live',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/NhScQ8trvbQ/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=NhScQ8trvbQ',
    youtubeId: 'NhScQ8trvbQ',
    city: 'Minneapolis (Target Center)',
    duration: 'Sufi & Ghazal',
    description: 'Spiritual crescendo featuring live harmonium, dholak, and soaring vocal harmonies evoking profound nostalgia.',
  },
  {
    id: 'vid-23',
    title: '23. Meet The Musicians: Living Legend Orchestra Band',
    category: 'artists',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/8z64VbOSeuE/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=8z64VbOSeuE',
    youtubeId: '8z64VbOSeuE',
    city: 'Montreal (Bell Centre)',
    duration: 'Musicians Special',
    description: 'Individual spotlights on our lead guitarist, percussion director, keyboard maestro, and orchestral concertmaster.',
  },
  {
    id: 'vid-24',
    title: '24. Fan Reactions, Family Celebrations & Concert Memories',
    category: 'bts',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/zmcL1Mc1DVk/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=zmcL1Mc1DVk',
    youtubeId: 'zmcL1Mc1DVk',
    city: 'San Antonio (Frost Bank Center)',
    duration: 'Fan Reactions',
    description: 'Heartwarming memories and feedback from three generations of families celebrating music together.',
  },
  {
    id: 'vid-25',
    title: '25. Bollywood Milestones Tour 2027 • Official Tour Anthem & Encore',
    category: 'promo',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/CcpkHN3EECo/hqdefault.jpg',
    mediaUrl: 'https://www.youtube.com/watch?v=CcpkHN3EECo',
    youtubeId: 'CcpkHN3EECo',
    city: 'Grand Arena Encore',
    duration: 'Official 4K Encore',
    description: 'The monumental grand finale encore performance uniting all 40 orchestral musicians and vocalists on one grand stage.',
  },
];

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter items based on active tab
  const filteredItems = CURATED_GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'promo') return item.category === 'promo';
    if (activeTab === 'live') return item.category === 'live';
    if (activeTab === 'symphony') return item.category === 'symphony';
    if (activeTab === 'artists') return item.category === 'artists';
    if (activeTab === 'bts') return item.category === 'bts';
    return true;
  });

  // Calculate items visible per view for bounds
  // Desktop = 3, Tablet = 2, Mobile = 1
  const maxIndex = Math.max(0, filteredItems.length - 1);

  // Reset index when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Continuous Auto-slide effect
  useEffect(() => {
    if (!isAutoPlay || isHovered || filteredItems.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3200);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, maxIndex, filteredItems.length]);

  const handlePrevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Lightbox Navigation
  const handleLightboxPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex === null) return;
    setSelectedItemIndex(selectedItemIndex > 0 ? selectedItemIndex - 1 : filteredItems.length - 1);
  };

  const handleLightboxNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex === null) return;
    setSelectedItemIndex(selectedItemIndex < filteredItems.length - 1 ? selectedItemIndex + 1 : 0);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowLeft') handleLightboxPrev();
      if (e.key === 'ArrowRight') handleLightboxNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex]);

  const currentActiveItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section
      id="gallery-section"
      className="relative py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#F7F2E6] via-[#FFFDF8] to-[#FFFDF8] overflow-hidden"
    >
      {/* Background Decorative Gold Light Glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[300px] bg-gradient-to-tr from-[#D4AF37]/10 via-[#FFF3B0]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto border-b border-[#D4AF37]/30 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-gold-sm">
            <Video className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B6508]">
              Official Video Archives • 25 Highlights
            </span>
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          <h2
            className="text-3xl sm:text-5xl font-serif italic text-[#1A1A1A] tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Tour Video Highlights & Arena Showcase
          </h2>

          <p className="text-xs sm:text-sm text-[#635544] max-w-2xl mx-auto leading-relaxed">
            Experience the 40-piece grand symphony, legendary playback vocalists, and electrifying arena atmosphere across USA & Canada. Browse all 25 official 4K video clips curated by Tinsel Town Entertainment.
          </p>
        </div>

        {/* Filter Navigation Tabs & Auto-Slide Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto justify-start sm:justify-center">
            {[
              { id: 'all', label: 'All 25 Videos', icon: Film },
              { id: 'promo', label: 'Official Promos', icon: Sparkles },
              { id: 'live', label: 'Live Concerts', icon: Play },
              { id: 'symphony', label: '40-Piece Symphony', icon: Music },
              { id: 'artists', label: 'Living Legends', icon: Crown },
              { id: 'bts', label: 'Backstage BTS', icon: Camera },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#1A1A1A] text-[#FFF3B0] shadow-md border border-[#D4AF37]'
                      : 'bg-white/70 text-[#635544] hover:bg-white hover:text-[#1A1A1A] border border-[#D4AF37]/30'
                  }`}
                >
                  {Icon && <Icon className="w-3 h-3" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Autoplay & Slide Controls */}
          <div className="flex items-center gap-2 shrink-0 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-[#D4AF37]/40 shadow-sm">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-1.5 rounded-lg text-[#8B6508] hover:bg-[#D4AF37]/15 transition-colors cursor-pointer flex items-center gap-1 text-[11px] font-bold"
              title={isAutoPlay ? 'Pause Auto-slide' : 'Resume Auto-slide'}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Auto-Sliding</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Play Slide</span>
                </>
              )}
            </button>

            <div className="h-4 w-px bg-stone-300 mx-1" />

            <button
              onClick={handlePrevSlide}
              aria-label="Previous Slide"
              className="p-1.5 rounded-lg text-[#1A1A1A] hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-bold text-[#8B6508] min-w-[40px] text-center font-mono">
              {currentIndex + 1}/{filteredItems.length}
            </span>

            <button
              onClick={handleNextSlide}
              aria-label="Next Slide"
              className="p-1.5 rounded-lg text-[#1A1A1A] hover:bg-[#D4AF37] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Continuous Interactive Auto-Sliding Carousel Showcase */}
        <div
          className="relative overflow-hidden rounded-3xl pt-2 pb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrow Left (Floating) */}
          <button
            onClick={handlePrevSlide}
            aria-label="Slide Left"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-center transition-all shadow-xl cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Arrow Right (Floating) */}
          <button
            onClick={handleNextSlide}
            aria-label="Slide Right"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-center transition-all shadow-xl cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* The Sliding Container Track */}
          <div className="overflow-hidden px-1">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1))}%)`,
              }}
            >
              {filteredItems.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItemIndex(index)}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 group relative rounded-3xl overflow-hidden bg-white border border-[#D4AF37]/35 shadow-[0_8px_25px_rgba(212,175,55,0.1)] hover:shadow-[0_18px_40px_rgba(212,175,55,0.22)] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Media Visual Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                      <div className="relative w-full h-full">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        />
                        {/* Play overlay badge */}
                        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-[#1A1A1A] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.8)] group-hover:scale-115 group-hover:bg-white transition-all duration-300 border-2 border-white">
                            <Play className="w-6 h-6 fill-current translate-x-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                          <Film className="w-3 h-3 text-[#E6C87A]" />
                          <span>{item.duration || 'Video'}</span>
                        </span>

                        <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/90 text-[#1A1A1A] text-[9px] font-extrabold uppercase tracking-wider shadow-sm">
                          Official
                        </span>
                      </div>

                      {/* City Location / Tag on Image */}
                      {item.city && (
                        <div className="absolute bottom-3 left-3 text-white">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#E6C87A] flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>{item.city}</span>
                          </p>
                        </div>
                      )}

                      {/* Expand Icon indicator */}
                      <div className="absolute bottom-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="p-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white border border-white/20">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 space-y-2">
                      <h3
                        className="text-lg font-serif italic text-[#1A1A1A] group-hover:text-[#8B6508] transition-colors leading-snug line-clamp-1"
                        style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#635544] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-[#8B6508]">
                        <span className="group-hover:underline flex items-center gap-1">
                          <Play className="w-3 h-3 fill-current" />
                          <span>Watch Video Clip</span>
                        </span>
                        {item.duration && <span className="text-stone-500 font-mono text-[10px]">{item.duration}</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-6">
            {filteredItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
                title={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* LIGHTBOX FULLSCREEN MODAL */}
      {currentActiveItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#111] rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
            
            {/* Lightbox Top Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#161616]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E6C87A] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Film className="w-3 h-3 text-[#D4AF37]" />
                  <span>4K Video Showcase</span>
                </span>
                <p className="text-sm font-semibold text-white truncate max-w-md">
                  {currentActiveItem.title}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedItemIndex(null)}
                  className="p-2 rounded-xl bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Media Canvas */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[480px] max-h-[65vh] overflow-hidden">
              {currentActiveItem.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${currentActiveItem.youtubeId}?autoplay=1&rel=0`}
                  title={currentActiveItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full min-h-[350px] sm:min-h-[480px] border-0"
                />
              ) : currentActiveItem.type === 'video' ? (
                <video
                  key={currentActiveItem.mediaUrl}
                  src={currentActiveItem.mediaUrl}
                  controls
                  autoPlay
                  muted={isVideoMuted}
                  playsInline
                  className="w-full h-full max-h-[65vh] object-contain"
                />
              ) : (
                <img
                  src={currentActiveItem.mediaUrl}
                  alt={currentActiveItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[65vh] object-contain"
                />
              )}

              {/* Prev / Next Arrows */}
              <button
                onClick={handleLightboxPrev}
                aria-label="Previous item"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-[#1A1A1A] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleLightboxNext}
                aria-label="Next item"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-[#1A1A1A] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Bottom Info Bar */}
            <div className="p-6 bg-[#161616] border-t border-stone-800 text-stone-300 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4
                  className="text-2xl font-serif italic text-white"
                  style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                >
                  {currentActiveItem.title}
                </h4>
                {currentActiveItem.city && (
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E6C87A]">
                    {currentActiveItem.city}
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-400 max-w-3xl leading-relaxed">
                {currentActiveItem.description}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

