import type { CSSProperties } from 'react'
import { generos } from '../data/tours'

export function Musica() {
  return (
    <section id="musica" className="musica">
      <div className="wrap musica-grid">
        <div>
          <span className="kicker">Suena Medellín</span>
          <h2>La ciudad se escucha en cada esquina</h2>
          <p className="lead">De los parches de barrio a las fiestas de noche: la música es parte del recorrido, no solo el fondo.</p>
        </div>
        <ol className="playlist">
          {generos.map((genero, n) => (
            <li key={genero.nombre} style={{ '--c': genero.color } as CSSProperties}>
              <span className="pista">{String(n + 1).padStart(2, '0')}</span>
              <div>
                <strong>{genero.nombre}</strong>
                <span>{genero.texto}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
