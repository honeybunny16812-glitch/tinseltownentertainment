import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  hue: number;
}

interface Note {
  x: number;
  y: number;
  symbol: string;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseRef.current.targetX = (clientX - width / 2) * 0.05;
      mouseRef.current.targetY = (clientY - height / 2) * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize Glitter Particles
    const particleCount = 45;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.5 - 0.2,
        opacity: Math.random() * 0.6 + 0.2,
        maxOpacity: Math.random() * 0.4 + 0.4,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        hue: Math.random() > 0.6 ? 43 : 48, // Gold tone hues
      });
    }

    // Initialize Floating Musical Notes
    const noteSymbols = ['♪', '♫', '♬', '𝄞', '♩'];
    const notesCount = 12;
    const notes: Note[] = [];
    for (let i = 0; i < notesCount; i++) {
      notes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)],
        size: Math.random() * 14 + 14,
        speedY: -Math.random() * 0.4 - 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.35 + 0.15,
      });
    }

    // Luxury Bokeh orbs (Soft golden glow spheres)
    const bokehCount = 6;
    const bokehOrbs = Array.from({ length: bokehCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.8,
      radius: Math.random() * 120 + 80,
      opacity: Math.random() * 0.08 + 0.04,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // 1. Draw Bokeh Orbs
      bokehOrbs.forEach((orb) => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;

        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        const gradient = ctx.createRadialGradient(
          orb.x + mouseRef.current.x * 0.5,
          orb.y + mouseRef.current.y * 0.5,
          0,
          orb.x + mouseRef.current.x * 0.5,
          orb.y + mouseRef.current.y * 0.5,
          orb.radius
        );
        gradient.addColorStop(0, `rgba(212, 175, 55, ${orb.opacity})`);
        gradient.addColorStop(0.5, `rgba(230, 200, 122, ${orb.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 253, 248, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(
          orb.x + mouseRef.current.x * 0.5,
          orb.y + mouseRef.current.y * 0.5,
          orb.radius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });

      // 2. Draw Glitter Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < 0.1) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const posX = p.x + mouseRef.current.x;
        const posY = p.y + mouseRef.current.y;

        // Sparkle cross or circle
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0, p.opacity)})`;
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(posX, posY, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra twinkle cross on larger particles
        if (p.size > 2) {
          ctx.strokeStyle = `rgba(255, 243, 176, ${Math.max(0, p.opacity * 0.9)})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(posX - p.size * 2.2, posY);
          ctx.lineTo(posX + p.size * 2.2, posY);
          ctx.moveTo(posX, posY - p.size * 2.2);
          ctx.lineTo(posX, posY + p.size * 2.2);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      });

      // 3. Draw Floating Musical Notes
      notes.forEach((note) => {
        note.y += note.speedY;
        note.x += note.speedX;
        note.rotation += note.rotationSpeed;

        if (note.y < -30) {
          note.y = height + 30;
          note.x = Math.random() * width;
        }
        if (note.x < -30) note.x = width + 30;
        if (note.x > width + 30) note.x = -30;

        const posX = note.x + mouseRef.current.x * 1.5;
        const posY = note.y + mouseRef.current.y * 1.5;

        ctx.save();
        ctx.translate(posX, posY);
        ctx.rotate(note.rotation);
        ctx.font = `${note.size}px "Cinzel", "Times New Roman", serif`;
        ctx.fillStyle = `rgba(212, 175, 55, ${note.opacity})`;
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = 6;
        ctx.fillText(note.symbol, -note.size / 2, note.size / 2);
        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      id="particles-canvas"
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
};
