import { useEffect, useState } from 'react'
import { indiceAnterior, indiceSiguiente, normalizarIndice } from '../lib/carrusel'

export const INTERVALO_CARRUSEL_MS = 5000

/** Estado de un carrusel que avanza solo y se puede pausar. */
export function useCarrusel(total: number) {
  const [indice, setIndice] = useState(0)
  const [pausado, setPausado] = useState(false)

  useEffect(() => {
    if (pausado || total <= 1) return
    const temporizador = setInterval(() => setIndice((i) => indiceSiguiente(i, total)), INTERVALO_CARRUSEL_MS)
    return () => clearInterval(temporizador)
  }, [pausado, total])

  return {
    indice,
    siguiente: () => setIndice((i) => indiceSiguiente(i, total)),
    anterior: () => setIndice((i) => indiceAnterior(i, total)),
    irA: (posicion: number) => setIndice(normalizarIndice(posicion, total)),
    pausar: () => setPausado(true),
    reanudar: () => setPausado(false),
  }
}
