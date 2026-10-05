import type { CSSProperties } from 'react'
import { actividadesMedellin } from '../data/medellin'

export function Actividades() {
  return (
    <>
      <h3 className="subtitulo-mini" id="que-hacer">Lo que puedes hacer</h3>
      <div className="actividades">
        {actividadesMedellin.map((actividad, n) => (
          <article className="actividad" key={actividad.titulo} style={{ '--c': actividad.color } as CSSProperties}>
            <span className="actividad-num">{String(n + 1).padStart(2, '0')}</span>
            <span className="actividad-zona">{actividad.zona}</span>
            <h3>{actividad.titulo}</h3>
            <p>{actividad.texto}</p>
          </article>
        ))}
      </div>
    </>
  )
}
