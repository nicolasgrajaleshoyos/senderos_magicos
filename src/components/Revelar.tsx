import type { ReactNode } from 'react'
import { useVisible } from '../hooks/useVisible'

type Props = {
  children: ReactNode
  demora?: number
  className?: string
}

/** Envuelve un bloque y lo muestra con una animación cuando entra en pantalla. */
export function Revelar({ children, demora = 0, className = '' }: Props) {
  const { ref, visible } = useVisible<HTMLDivElement>()
  return (
    <div ref={ref} className={`revelar ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${demora}s` }}>
      {children}
    </div>
  )
}
