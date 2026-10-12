'use client';

import React from 'react';

interface BottomBarProps {
  canPrev: boolean;
  canNext: boolean;
  label: string;
  pageText: string;
  progressPercent: number;
  onPrev: () => void;
  onNext: () => void;
}

export function BottomBar({
  canPrev,
  canNext,
  label,
  pageText,
  progressPercent,
  onPrev,
  onNext,
}: BottomBarProps) {
  return (
    <>
      <footer className="bottombar">
        <button
          type="button"
          className="nav-btn"
          id="prev"
          aria-label="Página anterior"
          disabled={!canPrev}
          onClick={onPrev}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <div className="where">
          <div className="lbl" id="lbl">
            {label}
          </div>
          <div className="bar">
            <i id="prog" style={{ width: `${progressPercent}%` }} />
          </div>
          <div className="pn" id="pn">
            {pageText}
          </div>
        </div>

        <button
          type="button"
          className="nav-btn"
          id="next"
          aria-label="Página seguinte"
          disabled={!canNext}
          onClick={onNext}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </footer>
      <div className="sr" aria-live="polite" id="live">
        {label}
      </div>
    </>
  );
}
