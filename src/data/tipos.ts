/** Un lugar o zona que se muestra en una tarjeta, con foto opcional. */
export type Lugar = {
  nombre: string
  texto: string
  foto?: string
  credito?: string
}

export type TarjetaCafetera = {
  icono: string
  color: string
  titulo: string
  texto: string
  etiqueta: string
  foto?: string
  credito?: string
}

export type Slide = {
  ano: string
  titulo: string
  texto: string
  foto?: string
  credito?: string
  pie?: string
}

export type Actividad = {
  zona: string
  titulo: string
  texto: string
  color: string
}

export type Comida = {
  nombre: string
  texto: string
  foto: string
  credito: string
}

export type Genero = {
  nombre: string
  texto: string
  color: string
}

export type PaqueteTour = {
  titulo: string
  texto: string
  duracion: string
  items: string[]
  mensaje: string
  destacado?: boolean
  tag?: string
}

export type Beneficio = {
  icono: string
  titulo: string
  texto: string
}

export type GrupoDestinos = {
  grupo: string
  lugares: Lugar[]
}

export type IdRed = 'instagram' | 'tiktok' | 'facebook' | 'whatsapp'

export type Red = {
  id: IdRed
  nombre: string
  color: string
  url: string
  ruta: string
}
