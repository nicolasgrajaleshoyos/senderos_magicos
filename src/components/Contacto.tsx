import { construirEnlaceWhatsApp } from '../lib/whatsapp'

export function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <span className="kicker">¿Listo para salir?</span>
      <h2>Escríbeme y armamos tu viaje</h2>
      <p>Cuéntame cuántos son, qué días tienes y qué te gustaría ver. Te respondo por WhatsApp.</p>
      <a className="btn btn-principal" href={construirEnlaceWhatsApp('Hola Jhonny, quiero reservar')} target="_blank" rel="noopener">Reservar por WhatsApp</a>
    </section>
  )
}
