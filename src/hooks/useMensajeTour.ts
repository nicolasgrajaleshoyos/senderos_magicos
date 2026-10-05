import { useReducer } from 'react'
import type { DiasTour } from '../lib/whatsapp'
import { estadoInicialTour, mensajeDelTour, reducirTour } from '../lib/estadoTour'
import { opcionInicialTour } from '../data/tours'

/**
 * Estado del formulario "Arma tu tour". La lógica vive en lib/estadoTour;
 * este hook solo conecta esa lógica con React.
 */
export function useMensajeTour() {
  const [estado, despachar] = useReducer(
    reducirTour,
    estadoInicialTour(opcionInicialTour.dias, opcionInicialTour.intereses),
  )

  return {
    dias: estado.dias,
    intereses: estado.intereses,
    mensaje: mensajeDelTour(estado),
    esEditado: estado.editado !== null,
    elegirDias: (dias: DiasTour) => despachar({ tipo: 'elegirDias', dias }),
    alternarInteres: (interes: string) => despachar({ tipo: 'alternarInteres', interes }),
    editarMensaje: (texto: string) => despachar({ tipo: 'editar', texto }),
    restaurar: () => despachar({ tipo: 'restaurar' }),
  }
}
