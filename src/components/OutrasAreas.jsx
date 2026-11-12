import Icone from './Icone.jsx'
import { outrasAreas } from '../dados/conteudo.js'
import estilos from './OutrasAreas.module.css'

export default function OutrasAreas() {
  return (
    <section id="outras-areas" className={`section ${estilos.outras}`}>
      <div className="container">
        <header className={estilos.cabecalho} data-revelar>
          <div>
            <p className="sobretitulo">Outras áreas de atuação</p>
            <h2 className="tituloSection">
              Para cada questão, <em>o olhar jurídico certo.</em>
            </h2>
          </div>
          <p className="textoSection">
            Além dos focos de destaque, o escritório acompanha demandas em outras frentes do Direito, com o mesmo
            método de análise e a mesma proximidade no atendimento.
          </p>
        </header>

        <ul className={estilos.grade}>
          {outrasAreas.map((area, indice) => (
            <li key={area.titulo} data-revelar style={{ '--atraso': `${(indice % 3) * 0.08}s` }}>
              <a href="#contato" className={estilos.item}>
                <span className={estilos.texto}>
                  <span className={estilos.titulo}>{area.titulo}</span>
                  <span className={estilos.descricao}>{area.texto}</span>
                </span>
                <span className={estilos.seta}>
                  <Icone nome="seta" tamanho={18} />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className={estilos.chamada} data-revelar>
          <p>
            Não encontrou o seu assunto? <em>Conte o que está acontecendo</em> e indicamos o melhor caminho.
          </p>
          <a href="#contato" className="botao">
            Fale com o escritório
            <Icone nome="seta" tamanho={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
