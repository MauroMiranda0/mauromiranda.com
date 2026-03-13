/**
 * Página 404 - No encontrado
 * Página de error personalizada
 */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import BackgroundGrid from '@components/common/BackgroundGrid'
import Icon from '@components/common/Icon'

const NotFoundPage = () => {
  return (
    <motion.div 
      className="not-found-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BackgroundGrid />
      <Header />
      
      <main className="main-content">
        <section className="not-found">
          <div className="container">
            <div className="not-found__content">
              <div className="not-found__icon">
                <Icon name="error_outline" size="2xl" />
              </div>
              
              <h1 className="not-found__title">404</h1>
              <h2 className="not-found__subtitle">Página no encontrada</h2>
              
              <p className="not-found__description">
                La página que buscas no existe o ha sido movida. 
                Verifica la URL o regresa al inicio.
              </p>
              
              <div className="not-found__actions">
                <Link to="/" className="not-found__cta">
                  <Icon name="home" />
                  Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  )
}

export default NotFoundPage