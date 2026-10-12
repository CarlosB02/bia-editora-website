let actx: AudioContext | null = null;
let lastSnd = 0;

/**
 * Lazy initialize AudioContext on user interaction
 */
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!actx) {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtx) {
      actx = new AudioCtx();
    }
  }
  if (actx && actx.state === 'suspended') {
    actx.resume().catch(() => {});
  }
  return actx;
}

/**
 * Web Audio synthetic paper rustle sound
 */
export function playPaperRustle(soundOn: boolean, strength = 1): void {
  if (!soundOn || typeof window === 'undefined') return;
  const now = performance.now();
  if (now - lastSnd < 45) return;
  lastSnd = now;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const dur = 0.32;
    const sr = ctx.sampleRate;
    const buf = ctx.createBuffer(1, Math.floor(sr * dur), sr);
    const d = buf.getChannelData(0);

    for (let i = 0; i < d.length; i++) {
      const t = i / d.length;
      d[i] =
        (Math.random() * 2 - 1) *
        Math.pow(1 - t, 1.6) *
        (0.6 + 0.4 * Math.sin(t * 40 + Math.random()));
    }

    const src = ctx.createBufferSource();
    src.buffer = buf;

    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 2200 + Math.random() * 1600;
    bp.Q.value = 0.6;

    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 700;

    const g = ctx.createGain();
    const t0 = ctx.currentTime;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(0.09 * strength, t0 + 0.04);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);

    src.connect(bp);
    bp.connect(hp);
    hp.connect(g);
    g.connect(ctx.destination);
    src.start();
  } catch {
    // Ignore audio errors on un-interacted browsers
  }
}
