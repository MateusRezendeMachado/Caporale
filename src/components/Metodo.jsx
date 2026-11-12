import { etapasMetodo } from '../dados/conteudo.js'
import estilos from './Metodo.module.css'

export default function Metodo() {
  return (
    <section id="metodo" className={`section ${estilos.metodo}`}>
      <div className="container">
        <header className={estilos.cabecalho} data-revelar>
          <p className={`sobretitulo ${estilos.sobretitulo}`}>Método Caporale</p>
          <h2 className={estilos.titulo}>
            Cada caso começa por entender, <em>antes de propor.</em>
          </h2>
          <p className={estilos.texto}>
            Uma metodologia própria de análise de caso, organizada em quatro etapas, para que você saiba em que
            ponto está e qual é o próximo passo.
          </p>
        </header>

        <ol className={estilos.etapas}>
          {etapasMetodo.map((etapa, indice) => (
            <li key={etapa.titulo} data-revelar style={{ '--atraso': `${indice * 0.1}s` }}>
              <span className={estilos.numero} aria-hidden="true">
                {String(indice + 1).padStart(2, '0')}
              </span>
              <h3>{etapa.titulo}</h3>
              <p>{etapa.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
