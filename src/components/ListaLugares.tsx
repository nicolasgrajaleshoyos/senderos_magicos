import type { Lugar } from '../data/tipos'
import { ordenarConFotoPrimero } from '../lib/fotos'
import { LugarCard } from './LugarCard'

/** Cuadrícula de lugares, con los que tienen foto primero. */
export function ListaLugares({ lugares }: { lugares: readonly Lugar[] }) {
  return (
    <div className="zonas">
      {ordenarConFotoPrimero(lugares).map((lugar) => (
        <LugarCard key={lugar.nombre} {...lugar} />
      ))}
    </div>
  )
}
