import { construirMensajeTour, type DiasTour } from './whatsapp'

export type EstadoTour = {
  dias: DiasTour
  intereses: readonly string[]
  /** Texto escrito a mano por el visitante. Si existe, reemplaza al mensaje automático. */
  editado: string | null
}

export type AccionTour =
  | { tipo: 'elegirDias'; dias: DiasTour }
  | { tipo: 'alternarInteres'; interes: string }
  | { tipo: 'editar'; texto: string }
  | { tipo: 'restaurar' }

export function estadoInicialTour(dias: DiasTour, intereses: readonly string[]): EstadoTour {
  return { dias, intereses: [...intereses], editado: null }
}

/**
 * Cambiar una opción descarta el texto editado: el mensaje vuelve a generarse
 * con la nueva selección, para que no quede un texto que ya no coincide.
 */
export function reducirTour(estado: EstadoTour, accion: AccionTour): EstadoTour {
  switch (accion.tipo) {
    case 'elegirDias':
      return { ...estado, dias: accion.dias, editado: null }
    case 'alternarInteres': {
      const intereses = estado.intereses.includes(accion.interes)
        ? estado.intereses.filter((i) => i !== accion.interes)
        : [...estado.intereses, accion.interes]
      return { ...estado, intereses, editado: null }
    }
    case 'editar':
      return { ...estado, editado: accion.texto }
    case 'restaurar':
      return { ...estado, editado: null }
  }
}

/** Mensaje que se muestra y se envía: el editado a mano, o el automático. */
export function mensajeDelTour(estado: EstadoTour): string {
  return estado.editado ?? construirMensajeTour({ dias: estado.dias, intereses: estado.intereses })
}
