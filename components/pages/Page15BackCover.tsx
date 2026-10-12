import React from 'react';
import { Caetra } from '../svg/Caetra';

interface Page15BackCoverProps {
  onFlipPrev?: () => void;
}

export function Page15BackCover({ onFlipPrev }: Page15BackCoverProps) {
  return (
    <section data-kind="cover" data-label="Contracapa" data-ch="6" style={{ width: '100%', height: '100%' }}>
      <div
        className="backc"
        data-act="back"
        onClick={onFlipPrev}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onFlipPrev?.();
          }
        }}
        aria-label="Folhear para trás"
      >
        <div style={{ width: '18cqw', color: 'var(--o)' }}>
          <Caetra size="100%" />
        </div>
        <p>
          Uma editora nascida de um trabalho universitário, com escudo de Viriato e paciência de
          pintor.
        </p>
        <small>Bia Editora · Livro &amp; Editora</small>
      </div>
    </section>
  );
}
