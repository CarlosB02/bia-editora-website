import React from 'react';
import { OctagonFrame } from '../svg/OctagonFrame';
import { Caetra } from '../svg/Caetra';

interface Page0CoverProps {
  currentRoute?: string;
  onOpen?: () => void;
}

export function Page0Cover({ currentRoute = '/', onOpen }: Page0CoverProps) {
  const isH1 = currentRoute === '/';

  return (
    <section data-kind="cover" data-label="Capa" style={{ width: '100%', height: '100%' }}>
      <OctagonFrame />
      <div
        className="cover-pg"
        data-act="open"
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen?.();
          }
        }}
        aria-label="Abrir o livro mágico da Bia Editora"
      >
        <div className="cover-top">Livro Infantil &amp; Editora</div>
        <div className="cover-emblem">
          <Caetra size="100%" />
        </div>
        {isH1 ? (
          <h1 className="cover-title">
            <span className="big foil">Bia</span>
            <span className="small">Editora</span>
          </h1>
        ) : (
          <h2 className="cover-title">
            <span className="big foil">Bia</span>
            <span className="small">Editora</span>
          </h2>
        )}
        <div className="cover-foot">
          Grandes Aventuras para Pequenos Leitores
          <b>Viseu · 2026</b>
        </div>
      </div>
    </section>
  );
}
