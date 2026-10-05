import guiaFoto from '../guia.png'
import { MENSAJE_GENERAL } from '../config/contacto'
import { construirEnlaceWhatsApp } from '../lib/whatsapp'
import { beneficiosGuia } from '../data/tours'

export function Guia() {
  return (
    <section id="guia">
      <div className="wrap guia">
        <figure className="guia-foto">
          <img src={guiaFoto} alt="Jhonny, guía local en Medellín y el Eje Cafetero" loading="lazy" />
        </figure>
        <div className="guia-texto">
          <span className="kicker">Tu guía</span>
          <h2>Hola, soy Jhonny</h2>
          <p className="lead">Me gusta caminar despacio y contar la historia de cada barrio, cada finca y cada pueblo. Nada de correr de un sitio a otro: venimos a conocer, no a tachar una lista.</p>
          <div className="beneficios-guia">
            {beneficiosGuia.map((beneficio) => (
              <article key={beneficio.titulo} className="beneficio">
                <span className="beneficio-icono" aria-hidden="true">{beneficio.icono}</span>
                <div>
                  <h3>{beneficio.titulo}</h3>
                  <p>{beneficio.texto}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="acciones guia-acciones">
            <a className="btn btn-principal" href={construirEnlaceWhatsApp(MENSAJE_GENERAL)} target="_blank" rel="noopener">Escribirme por WhatsApp</a>
            <a className="btn btn-secundario" href="#arma-tu-tour">Arma tu tour</a>
          </div>
        </div>
      </div>
    </section>
  )
}
