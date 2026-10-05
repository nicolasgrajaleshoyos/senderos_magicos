/**
 * Pruebas de extremo a extremo de los flujos principales de un visitante.
 * Requiere el servidor de desarrollo en marcha (`bun run dev`).
 * Uso: bun run test:e2e   (variables opcionales: BASE_URL, BROWSER_CHANNEL)
 */
import { chromium, type Page } from 'playwright-core'

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000/'
const CANAL = process.env.BROWSER_CHANNEL ?? 'msedge'
const NUMERO = '573007135009'

let pasan = 0
let fallan = 0

async function prueba(nombre: string, cuerpo: (page: Page) => Promise<void>): Promise<void> {
  const navegador = await chromium.launch({ channel: CANAL, headless: true })
  const pagina = await navegador.newPage({ viewport: { width: 1280, height: 900 } })
  const errores: string[] = []
  pagina.on('pageerror', (e) => errores.push(e.message))
  pagina.on('console', (m) => {
    if (m.type() === 'error') errores.push(m.text())
  })
  try {
    await pagina.goto(BASE_URL, { waitUntil: 'networkidle' })
    await cuerpo(pagina)
    if (errores.length > 0) throw new Error(`errores en consola: ${errores[0]}`)
    pasan++
    console.log(`  ✓ ${nombre}`)
  } catch (error) {
    fallan++
    console.log(`  ✗ ${nombre}\n      ${(error as Error).message}`)
  } finally {
    await navegador.close()
  }
}

function afirmar(condicion: unknown, mensaje: string): asserts condicion {
  if (!condicion) throw new Error(mensaje)
}

async function verificarServidor(): Promise<void> {
  try {
    const respuesta = await fetch(BASE_URL)
    afirmar(respuesta.ok, `el servidor respondió ${respuesta.status}`)
  } catch {
    console.error(`No hay servidor en ${BASE_URL}. Ejecuta primero: bun run dev`)
    process.exit(1)
  }
}

await verificarServidor()
console.log(`Pruebas E2E contra ${BASE_URL} (navegador: ${CANAL})\n`)

await prueba('la portada muestra el titular', async (page) => {
  const titulo = await page.locator('.hero h1').innerText()
  afirmar(titulo.includes('Medellín') && titulo.includes('con Jhonny'), `titular inesperado: ${titulo}`)
})

await prueba('cada enlace del menú apunta a una sección que existe', async (page) => {
  const destinos = await page.$$eval('nav a[href^="#"]', (enlaces) => enlaces.map((a) => a.getAttribute('href') ?? ''))
  afirmar(destinos.length >= 5, 'el menú tiene menos de 5 enlaces')
  for (const destino of destinos) {
    const existe = await page.locator(destino).count()
    afirmar(existe > 0, `no existe ${destino}`)
  }
})

await prueba('el botón de tema cambia el fondo y se recuerda al recargar', async (page) => {
  const fondoInicial = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
  await page.click('.tema')
  await page.waitForTimeout(400)
  const fondoOscuro = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
  afirmar(fondoInicial !== fondoOscuro, 'el fondo no cambió al alternar el tema')
  await page.reload({ waitUntil: 'networkidle' })
  const tema = await page.evaluate(() => document.documentElement.dataset.theme)
  afirmar(tema === 'oscuro', `el tema no se recordó tras recargar (tema=${tema})`)
})

await prueba('el carrusel de historia avanza con la flecha siguiente', async (page) => {
  await page.locator('.carrusel').scrollIntoViewIfNeeded()
  const antes = await page.locator('.car-texto .ano').innerText()
  await page.click('.car-controles .car-flecha[aria-label="Siguiente"]')
  await page.waitForTimeout(300)
  const despues = await page.locator('.car-texto .ano').innerText()
  afirmar(antes !== despues, `el año no cambió (${antes})`)
})

await prueba('"Arma tu tour" genera el mensaje según los días y los intereses', async (page) => {
  await page.click('#arma-tu-tour .opcion >> text=2 días')
  await page.click('#arma-tu-tour .chip >> text=Café')
  const mensaje = await page.locator('#arma-tu-tour textarea').inputValue()
  afirmar(mensaje.includes('2 días') && mensaje.includes('Café'), `mensaje inesperado: ${mensaje}`)
  const enlace = decodeURIComponent((await page.locator('.arma-enviar').getAttribute('href')) ?? '')
  afirmar(enlace.includes(NUMERO) && enlace.includes(mensaje), 'el enlace de WhatsApp no lleva el mensaje')
})

await prueba('un mensaje editado a mano es el que se envía', async (page) => {
  await page.fill('#arma-tu-tour textarea', 'Somos 4 personas y queremos ir a Cocora.')
  const enlace = decodeURIComponent((await page.locator('.arma-enviar').getAttribute('href')) ?? '')
  afirmar(enlace.endsWith('Somos 4 personas y queremos ir a Cocora.'), 'el enlace no usa el texto editado')
  await page.click('#arma-tu-tour .chip >> text=Comida')
  const tras = await page.locator('#arma-tu-tour textarea').inputValue()
  afirmar(tras.includes('Comida'), 'cambiar un interés no regeneró el mensaje')
})

await prueba('el botón flotante de WhatsApp apunta al número configurado', async (page) => {
  const href = await page.locator('.wa-flotante').getAttribute('href')
  afirmar(href?.includes(`wa.me/${NUMERO}`) === true, `enlace inesperado: ${href}`)
})

await prueba('las redes del pie tienen enlace y no incluyen YouTube', async (page) => {
  const redes = await page.$$eval('.redes a', (enlaces) => enlaces.map((a) => a.getAttribute('aria-label')))
  afirmar(redes.length === 4, `se esperaban 4 redes, hay ${redes.length}`)
  afirmar(!redes.includes('YouTube'), 'YouTube sigue en el pie')
})

await prueba('no hay desbordamiento horizontal en un celular de 390 px', async (page) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload({ waitUntil: 'networkidle' })
  const exceso = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  afirmar(exceso <= 0, `hay ${exceso}px de desbordamiento`)
})

await prueba('las imágenes cargan al recorrer la página', async (page) => {
  const alto = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < alto; y += 700) {
    await page.evaluate((v) => window.scrollTo(0, v), y)
    await page.waitForTimeout(100)
  }
  // El carrusel cambia de diapositiva solo; se espera a que las fotos terminen de cargar.
  const limite = Date.now() + 4000
  let rotas = 1
  while (rotas > 0 && Date.now() < limite) {
    rotas = await page.evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).length)
    if (rotas > 0) await page.waitForTimeout(250)
  }
  afirmar(rotas === 0, `${rotas} imagen(es) no cargaron`)
})

console.log(`\nResultado: ${pasan} pasaron, ${fallan} fallaron`)
process.exit(fallan > 0 ? 1 : 0)
