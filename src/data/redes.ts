import type { Red } from './tipos'
import { MENSAJE_GENERAL } from '../config/contacto'
import { construirEnlaceWhatsApp } from '../lib/whatsapp'
import { RUTA_FACEBOOK, RUTA_INSTAGRAM, RUTA_TIKTOK, RUTA_WHATSAPP } from './iconos'

export const redes: readonly Red[] = [
  { id: 'instagram', nombre: 'Instagram', color: '#E4405F', url: 'https://www.instagram.com/senderos_magicos_colombia', ruta: RUTA_INSTAGRAM },
  { id: 'tiktok', nombre: 'TikTok', color: '#000000', url: 'https://www.tiktok.com/@senderos.magicos.colomb1', ruta: RUTA_TIKTOK },
  { id: 'facebook', nombre: 'Facebook', color: '#0866FF', url: 'https://www.facebook.com/share/1bjWbXyEHN/', ruta: RUTA_FACEBOOK },
  { id: 'whatsapp', nombre: 'WhatsApp', color: '#25D366', url: construirEnlaceWhatsApp(MENSAJE_GENERAL), ruta: RUTA_WHATSAPP },
]
