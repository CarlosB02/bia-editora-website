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
        <div className="kicker rev">A nossa bandeira</div>
        <h3 className="rev d1">
          Porquê <em>Viriato?</em>
        </h3>
        <p className="rev d2">
          A tradição liga Viriato a Viseu: o chefe lusitano que, durante anos, fez frente a Roma.
          Não o escolhemos pela espada. Escolhemo-lo pelo escudo.
        </p>
        <blockquote className="pull rev d3">
          Um escudo não serve só para resistir. Serve para guardar.
        </blockquote>
        <p className="rev d4">
          Uma editora pequena faz o mesmo: guarda as histórias que, sem alguém que as defenda, se
          perdem. O laranja é o lume à volta do qual sempre se contaram.
        </p>
        <div className="symbols rev d5">
          <div>
            <div style={{ width: '3.2em', height: '3.2em', margin: '0 auto 0.35em', color: 'var(--o)' }}>
              <Caetra size="100%" />
            </div>
            <b>Caetra</b>o escudo redondo lusitano
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
            <b>Octógono</b>o desenho da Cava de Viriato
          </div>
          <div>
            <Trisk size="3.2em" />
            <b>Tríscele</b>histórias sempre em movimento
          </div>
        </div>
      </div>
      <div className="folio">6</div>
    </section>
  );
}
