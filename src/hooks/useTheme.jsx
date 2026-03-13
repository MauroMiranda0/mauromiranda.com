/**
 * Hook personalizado para manejo de temas
 * Gestiona el estado del tema y persistencia en localStorage
 */
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Detectar preferencia del sistema
  const getSystemTheme = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark' // Default para SSR
  }

  // Obtener tema guardado o usar preferencia del sistema
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme || getSystemTheme()
    }
    return 'dark'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  // Aplicar tema al documento
  useEffect(() => {
    const root = document.documentElement
    
    // Remover clases de tema anteriores
    root.classList.remove('light', 'dark')
    
    // Aplicar nuevo tema
    root.classList.add(theme)
    root.setAttribute('data-theme', theme)
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  // Escuchar cambios en preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e) => {
      // Solo cambiar si no hay tema guardado explícitamente
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  const setThemeExplicit = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setTheme(newTheme)
    }
  }

  const value = {
    theme,
    toggleTheme,
    setTheme: setThemeExplicit,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}