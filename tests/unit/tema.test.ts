import { describe, expect, test } from 'bun:test'
import { CLAVE_TEMA, guardarTema, leerTemaGuardado, resolverTemaInicial } from '../../src/lib/tema'

/** Almacenamiento en memoria con la misma forma que localStorage. */
function almacenFalso(inicial: Record<string, string> = {}) {
  const valores = { ...inicial }
  return {
    valores,
    getItem: (clave: string) => valores[clave] ?? null,
    setItem: (clave: string, valor: string) => {
      valores[clave] = valor
    },
  }
}

const almacenQueFalla = {
  getItem: () => {
    throw new Error('SecurityError')
  },
  setItem: () => {
    throw new Error('QuotaExceededError')
  },
}

describe('leerTemaGuardado', () => {
  test('sin almacenamiento devuelve null', () => {
    expect(leerTemaGuardado(null)).toBeNull()
  })

  test('devuelve el tema guardado cuando es válido', () => {
    expect(leerTemaGuardado(almacenFalso({ [CLAVE_TEMA]: 'oscuro' }))).toBe('oscuro')
    expect(leerTemaGuardado(almacenFalso({ [CLAVE_TEMA]: 'claro' }))).toBe('claro')
  })

  test('ignora un valor que no es un tema conocido', () => {
    expect(leerTemaGuardado(almacenFalso({ [CLAVE_TEMA]: 'azul' }))).toBeNull()
  })

  test('si el almacenamiento lanza error, devuelve null y no falla', () => {
    expect(leerTemaGuardado(almacenQueFalla)).toBeNull()
  })
})

describe('resolverTemaInicial', () => {
  test('la elección guardada tiene prioridad sobre el sistema', () => {
    expect(resolverTemaInicial('claro', true)).toBe('claro')
    expect(resolverTemaInicial('oscuro', false)).toBe('oscuro')
  })

  test('sin elección guardada usa la preferencia del sistema', () => {
    expect(resolverTemaInicial(null, true)).toBe('oscuro')
    expect(resolverTemaInicial(null, false)).toBe('claro')
  })
})

describe('guardarTema', () => {
  test('escribe el tema con la clave esperada', () => {
    const almacen = almacenFalso()
    guardarTema(almacen, 'oscuro')
    expect(almacen.valores[CLAVE_TEMA]).toBe('oscuro')
  })

  test('no falla si el almacenamiento está lleno o bloqueado', () => {
    expect(() => guardarTema(almacenQueFalla, 'claro')).not.toThrow()
  })

  test('no falla sin almacenamiento', () => {
    expect(() => guardarTema(null, 'claro')).not.toThrow()
  })
})
