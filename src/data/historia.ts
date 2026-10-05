import type { Slide } from './tipos'
import { CREDITOS as C } from './creditos'
import pueblito from '../fotos/pueblito.jpg'
import ferro from '../fotos/ferro.jpg'
import escobar from '../fotos/escobar.jpg'
import comuna13 from '../fotos/comuna13b.jpg'
import metrocable from '../fotos/metrocable.jpg'
import escaleras from '../fotos/escal.jpg'
import parques from '../fotos/rios.jpg'

export const slidesHistoria: readonly Slide[] = [
  { ano: '1616', titulo: 'Nace la villa', texto: 'Se funda la Villa de Nuestra Señora de la Candelaria de Medellín, en el valle de Aburrá.', foto: pueblito, credito: C.sajor, pie: 'Arquitectura antioqueña, en el Pueblito Paisa' },
  { ano: 'Siglo XX', titulo: 'Ciudad industrial', texto: 'Medellín crece con textiles, café y empresas. Es conocida como la ciudad de la eterna primavera.', foto: ferro, credito: C.secretaria, pie: 'Estación del Ferrocarril de Antioquia' },
  { ano: 'Años 80 y 90', titulo: 'La época de Pablo Escobar', texto: 'El Cartel de Medellín marca la ciudad con violencia y alta tasa de homicidios. Escobar muere en 1993, en Medellín.', foto: escobar, credito: C.policia, pie: 'Ficha policial de Pablo Escobar, 1976' },
  { ano: '2002', titulo: 'Operación Orión', texto: 'Una operación militar en la Comuna 13 pone fin a enfrentamientos armados que llevaban años en el barrio.', foto: comuna13, credito: C.gagnon, pie: 'Comuna 13, San Javier' },
  { ano: '2004', titulo: 'Llega el Metrocable', texto: 'Las cabinas conectan los barrios de las laderas con el resto de la ciudad. Hoy es parte del transporte diario.', foto: metrocable, credito: C.sajor, pie: 'Torre del Metrocable' },
  { ano: '2011', titulo: 'Escaleras eléctricas', texto: 'La Comuna 13 estrena sus escaleras eléctricas, que facilitan subir la ladera y acercan a los vecinos al centro.', foto: escaleras, credito: C.juanGomez, pie: 'Escaleras eléctricas de la Comuna 13' },
  { ano: 'Hoy', titulo: 'Arte, cultura y bibliotecas', texto: 'Grafitis, parques biblioteca y espacios culturales cuentan la historia de la ciudad desde sus barrios.', foto: parques, credito: C.xald, pie: 'Parques del Río, de noche' },
]
