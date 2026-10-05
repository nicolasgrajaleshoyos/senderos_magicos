import type { CSSProperties } from 'react'
import { redes } from '../data/redes'
import { LogoMarca } from './LogoMarca'
import { IconoRed } from './IconoRed'

export function Pie() {
  return (
    <footer className="pie">
      <div className="wrap pie-grid">
        <div>
          <LogoMarca />
          <p>Tours privados con guía local por Medellín y el Eje Cafetero.</p>
        </div>
        <nav aria-label="Redes sociales">
          <span className="pie-titulo">Síguenos</span>
          <ul className="redes">
            {redes.map((red) => (
              <li key={red.id}>
                <a href={red.url} target="_blank" rel="noopener" aria-label={red.nombre} style={{ '--marca': red.color } as CSSProperties}>
                  <IconoRed red={red} />
                  <span>{red.nombre}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="copy">© 2026 Senderos Mágicos Colombia · Medellín, Colombia</p>
    </footer>
  )
}
