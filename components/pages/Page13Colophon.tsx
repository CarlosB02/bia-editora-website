import React from 'react';
import { Caetra } from '../svg/Caetra';

interface Page13ColophonProps {
  onGoToPage: (pageIndex: number, route?: string) => void;
}

export function Page13Colophon({ onGoToPage }: Page13ColophonProps) {
  return (
    <section data-label="Colofão" data-ch="6" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>Bia Editora</span>
        <span>Colofão</span>
      </div>
      <div className="pg colophon">
        <div className="orn rev">
          <Caetra size="100%" />
        </div>
        <p className="rev d1 muted">
          Este livro-site foi desenhado por{' '}
          <a
            href="https://enimble.pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enimble
          </a>
          , com imaginação e cores quentes para todos os pequenos
          leitores e sonhadores de Viseu e do mundo.
        </p>
        <p className="rev d2 muted">Criado com amor. Viseu, 2026.</p>
        <div className="fin rev d3">Fim da primeira visita!</div>
        <button
          className="btn btn-line rev d4"
          type="button"
          onClick={() => onGoToPage(0, '/')}
        >
          ↺ Voltar à capa do livro
        </button>
      </div>
      <div className="folio">13</div>
    </section>
  );
}
