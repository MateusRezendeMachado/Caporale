import { useEffect } from 'react'

// Revela suavemente os elementos marcados com [data-revelar] quando entram na tela.
// Sem JavaScript (ou com "reduzir movimento" ativo) o conteúdo permanece visível.
//
// O estado fica no atributo data-visivel (e não em uma classe) porque o React
// reescreve o className a cada render e apagaria a marcação. A busca é refeita
// a cada verificação para alcançar também elementos montados depois.
export function useRevelar() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const verificar = () => {
      const limite = window.innerHeight - 40
      document.querySelectorAll('[data-revelar]:not([data-visivel])').forEach((el) => {
        if (el.getBoundingClientRect().top <= limite) el.setAttribute('data-visivel', '')
      })
    }

    document.documentElement.classList.add('animacoes')
    window.addEventListener('scroll', verificar, { passive: true })
    window.addEventListener('resize', verificar)
    verificar()

    // Rede de segurança: cobre conteúdo inserido sem rolagem (ex.: troca de estado).
    const intervalo = window.setInterval(verificar, 1000)

    return () => {
      window.removeEventListener('scroll', verificar)
      window.removeEventListener('resize', verificar)
      window.clearInterval(intervalo)
    }
  }, [])
}
