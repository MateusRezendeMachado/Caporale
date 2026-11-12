import { useEffect, useState } from 'react'
import Icone from './Icone.jsx'
import { escritorio } from '../dados/escritorio.js'
import estilos from './BotoesFlutuantes.module.css'

export default function BotoesFlutuantes() {
  const [mostrarTopo, setMostrarTopo] = useState(false)

  useEffect(() => {
    const aoRolar = () => setMostrarTopo(window.scrollY > 600)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <>
      <a
        href="#inicio"
        className={`${estilos.topo} ${mostrarTopo ? estilos.visivel : ''}`}
        aria-label="Voltar ao topo"
        tabIndex={mostrarTopo ? 0 : -1}
      >
        <Icone nome="setaCima" />
      </a>

      <a
        href={escritorio.whatsapp.link}
        className={estilos.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
      >
        <Icone nome="whatsapp" tamanho={30} />
      </a>
    </>
  )
}
