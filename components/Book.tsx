'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import { useBookSize, type BookMode } from '@/hooks/useBookSize';
import { playPaperRustle } from '@/lib/sound';

import { Page0Cover } from './pages/Page0Cover';
import { Page1Opening } from './pages/Page1Opening';
import { Page2Toc } from './pages/Page2Toc';
import { Page3Book3D } from './pages/Page3Book3D';
import { Page4BookDetails } from './pages/Page4BookDetails';
import { Page5Timeline } from './pages/Page5Timeline';
import { Page6Viriato } from './pages/Page6Viriato';
import { Page7Seal } from './pages/Page7Seal';
import { Page8Countdown } from './pages/Page8Countdown';
import { Page9PartnerNetwork } from './pages/Page9PartnerNetwork';
import { Page10PartnerList } from './pages/Page10PartnerList';
import { Page11Contact } from './pages/Page11Contact';
import { Page12MailForm } from './pages/Page12MailForm';
import { Page13Colophon } from './pages/Page13Colophon';
import { Page14Endpaper } from './pages/Page14Endpaper';
import { Page15BackCover } from './pages/Page15BackCover';
import { BlankFace } from './BlankFace';

import { TopBar } from './TopBar';
import { BottomBar } from './BottomBar';
import { GoldenDust } from './GoldenDust';
import { Caetra } from './svg/Caetra';

export interface BookProps {
  initialPage?: number;
  initialRoute?: string;
}

interface PageMeta {
  label: string;
  ch: number;
  kind?: string;
}

const PAGE_METADATA: PageMeta[] = [
  { label: 'Capa Mágica', ch: 0, kind: 'cover' },
  { label: 'Abertura', ch: 0 },
  { label: 'Sumário de Aventuras', ch: 0 },
  { label: 'Capítulo I · O Livro', ch: 1 },
  { label: 'Capítulo I · O Segredo', ch: 1 },
  { label: 'Capítulo II · A Nossa História', ch: 2 },
  { label: 'Capítulo II · O Guardião Viriato', ch: 2 },
  { label: 'Capítulo III · O Próximo Mistério', ch: 3 },
  { label: 'Capítulo III · Contagem Decrescente', ch: 3 },
  { label: 'Capítulo IV · Rede de Amigos', ch: 4 },
  { label: 'Capítulo IV · Quem nos Apoia', ch: 4 },
  { label: 'Capítulo V · Contacto', ch: 5 },
  { label: 'Capítulo V · Correio da Bia', ch: 5 },
  { label: 'Colofão & Dedicatória', ch: 6 },
  { label: 'Guardas · O Teu Livro', ch: 6, kind: 'dark' },
  { label: 'Contracapa', ch: 6, kind: 'cover' },
];

const NP = 16;

const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function getRouteForPage(p: number): string {
  if (p <= 2) return '/';
  if (p <= 4) return '/o-livro';
  if (p <= 6) return '/historia';
  if (p <= 8) return '/proximo-lancamento';
  if (p <= 10) return '/parceiros';
  return '/contacto';
}

function pageOf(f: number, m: BookMode): number {
  return m === 'desk' ? (f === 0 ? 0 : Math.min(f * 2 - 1, NP - 1)) : Math.min(f, NP - 1);
}

function flipsFor(page: number, m: BookMode, numLeaves: number): number {
  return m === 'desk' ? Math.min((page + 1) >> 1, numLeaves) : Math.min(page, numLeaves - 1);
}

function maxF(m: BookMode, numLeaves: number): number {
  return m === 'desk' ? numLeaves : numLeaves - 1;
}

