/**
 * Componente ScrollToTop - Scroll automático al cambiar de ruta
 * Mejora la experiencia de navegación
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop