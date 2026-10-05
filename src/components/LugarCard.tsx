import type { Lugar } from '../data/tipos'

/** Tarjeta de un lugar. Si tiene foto, la muestra con su crédito encima del texto. */
export function LugarCard({ nombre, texto, foto, credito }: Lugar) {
  return (
    <article className={`zona ${foto ? '' : 'zona-sin-foto'}`}>
      {foto && (
        <figure className="zona-foto">
          <img src={foto} alt={nombre} loading="lazy" />
          <figcaption>{credito}</figcaption>
        </figure>
      )}
      <h3>{nombre}</h3>
      <p>{texto}</p>
    </article>
  )
}
