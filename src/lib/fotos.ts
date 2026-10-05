export type ConFoto = { foto?: string }

/** Pone primero los elementos con foto. Mantiene el orden original dentro de cada grupo y no muta la lista. */
export function ordenarConFotoPrimero<T extends ConFoto>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => Number(Boolean(b.foto)) - Number(Boolean(a.foto)))
}
