import type { GrupoDestinos, TarjetaCafetera } from './tipos'
import { CREDITOS as C } from './creditos'
import cocora from '../fotos/cocora.webp'
import filandia from '../fotos/filandia.webp'
import finca from '../fotos/finca.webp'
import manizales from '../fotos/manizales.webp'
import penon from '../fotos/penon.webp'
import carmen from '../fotos/carmen.webp'
import retiro from '../fotos/retiro.webp'
import guarne from '../fotos/guarne.webp'
import santafe from '../fotos/santafe.webp'
import sanjeronimo from '../fotos/sanjeronimo.webp'
import sopetran from '../fotos/sopetran.webp'
import guatica from '../fotos/guatica.webp'
import marsella from '../fotos/marsella.webp'
import santarosa from '../fotos/santarosa.webp'
import jardin from '../fotos/jardin.webp'
import jerico from '../fotos/jerico.webp'
import sanrafael from '../fotos/sanrafael.webp'
import cocorna from '../fotos/cocorna.webp'
import rioclaro from '../fotos/rioclaro.webp'
import sanfelix from '../fotos/sanfelix.webp'

export const tarjetasCafetero: readonly TarjetaCafetera[] = [
  { icono: '🌴', color: 'var(--mostaza)', titulo: 'Valle de Cocora', foto: cocora, credito: C.gagnon, texto: 'Caminata entre palmas de cera, las más altas del mundo, y bosque de niebla. Tramo en Salento.', etiqueta: 'Día completo' },
  { icono: '🏡', color: 'var(--terracota)', titulo: 'Salento y Filandia', foto: filandia, credito: C.gagnon, texto: 'Calles de colores, balcones de madera y artesanías. Dos pueblos para caminar sin apuro.', etiqueta: 'Paradas incluidas' },
  { icono: '☕', color: 'var(--selva)', titulo: 'Finca cafetera', foto: finca, credito: C.hoako, texto: 'Recorrido por el cultivo y el beneficio, con explicación de cada etapa y degustación en la finca.', etiqueta: 'Medio día o día completo' },
  { icono: '🏔️', color: 'var(--terracota)', titulo: 'Manizales y Nevados', foto: manizales, credito: C.jimenez, texto: 'Vistas al Nevado del Ruiz, teleférico sobre la ciudad y aguas termales según el itinerario.', etiqueta: 'Opcional' },
]

export const destinosCercanos: readonly GrupoDestinos[] = [
  {
    grupo: 'Oriente antioqueño',
    lugares: [
      { nombre: 'El Peñol', texto: 'Historia, embalse y paisajes, junto al Peñón de Guatapé.', foto: penon, credito: C.diPalm },
      { nombre: 'El Carmen de Viboral', texto: 'Cerámica y tradición artesanal.', foto: carmen, credito: C.juanP },
      { nombre: 'El Retiro', texto: 'Naturaleza, gastronomía y ambiente de pueblo.', foto: retiro, credito: C.motero },
      { nombre: 'Guarne', texto: 'Naturaleza y actividades rurales.', foto: guarne, credito: C.jukahogo },
    ],
  },
  {
    grupo: 'Occidente',
    lugares: [
      { nombre: 'Santa Fe de Antioquia', texto: 'Arquitectura colonial, calles tradicionales y el Puente de Occidente.', foto: santafe, credito: C.xemenendura },
      { nombre: 'San Jerónimo', texto: 'Clima cálido, fincas y piscinas.', foto: sanjeronimo, credito: C.sajorCc40 },
      { nombre: 'Sopetrán', texto: 'Naturaleza y clima cálido.', foto: sopetran, credito: C.laloking },
    ],
  },
  {
    grupo: 'Eje Cafetero · Risaralda',
    lugares: [
      { nombre: 'Guática', texto: 'Pueblo cafetero del norte de Risaralda, con cascadas y paisajes de montaña.', foto: guatica, credito: C.rothware },
      { nombre: 'Marsella', texto: 'Cultura cafetera, casas tradicionales y la iglesia del pueblo entre montañas.', foto: marsella, credito: C.adrimarg },
      { nombre: 'Santa Rosa de Cabal', texto: 'Cascadas, termales y paisajes de montaña a pocos minutos de Pereira.', foto: santarosa, credito: C.elpangui },
    ],
  },
  {
    grupo: 'Suroeste',
    lugares: [
      { nombre: 'Jardín', texto: 'Pueblo colorido, naturaleza, café y miradores.', foto: jardin, credito: C.scabredon },
      { nombre: 'Jericó', texto: 'Arquitectura, cultura cafetera y tradición antioqueña.', foto: jerico, credito: C.xemenendura },
    ],
  },
  {
    grupo: 'Naturaleza y aventura',
    lugares: [
      { nombre: 'San Rafael', texto: 'Ríos, cascadas y naturaleza.', foto: sanrafael, credito: C.jacques },
      { nombre: 'Cocorná', texto: 'Ríos, montaña y aventura.', foto: cocorna, credito: C.camilo },
      { nombre: 'Río Claro', texto: 'Cañón, río, cavernas y actividades de aventura.', foto: rioclaro, credito: C.sinConfirmar },
      { nombre: 'San Félix', texto: 'Parapente y panorámicas del Valle de Aburrá.', foto: sanfelix, credito: C.triptins },
    ],
  },
]
