import { useEffect, useState } from 'react'
import { guardarTema, leerTemaGuardado, resolverTemaInicial, type Tema } from '../lib/tema'

function almacenLocal(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage
  } catch {
    return null
  }
}

function prefiereOscuro(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/** Tema claro/oscuro: lo aplica al documento y lo recuerda entre visitas. */
export function useTema() {
  const [tema, setTema] = useState<Tema>(() => resolverTemaInicial(leerTemaGuardado(almacenLocal()), prefiereOscuro()))

  useEffect(() => {
    document.documentElement.dataset.theme = tema
    guardarTema(almacenLocal(), tema)
  }, [tema])

  const alternar = () => setTema((actual) => (actual === 'oscuro' ? 'claro' : 'oscuro'))

  return { tema, alternar }
}
