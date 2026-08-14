import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from '@components/common/Icon'
import { productionProjects } from '@data/projects'
import './ProductionSection.scss'

const ProductionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="production" id="works" ref={ref}>
      <div className="production__container">
        <motion.div
          className="production__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="production__label">[ 02 PRODUCCIÓN ]</p>
          <h2 className="production__title">PROYECTOS ESTRATÉGICOS</h2>
          <p className="production__subtitle">
            Soluciones de producci&oacute;n que impulsan el crecimiento de marcas con ambici&oacute;n digital.
          </p>
        </motion.div>

        <motion.div
          className="production__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {productionProjects.map((project) => (
            <motion.article
              key={project.id}
              className="production-card group"
              variants={itemVariants}
            >
              {project.id === 'conciencia-landing' ? (
                <div className="production-card__media production-card__media--preview">
                  <iframe
                    className="production-card__preview"
                    src="/conciencia-preview/index.html"
                    title={`${project.title} preview`}
                    loading="lazy"
                  />
                  <div className="production-card__overlay" />
                  <div className="production-card__category">
                    {project.category}
                  </div>
                </div>
              ) : (
                <div className="production-card__media">
                  <img
                    className="production-card__image"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <div className="production-card__overlay" />
                  <div className="production-card__category">
                    {project.category}
                  </div>
                </div>
              )}

              <div className="production-card__body">
                <div className="production-card__header">
                  <h3 className="production-card__title">{project.title}</h3>
                  <p className="production-card__client">
                    <Icon name="business" className="production-card__icon" />
                    {project.client}
                  </p>
                </div>

                <p className="production-card__description">
                  {project.description}
                </p>

                <div className="production-card__metrics">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="production-card__metric">
                      <span className="production-card__metric-label">{metric.label}</span>
                      <span className="production-card__metric-value">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className="production-card__tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="production-card__tag">{tech}</span>
                  ))}
                </div>

                <div className="production-card__meta">
                  <span className="production-card__meta-item">
                    <Icon name="schedule" className="production-card__icon" />
                    {project.timeline}
                  </span>
                  <span className="production-card__meta-item">
                    <Icon name="group" className="production-card__icon" />
                    {project.team}
                  </span>
                </div>

                <a
                  href={project.caseStudyUrl}
                  className="production-card__cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER CASO DE ESTUDIO
                  <Icon name="arrow_forward" className="production-card__cta-icon" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductionSection
