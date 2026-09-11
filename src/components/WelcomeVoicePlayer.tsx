import React, { useState, useRef, useEffect } from 'react';
import { Play, Square, Sparkles, ExternalLink, Music, Disc, Volume2, ChevronDown, ChevronUp } from 'lucide-react';

export const WelcomeVoicePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const YOUTUBE_ID = 'mOsDrni6VoY';
  const YT_MUSIC_URL = 'https://music.youtube.com/watch?v=mOsDrni6VoY&si=XmCh11I3DSatiLC4';

  // Sweet chime sound on play trigger
  const playStartChime = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      const chimeGain = ctx.createGain();
      chimeGain.gain.setValueAtTime(0.08, now);
      chimeGain.connect(ctx.destination);

      // Sweet arpeggio chime (C6, E6, G6, C7)
      const freqs = [1046.5, 1318.5, 1567.98, 2093.0];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        g.gain.setValueAtTime(0.001, now);
        g.gain.exponentialRampToValueAtTime(0.12, now + idx * 0.05 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.5);

        osc.connect(g);
        g.connect(chimeGain);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.55);
      });
    } catch {
      // Audio context fallback
    }
  };

  const handleTogglePlay = () => {
    if (!isPlaying) {
      playStartChime();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setShowVideo(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Visualizer animated bars
  const bars = [14, 26, 18, 32, 22, 36, 20, 30, 24, 34, 16, 28, 20, 14];

  return (
    <div
      id="welcome-voice-player"
      className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(212,175,55,0.14)] max-w-xl transition-all duration-300 hover:border-[#D4AF37]"
    >
      <div className="flex items-center justify-between gap-3">
        {/* Left Side: Track Thumbnail & Info */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Track Artwork with Disc Spin Animation */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-[#D4AF37]/60 shadow-sm group">
            <img
              src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
              alt="Dil - Rram Tasildar Welcome Track"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isPlaying ? 'scale-110' : 'group-hover:scale-105'
              }`}
            />
            {isPlaying ? (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                <Disc className="w-5 h-5 text-[#FFD54F] animate-spin" />
              </div>
            ) : (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <Music className="w-4 h-4 text-white drop-shadow-sm" />
              </div>
            )}
          </div>

          {/* Track Details */}
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[9px] uppercase tracking-widest font-bold text-[#8B6508] bg-[#FFF9E6] px-2 py-0.5 rounded-full border border-[#D4AF37]/40 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
                Official Welcome Track
              </span>
              {isPlaying && (
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-300 animate-pulse">
                  <Volume2 className="w-2.5 h-2.5" />
                  Playing
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm font-bold text-[#1A1A1A] truncate tracking-tight flex items-center gap-1.5">
              <span>Dil</span>
              <span className="text-[#8B6508] font-normal text-xs">•</span>
              <span className="text-xs text-[#555] font-semibold">Rram Tasildar</span>
            </p>
            <p className="text-[10.5px] text-[#7A6B53] truncate font-medium">
              Tinsel Town Entertainment Anthem
            </p>
          </div>
        </div>

        {/* Right Side: Play / Stop Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            id="btn-toggle-welcome-voice"
            onClick={handleTogglePlay}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm active:scale-95 border ${
              isPlaying
                ? 'bg-rose-600 hover:bg-rose-700 text-white border-rose-500 shadow-[0_2px_10px_rgba(225,29,72,0.3)]'
                : 'bg-[#1A1A1A] text-[#FFF3B0] hover:bg-[#D4AF37] hover:text-[#1A1A1A] border-[#D4AF37]/60 shadow-[0_2px_12px_rgba(212,175,55,0.2)]'
            }`}
          >
            {isPlaying ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Stop</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                <span>Play Welcome</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Active State Details & Equalizer */}
      {isPlaying && (
        <div className="mt-3 pt-2.5 border-t border-[#D4AF37]/30 space-y-2.5">
          {/* Animated Waveform & Track Title */}
          <div className="flex items-center justify-between gap-3 bg-[#FFFBF0] px-3 py-2 rounded-xl border border-[#D4AF37]/30">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <p className="text-[11px] font-bold text-[#8B6508] truncate">
                Now Playing: <span className="text-[#1A1A1A]">Dil - Rram Tasildar</span>
              </p>
            </div>

            {/* Equalizer Visualizer Bars */}
            <div className="flex items-center gap-1 h-4 overflow-hidden shrink-0">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-[#D4AF37]"
                  style={{
                    height: `${h}px`,
                    animation: `waveformBar 0.4s ease-in-out infinite alternate`,
                    animationDelay: `${(i * 0.04).toFixed(2)}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Player Actions: Watch Video Toggle & YouTube Music Link */}
          <div className="flex items-center justify-between gap-2 text-xs pt-0.5">
            <button
              onClick={() => setShowVideo((prev) => !prev)}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8B6508] hover:text-[#1A1A1A] transition-colors cursor-pointer bg-white px-2.5 py-1 rounded-lg border border-[#D4AF37]/40 shadow-2xs"
            >
              <span>{showVideo ? 'Hide Video' : 'Show Video'}</span>
              {showVideo ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <a
              href={YT_MUSIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 hover:text-rose-700 transition-colors bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg border border-rose-200 shadow-2xs"
            >
              <span>YouTube Music</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* YouTube Video Embed */}
          <div className={`overflow-hidden transition-all duration-300 rounded-xl ${showVideo ? 'mt-2' : 'h-0 opacity-0 pointer-events-none'}`}>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#D4AF37]/50 shadow-md bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&enablejsapi=1&rel=0`}
                title="Dil - Rram Tasildar Welcome Track"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Hidden Background YouTube Player if Video Drawer is Closed */}
          {!showVideo && (
            <div className="w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&enablejsapi=1&rel=0`}
                title="Dil - Rram Tasildar Audio Stream"
                allow="autoplay; encrypted-media"
                className="w-1 h-1"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
