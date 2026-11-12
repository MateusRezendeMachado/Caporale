import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Atuacao from './components/Atuacao.jsx'
import OutrasAreas from './components/OutrasAreas.jsx'
import Metodo from './components/Metodo.jsx'
import Escritorio from './components/Escritorio.jsx'
import Faq from './components/Faq.jsx'
import Contato from './components/Contato.jsx'
import Rodape from './components/Rodape.jsx'
import BotoesFlutuantes from './components/BotoesFlutuantes.jsx'
import { useTema } from './hooks/useTema.js'
import { useRevelar } from './hooks/useRevelar.js'

export default function App() {
  const { tema, alternarTema } = useTema()
  useRevelar()

  return (
    <>
      <a className="pularConteudo" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header tema={tema} alternarTema={alternarTema} />
      <main id="conteudo">
        <Hero />
        <Atuacao />
        <OutrasAreas />
        <Metodo />
        <Escritorio />
        <Faq />
        <Contato />
      </main>
      <Rodape tema={tema} />
      <BotoesFlutuantes />
    </>
  )
}
