import { describe, expect, test } from 'bun:test'
import { estadoInicialTour, mensajeDelTour, reducirTour, type EstadoTour } from '../../src/lib/estadoTour'

const inicial = (): EstadoTour => estadoInicialTour('1', [])

describe('reducirTour', () => {
  test('elegir días actualiza la opción y el mensaje lo refleja', () => {
    const estado = reducirTour(inicial(), { tipo: 'elegirDias', dias: '2' })
    expect(estado.dias).toBe('2')
    expect(mensajeDelTour(estado)).toContain('2 días')
  })

  test('alternar un interés lo agrega y, al repetirlo, lo quita', () => {
    const agregado = reducirTour(inicial(), { tipo: 'alternarInteres', interes: 'Café' })
    expect(agregado.intereses).toEqual(['Café'])
    const quitado = reducirTour(agregado, { tipo: 'alternarInteres', interes: 'Café' })
    expect(quitado.intereses).toEqual([])
  })

  test('varios intereses se mantienen en el orden en que se eligieron', () => {
    let estado = inicial()
    estado = reducirTour(estado, { tipo: 'alternarInteres', interes: 'Comida' })
    estado = reducirTour(estado, { tipo: 'alternarInteres', interes: 'Café' })
    expect(estado.intereses).toEqual(['Comida', 'Café'])
  })

  test('editar a mano reemplaza el mensaje automático', () => {
    const estado = reducirTour(inicial(), { tipo: 'editar', texto: 'Somos 4 personas.' })
    expect(mensajeDelTour(estado)).toBe('Somos 4 personas.')
  })

  test('restaurar vuelve al mensaje automático', () => {
    let estado = reducirTour(inicial(), { tipo: 'editar', texto: 'Texto propio' })
    estado = reducirTour(estado, { tipo: 'restaurar' })
    expect(estado.editado).toBeNull()
    expect(mensajeDelTour(estado)).toContain('1 día')
  })

  test('cambiar un día descarta el texto editado (no queda un mensaje desactualizado)', () => {
    let estado = reducirTour(inicial(), { tipo: 'editar', texto: 'Texto propio' })
    estado = reducirTour(estado, { tipo: 'elegirDias', dias: '3' })
    expect(estado.editado).toBeNull()
    expect(mensajeDelTour(estado)).toContain('3 o más días')
  })

  test('cambiar un interés también descarta el texto editado', () => {
    let estado = reducirTour(inicial(), { tipo: 'editar', texto: 'Texto propio' })
    estado = reducirTour(estado, { tipo: 'alternarInteres', interes: 'Naturaleza' })
    expect(estado.editado).toBeNull()
    expect(mensajeDelTour(estado)).toContain('Naturaleza')
  })

  test('no modifica el estado anterior (inmutable)', () => {
    const antes = inicial()
    reducirTour(antes, { tipo: 'alternarInteres', interes: 'Café' })
    expect(antes.intereses).toEqual([])
  })
})

describe('estadoInicialTour', () => {
  test('copia la lista de intereses para no compartir referencia', () => {
    const intereses = ['Café']
    const estado = estadoInicialTour('2', intereses)
    intereses.push('Comida')
    expect(estado.intereses).toEqual(['Café'])
  })
})
