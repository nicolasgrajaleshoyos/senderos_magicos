import { WHATSAPP_NUMERO } from '../config/contacto'

export type DiasTour = '1' | '2' | '3'

export type OpcionesTour = {
  dias: DiasTour
  intereses: readonly string[]
}

const TEXTO_DIAS: Record<DiasTour, string> = {
  '1': '1 día',
  '2': '2 días',
  '3': '3 o más días',
}

const SIN_INTERESES = 'lo que tú me recomiendes'

/** Enlace de WhatsApp con el mensaje codificado para la URL. */
export function construirEnlaceWhatsApp(mensaje: string, numero: string = WHATSAPP_NUMERO): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}

/** Mensaje automático que describe el tour que el visitante eligió. */
export function construirMensajeTour({ dias, intereses }: OpcionesTour): string {
  const interes = intereses.length > 0 ? intereses.join(', ') : SIN_INTERESES
  return `Hola Jhonny, quiero armar un tour de ${TEXTO_DIAS[dias]}. Me interesa: ${interes}.`
}
