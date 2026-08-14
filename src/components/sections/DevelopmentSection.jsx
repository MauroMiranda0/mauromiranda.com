/**
 * Sección [01 DESARROLLO] — Proyectos Personales
 * Showcase interactivo: selector de proyectos que actualiza título,
 * descripción, etiquetas, fondo y muestra la vista previa del proyecto.
 */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Icon from '@components/common/Icon'
import { developmentProjects } from '@data/projects'
import './DevelopmentSection.scss'

const DevelopmentSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [activeIndex, setActiveIndex] = useState(0)

  const activeProject = developmentProjects[activeIndex]

  const handleSelect = (index) => {
    if (index === activeIndex) return
    setActiveIndex(index)
  }

  return (
    <section className="development" id="development" ref={ref}>
      <div className="development__container">
        <motion.div
          className="development__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="development__label">[ 01 DESARROLLO ] PROYECTOS PERSONALES</p>
        </motion.div>

        <motion.div
          className="development__panel"
          style={{ background: activeProject.gradient }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Barra superior */}
          <div className="development__bar">
            <div className="development__brand">
              <Icon name="terminal" className="development__brand-icon" />
              <span className="development__brand-title">Panel de Desarrollo</span>
            </div>
            {activeProject.demoUrl.startsWith('/') ? (
              <Link to={activeProject.demoUrl} className="development__cta">
                VER PROYECTO
              </Link>
            ) : (
              <a
                href={activeProject.demoUrl}
                className="development__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                VER PROYECTO
              </a>
            )}
          </div>

          {/* Contenido + vista previa */}
          <div className="development__main">
            <div key={`body-${activeIndex}`} className="development__content">
              <div className="development__body">
                <span className="development__status">{activeProject.status}</span>
                <h2 className="development__title">{activeProject.title}</h2>
                <p className="development__description">{activeProject.description}</p>
                <div className="development__tags">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="development__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="development__preview" aria-hidden="true">
              <div key={`preview-${activeIndex}`} className="development__preview-frame">
                <div className="development__preview-bar">
                  <div className="development__preview-dots">
                    <span className="development__preview-dot" />
                    <span className="development__preview-dot" />
                    <span className="development__preview-dot" />
                  </div>
                  <span className="development__preview-url">
                    {activeProject.demoUrl}
                  </span>
                  <span className="development__preview-badge">VISTA PREVIA</span>
                </div>
                <div className="development__preview-body">
                  <img
                    className="development__preview-image"
                    src={activeProject.image}
                    alt=""
                    loading="lazy"
                    width="640"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Miniaturas selectoras */}
          <div className="development__photos">
            {developmentProjects.map((project, index) => (
              <button
                key={project.id}
                className={`development__thumb${index === activeIndex ? ' development__thumb--active' : ''}`}
                onClick={() => handleSelect(index)}
                aria-label={`Ver ${project.title}`}
                aria-pressed={index === activeIndex}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="development__thumb-image"
                  loading="lazy"
                  width="90"
                  height="120"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevelopmentSection