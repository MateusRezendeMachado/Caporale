import { escritorio } from '../dados/escritorio.js'
import { formacao, atuacaoOab } from '../dados/conteudo.js'
import estilos from './Escritorio.module.css'

export default function Escritorio() {
  return (
    <section id="escritorio" className={`section ${estilos.escritorio}`}>
      <div className="container">
        <div className={estilos.sobre}>
          <figure className={estilos.foto} data-revelar>
            <img
              src="/img/escritorio.webp"
              alt="Sala de reuniões do Caporale Advogados, em Uberlândia"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Sede no bairro Cidade Jardim, em Uberlândia/MG</figcaption>
          </figure>

          <div data-revelar style={{ '--atraso': '0.1s' }}>
            <p className="sobretitulo">O escritório</p>
            <h2 className="tituloSection">
              Você fala com quem <em>conduz o seu caso.</em>
            </h2>
            <p className="textoSection">
              O Caporale Advogados é um escritório multidisciplinar que atende demandas judiciais e extrajudiciais
              em todo o território nacional, com atuação baseada em estratégia e olhar sistêmico para cada
              situação.
            </p>
            <p className="textoSection">
              Sempre que o caso permite, damos preferência aos métodos autocompositivos — negociação, mediação,
              conciliação e arbitragem — e mantemos transparência sobre etapas, custos e riscos do início ao fim.
            </p>
          </div>
        </div>

        <article className={estilos.perfil} data-revelar>
          <header className={estilos.identidade}>
            <img
              src="/img/socia.webp"
              alt=""
              width="800"
              height="1067"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className={estilos.cargo}>Sócia fundadora</p>
              <h3>{escritorio.responsavel}</h3>
              <p className={estilos.oab}>{escritorio.oab}</p>
            </div>
          </header>

          <div className={estilos.bio}>
            <p>
              Dra. Alexandra Caporale fez da advocacia uma ferramenta de esclarecimento e simplificação. À frente
              de um escritório multidisciplinar, ajuda clientes a enxergarem suas questões jurídicas com mais
              clareza para decidir de forma consciente.
            </p>
            <p>
              É criadora do Método Caporale de Análise de Caso, metodologia própria que orienta a condução
              estratégica das demandas do escritório.
            </p>
          </div>

          <div className={estilos.listas}>
            <div>
              <h4>Formação</h4>
              <ul>
                {formacao.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Atuação institucional</h4>
              <ul>
                {atuacaoOab.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
