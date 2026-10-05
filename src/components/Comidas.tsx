import { comidasMedellin } from '../data/medellin'

export function Comidas() {
  return (
    <>
      <h3 className="subtitulo-mini">Para comer</h3>
      <div className="comidas">
        {comidasMedellin.map((comida) => (
          <figure className="comida" key={comida.nombre}>
            <img src={comida.foto} alt={comida.nombre} loading="lazy" />
            <figcaption>
              <strong>{comida.nombre}</strong>
              <span>{comida.texto}</span>
              <small>{comida.credito}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}
