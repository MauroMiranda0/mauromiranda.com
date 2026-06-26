import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectById, isProductionProject } from '@data/projects'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import BackgroundGrid from '@components/common/BackgroundGrid'
import Icon from '@components/common/Icon'
import './ProjectPage.scss'

const ProjectPage = () => {
  const { slug } = useParams()
  const project = getProjectById(slug)

  if (!project) {
    return (
      <motion.div
        className="project-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <BackgroundGrid />
        <Header />
      <div className="main-content">
          <section className="project-not-found">
            <div className="container">
              <h1>Proyecto no encontrado</h1>
              <p>El proyecto que buscas no existe o ha sido movido.</p>
              <Link to="/" className="project-not-found__link">
                <Icon name="arrow_back" size="sm" />
                Volver al Inicio
              </Link>
            </div>
          </section>
      </div>
        <Footer />
      </motion.div>
    )
  }

  const isProduction = isProductionProject(project)
  const projectRef = isProduction
    ? `PROD_${project.id.replace(/-/g, '_').toUpperCase()}`
    : `LAB_${project.id.replace(/-/g, '_').toUpperCase()}`

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
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BackgroundGrid />
      <Header />

      <main className="main-content">
        <motion.section
          className="project-hero"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="project-hero__container">
            <motion.div className="project-hero__metadata" variants={itemVariants}>
              <span className="project-hero__metadata-line">REF: {projectRef}</span>
              <span className="project-hero__metadata-line">STATUS: {project.status || 'COMPLETED'}</span>
              {project.category && (
                <span className="project-hero__metadata-line">{project.category}</span>
              )}
            </motion.div>

            <motion.h1 className="project-hero__title" variants={itemVariants}>
              {project.title}
            </motion.h1>

            {project.client && (
              <motion.p className="project-hero__client" variants={itemVariants}>
                <Icon name="business" size="sm" />
                {project.client}
              </motion.p>
            )}
          </div>
        </motion.section>

        <motion.section
          className="project-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="project-content__grid">
            <motion.div className="project-content__image" variants={itemVariants}>
              {project.image && (
                <div className="project-content__image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="project-content__image-overlay" />
                </div>
              )}
            </motion.div>

            <motion.div className="project-content__info" variants={itemVariants}>
              <p className="project-content__description">{project.description}</p>

              {project.metrics && project.metrics.length > 0 && (
                <div className="project-content__metrics">
                  <h3 className="project-content__section-title">MÉTRICAS CLAVE</h3>
                  <ul className="project-content__metrics-list">
                    {project.metrics.map((metric, i) => (
                      <li key={i} className="project-content__metric">
                        <span className="project-content__metric-dot" />
                        <span className="project-content__metric-label">{metric.label}:</span>
                        <span className="project-content__metric-value">{metric.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <div className="project-content__technologies">
                  <h3 className="project-content__section-title">TECNOLOGÍAS</h3>
                  <div className="project-content__tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-content__tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-content__meta">
                {project.timeline && (
                  <div className="project-content__meta-item">
                    <Icon name="schedule" size="sm" />
                    <span>{project.timeline}</span>
                  </div>
                )}
                {project.team && (
                  <div className="project-content__meta-item">
                    <Icon name="groups" size="sm" />
                    <span>{project.team}</span>
                  </div>
                )}
              </div>

              {project.caseStudyUrl && project.caseStudyUrl !== '#' && (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-content__cta"
                >
                  VER CASO DE ESTUDIO
                  <Icon name="north_east" size="sm" />
                </a>
              )}
            </motion.div>
          </div>
        </motion.section>

        {isProduction && project.caseStudy && (
          <motion.section
            className="project-narrative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="project-narrative__container">
              <motion.h2 className="project-narrative__title" variants={itemVariants}>
                CASO DE ESTUDIO
              </motion.h2>

              <div className="project-narrative__grid">
                <motion.article className="project-narrative__card" variants={itemVariants}>
                  <div className="project-narrative__card-header">
                    <Icon name="report_problem" className="project-narrative__card-icon" />
                    <h3>EL RETO</h3>
                  </div>
                  <p>{project.caseStudy.reto}</p>
                </motion.article>

                <motion.article className="project-narrative__card" variants={itemVariants}>
                  <div className="project-narrative__card-header">
                    <Icon name="construction" className="project-narrative__card-icon" />
                    <h3>LA SOLUCIÓN</h3>
                  </div>
                  <p>{project.caseStudy.solucion}</p>
                </motion.article>

                <motion.article
                  className="project-narrative__card project-narrative__card--highlight"
                  variants={itemVariants}
                >
                  <div className="project-narrative__card-header">
                    <Icon name="trending_up" className="project-narrative__card-icon" />
                    <h3>EL IMPACTO</h3>
                  </div>
                  <p>{project.caseStudy.impacto}</p>
                </motion.article>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      <Footer />
    </motion.div>
  )
}

export default ProjectPage