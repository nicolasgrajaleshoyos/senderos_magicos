import { useEffect, useRef, useState } from 'react'

/** Indica cuándo un elemento entra en pantalla. Una vez visible, se queda visible. */
export function useVisible<T extends Element>(umbral = 0.15) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada?.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { threshold: umbral },
    )
    observador.observe(elemento)
    return () => observador.disconnect()
  }, [umbral])

  return { ref, visible }
}
