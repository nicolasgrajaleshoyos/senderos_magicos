import { destinosCercanos } from '../data/cafetero'
import { ListaLugares } from './ListaLugares'

export function Destinos() {
  return (
    <section id="destinos">
      <div className="wrap">
        <div className="encabezado">
          <span className="kicker">Cerca de Medellín</span>
          <h2>Pueblos y destinos cercanos</h2>
          <p className="lead">Pueblos de colores, montañas, ríos y cultura cafetera a menos de un día de la ciudad.</p>
        </div>
        {destinosCercanos.map((grupo) => (
          <div key={grupo.grupo}>
            <h3 className="grupo">{grupo.grupo}</h3>
            <ListaLugares lugares={grupo.lugares} />
          </div>
        ))}
      </div>
    </section>
  )
}
