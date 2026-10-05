import { tarjetasCafetero } from '../data/cafetero'

export function EjeCafetero() {
  return (
    <section id="cafetero" className="cafetero">
      <div className="wrap">
        <div className="encabezado">
          <span className="kicker">Nuevo · Eje Cafetero</span>
          <h2>De la mata a la taza</h2>
          <p className="lead">Caldas, Risaralda y Quindío: montañas verdes, fincas con historia y paisajes de postal. Conoce el café desde la finca y termina con una catación.</p>
        </div>
        <div className="grid">
          {tarjetasCafetero.map((tarjeta) => (
            <article className="card" key={tarjeta.titulo}>
              {tarjeta.foto ? (
                <figure className="card-foto">
                  <img src={tarjeta.foto} alt={tarjeta.titulo} loading="lazy" />
                  <figcaption>{tarjeta.credito}</figcaption>
                </figure>
              ) : (
                <div className="icono" style={{ background: tarjeta.color }}>{tarjeta.icono}</div>
              )}
              <h3>{tarjeta.titulo}</h3>
              <p>{tarjeta.texto}</p>
              <span className="etiqueta">{tarjeta.etiqueta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
