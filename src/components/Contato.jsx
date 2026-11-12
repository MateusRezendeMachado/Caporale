import Icone from './Icone.jsx'
import FormularioContato from './FormularioContato.jsx'
import { escritorio } from '../dados/escritorio.js'
import estilos from './Contato.module.css'

export default function Contato() {
  const canais = [
    {
      icone: 'local',
      rotulo: 'Endereço',
      valor: (
        <>
          {escritorio.endereco.linha1}
          <br />
          {escritorio.endereco.linha2}
        </>
      ),
      link: escritorio.mapaLink,
      externo: true,
    },
    { icone: 'telefone', rotulo: 'Telefone', valor: escritorio.telefone.exibicao, link: escritorio.telefone.link },
    {
      icone: 'whatsapp',
      rotulo: 'WhatsApp',
      valor: escritorio.whatsapp.exibicao,
      link: escritorio.whatsapp.link,
      externo: true,
    },
    { icone: 'email', rotulo: 'E-mail', valor: escritorio.email, link: `mailto:${escritorio.email}` },
    { icone: 'relogio', rotulo: 'Horário de funcionamento', valor: escritorio.horario },
  ]

  return (
    <section id="contato" className={`section ${estilos.contato}`}>
      <div className="container">
        <header className={estilos.cabecalho} data-revelar>
          <p className="sobretitulo">Contato</p>
          <h2 className="tituloSection">
            Conte o que está acontecendo. <em>Nós retornamos.</em>
          </h2>
          <p className="textoSection">{escritorio.atendimento}.</p>
        </header>

        <div className={estilos.grade}>
          <div className={estilos.informacoes} data-revelar>
            <ul className={estilos.canais}>
              {canais.map((canal) => {
                const conteudo = (
                  <>
                    <span className={estilos.icone}>
                      <Icone nome={canal.icone} />
                    </span>
                    <span>
                      <span className={estilos.rotulo}>{canal.rotulo}</span>
                      <span className={estilos.valor}>{canal.valor}</span>
                    </span>
                  </>
                )
                return (
                  <li key={canal.rotulo}>
                    {canal.link ? (
                      <a
                        href={canal.link}
                        {...(canal.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {conteudo}
                      </a>
                    ) : (
                      <div>{conteudo}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className={estilos.mapa}>
              <iframe
                src={escritorio.mapaEmbed}
                title="Mapa com a localização do Caporale Advogados"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div data-revelar style={{ '--atraso': '0.12s' }}>
            <FormularioContato />
          </div>
        </div>
      </div>
    </section>
  )
}
