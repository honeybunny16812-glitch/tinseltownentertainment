import React, { useState, useEffect, useRef } from 'react';
import {
  Music,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Sparkles,
  Disc3,
  X,
  Radio,
  Sliders,
  SkipForward,
  Heart,
  MessageCircle,
} from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  era: string;
  tempo: number; // BPM
  scale: number[]; // Frequencies for melodic loops
  chordProgression: number[][]; // Base chords
}

const TRACKS: Track[] = [
  {
    id: 'symphony_theme',
    title: 'Bollywood Milestones Grand Overture',
    artist: 'Symphony Orchestra & Live Band',
    era: 'Tour 2027 Theme',
    tempo: 78,
    scale: [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25], // C Major Pentatonic / Raga Bhupali vibes
    chordProgression: [
      [130.81, 164.81, 196.0], // C
      [110.0, 130.81, 164.81], // Am
      [87.31, 110.0, 130.81],  // F
      [98.0, 123.47, 146.83],  // G
    ],
  },
  {
    id: 'golden_nostalgia',
    title: 'Golden Era Romance (50s-70s Classics)',
    artist: 'Live Sitar, Flute & Strings',
    era: 'Evergreen Melodies',
    tempo: 64,
    scale: [220.0, 246.94, 277.18, 329.63, 369.99, 440.0, 493.88], // A Major / Yaman mood
    chordProgression: [
      [110.0, 138.59, 164.81], // A
      [98.0, 123.47, 146.83],  // G
      [73.42, 92.5, 110.0],    // D
      [82.41, 103.83, 123.47], // E
    ],
  },
  {
    id: 'arena_celebration',
    title: '90s & Modern Bollywood Live Mashup',
    artist: 'Snehaa, Rram & The Rhythm Section',
    era: 'Concert Finale',
    tempo: 102,
    scale: [293.66, 329.63, 369.99, 440.0, 493.88, 587.33], // D Major / Bilawal
    chordProgression: [
      [146.83, 185.0, 220.0],  // D
      [123.47, 146.83, 185.0], // Bm
      [98.0, 123.47, 146.83],  // G
      [110.0, 138.59, 164.81], // A
    ],
  },
];

