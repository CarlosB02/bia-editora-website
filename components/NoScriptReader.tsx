import React from 'react';
import { CONFIG } from '@/lib/config';

export function NoScriptReader() {
  return (
    <noscript>
      <div className="noscript-reader">
        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1>Bia Editora — O Segredo de Grão Vasco</h1>
          <p style={{ fontStyle: 'italic', marginTop: '8px' }}>
            Versão linear de leitura sem JavaScript
          </p>
        </header>

        <section id="ns-capa">
          <h2>Capa</h2>
          <p>
            <strong>Bia Editora</strong> — Livro &amp; Editora. Defendemos histórias. Viseu, 2026.
          </p>
        </section>

        <section id="ns-abertura">
          <h2>Abertura</h2>
          <p>
            Este site é um livro. E a Bia é duas coisas ao mesmo tempo: um livro e uma editora.
            Nasceu como projeto universitário, foi a concurso, venceu — e os apoios que vieram
            com o prémio transformaram uma ideia de sala de aula em páginas impressas.
          </p>
        </section>

        <section id="ns-sumario">
          <h2>Sumário</h2>
          <ul>
            <li>I · O Livro (p. 3)</li>
            <li>II · A História (p. 5)</li>
            <li>III · Próximo Lançamento (p. 7)</li>
            <li>IV · Rede de Parceiros (p. 9)</li>
            <li>V · Contacto (p. 11)</li>
          </ul>
        </section>

        <section id="ns-o-livro">
          <h2>Capítulo I · O Livro: O Segredo de Grão Vasco</h2>
          <p>
            Viseu guarda muitos segredos. Um deles tem cinco séculos e assinatura de pintor.
          </p>
          <p>
            Uma história que parte da obra de Vasco Fernandes — o Grão Vasco, mestre da pintura do
            Renascimento português — para percorrer as ruas, as pedras e as memórias da cidade.
          </p>
          <p>
            Preço: {CONFIG.price}. Editora: {CONFIG.publisher}. Origem: {CONFIG.location}.
          </p>
        </section>

        <section id="ns-historia">
          <h2>Capítulo II · A História: Da sala de aula ao prelo</h2>
          <ol>
            <li>
              <strong>I · A ideia:</strong> Um projeto universitário com uma pergunta teimosa: e
              se um livro pudesse ser, ao mesmo tempo, uma editora?
            </li>
            <li>
              <strong>II · O concurso:</strong> O projeto saiu da universidade e foi a concurso. E
              venceu.
            </li>
            <li>
              <strong>III · Os apoios:</strong> Com a vitória vieram apoios — e a responsabilidade
              de passar do papel ao prelo.
            </li>
            <li>
              <strong>IV · O primeiro livro:</strong> «O Segredo de Grão Vasco» chega às mãos dos
              leitores.
            </li>
            <li>
              <strong>V · O que vem:</strong> Novembro de 2026 abre o capítulo seguinte.
            </li>
          </ol>
        </section>

        <section id="ns-viriato">
          <h2>Porquê Viriato?</h2>
          <p>
            A tradição liga Viriato a Viseu: o chefe lusitano que, durante anos, fez frente a
            Roma. Não o escolhemos pela espada. Escolhemo-lo pelo escudo. Um escudo não serve só
            para resistir. Serve para guardar.
          </p>
        </section>

        <section id="ns-lancamento">
          <h2>Capítulo III · Próximo Lançamento: O próximo está selado</h2>
          <p>
            O segundo título da Bia Editora fica selado até à segunda semana de novembro de 2026.
          </p>
        </section>

        <section id="ns-parceiros">
          <h2>Capítulo IV · Rede de Parceiros</h2>
          <p>
            Uma editora pequena não anda sozinha. Os nossos parceiros acompanham o percurso da Bia
            Editora em cada livro e iniciativa cultural.
          </p>
          <ul>
            <li>Parceiro 1</li>
            <li>Parceiro 2</li>
            <li>Parceiro 3</li>
            <li>Parceiro 4</li>
            <li>Parceiro 5</li>
          </ul>
        </section>

        <section id="ns-contacto">
          <h2>Capítulo V · Contacto</h2>
          <p>Email: {CONFIG.email}</p>
          <p>Casa: {CONFIG.location}</p>
        </section>

        <footer style={{ marginTop: '40px', borderTop: '1px solid var(--rule)', paddingTop: '20px' }}>
          <p>
            Bia Editora · Livro &amp; Editora · Viseu · Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </noscript>
  );
}
