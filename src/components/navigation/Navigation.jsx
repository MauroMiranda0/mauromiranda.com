/**
 * Componente Navigation - Menú de navegación principal
 * Enlaces a las secciones principales del sitio
 */
import './Navigation.scss'

const Navigation = () => {
  const navigationItems = [
    { href: '#hero', label: 'Inicio' },
    { href: '#development', label: 'Desarrollo' },
    { href: '#works', label: 'Producción' },
    { href: '#lab', label: 'Laboratorio' },
    { href: '#stack', label: 'Stack Técnico' },
    { href: '#about', label: 'Sobre Mí' }
  ]

  return (
    <nav className="navigation" role="navigation">
      <ul className="navigation__list">
        {navigationItems.map((item, index) => (
          <li key={index} className="navigation__item">
            <a 
              href={item.href} 
              className="navigation__link"
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector(item.href)
                if (target) {
                  target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation