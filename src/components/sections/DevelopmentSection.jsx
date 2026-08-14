/**
 * Sección [01 DESARROLLO] — Proyectos Personales
 * Showcase interactivo: selector de proyectos que rota una ruleta de imágenes
 * y actualiza título, descripción, etiquetas y fondo.
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
  const [rotation, setRotation] = useState(-45)

  const activeProject = developmentProjects[activeIndex]
  const step = 360 / developmentProjects.length

  const handleSelect = (index) => {
    if (index === activeIndex) return
    setActiveIndex(index)
    setRotation((prev) => prev - step)
  }

  const wheelItemTransform = (index) => `rotate(${index * step}deg) translate(0, -260px) rotate(${-index * step}deg)`

  return (
    <section className="development" id="development" ref={ref}>
      <div className="development__container">
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
              <span className="development__label">[ 01 DESARROLLO ] PROYECTOS PERSONALES</span>
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

          {/* Contenido */}
          <div key={activeIndex} className="development__content">
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

          {/* Miniaturas selectoras */}
          <div className="development__photos">
            {developmentProjects.map((project, index) => (
              <button
                key={project.id}
                className={`development__thumb${index === activeIndex ? ' development__thumb--active' : ''}`}
                onClick={() => handleSelect(index)}
                aria-label={`Ver ${project.title}`}
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

          {/* Ruleta frontal */}
          <div
            className="development__wheel development__wheel--front"
            style={{ transform: `rotate(${rotation}deg)` }}
            aria-hidden="true"
          >
            {developmentProjects.map((project, index) => (
              <img
                key={project.id}
                src={project.image}
                alt=""
                className="development__wheel-item"
                style={{ transform: wheelItemTransform(index) }}
                loading="lazy"
              />
            ))}
          </div>

          {/* Ruleta decorativa trasera */}
          <div
            className="development__wheel development__wheel--back"
            style={{ transform: `rotate(${rotation}deg)` }}
            aria-hidden="true"
          >
            {developmentProjects.map((project, index) => (
              <img
                key={project.id}
                src={project.image}
                alt=""
                className="development__wheel-item development__wheel-item--decorative"
                style={{ transform: wheelItemTransform(index) }}
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevelopmentSection