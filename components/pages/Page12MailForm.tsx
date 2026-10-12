'use client';

import React, { useState } from 'react';
import { mailto } from '@/lib/config';

export function Page12MailForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('Comprar livros');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !email.includes('@') || !mensagem.trim()) {
      setStatus('Falta assinar a carta: nome, email e mensagem.');
      return;
    }

    const mailUrl = mailto(`${assunto} — ${nome}`, `${mensagem}\n\n— ${nome} (${email})`);
    if (typeof window !== 'undefined') {
      window.location.href = mailUrl;
    }
    setStatus('Carta selada. A abrir o seu email…');
  }

  return (
    <section data-label="Capítulo V · Contacto" data-ch="5" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>Escreva-nos</span>
        <span>Bia Editora</span>
      </div>
      <div className="pg">
        <form className="mail" id="form" onSubmit={handleSubmit} noValidate>
          <div className="kicker rev">Carta à editora</div>
          <div className="field rev d1">
            <label htmlFor="f-n">O seu nome</label>
            <input
              id="f-n"
              name="n"
              autoComplete="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="field rev d1">
            <label htmlFor="f-e">Email</label>
            <input
              id="f-e"
              name="e"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field rev d2">
            <label htmlFor="f-a">Assunto</label>
            <select
              id="f-a"
              name="a"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
            >
              <option>Comprar livros</option>
              <option>Parcerias</option>
              <option>Escolas &amp; bibliotecas</option>
              <option>Imprensa</option>
              <option>Outro</option>
            </select>
          </div>
          <div className="field grow rev d3">
            <label htmlFor="f-m">Mensagem</label>
            <textarea
              id="f-m"
              name="m"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-o rev d4" type="submit">
            Selar e enviar <span aria-hidden="true">→</span>
          </button>
          <div className="sent" id="sent" role="status">
            {status}
          </div>
        </form>
      </div>
      <div className="folio">12</div>
    </section>
  );
}
