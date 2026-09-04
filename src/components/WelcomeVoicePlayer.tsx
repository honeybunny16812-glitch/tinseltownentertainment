import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Sparkles } from 'lucide-react';

export const WelcomeVoicePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Load available speech synthesis voices
  useEffect(() => {
    const loadVoices = () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
      }
    };

    loadVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Play a delicate, sweet fairy sparkle chime before the voice
  const playCuteChime = () => {
    if (isMuted || volume === 0) return;
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
      chimeGain.gain.setValueAtTime(0.12 * volume, now);
      chimeGain.connect(ctx.destination);

      // Sweet sparkling bell arpeggio (C6, E6, G6, B6, C7)
      const frequencies = [1046.5, 1318.51, 1567.98, 1975.53, 2093.0];
      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        g.gain.setValueAtTime(0.001, now);
        g.gain.exponentialRampToValueAtTime(0.15, now + idx * 0.05 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.6);

        osc.connect(g);
        g.connect(chimeGain);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.65);
      });
    } catch {
      // Audio context fallback
    }
  };

  const stopVoice = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const playWelcomeVoice = () => {
    if (isPlaying) {
      stopVoice();
      return;
    }

    if (!('speechSynthesis' in window)) {
      alert('Speech audio is not supported in this browser.');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    playCuteChime();
    setIsPlaying(true);

    const welcomeMessage =
      'Welcome to Tinsel Town Entertainment Inc.';

    const utterance = new SpeechSynthesisUtterance(welcomeMessage);
    utteranceRef.current = utterance;

    utterance.volume = isMuted ? 0 : volume;
    utterance.rate = 1.0; // Sweet, bright, natural pace
    utterance.pitch = 1.32; // Cute, cheerful, charming female pitch
    utterance.lang = 'en-US';

    // Pick a sweet, cute female voice
    const voices = window.speechSynthesis.getVoices();
    const cuteFemaleVoice =
      voices.find(
        (v) =>
          (v.lang.startsWith('en') || v.lang.includes('en')) &&
          (v.name.includes('Samantha') ||
            v.name.includes('Victoria') ||
            v.name.includes('Zira') ||
            v.name.includes('Karen') ||
            v.name.includes('Google US English') ||
            v.name.includes('Natural') ||
            v.name.includes('Female') ||
            v.name.includes('Tessa') ||
            v.name.includes('Moira'))
      ) ||
      voices.find((v) => v.lang.startsWith('en-US')) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      voices[0];

    if (cuteFemaleVoice) {
      utterance.voice = cuteFemaleVoice;
    }

    utterance.onend = () => {
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Chromium speech synthesis bug workaround: keep synthesis active
    intervalRef.current = window.setInterval(() => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 3000);

    // Speak after the sweet sparkle chime
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 220);
  };

  // 14 visualizer bars
  const bars = [12, 22, 16, 28, 20, 32, 16, 26, 18, 30, 14, 24, 18, 12];

  return (
    <div
      id="welcome-voice-player"
      className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(212,175,55,0.12)] max-w-xl transition-all duration-300 hover:border-[#D4AF37]"
    >
      <div className="flex items-center justify-between gap-3">
        {/* Left Side: Clean Title without speaker icon */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#FFF9E6] border border-[#D4AF37]/40 flex items-center justify-center text-[#B38728] shrink-0 shadow-2xs">
            <Sparkles className={`w-4 h-4 ${isPlaying ? 'animate-spin text-[#D4AF37]' : ''}`} />
          </div>

          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-bold text-[#1A1A1A] truncate tracking-tight">
              Tinsel Town Entertainment Inc.
            </p>
            <p className="text-[11px] text-[#7A6B53] truncate font-medium">
              Click to hear official audio welcome
            </p>
          </div>
        </div>

        {/* Right Side: Play/Stop Button */}
        <button
          id="btn-toggle-welcome-voice"
          onClick={playWelcomeVoice}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm active:scale-95 shrink-0 border ${
            isPlaying
              ? 'bg-rose-600 hover:bg-rose-700 text-white border-rose-500'
              : 'bg-[#1A1A1A] text-[#FFF3B0] hover:bg-[#D4AF37] hover:text-[#1A1A1A] border-[#D4AF37]/50'
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

      {/* Subtle Visualizer Bar */}
      {isPlaying && (
        <div className="mt-2.5 pt-2 border-t border-[#D4AF37]/20 flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold text-[#8B6508] tracking-wider uppercase font-mono">
            Welcome to Tinsel Town Entertainment Inc.
          </span>

          <div className="flex items-center gap-1 h-4 overflow-hidden">
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
      )}
    </div>
  );
};
