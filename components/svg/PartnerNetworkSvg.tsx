'use client';

import React from 'react';
import { Caetra } from './Caetra';

export const PARTNER_LABELS = [
  'Academia',
  'Entidades de apoio',
  'Livrarias',
  'Escolas & bibliotecas',
  'Património & cultura',
  'Criativos',
];

const NODE_LABELS = ['Academia', 'Apoios', 'Livrarias', 'Escolas', 'Património', 'Criativos'];
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

interface PartnerNetworkSvgProps {
  activePartner: number | null;
  onHoverPartner?: (idx: number | null) => void;
}

export function PartnerNetworkSvg({ activePartner, onHoverPartner }: PartnerNetworkSvgProps) {
  const cx = 150;
  const cy = 135;
  const R = 100;

  const points = NODE_LABELS.map((_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 3;
    return [cx + R * Math.cos(a), cy + R * Math.sin(a)] as const;
  });

  return (
    <svg viewBox="0 0 300 270" id="netsvg" aria-hidden="true">
      <circle className="ring" cx={cx} cy={cy} r={R} />
      <circle className="ring" cx={cx} cy={cy} r={R * 0.55} />

      {/* Spokes from center to nodes */}
      {points.map((p, i) => (
        <path
          key={`spoke-${i}`}
          className="ln"
          style={{ transitionDelay: `${0.1 * i}s` }}
          d={`M${cx} ${cy} L${p[0].toFixed(1)} ${p[1].toFixed(1)}`}
        />
      ))}

      {/* Ring connector lines */}
      {points.map((p, i) => {
        const q = points[(i + 1) % 6];
        return (
          <path
            key={`ring-ln-${i}`}
            className="ln"
            style={{ transitionDelay: `${0.6 + 0.1 * i}s`, opacity: 0.4 }}
            d={`M${p[0].toFixed(1)} ${p[1].toFixed(1)} L${q[0].toFixed(1)} ${q[1].toFixed(1)}`}
          />
        );
      })}

      {/* Center emblem */}
      <circle cx={cx} cy={cy} r={26} fill="#1f1712" />
      <g transform={`translate(${cx - 22} ${cy - 22})`} style={{ color: '#ee7a23' }}>
        <Caetra size={44} />
      </g>

      {/* Nodes */}
      {points.map((p, i) => {
        const below = p[1] >= cy - 5;
        const ty = below ? p[1] + 27 : p[1] - 19;
        const isOn = activePartner === i;

        return (
          <g
            key={`node-${i}`}
            className={`nd ${isOn ? 'on' : ''}`}
            data-i={i}
            onPointerOver={() => onHoverPartner?.(i)}
            onPointerOut={() => onHoverPartner?.(null)}
          >
            <circle cx={p[0].toFixed(1)} cy={p[1].toFixed(1)} r={12} />
            <text
              className="num"
              x={p[0].toFixed(1)}
              y={(p[1] + 4).toFixed(1)}
              textAnchor="middle"
            >
              {ROMAN[i]}
            </text>
            <text x={p[0].toFixed(1)} y={ty.toFixed(1)} textAnchor="middle">
              {NODE_LABELS[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
