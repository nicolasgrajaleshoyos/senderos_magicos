import type { DiasTour, OpcionesTour } from '../lib/whatsapp'
import type { Genero, PaqueteTour, Beneficio } from './tipos'

export const paquetesTour: readonly PaqueteTour[] = [
  { titulo: 'Medellín a tu medida', texto: 'Tú eliges los barrios, las paradas y el ritmo. Podemos incluir la Comuna 13, el Metrocable, el Pueblito Paisa o lo que te interese.', duracion: 'Tú eliges', items: ['Comuna 13 y Metrocable', 'Paradas para comer', 'Miradores y parques'], mensaje: 'Quiero un tour de Medellín a mi medida' },
  { titulo: 'Eje Cafetero a tu medida', texto: 'Armamos el recorrido según tus días: Salento, Valle de Cocora, fincas de café y catación.', duracion: 'Tú eliges', destacado: true, tag: 'Más pedido', items: ['Valle de Cocora y pueblos', 'Visita a finca y catación', 'Traslados desde Armenia o Pereira'], mensaje: 'Quiero un tour del Eje Cafetero a mi medida' },
  { titulo: 'Medellín + Café a tu medida', texto: 'Ciudad, montaña y café en un mismo viaje, con la ruta que tú quieras.', duracion: 'Tú eliges', items: ['Ruta a tu medida', 'Traslado entre ciudades', 'Guía durante todo el viaje'], mensaje: 'Quiero un combinado Medellín + Café a mi medida' },
]

export const opcionesDias: readonly { valor: DiasTour; titulo: string; sub: string }[] = [
  { valor: '1', titulo: '1 día', sub: 'Un recorrido intenso' },
  { valor: '2', titulo: '2 días', sub: 'Ciudad y un pueblo' },
  { valor: '3', titulo: '3 o más', sub: 'Viaje completo' },
]

export const interesesTour: readonly string[] = ['Ciudad y barrios', 'Naturaleza', 'Café', 'Comida', 'Música y noche']

export const generos: readonly Genero[] = [
  { nombre: 'Reggaetón', texto: 'El ritmo de las fiestas y de las esquinas de noche.', color: 'var(--terracota)' },
  { nombre: 'Trap paisa', texto: 'Letras de barrio sobre beats de la escena nueva.', color: 'var(--mostaza)' },
  { nombre: 'Hip hop', texto: 'Freestyle, graffiti y breakdance en cada comuna.', color: 'var(--selva)' },
  { nombre: 'Salsa', texto: 'Los pasos de siempre, bailados en la calle y en los bares.', color: 'var(--terracota)' },
  { nombre: 'Rock en español', texto: 'Guitarras y bandas de garaje que suenan en los parches.', color: 'var(--azul)' },
]

export const beneficiosGuia: readonly Beneficio[] = [
  { icono: '🧭', titulo: 'Guía local', texto: 'Conozco los barrios, la gente y las fincas. Te llevo a los lugares que de verdad valen la pena.' },
  { icono: '🕰️', titulo: 'La historia detrás', texto: 'Prefiero contarte lo que pasó en cada lugar antes que apurarte por la lista de sitios.' },
  { icono: '👨‍👩‍👧', titulo: 'Tu grupo, tu ritmo', texto: 'Tours privados para parejas, familias y amigos. Paramos donde tú quieras.' },
  { icono: '🗣️', titulo: 'Español e inglés', texto: 'Itinerarios y explicaciones en español e inglés.' },
]

/** Valor inicial del formulario "Arma tu tour". */
export const opcionInicialTour: OpcionesTour = { dias: '1', intereses: [] }
