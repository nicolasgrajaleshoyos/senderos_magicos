import { lugaresMedellin } from '../data/medellin'
import { Actividades } from './Actividades'
import { Comidas } from './Comidas'
import { ListaLugares } from './ListaLugares'

export function Medellin() {
  return (
    <section id="medellin">
      <div className="wrap">
        <div className="encabezado">
          <span className="kicker">Qué visitar en Medellín</span>
          <h2>Lugares para recorrer</h2>
          <p className="lead">Barrios, parques y miradores de la ciudad. Los lugares con foto aparecen primero.</p>
        </div>
        <ListaLugares lugares={lugaresMedellin} />
        <Comidas />
        <Actividades />
      </div>
    </section>
  )
}
