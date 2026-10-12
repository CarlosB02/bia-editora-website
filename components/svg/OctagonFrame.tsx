import React from 'react';

export function OctagonFrame() {
  return (
    <div className="oct-frame" aria-hidden="true">
      <svg viewBox="0 0 100 140" preserveAspectRatio="none">
        <polygon
          points="12,0 88,0 100,9 100,131 88,140 12,140 0,131 0,9"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
        <polygon
          points="14,2 86,2 98,10.5 98,129.5 86,138 14,138 2,129.5 2,10.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
