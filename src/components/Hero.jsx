import Icone from './Icone.jsx'
import { escritorio } from '../dados/escritorio.js'
import estilos from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={estilos.hero}>
      <div className={`container ${estilos.grade}`}>
        <div className={estilos.texto}>
          <p className={`sobretitulo ${estilos.sobretitulo}`} data-revelar>
            Advocacia e consultoria jurídica
          </p>

          <h1 className={estilos.titulo} data-revelar style={{ '--atraso': '0.08s' }}>
            Patrimônio, negócios e relações jurídicas exigem decisões <em>bem estruturadas.</em>
          </h1>

          <p className={estilos.subtitulo} data-revelar style={{ '--atraso': '0.16s' }}>
            Atuação jurídica personalizada, com análise técnica e estratégia adequada às particularidades de cada
            caso.
          </p>

          <div className={estilos.botoes} data-revelar style={{ '--atraso': '0.24s' }}>
            <a href="#atuacao" className="botao">
              Conheça nossa atuação
              <Icone nome="seta" tamanho={18} />
            </a>
            <a href="#contato" className={`botao botaoContorno ${estilos.botaoClaro}`}>
              Fale com o escritório
            </a>
          </div>
        </div>

        <figure className={estilos.retrato} data-revelar style={{ '--atraso': '0.2s' }}>
          <div className={estilos.moldura}>
            <img
              src="/img/socia.webp"
              alt="Dra. Alexandra Caporale em seu escritório"
              width="800"
              height="1067"
              // eslint-disable-next-line react/no-unknown-property
              fetchpriority="high"
            />
          </div>
          <figcaption className={estilos.legenda}>
            <span className={estilos.citacao}>“Você fala com quem conduz o seu caso.”</span>
            <span className={estilos.assinatura}>
              {escritorio.responsavel} · {escritorio.oab}
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="container">
        <ul className={estilos.fatos}>
          <li>
            <span>Atendimento</span>
            Presencial em Uberlândia
          </li>
          <li>
            <span>Alcance</span>
            Online em todo o Brasil
          </li>
          <li>
            <span>Abordagem</span>
            Negociação, mediação e conciliação
          </li>
        </ul>
      </div>
    </section>
  )
}
