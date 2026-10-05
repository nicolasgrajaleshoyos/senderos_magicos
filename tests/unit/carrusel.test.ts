import { describe, expect, test } from 'bun:test'
import { indiceAnterior, indiceSiguiente, normalizarIndice } from '../../src/lib/carrusel'

describe('indiceSiguiente', () => {
  test('avanza una posición', () => {
    expect(indiceSiguiente(0, 5)).toBe(1)
  })

  test('da la vuelta al llegar al final', () => {
    expect(indiceSiguiente(2, 3)).toBe(0)
  })

  test('con una sola diapositiva se queda en la misma', () => {
    expect(indiceSiguiente(0, 1)).toBe(0)
  })
})

describe('indiceAnterior', () => {
  test('retrocede una posición', () => {
    expect(indiceAnterior(3, 5)).toBe(2)
  })

  test('desde la primera salta a la última', () => {
    expect(indiceAnterior(0, 3)).toBe(2)
  })
})

describe('normalizarIndice', () => {
  test('deja los índices válidos como están', () => {
    expect(normalizarIndice(4, 5)).toBe(4)
  })

  test('índices negativos dan la vuelta desde el final', () => {
    expect(normalizarIndice(-1, 5)).toBe(4)
  })

  test('índices mayores al total vuelven al rango', () => {
    expect(normalizarIndice(7, 5)).toBe(2)
  })

  test('sin diapositivas siempre devuelve 0 (caso límite)', () => {
    expect(normalizarIndice(3, 0)).toBe(0)
    expect(indiceSiguiente(0, 0)).toBe(0)
    expect(indiceAnterior(0, 0)).toBe(0)
  })
})
