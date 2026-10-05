import poster from '../poster.png'
import { MENSAJE_GENERAL } from '../config/contacto'
import { construirEnlaceWhatsApp } from '../lib/whatsapp'
import { FranjaLugares } from './FranjaLugares'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="pill">Tours privados con tu guía local</span>
          <h1>
            <span className="l1">Recorre</span>{' '}<span className="l2">Medellín</span>
            <span className="l3">con Jhonny</span>
          </h1>
          <p className="lead">
            Soy Jhonny, guía local. Armo tu tour privado por Medellín y el Eje Cafetero, a tu ritmo y según lo que te interese.
          </p>
          <div className="acciones">
            <a className="btn btn-principal" href={construirEnlaceWhatsApp(MENSAJE_GENERAL)} target="_blank" rel="noopener">Reservar por WhatsApp</a>
            <a className="btn btn-secundario" href="#arma-tu-tour">Arma tu tour</a>
          </div>
        </div>
        <figure className="sticker">
          <img src={poster} alt="Ilustración de Medellín con Metrocable, casas de colores, sombrero vueltiao, bandeja paisa, chiva, aguardiente y un caminante con canasta de arepas" width="1254" height="1254" />
        </figure>
      </div>
      <FranjaLugares />
    </section>
  )
}
