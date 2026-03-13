/**
 * Componente Footer - Pie de página
 * Información de contacto, enlaces y estado del sistema
 */
import Icon from '@components/common/Icon'
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    sitemap: [
      { label: 'Laboratorio', href: '#lab' },
      { label: 'Producción', href: '#works' },
      { label: 'Stack Técnico', href: '#stack' },
      { label: 'Blog', href: '#blog' }
    ],
    network: [
      { label: 'Github', href: '#', external: true },
      { label: 'LinkedIn', href: '#', external: true },
      { label: 'X / Twitter', href: '#', external: true },
      { label: 'Read.cv', href: '#', external: true }
    ]
  }

  const systemStatus = [
    { label: 'TIEMPO ACTIVO:', value: '99.99%' },
    { label: 'LATENCIA:', value: '24MS' },
    { label: 'REGIÓN:', value: 'EU_CENTRAL' }
  ]

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Información principal */}
          <div className="footer__main">
            <div className="footer__brand">
              <Icon name="terminal" className="footer__icon" />
              <h2 className="footer__title">Ingeniería Web Miranda</h2>
            </div>
            <p className="footer__description">
              Un laboratorio boutique de ingeniería de software enfocado en la intersección 
              del diseño estético y la arquitectura técnica robusta.
            </p>
          </div>

          {/* Mapa del sitio */}
          <div className="footer__section">
            <h5 className="footer__section-title">Mapa del Sitio</h5>
            <ul className="footer__links">
              {footerSections.sitemap.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Red social */}
          <div className="footer__section">
            <h5 className="footer__section-title">Red</h5>
            <ul className="footer__links">
              {footerSections.network.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="footer__link"
                    {...(link.external && { 
                      target: '_blank', 
                      rel: 'noopener noreferrer' 
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Estado del sistema */}
          <div className="footer__section footer__section--status">
            <h5 className="footer__section-title">Estado del Sistema</h5>
            <div className="footer__status">
              {systemStatus.map((stat, index) => (
                <div key={index} className="footer__status-item">
                  <span className="footer__status-label">{stat.label}</span>
                  <span className="footer__status-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} MAURO MIRANDA LABS. TODOS LOS SISTEMAS OPERATIVOS.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Protocolo de Privacidad</a>
            <a href="#" className="footer__legal-link">Configuración de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer