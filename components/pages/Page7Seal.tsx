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
            O próximo <em>está selado.</em>
          </h1>
        ) : (
          <h2 className="rev d1">
            O próximo <em>está selado.</em>
          </h2>
        )}
        <div className="letter rev d2">
          <small>Bia Editora · N.º 2</small>
          <div className="redact" aria-label="Título por revelar">
            <i style={{ width: sealBroken ? '55%' : '72%' }} />
            <i style={{ width: sealBroken ? '30%' : '48%' }} />
          </div>
          <div className="when">segunda semana de novembro</div>
          <WaxSeal broken={sealBroken} onBreak={onBreakSeal} />
          <div className="reveal-msg">Achou que era assim tão fácil? O título chega em novembro.</div>
        </div>
        <div className="hint-tap rev d3">Toque no selo, se tiver coragem</div>
      </div>
      <div className="folio">7</div>
    </section>
  );
}
