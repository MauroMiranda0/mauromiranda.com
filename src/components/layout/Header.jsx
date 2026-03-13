/**
 * Componente Header - Navegación principal
 * Incluye logo, navegación y controles de tema
 */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@hooks/useTheme'
import Icon from '@components/common/Icon'
import Navigation from '@components/navigation/Navigation'
import './Header.scss'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header__container">
        {/* Logo y versión */}
        <div className="header__brand">
          <Icon name="terminal" className="header__icon" />
          <h2 className="header__title">MM // LAB_v1.0.4</h2>
        </div>

        {/* Navegación principal */}
        <Navigation />

        {/* Controles de estado y tema */}
        <div className="header__controls">
          <div className="header__status">
            <span className="header__status-indicator">●</span>
            <span className="header__status-text">SISTEMA EN LÍNEA</span>
          </div>
          
          <button 
            className="header__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
          >
            <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} />
          </button>
          
          <button className="header__cta">
            CONECTAR
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header