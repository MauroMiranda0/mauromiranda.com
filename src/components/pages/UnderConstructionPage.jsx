/**
 * Página de proyecto en construcción
 * Caso de estudio en desarrollo — estado del sistema y próximos módulos
 */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import BackgroundGrid from '@components/common/BackgroundGrid'
import Icon from '@components/common/Icon'
import './UnderConstructionPage.scss'

const UnderConstructionPage = () => {
  return (
    <motion.div
      className="under-construction-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>Proyecto en Construcción | Mauro Miranda</title>
        <meta
          name="description"
          content="Caso de estudio en construcción. Arquitectura en desarrollo — próximamente disponible."
        />
        <meta property="og:title" content="Proyecto en Construcción | Mauro Miranda" />
        <meta
          property="og:description"
          content="Caso de estudio en construcción. Arquitectura en desarrollo — próximamente disponible."
        />
      </Helmet>

      <BackgroundGrid />
      <Header />

      <main className="main-content">
        <section className="under-construction">
          <div className="under-construction__container">
            <motion.div
              className="under-construction__panel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="under-construction__panel-header">
                <div className="under-construction__panel-dots">
                  <span className="under-construction__panel-dot under-construction__panel-dot--red" />
                  <span className="under-construction__panel-dot under-construction__panel-dot--yellow" />
                  <span className="under-construction__panel-dot under-construction__panel-dot--green" />
                </div>
                <span className="under-construction__panel-filename">
                  case_study.pending
                </span>
                <span className="under-construction__panel-status">
                  EN_CONSTRUCCIÓN
                </span>
              </div>

              <div className="under-construction__body">
                <div className="under-construction__icon">
                  <Icon name="construction" size="2xl" />
                </div>

                <p className="under-construction__label">
                  [ 02 / CASO_DE_ESTUDIO ]
                </p>
                <h1 className="under-construction__title">
                  Proyecto en Construcción
                </h1>
                <p className="under-construction__description">
                  Arquitectura en desarrollo. El caso de estudio de este proyecto se
                  encuentra en fase de documentación y estará disponible próximamente
                  con métricas, decisiones técnicas y resultados medibles.
                </p>

                <div className="under-construction__metadata">
                  <div className="under-construction__metric">
                    <span className="under-construction__metric-label">ESTADO</span>
                    <span className="under-construction__metric-value">EN_DESARROLLO</span>
                  </div>
                  <div className="under-construction__metric">
                    <span className="under-construction__metric-label">MÓDULO</span>
                    <span className="under-construction__metric-value">CASO DE ESTUDIO</span>
                  </div>
                  <div className="under-construction__metric">
                    <span className="under-construction__metric-label">ESTIMACIÓN</span>
                    <span className="under-construction__metric-value">PRÓXIMAMENTE</span>
                  </div>
                </div>

                <div className="under-construction__progress">
                  <div className="under-construction__progress-header">
                    <span>PROGRESO</span>
                    <span>68%</span>
                  </div>
                  <div className="under-construction__progress-track">
                    <div
                      className="under-construction__progress-bar"
                      style={{ width: '68%' }}
                    />
                  </div>
                </div>

                <div className="under-construction__actions">
                  <Link to="/" className="under-construction__cta under-construction__cta--primary">
                    <Icon name="arrow_back" />
                    VOLVER AL INICIO
                  </Link>
                  <a
                    href="mailto:mvergara04@hotmail.com"
                    className="under-construction__cta under-construction__cta--secondary"
                    rel="noopener noreferrer"
                  >
                    <Icon name="send" />
                    INICIAR CONVERSACIÓN
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  )
}

export default UnderConstructionPage
