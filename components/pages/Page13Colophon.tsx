import React from 'react';
import { Trisk } from '../svg/Trisk';

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
          <Trisk size="100%" />
        </div>
        <p className="rev d1 muted">
          Este livro-site foi composto em Fraunces e Newsreader, desenhado à volta de um escudo
          lusitano e de uma única cor:{' '}
          <span style={{ color: 'var(--o-deep)' }}>#ee7a23</span>.
        </p>
        <p className="rev d2 muted">Impresso em pixels. Viseu, outono de 2026.</p>
        <div className="fin rev d3">Fim do primeiro volume.</div>
        <button
          className="btn btn-line rev d4"
          type="button"
          onClick={() => onGoToPage(0, '/')}
        >
          ↺ Voltar à capa
        </button>
      </div>
      <div className="folio">13</div>
    </section>
  );
}
