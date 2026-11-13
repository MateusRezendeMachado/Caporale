import Icone from './Icone.jsx'
import { destaques, complementares } from '../dados/conteudo.js'
import estilos from './Atuacao.module.css'

function CartaoArea({ area, atraso }) {
  return (
    <article className={estilos.destaque} data-revelar style={{ '--atraso': atraso }}>
      <span className={estilos.numero} aria-hidden="true">
        {area.numero}
      </span>
      <h3>{area.titulo}</h3>
      <p className={estilos.resumo}>{area.resumo}</p>

      <ul className={estilos.itens}>
        {area.itens.map((item) => (
          <li key={item}>
            <Icone nome="check" tamanho={16} />
            {item}
          </li>
        ))}
      </ul>

      {area.nota && <p className={estilos.nota}>{area.nota}</p>}

      <a href="#contato" className={estilos.link}>
        Conversar sobre este assunto
        <Icone nome="seta" tamanho={16} />
      </a>
    </article>
  )
}

export default function Atuacao() {
  return (
    <section id="atuacao" className={`section ${estilos.atuacao}`}>
      <div className="container">
        <header className={estilos.cabecalho} data-revelar>
          <div>
            <p className="sobretitulo">Áreas de atuação</p>
            <h2 className="tituloSection">
              Um escritório multidisciplinar, com <em>focos</em> de destaque.
            </h2>
          </div>
          <p className="textoSection">
            Atendemos demandas judiciais e extrajudiciais em diversas áreas do Direito, com atenção especial à
            organização patrimonial e sucessória e às questões imobiliárias.
          </p>
        </header>

        <div className={estilos.destaques}>
          {[...destaques, ...complementares].map((area, indice) => (
            <CartaoArea key={area.id} area={area} atraso={`${(indice % 2) * 0.12}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}
