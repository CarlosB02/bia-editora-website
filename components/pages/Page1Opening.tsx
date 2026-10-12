import React from 'react';
import { Caetra } from '../svg/Caetra';

export function Page1Opening() {
  return (
    <section data-label="Abertura" data-ch="0" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>Bia Editora</span>
        <span>Abertura</span>
      </div>
      <div className="pg">
        <div className="kicker rev">Bem-vindos!</div>
        <h2 className="rev d1">
          Este site <em>é mesmo</em> um livro!
        </h2>
        <p className="drop rev d2">
          E a Bia é duas coisas ao mesmo tempo: uma história para ler e uma editora de verdade! Tudo começou como uma ideia na universidade, que foi a concurso e ganhou o 1.º lugar. O prémio transformou esse sonho num livro a sério, com ilustrações incríveis.
        </p>
        <p className="rev d3">
          Explora este livro como se o tivesses nas mãos! Podes virar as páginas, descobrir segredos e saltar de capítulo em capítulo.
        </p>
        <div className="how rev d4">
          <div>
            <b>⟷</b>Puxa o canto da página
          </div>
          <div>
            <b>← →</b>Usa as setas do teclado
          </div>
          <div>
            <b>I–V</b>Salta para cada aventura
          </div>
        </div>
        <div className="sig rev d5">
          <span style={{ display: 'inline-flex', width: '2.4em', height: '2.4em', color: 'var(--o)' }}>
            <Caetra size="100%" />
          </span>
          — Com carinho, a equipa Bia
        </div>
      </div>
      <div className="folio">1</div>
    </section>
  );
}
