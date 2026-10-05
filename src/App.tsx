import './index.css'
import { ArmaTour } from './components/ArmaTour'
import { Contacto } from './components/Contacto'
import { Destinos } from './components/Destinos'
import { EjeCafetero } from './components/EjeCafetero'
import { Experiencias } from './components/Experiencias'
import { Guia } from './components/Guia'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Historia } from './components/Historia'
import { Medellin } from './components/Medellin'
import { Musica } from './components/Musica'
import { Pie } from './components/Pie'
import { WhatsAppFlotante } from './components/WhatsAppFlotante'

/** Página completa: cada sección es un componente independiente. */
export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Medellin />
      <Destinos />
      <Historia />
      <Musica />
      <EjeCafetero />
      <Experiencias />
      <Guia />
      <ArmaTour />
      <Contacto />
      <Pie />
      <WhatsAppFlotante />
    </>
  )
}
