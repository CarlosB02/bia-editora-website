'use client';

import React, { useState, useEffect } from 'react';
import { CONFIG, mailto } from '@/lib/config';

export function Page8Countdown() {
  const [countdown, setCountdown] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const target = new Date(CONFIG.launch).getTime();

    function tick() {
      const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
      const v = {
        d: String(Math.floor(s / 86400)).padStart(2, '0'),
        h: String(Math.floor((s % 86400) / 3600)).padStart(2, '0'),
        m: String(Math.floor((s % 3600) / 60)).padStart(2, '0'),
        s: String(s % 60).padStart(2, '0'),
      };
      setCountdown(v);
    }

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const notifyHref = mailto(
    'Avisem-me do próximo lançamento',
    'Olá! Quero saber quando sair o próximo livro da Bia Editora.'
  );

  return (
    <section
      data-label="Capítulo III · Próximo Lançamento"
      data-ch="3"
      style={{ width: '100%', height: '100%' }}
    >
      <div className="rh">
        <span>Próximo lançamento</span>
        <span>Bia Editora</span>
      </div>
      <div className="pg">
        <div className="kicker rev">Faltam</div>
        <div className="count rev d1" id="count" aria-live="off">
          <div>
            <b data-u="d">{countdown.d}</b>
            <span>dias</span>
          </div>
          <div>
            <b data-u="h">{countdown.h}</b>
            <span>horas</span>
          </div>
          <div>
            <b data-u="m">{countdown.m}</b>
            <span>min</span>
          </div>
          <div>
            <b data-u="s">{countdown.s}</b>
            <span>seg</span>
          </div>
        </div>
        <h3 className="rev d2">
          Novembro, <em>segunda semana.</em>
        </h3>
        <p className="rev d2">
          O segundo título da Bia Editora fica selado até lá. Sabemos que vai gostar — só não lhe
          podemos dizer ainda de quê.
        </p>
        <div className="cal rev d3" aria-label="Calendário de novembro de 2026">
          <span className="h">S</span>
          <span className="h">T</span>
          <span className="h">Q</span>
          <span className="h">Q</span>
          <span className="h">S</span>
          <span className="h">S</span>
          <span className="h">D</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span className="wk s">9</span>
          <span className="wk">10</span>
          <span className="wk">11</span>
          <span className="wk">12</span>
          <span className="wk">13</span>
          <span className="wk">14</span>
          <span className="wk e">15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
        </div>
        <div className="spacer" />
        <div className="rev d4">
          <a className="btn btn-o" href={notifyHref}>
            Quero ser avisado <span aria-hidden="true">✦</span>
          </a>
        </div>
      </div>
      <div className="folio">8</div>
    </section>
  );
}
