import { describe, expect, test } from 'bun:test'
import { WHATSAPP_NUMERO } from '../../src/config/contacto'
import { construirEnlaceWhatsApp, construirMensajeTour } from '../../src/lib/whatsapp'

const textoDelEnlace = (url: string) => decodeURIComponent(url.split('?text=')[1] ?? '')

describe('construirEnlaceWhatsApp', () => {
  test('usa el número configurado y codifica el mensaje', () => {
    const url = construirEnlaceWhatsApp('Hola Jhonny, quiero info')
    expect(url.startsWith(`https://wa.me/${WHATSAPP_NUMERO}?text=`)).toBe(true)
    expect(textoDelEnlace(url)).toBe('Hola Jhonny, quiero info')
  })

  test('conserva tildes y signos al codificar, sin espacios en la URL', () => {
    const mensaje = 'Quiero ir a Cocora: ¿cuánto cuesta? + café'
    const url = construirEnlaceWhatsApp(mensaje)
    expect(url).not.toContain(' ')
    expect(textoDelEnlace(url)).toBe(mensaje)
  })

  test('acepta otro número cuando se le pasa', () => {
    expect(construirEnlaceWhatsApp('hola', '573001112233')).toBe('https://wa.me/573001112233?text=hola')
  })

  test('un mensaje vacío deja el parámetro vacío (caso límite)', () => {
    expect(construirEnlaceWhatsApp('')).toBe(`https://wa.me/${WHATSAPP_NUMERO}?text=`)
  })
})

describe('construirMensajeTour', () => {
  test('un día sin intereses usa el texto por defecto', () => {
    expect(construirMensajeTour({ dias: '1', intereses: [] })).toBe(
      'Hola Jhonny, quiero armar un tour de 1 día. Me interesa: lo que tú me recomiendes.',
    )
  })

  test('dos días con varios intereses los une con coma', () => {
    expect(construirMensajeTour({ dias: '2', intereses: ['Café', 'Comida'] })).toBe(
      'Hola Jhonny, quiero armar un tour de 2 días. Me interesa: Café, Comida.',
    )
  })

  test('tres días se describe como 3 o más días', () => {
    expect(construirMensajeTour({ dias: '3', intereses: ['Naturaleza'] })).toContain('tour de 3 o más días')
  })

  test('no modifica la lista de intereses recibida', () => {
    const intereses = ['Café']
    construirMensajeTour({ dias: '1', intereses })
    expect(intereses).toEqual(['Café'])
  })
})