export const FloatingMusicPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.65);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const noteStepRef = useRef<number>(0);

  const currentTrack = TRACKS[currentTrackIndex];

  // Initialize or get AudioContext
  const getAudioContext = (): AudioContext => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      
      const mainGain = audioCtxRef.current.createGain();
      mainGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.28, audioCtxRef.current.currentTime);
      mainGain.connect(audioCtxRef.current.destination);
      gainNodeRef.current = mainGain;
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Update volume smoothly
  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const targetGain = isMuted ? 0 : volume * 0.28;
      gainNodeRef.current.gain.setTargetAtTime(targetGain, audioCtxRef.current.currentTime, 0.05);
    }
  }, [volume, isMuted]);

  // Stop music synthesizer loop
  const stopAudioLoop = () => {
    if (synthIntervalRef.current) {
      window.clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  // Start realistic ambient musical instrument harmonic notes (Bollywood cinematic atmosphere)
  const startAudioLoop = (track: Track) => {
    stopAudioLoop();
    const ctx = getAudioContext();
    if (!gainNodeRef.current) return;

    const intervalMs = (60 / track.tempo) * 1000 * 0.5; // 8th note rhythm

    synthIntervalRef.current = window.setInterval(() => {
      if (!ctx || ctx.state === 'suspended') return;
      const now = ctx.currentTime;
      const step = noteStepRef.current;

      // 1. Play Soft Atmospheric Pad Chord every 8 steps
      if (step % 8 === 0) {
        const chordIdx = Math.floor((step / 8) % track.chordProgression.length);
        const chord = track.chordProgression[chordIdx];
        chord.forEach((freq) => {
          const padOsc = ctx.createOscillator();
          const padGain = ctx.createGain();
          padOsc.type = 'sine';
          padOsc.frequency.setValueAtTime(freq, now);

          padGain.gain.setValueAtTime(0.001, now);
          padGain.gain.linearRampToValueAtTime(0.035, now + 0.4);
          padGain.gain.exponentialRampToValueAtTime(0.0001, now + (intervalMs * 8) / 1000);

          padOsc.connect(padGain);
          if (gainNodeRef.current) padGain.connect(gainNodeRef.current);
          padOsc.start(now);
          padOsc.stop(now + (intervalMs * 8) / 1000 + 0.1);
        });
      }

      // 2. Play Melodic Sitar / Pluck Acoustic Note
      const melodyFreq = track.scale[(step * 3 + (step % 5)) % track.scale.length];
      const melodyOsc = ctx.createOscillator();
      const melodyGain = ctx.createGain();

      melodyOsc.type = step % 2 === 0 ? 'triangle' : 'sine';
      melodyOsc.frequency.setValueAtTime(melodyFreq, now);

      // Add harmonic sparkle overtone
      melodyGain.gain.setValueAtTime(0.001, now);
      melodyGain.gain.linearRampToValueAtTime(0.065, now + 0.02);
      melodyGain.gain.exponentialRampToValueAtTime(0.0001, now + (intervalMs * 1.5) / 1000);

      melodyOsc.connect(melodyGain);
      if (gainNodeRef.current) melodyGain.connect(gainNodeRef.current);

      melodyOsc.start(now);
      melodyOsc.stop(now + (intervalMs * 1.5) / 1000 + 0.05);

      // 3. Acoustic Tabla / Beat Pulse (Warm low resonance on beat 1 and 3)
      if (step % 4 === 0) {
        const bassOsc = ctx.createOscillator();
        const bassGain = ctx.createGain();
        bassOsc.type = 'sine';
        bassOsc.frequency.setValueAtTime(82.4, now); // Low E/C resonance
        bassOsc.frequency.exponentialRampToValueAtTime(45.0, now + 0.2);

        bassGain.gain.setValueAtTime(0.08, now);
        bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        bassOsc.connect(bassGain);
        if (gainNodeRef.current) bassGain.connect(gainNodeRef.current);

        bassOsc.start(now);
        bassOsc.stop(now + 0.35);
      }

      noteStepRef.current = (step + 1) % 64;
    }, intervalMs);
  };

  // Toggle playback
  const togglePlay = () => {
    if (isPlaying) {
      stopAudioLoop();
      setIsPlaying(false);
    } else {
      startAudioLoop(currentTrack);
      setIsPlaying(true);
    }
  };

  // Switch Track
  const handleNextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % TRACKS.length;
    setCurrentTrackIndex(nextIdx);
    noteStepRef.current = 0;
    if (isPlaying) {
      startAudioLoop(TRACKS[nextIdx]);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAudioLoop();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Luxury Concert Music Player Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-3xl bg-[#1A1A1A]/95 backdrop-blur-2xl border-2 border-[#D4AF37] shadow-[0_20px_60px_rgba(212,175,55,0.35)] p-5 text-[#FFF3B0] animate-in fade-in slide-in-from-bottom-4 duration-300 relative overflow-hidden">
          
          {/* Ambient Gold Glow inside player */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-3 mb-3.5 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
                Live Concert Audio Experience
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Album Vinyl / Live Band Visual Graphic */}
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="relative shrink-0">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-tr from-[#1A1A1A] via-[#3A2D12] to-[#D4AF37] p-1 border border-[#D4AF37] shadow-lg flex items-center justify-center ${
                  isPlaying ? 'animate-[spin_6s_linear_infinite]' : ''
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/60 flex items-center justify-center">
                  <Disc3 className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>

              {/* Music notes emitting when playing */}
              {isPlaying && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D4AF37] text-[#1A1A1A] flex items-center justify-center text-[10px] font-bold animate-bounce shadow-md">
                  ♫
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#D4AF37] px-2 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 inline-block mb-1">
                {currentTrack.era}
              </span>
              <h4 className="text-sm font-bold text-white truncate font-serif">
                {currentTrack.title}
              </h4>
              <p className="text-xs text-stone-300 truncate">
                {currentTrack.artist}
              </p>
            </div>

            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isLiked ? 'text-rose-400 scale-110' : 'text-stone-400 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-400' : ''}`} />
            </button>
          </div>

          {/* Animated Gold Audio Visualizer Bars */}
          <div className="flex items-end justify-center gap-1.5 h-8 bg-black/40 rounded-xl p-2 border border-[#D4AF37]/20 mb-4">
            {[40, 75, 100, 60, 90, 45, 80, 100, 70, 50, 85, 60, 95, 40].map((h, i) => (
              <span
                key={i}
                style={{
                  height: isPlaying ? `${Math.max(15, (h * (i % 2 === 0 ? 1 : 0.75)))}%` : '20%',
                  transition: 'height 0.25s ease-in-out',
                }}
                className={`w-1.5 rounded-full ${
                  isPlaying
                    ? 'bg-gradient-to-t from-[#8B6508] via-[#D4AF37] to-[#FFF3B0]'
                    : 'bg-stone-600'
                }`}
              />
            ))}
          </div>

          {/* Primary Audio Controls */}
          <div className="flex items-center justify-between gap-3 mb-4">
            
            {/* Play / Pause Main Button */}
            <button
              onClick={togglePlay}
              className="flex-1 py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] text-[#1A1A1A] font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-[#1A1A1A]" />
                  <span>Pause Symphony</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-[#1A1A1A]" />
                  <span>Play Concert Music</span>
                </>
              )}
            </button>

            {/* Next Track Button */}
            <button
              onClick={handleNextTrack}
              title="Next Track"
              className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-[#FFF3B0] border border-[#D4AF37]/40 transition-colors cursor-pointer"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Volume Slider & Mute */}
          <div className="flex items-center gap-2.5 pt-2 border-t border-[#D4AF37]/20 text-xs text-stone-300">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="w-full accent-[#D4AF37] bg-stone-700 h-1.5 rounded-lg cursor-pointer"
            />
            <span className="font-mono text-[10px] text-stone-400 w-8 text-right">
              {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
            </span>
          </div>

          {/* Direct Organizer Contact inside Player */}
          <div className="mt-3.5 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[11px]">
            <span className="text-stone-400 font-serif italic">Tour Inquiries?</span>
            <a
              href="https://wa.me/15628601135?text=Hello%20Tinsel%20Town%20Entertainment,%20I%20am%20listening%20to%20the%20Tour%20Music%20and%20want%20to%20inquire%20about%20tickets."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Babu Patel</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="relative group">
        {/* Animated Gold Glow Aura */}
        <div
          className={`absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#AA771C] ${
            isPlaying ? 'opacity-90 blur-md animate-pulse' : 'opacity-60 blur-xs group-hover:opacity-100'
          } transition duration-300`}
        />

        <div className="relative flex items-center">
          
          {/* Label Tooltip for Desktop */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden sm:flex items-center gap-2 mr-2.5 px-4 py-2 rounded-full bg-[#1A1A1A]/90 backdrop-blur-md border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#FFF3B0] shadow-xl hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-all cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Disc3 className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" />
                <span>Now Playing: {currentTrack.title.slice(0, 18)}...</span>
              </>
            ) : (
              <>
                <Music className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Concert Music</span>
              </>
            )}
          </button>

          {/* Floating Music Button Icon */}
          <button
            onClick={() => {
              if (!isOpen) setIsOpen(true);
              else togglePlay();
            }}
            aria-label="Toggle Tour Concert Music"
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1A1A1A] via-[#332611] to-[#D4AF37] text-[#FFF3B0] flex items-center justify-center shadow-[0_8px_30px_rgba(212,175,55,0.5)] border-2 border-[#D4AF37] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer relative"
          >
            {isPlaying ? (
              <div className="flex items-center justify-center">
                <Disc3 className="w-7 h-7 text-[#FFF3B0] animate-[spin_4s_linear_infinite]" />
              </div>
            ) : (
              <Music className="w-7 h-7 text-[#FFF3B0]" />
            )}

            {/* Pulsing indicator dot */}
            {isPlaying && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#1A1A1A] animate-ping" />
            )}
          </button>
        </div>
      </div>

    </div>
  );
};
