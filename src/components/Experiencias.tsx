import type { CSSProperties } from 'react'
import { construirEnlaceWhatsApp } from '../lib/whatsapp'
import { paquetesTour } from '../data/tours'
import { Revelar } from './Revelar'

const DEMORA_ENTRE_TARJETAS_S = 0.15
const DEMORA_ENTRE_ITEMS_S = 0.08
const DEMORA_BASE_ITEMS_S = 0.3

export function Experiencias() {
  return (
    <section id="experiencias">
      <div className="wrap">
        <div className="encabezado">
          <span className="kicker">Tours</span>
          <h2>Tu viaje, a tu medida</h2>
          <p className="lead">Todos los tours son privados y se arman según lo que tú quieras: tu grupo, tu ritmo y tus días.</p>
        </div>
        <div className="paquetes">
          {paquetesTour.map((paquete, k) => (
            <Revelar key={paquete.titulo} demora={k * DEMORA_ENTRE_TARJETAS_S}>
              <article className={`card paquete ${paquete.destacado ? 'destacado' : ''}`}>
                {paquete.tag && <span className="tag">{paquete.tag}</span>}
                <h3>{paquete.titulo}</h3>
                <p className="paquete-texto">{paquete.texto}</p>
                <div className="datos-tour">
                  <span><small>Duración</small>{paquete.duracion}</span>
                  <span><small>Formato</small>Privado</span>
                </div>
                <small className="incluye">Puedes incluir</small>
                <ul>
                  {paquete.items.map((item, n) => (
                    <li key={item} style={{ transitionDelay: `${DEMORA_BASE_ITEMS_S + n * DEMORA_ENTRE_ITEMS_S}s` } as CSSProperties}>{item}</li>
                  ))}
                </ul>
                <a className="btn btn-principal" href={construirEnlaceWhatsApp(paquete.mensaje)} target="_blank" rel="noopener">Consultar por WhatsApp</a>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
