import React from 'react';
import Link from 'next/link';

interface Page2TocProps {
  onGoToPage: (pageIndex: number, route?: string) => void;
}

export function Page2Toc({ onGoToPage }: Page2TocProps) {
  const chapters = [
    { num: 'I', title: 'O Livro', pageNum: 'p. 3', targetPage: 3, href: '/o-livro' },
    { num: 'II', title: 'A História', pageNum: 'p. 5', targetPage: 5, href: '/historia' },
    { num: 'III', title: 'Próximo Lançamento', pageNum: 'p. 7', targetPage: 7, href: '/proximo-lancamento' },
    { num: 'IV', title: 'Rede de Parceiros', pageNum: 'p. 9', targetPage: 9, href: '/parceiros' },
    { num: 'V', title: 'Contacto', pageNum: 'p. 11', targetPage: 11, href: '/contacto' },
  ];

  return (
    <section data-label="Sumário" data-ch="0" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>Sumário</span>
        <span>Bia Editora</span>
      </div>
      <div className="pg">
        <div className="kicker rev">Índice</div>
        <h2 className="rev d1">Sumário</h2>
        <ol className="toc">
          {chapters.map((ch, idx) => (
            <li key={ch.num} className={`rev d${idx + 1}`}>
              <Link
                href={ch.href}
                onClick={(e) => {
                  e.preventDefault();
                  onGoToPage(ch.targetPage, ch.href);
                }}
              >
                <span className="n">{ch.num}</span>
                <span className="t">{ch.title}</span>
                <span className="dots" />
                <span className="p">{ch.pageNum}</span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="spacer" />
        <p className="muted rev d5" style={{ fontStyle: 'italic', margin: '1em 0 0' }}>
          Clique num capítulo e veja as páginas a correr.
        </p>
      </div>
      <div className="folio">2</div>
    </section>
  );
}
