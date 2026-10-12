'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TopBarProps {
  activeChapter: number;
  soundOn: boolean;
  onToggleSound: () => void;
  onGoToPage: (pageIndex: number, route?: string) => void;
}

export function TopBar({
  activeChapter,
  soundOn,
  onToggleSound,
  onGoToPage,
}: TopBarProps) {
  const chapters = [
    { ch: 1, goto: 3, num: 'I', label: 'O Livro', href: '/o-livro' },
    { ch: 2, goto: 5, num: 'II', label: 'História', href: '/historia' },
    { ch: 3, goto: 7, num: 'III', label: 'Lançamento', href: '/proximo-lancamento' },
    { ch: 4, goto: 9, num: 'IV', label: 'Parceiros', href: '/parceiros' },
    { ch: 5, goto: 11, num: 'V', label: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="topbar">
      <Link
        href="/"
        className="brand"
        onClick={(e) => {
          e.preventDefault();
          onGoToPage(0, '/');
        }}
        aria-label="Bia Editora — ir para a capa"
      >
        <Image
          src="/images/logo-header.svg"
          alt="Bia Editora"
          width={160}
          height={32}
          priority
          style={{ height: '30px', width: 'auto', display: 'block' }}
        />
      </Link>

      <nav className="chapters" aria-label="Capítulos">
        {chapters.map((c) => {
          const isCurrent = activeChapter === c.ch;
          return (
            <Link
              key={c.ch}
              href={c.href}
              data-goto={c.goto}
              data-ch={c.ch}
              aria-current={isCurrent ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onGoToPage(c.goto, c.href);
              }}
            >
              <i>{c.num}</i>
              <span>{c.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="tools">
        <button
          type="button"
          className="icon-btn"
          id="snd"
          aria-pressed={soundOn}
          aria-label={soundOn ? 'Desligar som das páginas' : 'Ligar som das páginas'}
          onClick={onToggleSound}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M4 9h3l5-4v14l-5-4H4z" />
            {soundOn ? (
              <>
                <path className="w" d="M16 9a4 4 0 0 1 0 6" />
                <path className="w" d="M18.5 6.5a8 8 0 0 1 0 11" />
              </>
            ) : (
              <>
                <path className="x" d="M16 9l5 6" />
                <path className="x" d="M21 9l-5 6" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
