import Icone from './Icone.jsx'
import { perguntas } from '../dados/conteudo.js'
import estilos from './Faq.module.css'

// Usa <details>/<summary> nativos: acessível por teclado e com o conteúdo
// presente no HTML (indexável), sem depender de JavaScript.
export default function Faq() {
  return (
    <section id="faq" className={`section ${estilos.faq}`}>
      <div className={`container ${estilos.grade}`}>
        <header className={estilos.cabecalho} data-revelar>
          <p className="sobretitulo">Dúvidas frequentes</p>
          <h2 className="tituloSection">
            Perguntas que costumam chegar <em>antes da primeira conversa.</em>
          </h2>
          <p className="textoSection">
            Conteúdo de caráter informativo, que não substitui a análise individual de cada caso.
          </p>
          <a href="#contato" className={`botao botaoContorno ${estilos.botao}`}>
            Enviar minha dúvida
            <Icone nome="seta" tamanho={18} />
          </a>
        </header>

        <div className={estilos.lista} data-revelar style={{ '--atraso': '0.1s' }}>
          {perguntas.map((item, indice) => (
            <details key={item.pergunta} className={estilos.item} open={indice === 0}>
              <summary>
                <span>{item.pergunta}</span>
                <span className={estilos.icone}>
                  <Icone nome="mais" tamanho={18} />
                </span>
              </summary>
              <p>{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
