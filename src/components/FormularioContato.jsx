import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Icone from './Icone.jsx'
import { escritorio } from '../dados/escritorio.js'
import { areasFormulario } from '../dados/conteudo.js'
import estilos from './FormularioContato.module.css'

const EMAILJS = {
  servico: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  chavePublica: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const VAZIO = { nome: '', email: '', telefone: '', assunto: '', mensagem: '', aceite: false, site: '' }

function mascararTelefone(valor) {
  const d = valor.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function validar(dados) {
  const erros = {}
  if (dados.nome.trim().length < 3) erros.nome = 'Informe seu nome completo.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(dados.email.trim())) erros.email = 'Informe um e-mail válido.'
  if (dados.telefone.replace(/\D/g, '').length < 10) erros.telefone = 'Informe um telefone com DDD.'
  if (dados.mensagem.trim().length < 10) erros.mensagem = 'Conte um pouco mais para podermos orientar você.'
  if (!dados.aceite) erros.aceite = 'É preciso concordar para enviar a mensagem.'
  return erros
}

export default function FormularioContato() {
  const [dados, setDados] = useState(VAZIO)
  const [erros, setErros] = useState({})
  const [estado, setEstado] = useState('inicial') // inicial | enviando | sucesso | erro

  const alterar = (evento) => {
    const { name, type, checked } = evento.target
    let valor = type === 'checkbox' ? checked : evento.target.value
    if (name === 'telefone') valor = mascararTelefone(valor)
    setDados((atual) => ({ ...atual, [name]: valor }))
    if (erros[name]) setErros((atual) => ({ ...atual, [name]: undefined }))
  }

  const enviar = async (evento) => {
    evento.preventDefault()

    // Campo-isca invisível: se vier preenchido, é um robô. Finge sucesso e não envia.
    if (dados.site) {
      setEstado('sucesso')
      return
    }

    const encontrados = validar(dados)
    setErros(encontrados)
    const primeiroErro = Object.keys(encontrados)[0]
    if (primeiroErro) {
      evento.currentTarget.querySelector(`[name="${primeiroErro}"]`)?.focus()
      return
    }

    setEstado('enviando')
    try {
      if (!EMAILJS.servico || !EMAILJS.template || !EMAILJS.chavePublica) {
        throw new Error('EmailJS não configurado: preencha as variáveis VITE_EMAILJS_* no arquivo .env')
      }

      // Os nomes abaixo são as variáveis usadas no template (email-template/contato.html).
      await emailjs.send(
        EMAILJS.servico,
        EMAILJS.template,
        {
          nome: dados.nome.trim(),
          email: dados.email.trim(),
          telefone: dados.telefone,
          telefone_numeros: `55${dados.telefone.replace(/\D/g, '')}`,
          assunto: dados.assunto || 'Não informado',
          mensagem: dados.mensagem.trim(),
          data: new Date().toLocaleString('pt-BR', { dateStyle: 'long', timeStyle: 'short' }),
        },
        { publicKey: EMAILJS.chavePublica, limitRate: { id: 'contato-site', throttle: 15000 } },
      )

      setDados(VAZIO)
      setEstado('sucesso')
    } catch (erro) {
      console.error('[Contato] Falha no envio:', erro)
      setEstado('erro')
    }
  }

  if (estado === 'sucesso') {
    return (
      <div className={`${estilos.cartao} ${estilos.sucesso}`} role="status">
        <span className={estilos.selo}>
          <Icone nome="check" tamanho={26} />
        </span>
        <h3>Mensagem enviada.</h3>
        <p>Recebemos o seu contato e o escritório retornará em breve pelos dados informados.</p>
        <button type="button" className="botao botaoContorno" onClick={() => setEstado('inicial')}>
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  const enviando = estado === 'enviando'

  return (
    <form className={estilos.cartao} onSubmit={enviar} noValidate>
      <h3 className={estilos.titulo}>Envie uma mensagem</h3>
      <p className={estilos.apoio}>Preencha os campos abaixo e retornaremos o seu contato.</p>

      <div className={estilos.campo}>
        <label htmlFor="contato-nome">Nome *</label>
        <input
          id="contato-nome"
          name="nome"
          type="text"
          autoComplete="name"
          placeholder="Seu nome completo"
          value={dados.nome}
          onChange={alterar}
          aria-invalid={Boolean(erros.nome)}
          aria-describedby={erros.nome ? 'erro-nome' : undefined}
        />
        {erros.nome && (
          <span id="erro-nome" className={estilos.erro}>
            {erros.nome}
          </span>
        )}
      </div>

      <div className={estilos.dupla}>
        <div className={estilos.campo}>
          <label htmlFor="contato-email">E-mail *</label>
          <input
            id="contato-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="voce@email.com"
            value={dados.email}
            onChange={alterar}
            aria-invalid={Boolean(erros.email)}
            aria-describedby={erros.email ? 'erro-email' : undefined}
          />
          {erros.email && (
            <span id="erro-email" className={estilos.erro}>
              {erros.email}
            </span>
          )}
        </div>

        <div className={estilos.campo}>
          <label htmlFor="contato-telefone">Telefone / WhatsApp *</label>
          <input
            id="contato-telefone"
            name="telefone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="(00) 00000-0000"
            value={dados.telefone}
            onChange={alterar}
            aria-invalid={Boolean(erros.telefone)}
            aria-describedby={erros.telefone ? 'erro-telefone' : undefined}
          />
          {erros.telefone && (
            <span id="erro-telefone" className={estilos.erro}>
              {erros.telefone}
            </span>
          )}
        </div>
      </div>

      <div className={estilos.campo}>
        <label htmlFor="contato-assunto">Assunto</label>
        <select id="contato-assunto" name="assunto" value={dados.assunto} onChange={alterar}>
          <option value="">Selecione (opcional)</option>
          {areasFormulario.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <div className={estilos.campo}>
        <label htmlFor="contato-mensagem">Mensagem *</label>
        <textarea
          id="contato-mensagem"
          name="mensagem"
          rows={5}
          maxLength={1500}
          placeholder="Nos conte brevemente sobre seu caso"
          value={dados.mensagem}
          onChange={alterar}
          aria-invalid={Boolean(erros.mensagem)}
          aria-describedby={`dica-mensagem${erros.mensagem ? ' erro-mensagem' : ''}`}
        />
        <span id="dica-mensagem" className={estilos.dica}>
          Por segurança, não inclua documentos nem dados sensíveis neste primeiro contato.
        </span>
        {erros.mensagem && (
          <span id="erro-mensagem" className={estilos.erro}>
            {erros.mensagem}
          </span>
        )}
      </div>

      {/* Campo-isca anti-spam: fica fora da tela e do fluxo do teclado */}
      <div className={estilos.isca} aria-hidden="true">
        <label htmlFor="contato-site">Não preencha este campo</label>
        <input
          id="contato-site"
          name="site"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={dados.site}
          onChange={alterar}
        />
      </div>

      <div className={estilos.aceite}>
        <input
          id="contato-aceite"
          name="aceite"
          type="checkbox"
          checked={dados.aceite}
          onChange={alterar}
          aria-invalid={Boolean(erros.aceite)}
          aria-describedby={erros.aceite ? 'erro-aceite' : undefined}
        />
        <label htmlFor="contato-aceite">
          Concordo com o uso dos meus dados exclusivamente para o retorno deste contato, conforme a LGPD.
        </label>
      </div>
      {erros.aceite && (
        <span id="erro-aceite" className={estilos.erro}>
          {erros.aceite}
        </span>
      )}

      <button type="submit" className={`botao ${estilos.enviar}`} disabled={enviando}>
        {enviando ? 'Enviando…' : 'Enviar mensagem'}
        {!enviando && <Icone nome="seta" tamanho={18} />}
      </button>

      <div aria-live="polite">
        {estado === 'erro' && (
          <p className={estilos.falha} role="alert">
            Não foi possível enviar agora. Tente novamente em instantes ou{' '}
            <a href={escritorio.whatsapp.link} target="_blank" rel="noopener noreferrer">
              fale pelo WhatsApp
            </a>
            .
          </p>
        )}
      </div>
    </form>
  )
}
