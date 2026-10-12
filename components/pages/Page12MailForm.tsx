'use client';

import React, { useState } from 'react';
import { mailto } from '@/lib/config';

export function Page12MailForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('Encomendar livros infantis 📚');
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
    setStatus('Carta selada com carinho! A abrir o teu email…');
  }

  return (
    <section data-label="Capítulo V · Contacto" data-ch="5" style={{ width: '100%', height: '100%' }}>
      <div className="rh">
        <span>Escreva-nos</span>
        <span>Bia Editora</span>
      </div>
      <div className="pg">
        <form className="mail" id="form" onSubmit={handleSubmit} noValidate>
          <div className="kicker rev">Correio da Bia</div>
          <div className="field rev d1">
            <label htmlFor="f-n">O teu nome (ou pais / escola)</label>
            <input
              id="f-n"
              name="n"
              autoComplete="name"
              placeholder="Ex: Maria ou Escola Básica..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="field rev d1">
            <label htmlFor="f-e">Email de contacto</label>
            <input
              id="f-e"
              name="e"
              type="email"
              placeholder="nome@exemplo.pt"
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
              <option>Encomendar livros infantis 📚</option>
              <option>Visita à escola ou biblioteca 🏫</option>
              <option>Parcerias &amp; Apoios 🤝</option>
              <option>Imprensa &amp; Divulgação 📰</option>
              <option>Dizer olá ou partilhar uma ideia 🎨</option>
            </select>
          </div>
          <div className="field grow rev d3">
            <label htmlFor="f-m">A tua mensagem</label>
            <textarea
              id="f-m"
              name="m"
              placeholder="Escreve aqui o que nos queres contar..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-o rev d4" type="submit">
            Enviar mensagem mágica! <span aria-hidden="true">✉️</span>
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
