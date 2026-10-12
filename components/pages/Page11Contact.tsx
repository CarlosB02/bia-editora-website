import React from 'react';
import { CONFIG } from '@/lib/config';

interface Page11ContactProps {
  currentRoute?: string;
}

export function Page11Contact({ currentRoute }: Page11ContactProps) {
  const isH1 = currentRoute === '/contacto';

  return (
    <section data-label="Capítulo V · Contacto" data-ch="5" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>Bia Editora</span>
        <span>V · Contacto</span>
      </div>
      <div className="pg">
        <div className="kicker rev">Capítulo V</div>
        {isH1 ? (
          <h1 className="rev d1">
            Toda a boa história começa <em>com uma carta.</em>
          </h1>
        ) : (
          <h2 className="rev d1">
            Toda a boa história começa <em>com uma carta.</em>
          </h2>
        )}
        <p className="rev d2">
          Encomendas, parcerias, escolas, imprensa — ou apenas vontade de conversar sobre livros.
          Escreva-nos.
        </p>
        <ul className="contact-list rev d3" id="clist">
          <li>
            <small>Email</small>
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
          </li>
          <li>
            <small>Casa</small>
            <span>{CONFIG.location}</span>
          </li>
        </ul>
      </div>
      <div className="folio">11</div>
    </section>
  );
}
