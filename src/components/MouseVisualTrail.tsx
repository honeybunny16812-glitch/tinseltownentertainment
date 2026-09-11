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

    let lastSpawnTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      lastPosRef.current = { x, y };

      // Throttle: spawn at most one delicate subtle particle every 60ms and only on meaningful movement
      if (dist > 8 && now - lastSpawnTime > 60) {
        lastSpawnTime = now;
        const isNote = Math.random() > 0.6; // mostly tiny sparkles, occasional note

        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.8 - (dx * 0.04),
          vy: -0.6 - Math.random() * 0.5,
          size: isNote ? Math.random() * 4 + 8 : Math.random() * 2 + 1.2,
          opacity: 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          char: isNote ? noteCharacters[Math.floor(Math.random() * noteCharacters.length)] : undefined,
          rotation: (Math.random() - 0.5) * 0.5,
          vRot: (Math.random() - 0.5) * 0.04,
          life: 0,
          maxLife: Math.random() * 10 + 20, // gently fades out quickly
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Small, elegant burst of 4 soft sparkles on click
      for (let i = 0; i < 4; i++) {
        const angle = (Math.PI * 2 * i) / 4 + Math.random() * 0.5;
        const velocity = Math.random() * 1.5 + 1;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          size: Math.random() > 0.5 ? 9 : 2,
          opacity: 0.55,
          color: colors[Math.floor(Math.random() * colors.length)],
          char: Math.random() > 0.5 ? '✨' : undefined,
          rotation: Math.random() * Math.PI,
          vRot: (Math.random() - 0.5) * 0.08,
          life: 0,
          maxLife: 22,
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
          ctx.shadowBlur = 4;
          ctx.fillText(p.char, -p.size / 2, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = '#FFF3B0';
          ctx.shadowBlur = 3;
          ctx.fill();
        }

        ctx.restore();
      }

      if (particles.length > 25) {
        particlesRef.current = particles.slice(particles.length - 25);
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
