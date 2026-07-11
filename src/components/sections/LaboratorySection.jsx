/**
 * Sección Laboratorio de Innovación
 * Bento grid con proyectos de I+D y experimentos técnicos
 */
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from '@components/common/Icon'
import { laboratoryProjects } from '@data/projects'
import './LaboratorySection.scss'

const LaboratorySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const cardA = laboratoryProjects.find(p => p.gridSize === 'large')
  const smallCards = laboratoryProjects.filter(p => p.gridSize === 'small')

  return (
    <section className="laboratory" id="lab" ref={ref}>
      <div className="laboratory__container">
        <motion.div
          className="laboratory__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="laboratory__header-left">
            <p className="laboratory__label">[ 01 ]</p>
            <h2 className="laboratory__title">LABORATORIO DE INNOVACIÓN</h2>
          </div>
          <p className="laboratory__subtitle">
            Prototipado Estratégico &amp; Exploración Técnica
          </p>
        </motion.div>

        <motion.div
          className="laboratory__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Card A — Large (col-span-2, row-span-2) */}
          {cardA && (
            <motion.article
              className="lab-card lab-card--large group"
              variants={itemVariants}
            >
              <div className="lab-card__content">
                <div className="lab-card__split">
                  {/* Info side */}
                  <div className="lab-card__info">
                    <span className="lab-card__badge">
                      {cardA.status}
                    </span>
                    <h3 className="lab-card__name">{cardA.title}</h3>
                    <p className="lab-card__description">
                      {cardA.description}
                    </p>
                    <div className="lab-card__tags">
                      {cardA.tags.map((tag) => (
                        <span key={tag} className="lab-card__tag">{tag}</span>
                      ))}
                    </div>
                    <div className="lab-card__actions">
                      <a
                        href={cardA.demoUrl}
                        className="lab-card__cta lab-card__cta--primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="open_in_new" className="lab-card__cta-icon" />
                        VER PROYECTO
                      </a>
                      <a
                        href={cardA.githubUrl}
                        className="lab-card__cta lab-card__cta--secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="code" className="lab-card__cta-icon" />
                        VER CÓDIGO
                      </a>
                    </div>
                  </div>
                  {/* Preview side */}
                  <div className="lab-card__preview">
                    <div className="lab-card__player">
                      <div className="lab-card__player-header">
                        <span className="lab-card__player-filename">
                          {cardA.video?.split('/').pop()}
                        </span>
                        <span className="lab-card__player-status">
                          <span className="lab-card__player-dot" />
                          Reproduciendo
                        </span>
                      </div>
                      <div className="lab-card__player-video">
                        {cardA.video ? (
                          <video
                            className="lab-card__video"
                            src={cardA.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster={cardA.poster}
                            width="600"
                            height="600"
                          />
                        ) : (
                          <img
                            className="lab-card__video-poster"
                            src={cardA.image}
                            alt={cardA.title}
                            loading="lazy"
                            width="600"
                            height="600"
                          />
                        )}
                      </div>
                      <div className="lab-card__player-footer">
                        <div>
                          <p className="lab-card__player-label">Estado</p>
                          <span className="lab-card__player-value">Experimental</span>
                        </div>
                        <div className="lab-card__player-footer-right">
                          <p className="lab-card__player-label">Formato</p>
                          <span className="lab-card__player-value">1:1 responsive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Card B & C — Small square cards */}
          {smallCards.map((project) => (
            <motion.article
              key={project.id}
              className="lab-card lab-card--small group"
              variants={itemVariants}
            >
              <div className="lab-card__content">
                <div className="lab-card__overlay" />
                {project.video ? (
                  <video
                    className="lab-card__image"
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="lazy"
                    poster={project.image}
                    width="400"
                    height="400"
                  />
                ) : (
                  <img
                    className="lab-card__image"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                )}
                <div className="lab-card__text">
                  <span className="lab-card__badge">{project.status}</span>
                  <h3 className="lab-card__name">{project.title}</h3>
                </div>
                <a
                  href={project.demoUrl}
                  className="lab-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ${project.title}`}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LaboratorySection
