import { MENSAJE_GENERAL } from '../config/contacto'
import { construirEnlaceWhatsApp } from '../lib/whatsapp'
import { RUTA_WHATSAPP } from '../data/iconos'

/** Botón fijo de WhatsApp, visible en todas las secciones. */
export function WhatsAppFlotante() {
  return (
    <a className="wa-flotante" href={construirEnlaceWhatsApp(MENSAJE_GENERAL)} target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={RUTA_WHATSAPP} />
      </svg>
    </a>
  )
}
