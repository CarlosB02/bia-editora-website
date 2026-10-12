import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Page10PartnerListProps {
  activePartner: number | null;
  onHoverPartner: (idx: number | null) => void;
  onGoToPage?: (pageIndex: number, route?: string) => void;
}

export const PARTNERS_DATA = [
  {
    id: 1,
    name: 'Parceiro 1',
    src: '/images/parceiros/parceiro-1.webp',
    alt: 'Logótipo do Parceiro 1 — Bia Editora',
    delay: 'd1',
  },
  {
    id: 2,
    name: 'Parceiro 2',
    src: '/images/parceiros/parceiro-2.webp',
    alt: 'Logótipo do Parceiro 2 — Bia Editora',
    delay: 'd1',
  },
  {
    id: 3,
    name: 'Parceiro 3',
    src: '/images/parceiros/parceiro-3.webp',
    alt: 'Logótipo do Parceiro 3 — Bia Editora',
    delay: 'd2',
  },
  {
    id: 4,
    name: 'Parceiro 4',
    src: '/images/parceiros/parceiro-4.webp',
    alt: 'Logótipo do Parceiro 4 — Bia Editora',
    delay: 'd2',
  },
  {
    id: 5,
    name: 'Parceiro 5',
    src: '/images/parceiros/parceiro-5.webp',
    alt: 'Logótipo do Parceiro 5 — Bia Editora',
    delay: 'd3',
  },
];

export function Page10PartnerList({
  activePartner,
  onHoverPartner,
  onGoToPage,
}: Page10PartnerListProps) {
  return (
    <section
      data-label="Capítulo IV · Rede de Parceiros"
      data-ch="4"
      style={{ width: '100%', height: '100%' }}
    >
      <div className="rh">
        <span>Rede de parceiros</span>
        <span>Bia Editora</span>
      </div>
      <div className="pg">
        <div className="kicker rev">Quem apoia esta aventura</div>
        <div className="partners-grid" id="pgrid">
          {PARTNERS_DATA.map((partner, i) => (
            <div
              key={partner.id}
              className={`partner-card rev ${partner.delay} ${i === 4 ? 'span-2' : ''
                } ${activePartner === i ? 'on' : ''}`}
              data-i={i}
              onPointerOver={() => onHoverPartner(i)}
              onPointerOut={() => onHoverPartner(null)}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={360}
                height={225}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
        <div className="join rev d4">
          <p>Quer apoiar a Bia ou levar os livros à sua escola?</p>
          <Link
            href="/contacto"
            className="btn btn-line"
            onClick={(e) => {
              e.preventDefault();
              onGoToPage?.(12, '/contacto');
            }}
          >
            Falar com a editora
          </Link>
        </div>
      </div>
      <div className="folio">10</div>
    </section>
  );
}