export function Book({ initialPage = 0, initialRoute = '/' }: BookProps) {
  // Sound & Seal states
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [sealBroken, setSealBroken] = useState<boolean>(false);
  const [activePartner, setActivePartner] = useState<number | null>(null);

  // Dynamic route tracking
  const [currentRoute, setCurrentRoute] = useState<string>(initialRoute);

  // Mode and sizing
  const [mode, setMode] = useState<BookMode>('desk');
  const numLeaves = mode === 'desk' ? 8 : 16;

  // React state for flipped page
  const initialFlipped = flipsFor(initialPage, 'desk', 8);
  const [flipped, setFlipped] = useState<number>(initialFlipped);

  // Animation lock and dragging state
  const busyRef = useRef<boolean>(false);
  const bookRef = useRef<HTMLDivElement | null>(null);
  const stackRRef = useRef<HTMLDivElement | null>(null);
  const stackLRef = useRef<HTMLDivElement | null>(null);
  const ribbonRef = useRef<HTMLDivElement | null>(null);
  const leafRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Drag interaction state
  const dragRef = useRef<{
    x0: number;
    y0: number;
    side: 'l' | 'r';
    id: number;
    active: boolean;
    L: HTMLDivElement | null;
    dir: number;
    p: number;
    lx: number;
    lt: number;
    v: number;
  } | null>(null);
  const suppressClickRef = useRef<boolean>(false);

  // Responsive size hook
  const handleModeChange = useCallback(
    (newMode: BookMode, prevMode: BookMode) => {
      setMode(newMode);
      setFlipped((prevFlipped) => {
        const curPage = pageOf(prevFlipped, prevMode);
        const newTotalLeaves = newMode === 'desk' ? 8 : 16;
        return flipsFor(curPage, newMode, newTotalLeaves);
      });
    },
    []
  );

  const { pw } = useBookSize(pageOf(flipped, mode), handleModeChange);

  // Layout 3D book container and stacks
  const layoutBook = useCallback(
    (f: number, m: BookMode, currentPw: number) => {
      if (!bookRef.current) return;
      const totalLeaves = m === 'desk' ? 8 : 16;
      let tx = 0;
      if (m === 'desk') {
        if (f === 0) tx = -currentPw / 2;
        else if (f === totalLeaves) tx = currentPw / 2;
      } else {
        tx = 14 - (bookRef.current.offsetLeft + currentPw);
      }
      bookRef.current.style.transform = `translateX(${tx}px)`;

      const rem = totalLeaves - f;
      const done = f;
      if (stackRRef.current) {
        stackRRef.current.style.setProperty(
          '--rs',
          `${m === 'desk'
            ? rem > 0
              ? Math.max(2, rem * 1.1)
              : 0
            : Math.max(2, (totalLeaves - 1 - f) * 0.45)
          }px`
        );
      }
      if (stackLRef.current) {
        stackLRef.current.style.setProperty(
          '--ls',
          `${done > 0 && f < totalLeaves ? Math.max(2, done * 1.1) : 0}px`
        );
      }
      if (ribbonRef.current) {
        ribbonRef.current.style.opacity =
          m === 'desk' && f > 0 && f < totalLeaves ? '1' : '0';
      }
      if (typeof document !== 'undefined') {
        document.body.classList.toggle('closed', f === 0);
      }
    },
    []
  );

  // Direct transform helper on leaf ref
  const setP = useCallback((L: HTMLDivElement | null, p: number) => {
    if (!L) return;
    L.style.setProperty('--p', String(p));
    L.style.transform = `rotateY(${-180 * p}deg)`;
  }, []);

  // Tween animation between from and to without setState per frame
  const tween = useCallback(
    (L: HTMLDivElement | null, from: number, to: number, dur: number, delay = 0) => {
      return new Promise<void>((resolve) => {
        if (!L) {
          resolve();
          return;
        }
        const leaf = L;
        const reduce =
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const actualDur = reduce ? Math.min(dur, 180) : dur;

        setTimeout(() => {
          leaf.classList.add('moving');
          const t0 = performance.now();
          playPaperRustle(soundOn, 0.8 + Math.random() * 0.4);

          function step(now: number) {
            const t = Math.min(1, (now - t0) / actualDur);
            setP(leaf, from + (to - from) * ease(t));
            if (t < 1) {
              requestAnimationFrame(step);
            } else {
              leaf.classList.remove('moving');
              resolve();
            }
          }

          requestAnimationFrame(step);
        }, delay);
      });
    },
    [setP, soundOn]
  );

  // Flip navigation
  const goToFlip = useCallback(
    async (target: number, routeOverride?: string) => {
      const maxLimit = maxF(mode, numLeaves);
      const clampedTarget = Math.max(0, Math.min(maxLimit, target));
      if (busyRef.current || clampedTarget === flipped) return;
      busyRef.current = true;

      const dir = clampedTarget > flipped ? 1 : -1;
      const count = Math.abs(clampedTarget - flipped);
      const stagger = count > 1 ? Math.max(55, 240 / count) : 0;
      const dur = count > 1 ? 620 : 950;

      layoutBook(clampedTarget, mode, pw);

      const jobs: Promise<void>[] = [];
      for (let k = 0; k < count; k++) {
        const i = dir > 0 ? flipped + k : flipped - 1 - k;
        const L = leafRefs.current[i];
        if (L) {
          L.style.zIndex = String(500 + k);
          jobs.push(tween(L, dir > 0 ? 0 : 1, dir > 0 ? 1 : 0, dur, k * stagger));
        }
      }

      await Promise.all(jobs);

      setFlipped(clampedTarget);

      // Reset z-indices on all leaves
      leafRefs.current.forEach((L, i) => {
        if (!L) return;
        L.style.zIndex = String(i < clampedTarget ? i + 1 : numLeaves - i + 1);
        L.classList.remove('moving');
        setP(L, i < clampedTarget ? 1 : 0);
      });

      // Update URL with replaceState
      const curP = pageOf(clampedTarget, mode);
      const newRoute = routeOverride || getRouteForPage(curP);
      setCurrentRoute(newRoute);
      if (typeof window !== 'undefined' && window.location.pathname !== newRoute) {
        window.history.replaceState({ page: curP }, '', newRoute);
      }

      busyRef.current = false;
    },
    [flipped, layoutBook, mode, numLeaves, pw, setP, tween]
  );

  const next = useCallback(() => goToFlip(flipped + 1), [flipped, goToFlip]);
  const prev = useCallback(() => goToFlip(flipped - 1), [flipped, goToFlip]);

  const goToPage = useCallback(
    (page: number, route?: string) => {
      const targetF = flipsFor(page, mode, numLeaves);
      goToFlip(targetF, route);
    },
    [goToFlip, mode, numLeaves]
  );

  // Sync initial page position on load
  useEffect(() => {
    layoutBook(flipped, mode, pw);
  }, [flipped, layoutBook, mode, pw]);

  // Handle browser popstate (back/forward)
  useEffect(() => {
    function onPopState() {
      if (typeof window === 'undefined') return;
      const path = window.location.pathname;
      let targetPage = 0;
      if (path === '/o-livro') targetPage = 3;
      else if (path === '/historia') targetPage = 5;
      else if (path === '/proximo-lancamento') targetPage = 7;
      else if (path === '/parceiros') targetPage = 9;
      else if (path === '/contacto') targetPage = 11;
      goToPage(targetPage, path);
    }

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [goToPage]);

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === 'INPUT' ||
          e.target.tagName === 'TEXTAREA' ||
          e.target.tagName === 'SELECT')
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToFlip(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToFlip(maxF(mode, numLeaves));
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goToFlip, mode, next, numLeaves, prev]);

  // Pointer drag to flip
  useEffect(() => {
    const bookEl = bookRef.current;
    if (!bookEl) return;

    const INTERACTIVE = 'a,button:not(.corner),input,textarea,select,label,.seal,.b3d,.nd';

    function onPointerDown(e: PointerEvent) {
      if (busyRef.current || e.button > 0) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest(INTERACTIVE) && !target.closest('.corner')) return;

      const r = bookEl?.getBoundingClientRect();
      if (!r) return;
      const spine = r.left + r.width / 2;

      dragRef.current = {
        x0: e.clientX,
        y0: e.clientY,
        side: e.clientX > spine ? 'r' : 'l',
        id: e.pointerId,
        active: false,
        L: null,
        dir: 0,
        p: 0,
        lx: e.clientX,
        lt: performance.now(),
        v: 0,
      };
    }

    function onPointerMove(e: PointerEvent) {
      const drag = dragRef.current;
      if (!drag || e.pointerId !== drag.id) return;

      const dx = e.clientX - drag.x0;
      const dy = e.clientY - drag.y0;

      if (!drag.active) {
        if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy) * 1.2) {
          if (Math.abs(dy) > 14) dragRef.current = null;
          return;
        }

        const dir = dx < 0 ? 1 : -1;
        if (mode === 'desk') {
          if (dir === 1 && drag.side !== 'r') {
            dragRef.current = null;
            return;
          }
          if (dir === -1 && drag.side !== 'l') {
            dragRef.current = null;
            return;
          }
        }

        const maxLimit = maxF(mode, numLeaves);
        if (dir === 1 && flipped >= maxLimit) {
          dragRef.current = null;
          return;
        }
        if (dir === -1 && flipped <= 0) {
          dragRef.current = null;
          return;
        }

        drag.active = true;
        drag.dir = dir;
        busyRef.current = true;
        bookEl?.classList.add('dragging');

        const activeLeafIndex = dir === 1 ? flipped : flipped - 1;
        drag.L = leafRefs.current[activeLeafIndex];
        if (drag.L) {
          drag.L.style.zIndex = '900';
          drag.L.classList.add('moving');
        }

        if (dir === 1 && mode === 'desk' && flipped === 0) layoutBook(1, mode, pw);
        if (dir === -1 && mode === 'desk' && flipped === numLeaves) {
          layoutBook(numLeaves - 1, mode, pw);
        }

        playPaperRustle(soundOn, 0.6);
        try {
          bookEl?.setPointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      }

      const D = mode === 'desk' ? pw * 1.5 : pw * 0.95;
      const t = Math.max(0, Math.min(1, Math.abs(dx) / D));
      drag.p = drag.dir === 1 ? t : 1 - t;
      setP(drag.L, drag.p);

      const now = performance.now();
      drag.v = (e.clientX - drag.lx) / Math.max(1, now - drag.lt);
      drag.lx = e.clientX;
      drag.lt = now;
      e.preventDefault();
    }

    function endDrag(e: PointerEvent) {
      const drag = dragRef.current;
      if (!drag || e.pointerId !== drag.id) return;
      dragRef.current = null;

      if (!drag.active) return;

      suppressClickRef.current = true;
      setTimeout(() => {
        suppressClickRef.current = false;
      }, 50);

      bookEl?.classList.remove('dragging');

      const prog = drag.dir === 1 ? drag.p : 1 - drag.p;
      const fling = drag.dir === 1 ? drag.v < -0.45 : drag.v > 0.45;
      const complete = prog > 0.33 || fling;
      const to = complete ? (drag.dir === 1 ? 1 : 0) : drag.dir === 1 ? 0 : 1;
      const dur = 250 + 600 * Math.abs(to - drag.p);

      tween(drag.L, drag.p, to, dur).then(() => {
        const nextFlipped = complete ? flipped + drag.dir : flipped;
        setFlipped(nextFlipped);

        leafRefs.current.forEach((L, i) => {
          if (!L) return;
          L.style.zIndex = String(i < nextFlipped ? i + 1 : numLeaves - i + 1);
          L.classList.remove('moving');
          setP(L, i < nextFlipped ? 1 : 0);
        });

        layoutBook(nextFlipped, mode, pw);

        const curP = pageOf(nextFlipped, mode);
        const newRoute = getRouteForPage(curP);
        setCurrentRoute(newRoute);
        if (typeof window !== 'undefined' && window.location.pathname !== newRoute) {
          window.history.replaceState({ page: curP }, '', newRoute);
        }

        busyRef.current = false;
      });
    }

    bookEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    return () => {
      bookEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
    };
  }, [flipped, layoutBook, mode, numLeaves, pw, setP, soundOn, tween]);

  // Page registry in React JSX
  const pages: ReactNode[] = useMemo(
    () => [
      <Page0Cover key="p0" currentRoute={currentRoute} onOpen={next} />,
      <Page1Opening key="p1" />,
      <Page2Toc key="p2" onGoToPage={goToPage} />,
      <Page3Book3D key="p3" onFlipNext={next} />,
      <Page4BookDetails key="p4" currentRoute={currentRoute} />,
      <Page5Timeline key="p5" currentRoute={currentRoute} onGoToPage={goToPage} />,
      <Page6Viriato key="p6" />,
      <Page7Seal
        key="p7"
        currentRoute={currentRoute}
        sealBroken={sealBroken}
        onBreakSeal={() => {
          setSealBroken(true);
          playPaperRustle(soundOn, 1.3);
        }}
      />,
      <Page8Countdown key="p8" />,
      <Page9PartnerNetwork
        key="p9"
        currentRoute={currentRoute}
        activePartner={activePartner}
        onHoverPartner={setActivePartner}
      />,
      <Page10PartnerList
        key="p10"
        activePartner={activePartner}
        onHoverPartner={setActivePartner}
        onGoToPage={goToPage}
      />,
      <Page11Contact key="p11" currentRoute={currentRoute} />,
      <Page12MailForm key="p12" />,
      <Page13Colophon key="p13" onGoToPage={goToPage} />,
      <Page14Endpaper key="p14" />,
      <Page15BackCover key="p15" onFlipPrev={prev} />,
    ],
    [activePartner, currentRoute, goToPage, next, prev, sealBroken, soundOn]
  );

  // Calculate current label, chapter, and page text
  const curPage = pageOf(flipped, mode);
  const curMeta = PAGE_METADATA[curPage] || PAGE_METADATA[0];
  const maxLimit = maxF(mode, numLeaves);

  let pageText = '';
  if (mode === 'desk' && flipped > 0 && flipped < numLeaves) {
    pageText = `pp. ${curPage}–${curPage + 1} de ${NP - 2}`;
  } else if (curPage === 0) {
    pageText = 'Toque na capa para abrir';
  } else if (curPage >= NP - 2 && mode !== 'desk' && curPage === NP - 1) {
    pageText = 'Fim';
  } else {
    pageText = curPage === NP - 1 ? 'Fim' : `p. ${curPage} de ${NP - 2}`;
  }

  const progressPercent = (flipped / maxLimit) * 100;

  // Build leaves:
  // In desk mode: 8 leaves (front: 2*i, back: 2*i+1)
  // In mob mode: 16 leaves (front: i, back: BlankFace)
  const leavesData = useMemo(() => {
    return Array.from({ length: numLeaves }, (_, i) => {
      const frontPageIndex = mode === 'desk' ? 2 * i : i;
      const backPageIndex = mode === 'desk' ? 2 * i + 1 : -1;
      const frontKind = PAGE_METADATA[frontPageIndex]?.kind;
      const backKind =
        backPageIndex >= 0 ? PAGE_METADATA[backPageIndex]?.kind : undefined;

      return {
        index: i,
        frontPage: pages[frontPageIndex],
        backPage: backPageIndex >= 0 ? pages[backPageIndex] : <BlankFace />,
        frontKind,
        backKind,
        frontIndex: frontPageIndex,
        backIndex: backPageIndex,
      };
    });
  }, [mode, numLeaves, pages]);

  return (
    <>
      <div className="halo" aria-hidden="true">
        <Caetra size="100%" />
      </div>
      <GoldenDust />
      <div className="grain" aria-hidden="true" />

      <TopBar
        activeChapter={curMeta.ch}
        soundOn={soundOn}
        onToggleSound={() => setSoundOn((s) => !s)}
        onGoToPage={goToPage}
      />

      <main className="stage" id="stage">
        <div
          className="book"
          id="book"
          ref={bookRef}
          aria-roledescription="livro"
        >
          <div className="stack l" ref={stackLRef} />
          <div className="stack r" ref={stackRRef} />
          <div className="ribbon" ref={ribbonRef} />

          {leavesData.map((leaf) => {
            const isFlipped = leaf.index < flipped;
            const showF = leaf.index === flipped;
            const showB = mode === 'desk' && leaf.index === flipped - 1;

            return (
              <div
                key={`leaf-${mode}-${leaf.index}`}
                className="leaf"
                ref={(el) => {
                  leafRefs.current[leaf.index] = el;
                }}
                style={{
                  zIndex: isFlipped ? leaf.index + 1 : numLeaves - leaf.index + 1,
                  transform: `rotateY(${isFlipped ? -180 : 0}deg)`,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ['--p' as any]: isFlipped ? 1 : 0,
                }}
              >
                {/* Front Face */}
                <div
                  className={`face front ${leaf.frontKind ? leaf.frontKind : ''}`}
                  inert={showF ? undefined : true}
                  aria-hidden={!showF}
                >
                  <div className={`face-content ${showF ? 'in' : ''}`} style={{ width: '100%', height: '100%' }}>
                    {leaf.frontPage}
                  </div>
                  <div className="shade" />
                  <div
                    className="corner"
                    data-act="next"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    role="button"
                    tabIndex={showF ? 0 : -1}
                    aria-label="Página seguinte"
                  />
                </div>

                {/* Back Face */}
                <div
                  className={`face back ${leaf.backKind ? leaf.backKind : ''} ${mode !== 'desk' ? 'paper' : ''
                    }`}
                  inert={showB ? undefined : true}
                  aria-hidden={!showB}
                >
                  <div className={`face-content ${showB ? 'in' : ''}`} style={{ width: '100%', height: '100%' }}>
                    {leaf.backPage}
                  </div>
                  <div className="shade" />
                  <div
                    className="corner"
                    data-act="prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    role="button"
                    tabIndex={showB ? 0 : -1}
                    aria-label="Página anterior"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <div className="open-hint" aria-hidden="true">
        Toca na capa para abrir o livro!
      </div>

      <BottomBar
        canPrev={flipped > 0}
        canNext={flipped < maxLimit}
        label={curMeta.label}
        pageText={pageText}
        progressPercent={progressPercent}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
