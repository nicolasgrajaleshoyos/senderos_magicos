import type { Actividad, Comida, Lugar } from './tipos'
import { CREDITOS as C } from './creditos'
import comuna13 from '../fotos/comuna13b.jpg'
import metrocable from '../fotos/metrocable.jpg'
import pueblito from '../fotos/pueblito.jpg'
import poblado from '../fotos/poblado.jpg'
import provenza from '../fotos/provenza.jpg'
import lleras from '../fotos/lleras.jpg'
import nutibara from '../fotos/nutibara.jpg'
import botero from '../fotos/botero.jpg'
import arvi from '../fotos/arvi.jpg'
import jbotanico from '../fotos/jbotanico.jpg'
import explora from '../fotos/explora.jpg'
import rios from '../fotos/rios.jpg'
import castillo from '../fotos/castillo.jpg'
import silleteros from '../fotos/silleteros.jpg'
import bandeja from '../fotos/bandeja.jpg'
import ajiaco from '../fotos/ajiaco.jpg'
import empanadas from '../fotos/empcol.jpg'
import arepas from '../fotos/arepa2.jpg'
import sancocho from '../fotos/sancocho.jpg'
import mazamorra from '../fotos/mazamorra.webp'

/** Tres lugares destacados de Medellín, seguidos de las zonas para recorrer. */
const destacados: Lugar[] = [
  {
    nombre: 'Comuna 13',
    texto: 'Grafitis, escaleras eléctricas y la historia de un barrio que pasó de la violencia al arte. Lo cuenta alguien que lo vivió.',
    foto: comuna13,
    credito: C.gagnon,
  },
  {
    nombre: 'Metrocable',
    texto: 'Sube en cabina sobre los barrios y mira la ciudad desde arriba. Ideal para entender la geografía de Medellín.',
    foto: metrocable,
    credito: C.sajor,
  },
  {
    nombre: 'Pueblito Paisa',
    texto: 'La plaza de la colina de Nutibara, con vistas al valle y la arquitectura de los antiguos pueblos antioqueños.',
    foto: pueblito,
    credito: C.sajor,
  },
]

const zonas: Lugar[] = [
  { nombre: 'El Poblado', texto: 'Restaurantes, cafés y vida nocturna en la zona más visitada de la ciudad.', foto: poblado, credito: C.willy },
  { nombre: 'Provenza', texto: 'Calles de cafés, restaurantes y tiendas en El Poblado, ideales para caminar.', foto: provenza, credito: C.xemenendura },
  { nombre: 'Parque Lleras', texto: 'Uno de los puntos más conocidos de El Poblado, con bares y restaurantes.', foto: lleras, credito: C.scabredon },
  { nombre: 'Parque de las Esculturas', texto: 'Esculturas al aire libre en el Cerro Nutibara, junto al Pueblito Paisa.', foto: nutibara, credito: C.xald },
  { nombre: 'Plaza Botero y Museo de Antioquia', texto: 'Arte y patrimonio en el centro: las esculturas de Fernando Botero y el museo.', foto: botero, credito: C.botero },
  { nombre: 'Parque Arví', texto: 'Naturaleza, senderismo y bosque, conectado con la ciudad por Metrocable.', foto: arvi, credito: C.sebas },
  { nombre: 'Jardín Botánico', texto: 'Naturaleza y espacios para recorrer en la zona norte de la ciudad.', foto: jbotanico, credito: C.john },
  { nombre: 'Parque Explora', texto: 'Experiencia de ciencia, tecnología y entretenimiento para toda la familia.', foto: explora, credito: C.averpues },
  { nombre: 'Parques del Río', texto: 'Paseo urbano y espacios abiertos junto al río Medellín, con alumbrado de noche.', foto: rios, credito: C.xald },
  { nombre: 'Museo El Castillo', texto: 'Arquitectura, jardines y patrimonio en El Poblado.', foto: castillo, credito: C.xaldCc30 },
  { nombre: 'Santa Elena', texto: 'Montañas, flores y cultura campesina, a una corta distancia en carro del centro.', foto: silleteros, credito: C.angel },
]

export const lugaresMedellin: readonly Lugar[] = [...destacados, ...zonas]

export const actividadesMedellin: readonly Actividad[] = [
  { zona: 'Comuna 13', titulo: 'Graffiti tour', texto: 'Recorre los murales y escucha la historia del barrio de boca de quien lo vivió.', color: 'var(--terracota)' },
  { zona: 'Metrocable', titulo: 'Ver la ciudad desde arriba', texto: 'Sube a las cabinas sobre las laderas y entiende la geografía de Medellín.', color: 'var(--azul)' },
  { zona: 'Parque Arví', titulo: 'Caminar un sendero', texto: 'Bosque, senderos y aire fresco, al que se llega en Metrocable.', color: 'var(--selva)' },
  { zona: 'Plaza Botero', titulo: 'Esculturas y museo', texto: 'Las figuras de Fernando Botero y el Museo de Antioquia, en el centro.', color: 'var(--mostaza)' },
  { zona: 'Sabores', titulo: 'Bandeja paisa y un tinto', texto: 'Paradas en restaurantes tradicionales, sin prisa.', color: 'var(--rosa-viejo)' },
  { zona: 'El Poblado', titulo: 'Noche en Parque Lleras', texto: 'Bares, restaurantes y música en la zona de vida nocturna.', color: 'var(--verde)' },
  { zona: 'Cerca de Medellín', titulo: 'Guatapé en un día', texto: 'Sube al Peñón, recorre los zócalos del pueblo y navega el embalse.', color: 'var(--terracota)' },
  { zona: 'Eje Cafetero', titulo: 'Finca y catación', texto: 'Recorrido por el cultivo y el beneficio del café, con degustación.', color: 'var(--selva)' },
]

export const comidasMedellin: readonly Comida[] = [
  { nombre: 'Bandeja paisa', texto: 'Frijoles, arroz, carne, chicharrón, huevo, chorizo y arepa.', foto: bandeja, credito: C.idksgm },
  { nombre: 'Ajiaco', texto: 'Sopa de pollo con papa criolla, mazorca y alcaparras, con crema y aguacate.', foto: ajiaco, credito: C.xemenendura },
  { nombre: 'Empanadas', texto: 'De maíz, fritas y con ají. Las clásicas de las tiendas de barrio.', foto: empanadas, credito: C.fort },
  { nombre: 'Arepas', texto: 'De maíz, asadas o fritas, para acompañar cualquier plato.', foto: arepas, credito: C.stevens },
  { nombre: 'Sancocho', texto: 'Caldo con carne, plátano, yuca y mazorca. Plato de domingo.', foto: sancocho, credito: C.xemenendura },
  { nombre: 'Mazamorra', texto: 'Postre de maíz con leche, a veces con panela o canela.', foto: mazamorra, credito: C.sinConfirmar },
]

/** Lugares que se repiten en la franja animada de la portada. */
export const lugaresFranja: readonly string[] = [
  'Medellín',
  'Comuna 13',
  'Metrocable',
  'Pueblito Paisa',
  'Parque Arví',
  'Guatapé',
  'Salento',
  'Valle de Cocora',
  'Manizales',
  'Jardín Botánico',
  'Plaza Botero',
]
