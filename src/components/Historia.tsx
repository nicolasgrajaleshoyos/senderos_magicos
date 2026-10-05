import { slidesHistoria } from '../data/historia'
import { Carrusel } from './Carrusel'

export function Historia() {
  return (
    <section id="historia" className="historia">
      <div className="wrap">
        <div className="encabezado">
          <span className="kicker">Historia de Medellín</span>
          <h2>De la violencia a la innovación</h2>
          <p className="lead">Para entender los barrios hay que conocer su historia. Así llegó Medellín a ser lo que es hoy.</p>
        </div>
        <Carrusel slides={slidesHistoria} />
        <div className="nota">
          <strong>Dónde se ve esta historia</strong>
          <span>Comuna 13, el Metrocable, los parques biblioteca y el Cerro Nutibara.</span>
        </div>
      </div>
    </section>
  )
}
