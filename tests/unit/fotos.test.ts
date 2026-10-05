import { describe, expect, test } from 'bun:test'
import { ordenarConFotoPrimero } from '../../src/lib/fotos'

describe('ordenarConFotoPrimero', () => {
  test('pone primero los elementos con foto', () => {
    const items = [{ id: 'a' }, { id: 'b', foto: 'b.jpg' }, { id: 'c' }, { id: 'd', foto: 'd.jpg' }]
    expect(ordenarConFotoPrimero(items).map((i) => i.id)).toEqual(['b', 'd', 'a', 'c'])
  })

  test('mantiene el orden original dentro de cada grupo', () => {
    const items = [{ id: '1' }, { id: '2', foto: 'x' }, { id: '3' }, { id: '4', foto: 'y' }, { id: '5' }]
    const ids = ordenarConFotoPrimero(items).map((i) => i.id)
    expect(ids).toEqual(['2', '4', '1', '3', '5'])
  })

  test('no modifica la lista original', () => {
    const items = [{ id: 'a' }, { id: 'b', foto: 'b' }]
    ordenarConFotoPrimero(items)
    expect(items.map((i) => i.id)).toEqual(['a', 'b'])
  })

  test('una lista vacía devuelve una lista vacía (caso límite)', () => {
    expect(ordenarConFotoPrimero([])).toEqual([])
  })

  test('una cadena vacía de foto cuenta como sin foto', () => {
    const items = [{ id: 'a', foto: '' }, { id: 'b', foto: 'b' }]
    expect(ordenarConFotoPrimero(items).map((i) => i.id)).toEqual(['b', 'a'])
  })
})
