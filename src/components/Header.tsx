import { enlacesNavegacion } from '../data/navegacion'
import { BotonTema } from './BotonTema'
import { LogoMarca } from './LogoMarca'

export function Header() {
  return (
    <header>
      <div className="wrap nav">
        <LogoMarca />
        <nav aria-label="Principal">
          <ul>
            {enlacesNavegacion.map((enlace) => (
              <li key={enlace.href}>
                <a href={enlace.href}>{enlace.texto}</a>
              </li>
            ))}
          </ul>
        </nav>
        <BotonTema />
      </div>
    </header>
  )
}
