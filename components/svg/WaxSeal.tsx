'use client';

import React, { useId } from 'react';
import { Caetra } from './Caetra';

interface WaxSealProps {
  broken: boolean;
  onBreak: () => void;
}

export function WaxSeal({ broken, onBreak }: WaxSealProps) {
  const waxId = useId();
  const clId = useId();
  const crId = useId();
  const waxgId = useId();

  // Seal organic perimeter blob path generated with map
  const blobPath =
    Array.from({ length: 37 }, (_, k) => {
      const a = (k / 36) * Math.PI * 2;
      const r = 45 + Math.sin(k * 2.3) * 2.2 + Math.cos(k * 5.1) * 1.6;
      const x = (r * Math.cos(a)).toFixed(2);
      const y = (r * Math.sin(a)).toFixed(2);
      return `${k === 0 ? 'M' : 'L'}${x} ${y}`;
    }).join(' ') + 'Z';

  return (
    <button
      type="button"
      className={`seal ${broken ? 'broken' : ''}`}
      onClick={onBreak}
      aria-label={broken ? 'Selo quebrado' : 'Quebrar o selo'}
    >
      <svg viewBox="-55 -55 110 110" aria-hidden="true">
        <defs>
          <radialGradient id={waxId} cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#f6954a" />
            <stop offset="55%" stopColor="#d9631b" />
            <stop offset="100%" stopColor="#9c400c" />
          </radialGradient>
          <clipPath id={clId}>
            <polygon points="-60,-60 4,-60 -6,-30 6,-10 -5,8 7,28 -3,60 -60,60" />
          </clipPath>
          <clipPath id={crId}>
            <polygon points="60,-60 4,-60 -6,-30 6,-10 -5,8 7,28 -3,60 60,60" />
          </clipPath>
          <g id={waxgId}>
            <path d={blobPath} fill={`url(#${waxId})`} />
            <circle r="33" fill="none" stroke="#9c400c" strokeWidth="1.5" opacity="0.7" />
            <g transform="translate(-27 -27)" style={{ color: '#a8470e', opacity: 0.85 }}>
              <Caetra size={54} />
            </g>
          </g>
        </defs>
        <g className="half hl" clipPath={`url(#${clId})`}>
          <use href={`#${waxgId}`} />
        </g>
        <g className="half hr" clipPath={`url(#${crId})`}>
          <use href={`#${waxgId}`} />
        </g>
      </svg>
    </button>
  );
}
