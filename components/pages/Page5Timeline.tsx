import React from 'react';
import Link from 'next/link';

interface Page5TimelineProps {
  currentRoute?: string;
  onGoToPage: (pageIndex: number, route?: string) => void;
}

export function Page5Timeline({ currentRoute, onGoToPage }: Page5TimelineProps) {
  const isH1 = currentRoute === '/historia';

  return (
    <section data-label="Capítulo II · A História" data-ch="2" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>Bia Editora</span>
        <span>II · A História</span>
      </div>
      <div className="pg">
        <div className="kicker rev">Capítulo II</div>
        {isH1 ? (
          <h1 className="rev d1">
            Da sala de aula <em>às tuas mãos</em>
          </h1>
        ) : (
          <h2 className="rev d1">
            Da sala de aula <em>às tuas mãos</em>
          </h2>
        )}
        <ol className="tl">
          <li className="rev d1">
            <b>
              <i>I</i>Uma ideia curiosa
            </b>
            <span>
              E se um trabalho de estudantes pudesse virar um livro infantil e uma editora a sério?
            </span>
          </li>
          <li className="rev d2">
            <b>
              <i>II</i>O grande concurso
            </b>
            <span>Apresentámos o projeto a concurso... e vencemos o 1.º lugar!</span>
          </li>
          <li className="rev d3">
            <b>
              <i>III</i>A magia acontece
            </b>
            <span>
              Com muito apoio e carinho, os textos e ilustrações ganharam cores e saltaram para o papel.
            </span>
          </li>
          <li className="rev d4">
            <b>
              <i>IV</i>O primeiro livro!
            </b>
            <span>
              <em>O Segredo de Grão Vasco</em> chegou às livrarias e às mãos dos pequenos exploradores.
            </span>
          </li>
          <li className="now rev d5">
            <b>
              <i>V</i>O que vem aí
            </b>
            <span>
              Em novembro chega uma nova aventura secreta!{' '}
              <Link
                href="/proximo-lancamento"
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  onGoToPage(7, '/proximo-lancamento');
                }}
              >
                Espreitar!
              </Link>
            </span>
          </li>
        </ol>
      </div>
      <div className="folio">5</div>
    </section>
  );
}
