import React from 'react';
import { CONFIG, mailto } from '@/lib/config';

interface Page4BookDetailsProps {
  currentRoute?: string;
}

export function Page4BookDetails({ currentRoute }: Page4BookDetailsProps) {
  const isH1 = currentRoute === '/o-livro';
  const buyHref =
    CONFIG.buyUrl !== '#'
      ? CONFIG.buyUrl
      : mailto('Encomenda — O Segredo de Grão Vasco');

  return (
    <section data-label="Capítulo I · O Livro" data-ch="1" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>O Segredo de Grão Vasco</span>
        <span>Bia Editora</span>
      </div>
      <div className="pg">
        <div className="kicker rev">O primeiro livro</div>
        {isH1 ? (
          <h1 className="rev d1">
            O Segredo de <em>Grão Vasco</em>
          </h1>
        ) : (
          <h2 className="rev d1">
            O Segredo de <em>Grão Vasco</em>
          </h2>
        )}
        <p className="lead rev d2">
          Viseu esconde um mistério antigo... e pistas secretas pintadas há cerca de 500 anos!
        </p>
        <p className="rev d3">
          Quem foi o grande mestre Grão Vasco? Uma aventura cheia de cor e imaginação que convida
          os pequenos detetives a percorrer as ruas históricas, decifrar enigmas e olhar para
          a cidade com olhos cheios de curiosidade. Perfeito para ler e partilhar em família!
        </p>
        <dl className="facts rev d4">
          <dt>Leitores</dt>
          <dd>Crianças &amp; Famílias</dd>
          <dt>Edição</dt>
          <dd>1.ª edição ilustrada</dd>
        </dl>
        <div className="spacer" />
        <div className="buy rev d5">
          <div className="price">
            <small>Preço</small>
            <span>{CONFIG.price}</span>
          </div>
          <a
            className="btn btn-o"
            href={buyHref}
            target={CONFIG.buyUrl !== '#' ? '_blank' : undefined}
            rel={CONFIG.buyUrl !== '#' ? 'noopener noreferrer' : undefined}
          >
            Quero o meu livro!
          </a>
        </div>
      </div>
      <div className="folio">4</div>
    </section>
  );
}
