export type Tema = 'claro' | 'oscuro'

export const CLAVE_TEMA = 'tema'

type Lectura = Pick<Storage, 'getItem'>
type Escritura = Pick<Storage, 'setItem'>

/** Devuelve el tema guardado, o null si no hay uno válido o el almacenamiento no está disponible. */
export function leerTemaGuardado(almacen: Lectura | null): Tema | null {
  try {
    const valor = almacen?.getItem(CLAVE_TEMA)
    return valor === 'claro' || valor === 'oscuro' ? valor : null
  } catch {
    return null
  }
}

/** La elección guardada tiene prioridad; si no existe, se usa la preferencia del sistema. */
export function resolverTemaInicial(guardado: Tema | null, prefiereOscuro: boolean): Tema {
  return guardado ?? (prefiereOscuro ? 'oscuro' : 'claro')
}

/** Guarda el tema. Si el almacenamiento falla, el tema solo dura esta visita. */
export function guardarTema(almacen: Escritura | null, tema: Tema): void {
  try {
    almacen?.setItem(CLAVE_TEMA, tema)
  } catch {
    // sin permiso de almacenamiento: no es un error para el visitante
  }
}
