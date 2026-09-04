import React from 'react';

export const SpotlightBeams: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left Artistic Warm Gold Halo */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-[#E6C87A33] to-transparent rounded-full blur-3xl" />

      {/* Top Right Radial Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,_#D4AF3715,_transparent_70%)]" />

      {/* Bottom Soft Ivory Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-[#F9F6EF] to-transparent" />

      {/* Diagonal Artistic Ray Lines */}
      <div className="absolute top-0 left-1/4 w-[2px] h-[1000px] bg-gradient-to-b from-transparent via-[#D4AF3744] to-transparent rotate-12 origin-top" />
      <div className="absolute top-0 left-1/3 w-[1px] h-[1000px] bg-gradient-to-b from-transparent via-[#D4AF3733] to-transparent rotate-12 origin-top" />
      <div className="absolute top-0 right-1/4 w-[1px] h-[900px] bg-gradient-to-b from-transparent via-[#D4AF3722] to-transparent -rotate-12 origin-top" />

      {/* Watermark Serif Musical Notes */}
      <div
        className="absolute top-36 right-16 sm:right-28 text-[#D4AF3722] text-6xl sm:text-7xl select-none"
        style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
      >
        ♫
      </div>
      <div
        className="absolute bottom-48 right-1/3 text-[#D4AF3715] text-8xl select-none"
        style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
      >
        ♪
      </div>
      <div
        className="absolute top-24 left-16 text-[#D4AF3711] text-5xl select-none"
        style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
      >
        𝄞
      </div>

      {/* Glowing Star Points */}
      <div className="absolute top-20 right-1/3 w-2 h-2 bg-[#D4AF37] rounded-full opacity-40 shadow-[0_0_10px_#D4AF37]" />
      <div className="absolute top-80 right-1/4 w-3 h-3 bg-[#E6C87A] rounded-full opacity-30 shadow-[0_0_15px_#E6C87A]" />
      <div className="absolute bottom-40 right-10 w-2 h-2 bg-[#D4AF37] rounded-full opacity-50 shadow-[0_0_8px_#D4AF37]" />

      {/* Sweeping Golden Spotlights */}
      <div
        className="absolute -top-32 -left-20 w-[550px] h-[900px] origin-top animate-beam-left"
        style={{
          background:
            'conic-gradient(from 120deg at 10% 0%, rgba(212, 175, 55, 0.18) 0deg, rgba(230, 200, 122, 0.06) 25deg, transparent 45deg)',
          filter: 'blur(30px)',
        }}
      />
      <div
        className="absolute -top-40 right-1/4 w-[600px] h-[1000px] origin-top animate-beam-right"
        style={{
          background:
            'conic-gradient(from 220deg at 90% 0%, rgba(212, 175, 55, 0.14) 0deg, rgba(255, 243, 176, 0.06) 30deg, transparent 50deg)',
          filter: 'blur(35px)',
        }}
      />

      {/* Subtle bottom stage horizon divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </div>
  );
};
