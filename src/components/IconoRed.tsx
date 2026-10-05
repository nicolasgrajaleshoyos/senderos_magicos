import type { Red } from '../data/tipos'

/**
 * Logo de cada red con sus colores oficiales.
 * TikTok se dibuja en capas (cian y rosa detrás del negro) y Instagram usa su degradado.
 */
export function IconoRed({ red }: { red: Red }) {
  switch (red.id) {
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={red.ruta} fill="#25F4EE" transform="translate(-0.8 -0.8)" />
          <path d={red.ruta} fill="#FE2C55" transform="translate(0.8 0.8)" />
          <path d={red.ruta} fill="#000000" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FEDA75" />
              <stop offset=".3" stopColor="#FA7E1E" />
              <stop offset=".55" stopColor="#D62976" />
              <stop offset=".8" stopColor="#962FBF" />
              <stop offset="1" stopColor="#4F5BD5" />
            </linearGradient>
          </defs>
          <path d={red.ruta} fill="url(#ig-grad)" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill={red.color} aria-hidden="true">
          <path d={red.ruta} />
        </svg>
      )
  }
}
