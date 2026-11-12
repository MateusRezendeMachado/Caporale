import Icone from './Icone.jsx'
import { escritorio, navegacao } from '../dados/escritorio.js'
import estilos from './Rodape.module.css'

const redes = [
  { nome: 'Instagram', icone: 'instagram', link: escritorio.redes.instagram },
  { nome: 'LinkedIn', icone: 'linkedin', link: escritorio.redes.linkedin },
  { nome: 'Facebook', icone: 'facebook', link: escritorio.redes.facebook },
]

export default function Rodape({ tema }) {
  return (
    <footer className={estilos.rodape}>
      <div className={`container ${estilos.grade}`}>
        <div className={estilos.marca}>
          <img
            src={tema === 'dark' ? '/img/logo-caporale-advogados-branco.png' : '/img/logo_caporale_advogados.png'}
            alt="Caporale — Advocacia e Consultoria Jurídica"
            width="448"
            height="100"
            loading="lazy"
          />
          <p>
            Atuação jurídica personalizada, com análise técnica e estratégia adequada às particularidades de cada
            caso.
          </p>
          <ul className={estilos.redes}>
            {redes.map((rede) => (
              <li key={rede.nome}>
                <a href={rede.link} target="_blank" rel="noopener noreferrer" aria-label={rede.nome}>
                  <Icone nome={rede.icone} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2>Navegação</h2>
          <ul>
            {navegacao.map((item) => (
              <li key={item.alvo}>
                <a href={item.alvo}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2>Contato</h2>
          <ul>
            <li>
              <a href={escritorio.telefone.link}>{escritorio.telefone.exibicao}</a>
            </li>
            <li>
              <a href={escritorio.whatsapp.link} target="_blank" rel="noopener noreferrer">
                WhatsApp {escritorio.whatsapp.exibicao}
              </a>
            </li>
            <li>
              <a href={`mailto:${escritorio.email}`}>{escritorio.email}</a>
            </li>
            <li>
              <a href={escritorio.mapaLink} target="_blank" rel="noopener noreferrer">
                {escritorio.endereco.linha1}
                <br />
                {escritorio.endereco.linha2}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${estilos.legal}`}>
        <p>
          {escritorio.razaoSocial} · CNPJ {escritorio.cnpj} · {escritorio.oab}
        </p>
        <p>
          © {new Date().getFullYear()} {escritorio.nome}. Conteúdo de caráter informativo, que não substitui a
          consulta jurídica.
        </p>
      </div>
    </footer>
  )
}
