import { useEffect, useState } from 'react'
import Icone from './Icone.jsx'
import { navegacao } from '../dados/escritorio.js'
import estilos from './Header.module.css'

export default function Header({ tema, alternarTema }) {
  const [rolou, setRolou] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    if (!menuAberto) return
    const aoTeclar = (evento) => evento.key === 'Escape' && setMenuAberto(false)
    document.addEventListener('keydown', aoTeclar)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      document.body.style.overflow = ''
    }
  }, [menuAberto])

  const fecharMenu = () => setMenuAberto(false)
  const temaEscuro = tema === 'dark'

  return (
    <header className={`${estilos.header} ${rolou || menuAberto ? estilos.solido : ''}`}>
      <div className={`container ${estilos.conteudo}`}>
        <a href="#inicio" className={estilos.logo} onClick={fecharMenu} aria-label="Caporale Advogados — início">
          <img
            src={tema === 'dark' ? '/img/logo-caporale-advogados-branco.png' : '/img/logo_caporale_advogados.png'}
            alt="Caporale — Advocacia e Consultoria Jurídica"
            width="448"
            height="100"
          />
        </a>

        <nav
          id="menu-principal"
          className={`${estilos.nav} ${menuAberto ? estilos.navAberta : ''}`}
          aria-label="Navegação principal"
        >
          <ul>
            {navegacao.map((item) => (
              <li key={item.alvo}>
                <a href={item.alvo} onClick={fecharMenu}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className={`botao ${estilos.ctaMenu}`} onClick={fecharMenu}>
            Fale com o escritório
          </a>
        </nav>

        <div className={estilos.acoes}>
          <button
            type="button"
            className={estilos.botaoIcone}
            onClick={alternarTema}
            aria-label={temaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={temaEscuro ? 'Tema claro' : 'Tema escuro'}
          >
            <Icone nome={temaEscuro ? 'sol' : 'lua'} />
          </button>

          <a href="#contato" className={`botao ${estilos.cta}`}>
            Fale conosco
          </a>

          <button
            type="button"
            className={`${estilos.botaoIcone} ${estilos.botaoMenu}`}
            onClick={() => setMenuAberto((aberto) => !aberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          >
            <Icone nome={menuAberto ? 'fechar' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
