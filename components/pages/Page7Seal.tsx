import React from 'react';
import { WaxSeal } from '../svg/WaxSeal';

interface Page7SealProps {
  currentRoute?: string;
  sealBroken: boolean;
  onBreakSeal: () => void;
}

export function Page7Seal({ currentRoute, sealBroken, onBreakSeal }: Page7SealProps) {
  const isH1 = currentRoute === '/proximo-lancamento';

  return (
    <section
      data-label="Capítulo III · Próximo Lançamento"
      data-ch="3"
      style={{ width: '100%', height: '100%' }}
    >
      <div className="rh">
        <span>Bia Editora</span>
        <span>III · Lançamento</span>
      </div>
      <div className="pg">
        <div className="kicker rev">Capítulo III</div>
        {isH1 ? (
          <h1 className="rev d1">
            Um mistério <em>bem guardado!</em>
          </h1>
        ) : (
          <h2 className="rev d1">
            Um mistério <em>bem guardado!</em>
          </h2>
        )}
        <div className="letter rev d2">
          <small>Bia Editora · Livro N.º 2</small>
          <div className="redact" aria-label="Título por revelar">
            <i style={{ width: sealBroken ? '55%' : '72%' }} />
            <i style={{ width: sealBroken ? '30%' : '48%' }} />
          </div>
          <div className="when">Segunda semana de novembro de 2026</div>
          <WaxSeal broken={sealBroken} onBreak={onBreakSeal} />
          <div className="reveal-msg">Curioso como um bom leitor! O novo livro chega em novembro.</div>
        </div>
        <div className="hint-tap rev d3">Toca no selo secreto com o teu dedo!</div>
      </div>
      <div className="folio">7</div>
    </section>
  );
}
