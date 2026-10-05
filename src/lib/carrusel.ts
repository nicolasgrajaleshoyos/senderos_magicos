/** Lleva un índice a un rango válido de 0 a total - 1, dando la vuelta en los extremos. */
export function normalizarIndice(indice: number, total: number): number {
  if (total <= 0) return 0
  return ((indice % total) + total) % total
}

export function indiceSiguiente(indice: number, total: number): number {
  return normalizarIndice(indice + 1, total)
}

export function indiceAnterior(indice: number, total: number): number {
  return normalizarIndice(indice - 1, total)
}
