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
        <div className="kicker rev">Abertura</div>
        <h2 className="rev d1">
          Este site <em>é</em> um livro.
        </h2>
        <p className="drop rev d2">
          E a Bia é duas coisas ao mesmo tempo: um livro e uma editora. Nasceu como projeto
          universitário, foi a concurso, venceu — e os apoios que vieram com o prémio
          transformaram uma ideia de sala de aula em páginas impressas.
        </p>
        <p className="rev d3">
          Leia-o como um livro a sério. Folheie, volte atrás, salte capítulos.
        </p>
        <div className="how rev d4">
          <div>
            <b>⟷</b>Arraste o canto da página
          </div>
          <div>
            <b>← →</b>Use as setas do teclado
          </div>
          <div>
            <b>I–V</b>Salte pelos marcadores
          </div>
        </div>
        <div className="sig rev d5">
          <span style={{ display: 'inline-flex', width: '2.4em', height: '2.4em', color: 'var(--o)' }}>
            <Caetra size="100%" />
          </span>
          — A equipa Bia
        </div>
      </div>
      <div className="folio">1</div>
    </section>
  );
}
