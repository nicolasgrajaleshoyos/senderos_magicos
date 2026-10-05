import { describe, expect, test } from 'bun:test'
import { renderToStaticMarkup } from 'react-dom/server'
import { ArmaTour } from '../../src/components/ArmaTour'
import { Carrusel } from '../../src/components/Carrusel'
import { Experiencias } from '../../src/components/Experiencias'
import { Header } from '../../src/components/Header'
import { Hero } from '../../src/components/Hero'
import { LugarCard } from '../../src/components/LugarCard'
import { ListaLugares } from '../../src/components/ListaLugares'
import { Pie } from '../../src/components/Pie'
import { slidesHistoria } from '../../src/data/historia'
import { WHATSAPP_NUMERO } from '../../src/config/contacto'

const contar = (texto: string, parte: string) => texto.split(parte).length - 1

describe('Hero', () => {
  test('muestra el titular y el enlace de WhatsApp con el número configurado', () => {
    const html = renderToStaticMarkup(<Hero />)
    expect(html).toContain('Recorre')
    expect(html).toContain('con Jhonny')
    expect(html).toContain(`https://wa.me/${WHATSAPP_NUMERO}?text=`)
  })

  test('incluye la franja de lugares', () => {
    expect(renderToStaticMarkup(<Hero />)).toContain('Comuna 13')
  })
})

describe('LugarCard', () => {
  test('con foto muestra la imagen y su crédito', () => {
    const html = renderToStaticMarkup(
      <LugarCard nombre="Parque Arví" texto="Bosque" foto="arvi.jpg" credito="Foto: Autor · CC BY-SA 4.0" />,
    )
    expect(html).toContain('zona-foto')
    expect(html).toContain('Foto: Autor · CC BY-SA 4.0')
    expect(html).not.toContain('zona-sin-foto')
  })

  test('sin foto no muestra figura y marca la tarjeta', () => {
    const html = renderToStaticMarkup(<LugarCard nombre="Río Claro" texto="Cañón" />)
    expect(html).not.toContain('zona-foto')
    expect(html).toContain('zona-sin-foto')
    expect(html).toContain('Río Claro')
  })
})

describe('ListaLugares', () => {
  test('los lugares con foto aparecen antes que los que no tienen', () => {
    const html = renderToStaticMarkup(
      <ListaLugares
        lugares={[
          { nombre: 'Sin foto', texto: 'a' },
          { nombre: 'Con foto', texto: 'b', foto: 'x.jpg', credito: 'c' },
        ]}
      />,
    )
    expect(html.indexOf('Con foto')).toBeLessThan(html.indexOf('Sin foto'))
  })

  test('una lista vacía no muestra tarjetas (caso límite)', () => {
    expect(contar(renderToStaticMarkup(<ListaLugares lugares={[]} />), '<article')).toBe(0)
  })
})

describe('Carrusel', () => {
  test('muestra la primera época y un punto por cada diapositiva', () => {
    const html = renderToStaticMarkup(<Carrusel slides={slidesHistoria} />)
    expect(html).toContain('1616')
    expect(contar(html, 'aria-label="Ir a ')).toBe(slidesHistoria.length)
  })

  test('una diapositiva sin foto muestra el año en el fondo', () => {
    const html = renderToStaticMarkup(<Carrusel slides={[{ ano: '1999', titulo: 'T', texto: 'x' }]} />)
    expect(html).toContain('car-sin-foto')
    expect(html).toContain('1999')
  })

  test('sin diapositivas no renderiza nada (caso límite)', () => {
    expect(renderToStaticMarkup(<Carrusel slides={[]} />)).toBe('')
  })
})

describe('ArmaTour', () => {
  test('genera por defecto el mensaje de 1 día y deja el enlace listo', () => {
    const html = renderToStaticMarkup(<ArmaTour />)
    const mensaje = 'Hola Jhonny, quiero armar un tour de 1 día. Me interesa: lo que tú me recomiendes.'
    expect(html).toContain(mensaje)
    expect(html).toContain(`https://wa.me/${WHATSAPP_NUMERO}?text=`)
  })

  test('el día inicial aparece marcado como activo', () => {
    const html = renderToStaticMarkup(<ArmaTour />)
    expect(html).toContain('class="opcion activo"')
    expect(contar(html, 'class="opcion activo"')).toBe(1)
  })
})

describe('Header', () => {
  test('tiene un enlace a cada sección del menú', () => {
    const html = renderToStaticMarkup(<Header />)
    for (const destino of ['#medellin', '#que-hacer', '#musica', '#cafetero', '#experiencias', '#contacto']) {
      expect(html).toContain(`href="${destino}"`)
    }
  })

  test('el botón de tema tiene nombre accesible', () => {
    expect(renderToStaticMarkup(<Header />)).toMatch(/aria-label="Cambiar a tema (oscuro|claro)"/)
  })
})

describe('Experiencias', () => {
  test('muestra un botón de WhatsApp por cada paquete y solo uno destacado', () => {
    const html = renderToStaticMarkup(<Experiencias />)
    expect(contar(html, 'Consultar por WhatsApp')).toBe(3)
    expect(contar(html, 'card paquete destacado')).toBe(1)
  })
})

describe('Pie', () => {
  test('muestra Instagram, TikTok, Facebook y WhatsApp, y no YouTube', () => {
    const html = renderToStaticMarkup(<Pie />)
    for (const red of ['Instagram', 'TikTok', 'Facebook', 'WhatsApp']) expect(html).toContain(`aria-label="${red}"`)
    expect(html).not.toContain('YouTube')
  })
})
