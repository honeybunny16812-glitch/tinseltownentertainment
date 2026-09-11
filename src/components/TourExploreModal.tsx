import React, { useState } from 'react';
import { X, Sparkles, Music, Star, Disc3, Award, Calendar, Compass, ArrowRight } from 'lucide-react';
import snehaaImg from '../assets/images/sneha02110.jpg';
import rramImg from '../assets/images/Rram01002.png';

interface TourExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const TourExploreModal: React.FC<TourExploreModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'eras' | 'symphony' | 'cities'>('eras');

  if (!isOpen) return null;

  const ERAS = [
    {
      era: 'Chapter I: 1950s–1970s',
      title: 'The Golden Era & Vintage Romance',
      description:
        'Timeless compositions of Shankar-Jaikishan, Naushad, SD Burman, and RD Burman brought to life with live string sections and accordion solos.',
      highlights: ['Awaara Hoon', 'Pyaar Hua Ikraar Hua', 'Dum Maro Dum', 'Chura Liya'],
    },
    {
      era: 'Chapter II: 1980s–1990s',
      title: 'The Melodic Renaissance & Nostalgia',
      description:
        'Heart-touching duets and blockbuster chartbusters by Nadeem-Shravan, Jatin-Lalit, and Anand-Milind rendered in opulent orchestral harmony.',
      highlights: ['Tujhe Dekha Toh', 'Pehla Nasha', 'Dheere Dheere', 'Tip Tip Barsa'],
    },
    {
      era: 'Chapter III: 2000s–2010s',
      title: 'Modern Masterpieces & World Fusion',
      description:
        'Sufi brilliance, Rahman harmonies, and soulful Shankar-Ehsaan-Loy rhythms reimagined with cinematic brass and choir.',
      highlights: ['Kun Faya Kun', 'Kal Ho Naa Ho', 'Mitwa', 'Jai Ho'],
    },
    {
      era: 'Chapter IV: 2020s & Beyond',
      title: 'Contemporary Blockbuster Anthems',
      description:
        'High-octane stadium energy featuring modern playback hits, live dhol-orchestra mashups, and celebratory fireworks finales.',
      highlights: ['Kesariya', 'Apna Bana Le', 'Tum Hi Ho', 'Jhoome Jo Pathaan'],
    },
  ];

  const SYMPHONY_FACETS = [
    {
      icon: Music,
      title: '40-Piece Grand Symphony',
      desc: 'Featuring world-renowned violinists, cellists, flautists, and live Indian classical virtuosos on sitar, sarod, and tabla.',
    },
    {
      icon: Star,
      title: 'Celebrity Vocalists',
      desc: 'Top Bollywood playback icons alongside award-winning classical singers performing synchronized multi-vocal suites.',
    },
    {
      icon: Award,
      title: 'Hollywood-Grade Acoustics',
      desc: 'State-of-the-art L-Acoustics K1 sound design engineered specifically for multi-thousand seat grand arena concerts.',
    },
    {
      icon: Sparkles,
      title: 'Cinematic Visual Stagecraft',
      desc: '200-foot curved 4K visual canvas, synchronized golden pyrotechnics, and laser choreography.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FFFDF8] rounded-3xl border-2 border-[#D4AF37] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2416] to-[#1A1A1A] text-[#FFFDF8] px-6 py-5 border-b border-[#D4AF37]/50 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] font-cinzel">
              The Journey of Bollywood Music
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-cinzel text-white">
              Bollywood Milestones — USA & Canada Tour 2027
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-stone-200 bg-[#F9F6EF] px-6">
          <button
            onClick={() => setActiveTab('eras')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'eras'
                ? 'border-[#D4AF37] text-[#1A1A1A]'
                : 'border-transparent text-stone-500 hover:text-[#1A1A1A]'
            }`}
          >
            4 Musical Chapters
          </button>
          <button
            onClick={() => setActiveTab('symphony')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'symphony'
                ? 'border-[#D4AF37] text-[#1A1A1A]'
                : 'border-transparent text-stone-500 hover:text-[#1A1A1A]'
            }`}
          >
            Symphony & Production
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'eras' ? (
            <div className="space-y-4">
              <p className="text-xs text-[#635544] mb-2 font-medium">
                Over 100 years of cinema soundtrack history performed consecutively across 4 breathtaking live acts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ERAS.map((eraItem, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm hover:border-[#D4AF37] hover:shadow-gold-sm transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#996515] block">
                      {eraItem.era}
                    </span>
                    <h4 className="text-sm font-bold text-[#1A1A1A] font-cinzel mt-0.5">
                      {eraItem.title}
                    </h4>
                    <p className="text-xs text-[#635544] mt-1.5 leading-relaxed">
                      {eraItem.description}
                    </p>
                    <div className="mt-3 pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {eraItem.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-[#F9F6EF] border border-[#E6C87A]/40 text-[#795503] font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SYMPHONY_FACETS.map((facet, idx) => {
                  const Icon = facet.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm flex items-start gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#F9F6EF] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1A1A1A] font-cinzel">
                          {facet.title}
                        </h4>
                        <p className="text-xs text-[#635544] mt-1 leading-relaxed">
                          {facet.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Lead Headline Vocalists Showcase */}
              <div className="p-4 rounded-2xl bg-[#FFF9E6] border border-[#D4AF37]/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 shrink-0">
                    <img
                      src={rramImg}
                      alt="Rram Tasildar"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#D4AF37] shadow-xs z-10"
                    />
                    <img
                      src={snehaaImg}
                      alt="Sneha Bhattacharya"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover object-[center_20%] border-2 border-[#D4AF37] shadow-xs"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#8B6508] block leading-none mb-0.5">
                      Tour Lead Vocalists
                    </span>
                    <h5 className="text-xs font-bold text-[#1A1A1A]">
                      Rram Tasildar & Sneha Bhattacharya
                    </h5>
                    <p className="text-[10px] text-stone-600">
                      Music Director & Bollywood Artist | Sa Re Ga Ma Pa Finalist
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    const el = document.getElementById('featured-artists-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#8B6508] hover:underline cursor-pointer whitespace-nowrap"
                >
                  View Artist Profiles →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F9F6EF] border-t border-[#E6C87A]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#795503] flex items-center gap-1.5">
            <span className="font-bold">Tour Schedule:</span>
            <span className="text-[#8B6508] font-semibold">Coming Soon 2027</span>
            <span>• Pre-Seat Booking Open across 18 Arenas</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-1/2 sm:w-auto px-5 py-2 rounded-xl bg-gold-btn text-[#1A1A1A] font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:shadow-gold-lg transition-all cursor-pointer font-cinzel flex items-center justify-center gap-1.5"
            >
              <span>Pre-Seat Booking</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
