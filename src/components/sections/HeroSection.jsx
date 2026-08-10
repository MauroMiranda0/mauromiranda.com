/**
 * Sección Hero - Presentación principal
 * Incluye título principal, descripción y CTAs
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from '@components/common/Icon'
import './HeroSection.scss'

const ManifestoModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="hero__modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="hero__modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="hero__modal-header">
            <div className="hero__modal-label">
              <Icon name="menu_book" /> MANIFIESTO DE INGENIERÍA
            </div>
            <button className="hero__modal-close" onClick={onClose}>
              <Icon name="close" />
            </button>
          </div>

          <div className="hero__modal-body">
            <section className="hero__modal-section">
              <h3 className="hero__modal-subtitle">Propósito</h3>
              <p className="hero__modal-text">
                Ingeniería Web e Innovación Digital Estratégica. Arquitectura de software y diseño estratégico para experiencias digitales de alto impacto.
              </p>
            </section>

            <section className="hero__modal-section">
              <h3 className="hero__modal-subtitle">Principios Rectores</h3>
              <div className="hero__modal-list">
                {[
                  {
                    title: 'Ingeniería como Estrategia',
                    desc: 'Cada decisión técnica se evalúa por su impacto en el negocio y la experiencia del usuario.'
                  },
                  {
                    title: 'El Portafolio es un Producto',
                    desc: 'Mismo rigor que cualquier aplicación en producción: rendimiento, accesibilidad, SEO y mantenibilidad.'
                  },
                  {
                    title: 'Innovación Demostrada',
                    desc: 'No se declara innovación, se demuestra. El laboratorio de I+D es la prueba viva de la capacidad técnica.'
                  },
                  {
                    title: 'Estética Técnica',
                    desc: 'Precisión, tipografía mono, métricas de sistema. No es un portafolio creativo — es un panel de control de ingeniería.'
                  }
                ].map((p) => (
                  <div key={p.title} className="hero__modal-item">
                    <span className="hero__modal-item-title">{p.title}</span>
                    <p className="hero__modal-item-desc">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="hero__modal-section">
              <h3 className="hero__modal-subtitle">Tono y Voz</h3>
              <div className="hero__modal-grid">
                {[
                  'Consultivo, no ejecutor',
                  'Preciso, no florido',
                  'Autoritario, no arrogante',
                  'Terminal / Sistema'
                ].map((t) => (
                  <span key={t} className="hero__modal-pill">{t}</span>
                ))}
              </div>
            </section>
          </div>

          <div className="hero__modal-footer">
            <span className="hero__modal-version">CONSTITUTION.md v1.0</span>
            <span className="hero__modal-status">SISTEMA: INICIALIZADO</span>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

const HeroSection = () => {
  const [manifestoOpen, setManifestoOpen] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const handleInitialize = () => {
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero__container">
        <motion.div 
          className="hero__metadata"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero__metadata-line">LOC: 40.7128° N, 74.0060° W</div>
          <div className="hero__metadata-line">REF: ARCH_PROTO_01</div>
          <div className="hero__metadata-line">ESTADO: ACTIVO</div>
        </motion.div>

        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p 
            className="hero__label"
            variants={itemVariants}
          >
            [ 00 / INICIALIZACION ]
          </motion.p>

          <motion.h1 
            className="hero__title"
            variants={itemVariants}
          >
            MAURO MIRANDA:
            <br />
            <span className="hero__title-highlight">ARQUITECTURA</span>
            <br />
            <span className="hero__title-accent">SOFTWARE</span> &amp; EXPERIMENTACIÓN
          </motion.h1>

          <motion.p 
            className="hero__description"
            variants={itemVariants}
          >
            Ingenieria web de alto nivel. Diseno arquitecturas digitales de alto rendimiento
            con una estetica minimalista y precision tecnica.
          </motion.p>

          <motion.div 
            className="hero__actions"
            variants={itemVariants}
          >
            <button
              className="hero__cta hero__cta--primary"
              onClick={handleInitialize}
            >
              INICIAR PROYECTO
              <Icon name="arrow_forward_ios" className="hero__cta-icon" />
            </button>
            <button
              className="hero__cta hero__cta--secondary"
              onClick={() => setManifestoOpen(true)}
            >
              VER MANIFIESTO
            </button>
          </motion.div>
        </motion.div>
      </div>

      <ManifestoModal isOpen={manifestoOpen} onClose={() => setManifestoOpen(false)} />
    </section>
  )
}

export default HeroSection
