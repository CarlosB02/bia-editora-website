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
          Viseu guarda muitos segredos. Um deles tem cinco séculos e assinatura de pintor.
        </p>
        <p className="rev d3">
          Uma história que parte da obra de Vasco Fernandes — o Grão Vasco, mestre da pintura do
          Renascimento português — para percorrer as ruas, as pedras e as memórias da cidade. Para
          ler devagar, de lupa na mão, e voltar a olhar para Viseu com outros olhos.
        </p>
        <dl className="facts rev d4">
          <dt>Editora</dt>
          <dd>Bia Editora</dd>
          <dt>Edição</dt>
          <dd>1.ª edição</dd>
          <dt>Origem</dt>
          <dd>Viseu, Portugal</dd>
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
            Comprar o livro <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="folio">4</div>
    </section>
  );
}
