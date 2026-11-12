import { useCallback, useEffect, useState } from 'react'

const CHAVE = 'caporale-tema'

function temaInicial() {
  // O script inline do index.html já definiu o atributo antes da primeira pintura.
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function useTema() {
  const [tema, setTema] = useState(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.theme = tema
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', tema === 'dark' ? '#0D152C' : '#FFFFFF')
  }, [tema])

  // Acompanha a preferência do sistema enquanto a pessoa não escolher manualmente.
  useEffect(() => {
    const consulta = window.matchMedia('(prefers-color-scheme: dark)')
    const aoMudar = (evento) => {
      let salvo = null
      try {
        salvo = localStorage.getItem(CHAVE)
      } catch {
        /* armazenamento indisponível */
      }
      if (!salvo) setTema(evento.matches ? 'dark' : 'light')
    }
    consulta.addEventListener('change', aoMudar)
    return () => consulta.removeEventListener('change', aoMudar)
  }, [])

  const alternarTema = useCallback(() => {
    setTema((atual) => {
      const proximo = atual === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(CHAVE, proximo)
      } catch {
        /* armazenamento indisponível */
      }
      return proximo
    })
  }, [])

  return { tema, alternarTema }
}
