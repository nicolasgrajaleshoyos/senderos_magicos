import { lugaresFranja } from '../data/medellin'

/** Franja animada con los lugares del recorrido. Se repite dos veces para que el desplazamiento no se corte. */
export function FranjaLugares() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-pista">
        {[0, 1].map((copia) => (
          <span key={copia}>
            {lugaresFranja.map((lugar) => (
              <b key={lugar}>{lugar}</b>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
