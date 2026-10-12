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
            Da sala de aula <em>ao prelo</em>
          </h1>
        ) : (
          <h2 className="rev d1">
            Da sala de aula <em>ao prelo</em>
          </h2>
        )}
        <ol className="tl">
          <li className="rev d1">
            <b>
              <i>I</i>A ideia
            </b>
            <span>
              Um projeto universitário com uma pergunta teimosa: e se um livro pudesse ser, ao
              mesmo tempo, uma editora?
            </span>
          </li>
          <li className="rev d2">
            <b>
              <i>II</i>O concurso
            </b>
            <span>O projeto saiu da universidade e foi a concurso. E venceu.</span>
          </li>
          <li className="rev d3">
            <b>
              <i>III</i>Os apoios
            </b>
            <span>
              Com a vitória vieram apoios — e a responsabilidade de passar do papel ao prelo.
            </span>
          </li>
          <li className="rev d4">
            <b>
              <i>IV</i>O primeiro livro
            </b>
            <span>
              <em>O Segredo de Grão Vasco</em> chega às mãos dos leitores.
            </span>
          </li>
          <li className="now rev d5">
            <b>
              <i>V</i>O que vem
            </b>
            <span>
              Novembro abre o capítulo seguinte.{' '}
              <Link
                href="/proximo-lancamento"
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  onGoToPage(7, '/proximo-lancamento');
                }}
              >
                Ver
              </Link>
            </span>
          </li>
        </ol>
      </div>
      <div className="folio">5</div>
    </section>
  );
}
