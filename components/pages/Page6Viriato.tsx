import React from 'react';
import { Trisk } from '../svg/Trisk';
import { Caetra } from '../svg/Caetra';

export function Page6Viriato() {
  return (
    <section data-label="Capítulo II · A História" data-ch="2" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>Porquê Viriato?</span>
        <span>Bia Editora</span>
      </div>
      <div className="pg">
        <div className="kicker rev">O nosso herói</div>
        <h3 className="rev d1">
          Porquê <em>Viriato?</em>
        </h3>
        <p className="rev d2">
          Conta a história que Viriato foi um líder muito corajoso de Viseu. Mas nós não o escolhemos
          pela espada — escolhemo-lo pelo escudo!
        </p>
        <blockquote className="pull rev d3">
          «Um escudo não serve para lutar: serve para proteger quem amamos e guardar as nossas histórias.»
        </blockquote>
        <p className="rev d4">
          A Bia Editora faz o mesmo: protege a imaginação dos mais novos e junta pequenos e graúdos
          ao redor do lume quentinho dos livros.
        </p>
        <div className="symbols rev d5">
          <div>
            <div style={{ width: '3.2em', height: '3.2em', margin: '0 auto 0.35em', color: 'var(--o)' }}>
              <Caetra size="100%" />
            </div>
            <b>Caetra</b>o escudo redondo dos lusitanos
          </div>
          <div>
            <svg aria-hidden="true" viewBox="-50 -50 100 100">
              <polygon
                points="17,-41 41,-17 41,17 17,41 -17,41 -41,17 -41,-17 -17,-41"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
              />
            </svg>
            <b>Octógono</b>a fortaleza da Cava de Viriato
          </div>
          <div>
            <Trisk size="3.2em" />
            <b>Tríscele</b>voltinhas de imaginação sem fim
          </div>
        </div>
      </div>
      <div className="folio">6</div>
    </section>
  );
}
