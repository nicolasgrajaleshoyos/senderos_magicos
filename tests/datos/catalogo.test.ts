import { describe, expect, test } from 'bun:test'
import { CREDITOS } from '../../src/data/creditos'
import { actividadesMedellin, comidasMedellin, lugaresFranja, lugaresMedellin } from '../../src/data/medellin'
import { destinosCercanos, tarjetasCafetero } from '../../src/data/cafetero'
import { slidesHistoria } from '../../src/data/historia'
import { beneficiosGuia, generos, interesesTour, opcionesDias, paquetesTour } from '../../src/data/tours'
import { redes } from '../../src/data/redes'
import { enlacesNavegacion } from '../../src/data/navegacion'
import { WHATSAPP_NUMERO } from '../../src/config/contacto'

const creditosValidos = new Set<string>(Object.values(CREDITOS))

describe('créditos de las fotos', () => {
  test('cada lugar con foto tiene crédito', () => {
    for (const lugar of lugaresMedellin) {
      if (lugar.foto) expect(lugar.credito, lugar.nombre).toBeTruthy()
    }
    for (const grupo of destinosCercanos) {
      for (const lugar of grupo.lugares) if (lugar.foto) expect(lugar.credito, lugar.nombre).toBeTruthy()
    }
  })

  test('todos los créditos salen del catálogo central (no hay textos sueltos)', () => {
    const usados = [
      ...lugaresMedellin,
      ...destinosCercanos.flatMap((g) => g.lugares),
      ...comidasMedellin,
      ...tarjetasCafetero,
      ...slidesHistoria,
    ].map((item) => item.credito)
    for (const credito of usados) {
      if (credito) expect(creditosValidos.has(credito), credito).toBe(true)
    }
  })
})

describe('lugares de Medellín', () => {
  test('incluye los tres destacados y las zonas para recorrer', () => {
    expect(lugaresMedellin.length).toBeGreaterThanOrEqual(14)
    expect(lugaresMedellin.map((l) => l.nombre)).toContain('Comuna 13')
  })

  test('los nombres son únicos', () => {
    const nombres = lugaresMedellin.map((l) => l.nombre)
    expect(new Set(nombres).size).toBe(nombres.length)
  })

  test('la franja de la portada no incluye comida ni servicios', () => {
    expect(lugaresFranja).not.toContain('Bandeja paisa')
    expect(lugaresFranja).not.toContain('Guía local')
  })
})

describe('destinos cercanos', () => {
  test('hay cinco grupos y cada uno tiene lugares', () => {
    expect(destinosCercanos).toHaveLength(5)
    for (const grupo of destinosCercanos) expect(grupo.lugares.length, grupo.grupo).toBeGreaterThan(0)
  })

  test('ningún destino aparece en dos grupos', () => {
    const nombres = destinosCercanos.flatMap((g) => g.lugares.map((l) => l.nombre))
    expect(new Set(nombres).size).toBe(nombres.length)
  })
})

describe('comidas y actividades', () => {
  test('cada comida tiene foto, texto y crédito', () => {
    expect(comidasMedellin).toHaveLength(6)
    for (const comida of comidasMedellin) {
      expect(comida.foto).toBeTruthy()
      expect(comida.texto).toBeTruthy()
      expect(comida.credito).toBeTruthy()
    }
  })

  test('cada actividad tiene color, zona y título', () => {
    expect(actividadesMedellin).toHaveLength(8)
    for (const actividad of actividadesMedellin) {
      expect(actividad.color).toMatch(/^(var\(|#)/)
      expect(actividad.zona).toBeTruthy()
      expect(actividad.titulo).toBeTruthy()
    }
  })
})

describe('tours', () => {
  test('hay tres paquetes, y solo uno está destacado', () => {
    expect(paquetesTour).toHaveLength(3)
    expect(paquetesTour.filter((p) => p.destacado)).toHaveLength(1)
  })

  test('cada paquete tiene mensaje y al menos un ítem', () => {
    for (const paquete of paquetesTour) {
      expect(paquete.mensaje.length).toBeGreaterThan(0)
      expect(paquete.items.length).toBeGreaterThan(0)
    }
  })

  test('las opciones de días son 1, 2 y 3 y los intereses no se repiten', () => {
    expect(opcionesDias.map((o) => o.valor)).toEqual(['1', '2', '3'])
    expect(new Set(interesesTour).size).toBe(interesesTour.length)
  })

  test('hay cinco géneros musicales y cuatro beneficios de guía', () => {
    expect(generos).toHaveLength(5)
    expect(beneficiosGuia).toHaveLength(4)
  })
})

describe('historia', () => {
  test('hay siete épocas, cada una con año y texto', () => {
    expect(slidesHistoria).toHaveLength(7)
    const anos = slidesHistoria.map((s) => s.ano)
    expect(new Set(anos).size).toBe(anos.length)
    for (const slide of slidesHistoria) expect(slide.texto).toBeTruthy()
  })
})

describe('redes y navegación', () => {
  test('las redes tienen URL https y no se repiten', () => {
    const ids = redes.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const red of redes) {
      if (red.id !== 'whatsapp') expect(red.url.startsWith('https://')).toBe(true)
    }
  })

  test('el enlace de WhatsApp usa el número configurado', () => {
    const whatsapp = redes.find((r) => r.id === 'whatsapp')
    expect(whatsapp?.url).toContain(`wa.me/${WHATSAPP_NUMERO}`)
  })

  test('YouTube ya no está en las redes', () => {
    expect(redes.map((r) => r.nombre)).not.toContain('YouTube')
  })

  test('todos los enlaces del menú son anclas internas', () => {
    for (const enlace of enlacesNavegacion) expect(enlace.href.startsWith('#')).toBe(true)
  })
})

describe('tarjetas del Eje Cafetero', () => {
  test('hay cuatro tarjetas con título y etiqueta', () => {
    expect(tarjetasCafetero).toHaveLength(4)
    for (const tarjeta of tarjetasCafetero) {
      expect(tarjeta.titulo).toBeTruthy()
      expect(tarjeta.etiqueta).toBeTruthy()
    }
  })
})
