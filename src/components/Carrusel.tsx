import type { KeyboardEvent } from 'react'
import { useCarrusel } from '../hooks/useCarrusel'
import type { Slide } from '../data/tipos'

type Props = { slides: readonly Slide[] }

/** Carrusel de épocas: avanza solo, se pausa con el cursor o el foco y responde a las flechas del teclado. */
export function Carrusel({ slides }: Props) {
  const { indice, siguiente, anterior, irA, pausar, reanudar } = useCarrusel(slides.length)
  const actual = slides[indice]

  const alPresionarTecla = (evento: KeyboardEvent<HTMLDivElement>) => {
    if (evento.key === 'ArrowRight') siguiente()
    if (evento.key === 'ArrowLeft') anterior()
  }

  if (!actual) return null

  return (
    <div
      className="carrusel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Historia de Medellín"
      tabIndex={0}
      onMouseEnter={pausar}
      onMouseLeave={reanudar}
      onFocus={pausar}
      onBlur={reanudar}
      onKeyDown={alPresionarTecla}
    >
      <div className="car-slide" key={actual.ano}>
        {actual.foto ? (
          <figure className="car-foto">
            <img src={actual.foto} alt={actual.pie ?? actual.titulo} loading="lazy" />
            <figcaption>{actual.credito}</figcaption>
          </figure>
        ) : (
          <div className="car-foto car-sin-foto"><span>{actual.ano}</span></div>
        )}
        <div className="car-texto">
          <span className="ano">{actual.ano}</span>
          <h3>{actual.titulo}</h3>
          <p>{actual.texto}</p>
        </div>
      </div>
      <div className="car-controles">
        <button type="button" className="car-flecha" onClick={anterior} aria-label="Anterior">←</button>
        <div className="car-puntos">
          {slides.map((slide, posicion) => (
            <button
              key={slide.ano}
              type="button"
              className={posicion === indice ? 'activo' : ''}
              onClick={() => irA(posicion)}
              aria-label={'Ir a ' + slide.ano}
              aria-current={posicion === indice}
            />
          ))}
        </div>
        <button type="button" className="car-flecha" onClick={siguiente} aria-label="Siguiente">→</button>
      </div>
    </div>
  )
}
