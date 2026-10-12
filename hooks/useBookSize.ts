'use client';

import { useState, useEffect, useRef } from 'react';

export type BookMode = 'desk' | 'mob';

export interface BookSizeState {
  pw: number;
  ph: number;
  mode: BookMode;
  isReady: boolean;
}

export function useBookSize(
  currentPage: number,
  onModeChange?: (newMode: BookMode, prevMode: BookMode) => void
): BookSizeState {
  const [size, setSize] = useState<BookSizeState>({
    pw: 400,
    ph: 570,
    mode: 'desk',
    isReady: false,
  });

  const prevModeRef = useRef<BookMode | null>(null);

  useEffect(() => {
    function calculateSize() {
      if (typeof window === 'undefined') return;
      const W = window.innerWidth;
      const H = window.innerHeight;
      const desk = W >= 860 && W / H > 0.95;
      const m: BookMode = desk ? 'desk' : 'mob';

      let pw: number;
      let ph: number;

      if (desk) {
        const avH = H - 64 - 72 - 44;
        ph = Math.min(avH, (W * 0.88 / 2) / 0.7, 900);
        pw = ph * 0.7;
      } else {
        const avH = H - 58 - 70 - 16;
        pw = Math.min(W - 28 - 4, 560);
        ph = Math.min(avH, pw / 0.6);
        if (ph < pw * 1.2) {
          pw = Math.min(pw, ph * 0.78);
        }
      }

      document.documentElement.style.setProperty('--pw', `${pw.toFixed(1)}px`);
      document.documentElement.style.setProperty('--ph', `${ph.toFixed(1)}px`);
      document.body.classList.toggle('mobile', !desk);

      if (prevModeRef.current && prevModeRef.current !== m) {
        onModeChange?.(m, prevModeRef.current);
      }
      prevModeRef.current = m;

      setSize({
        pw,
        ph,
        mode: m,
        isReady: true,
      });
    }

    calculateSize();

    let timeoutId: NodeJS.Timeout;
    function onResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateSize, 120);
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, [onModeChange]);

  return size;
}
