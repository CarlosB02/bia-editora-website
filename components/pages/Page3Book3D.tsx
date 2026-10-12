import React from 'react';
import Image from 'next/image';

interface Page3Book3DProps {
  onFlipNext?: () => void;
}

export function Page3Book3D({ onFlipNext }: Page3Book3DProps) {
  return (
    <section data-label="Capítulo I · O Livro" data-ch="1" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>Bia Editora</span>
        <span>I · O Livro</span>
      </div>
      <div className="pg">
        <div className="kicker rev">Capítulo I</div>
        <div className="chap-no rev d1" aria-hidden="true">
          I
        </div>
        <div className="b3d-wrap rev d2">
          <div
            className="b3d"
            aria-label="Capa do livro O Segredo de Grão Vasco"
            role="img"
            onClick={onFlipNext}
            title="Clica para abrir os detalhes deste livro mágico"
          >
            <div className="bb" />
            <div className="bs" />
            <div className="bf">
              <Image
                src="/images/capa-o-segredo-de-grao-vasco.svg"
                alt="Capa do livro infantil O Segredo de Grão Vasco — Bia Editora, Viseu"
                width={200}
                height={300}
                priority
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className="tag rev d3">A primeira aventura ilustrada da Bia Editora ✨</div>
      </div>
      <div className="folio">3</div>
    </section>
  );
}
