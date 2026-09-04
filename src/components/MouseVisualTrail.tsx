import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  char?: string;
  rotation: number;
  vRot: number;
  life: number;
  maxLife: number;
}

export const MouseVisualTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const noteCharacters = ['♪', '♫', '♬', '✨', '𝄞', '♩', '✦'];
    const colors = ['#D4AF37', '#FFF3B0', '#F3E5AB', '#E6C87A', '#AA771C', '#FFD700'];

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      lastPosRef.current = { x, y };

      if (speed > 2) {
        // Spawn glowing golden music notes & stardust trails (Silent visual effect)
        const count = Math.min(Math.floor(speed / 7) + 1, 4);
        for (let i = 0; i < count; i++) {
          const isNote = Math.random() > 0.4;
          particlesRef.current.push({
            x: x + (Math.random() - 0.5) * 12,
            y: y + (Math.random() - 0.5) * 12,
            vx: (Math.random() - 0.5) * 1.8 - (dx * 0.12),
            vy: (Math.random() - 0.5) * 1.8 - 1.4 - (dy * 0.12),
            size: isNote ? Math.random() * 12 + 11 : Math.random() * 3.5 + 1.5,
            opacity: 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            char: isNote ? noteCharacters[Math.floor(Math.random() * noteCharacters.length)] : undefined,
            rotation: Math.random() * Math.PI * 2,
            vRot: (Math.random() - 0.5) * 0.08,
            life: 0,
            maxLife: Math.random() * 25 + 30,
          });
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Burst of floating notes & sparkles on click
      for (let i = 0; i < 14; i++) {
        const angle = (Math.PI * 2 * i) / 14;
        const velocity = Math.random() * 3 + 2;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          size: Math.random() > 0.4 ? Math.random() * 14 + 11 : Math.random() * 4 + 2,
          opacity: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          char: Math.random() > 0.35 ? noteCharacters[Math.floor(Math.random() * noteCharacters.length)] : undefined,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.15,
          life: 0,
          maxLife: 42,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.035; // Gentle upward/gravity floating drift
        p.rotation += p.vRot;
        p.life++;

        const progress = p.life / p.maxLife;
        p.opacity = 1 - progress;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.char) {
          ctx.font = `bold ${p.size}px serif`;
          ctx.fillStyle = p.color;
          ctx.shadowColor = '#D4AF37';
          ctx.shadowBlur = 8;
          ctx.fillText(p.char, -p.size / 2, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = '#FFF3B0';
          ctx.shadowBlur = 6;
          ctx.fill();
        }

        ctx.restore();
      }

      if (particles.length > 90) {
        particlesRef.current = particles.slice(particles.length - 90);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
};
