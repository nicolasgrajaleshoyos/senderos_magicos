import logo from '../logo.png'

/** Logo de Jhonny, enlazado al inicio de la página. */
export function LogoMarca() {
  return (
    <a className="logo" href="#inicio" aria-label="Senderos Mágicos, inicio">
      <img className="logo-img" src={logo} alt="Jhonny, guía local en Medellín" />
    </a>
  )
}
