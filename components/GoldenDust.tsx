'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  r: number;
  s: number;
  o: number;
  ph: number;
}

export function GoldenDust() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isPaused = false;
    let w = 0;
    let h = 0;
    const particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 46; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.6 + 0.4,
        s: Math.random() * 0.00025 + 0.00008,
        o: Math.random() * 0.5 + 0.1,
        ph: Math.random() * 6,
      });
    }

    function loop(t: number) {
      if (!isPaused && ctx) {
        const dpr = window.devicePixelRatio || 1;
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.y -= p.s;
          if (p.y < -0.02) {
            p.y = 1.02;
            p.x = Math.random();
          }
          const xx = (p.x + Math.sin(t / 4000 + p.ph) * 0.01) * w;
          const yy = p.y * h;
          ctx.beginPath();
          ctx.arc(xx, yy, p.r * dpr, 0, 7);
          ctx.fillStyle = `rgba(246,160,90,${p.o * (0.6 + 0.4 * Math.sin(t / 900 + p.ph))})`;
          ctx.fill();
        }
      }
      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    function onVisibilityChange() {
      isPaused = document.hidden;
    }

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return <canvas id="dust" ref={canvasRef} aria-hidden="true" />;
}
