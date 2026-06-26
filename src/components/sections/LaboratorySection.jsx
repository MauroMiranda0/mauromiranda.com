import { motion } from 'framer-motion'
import { laboratoryProjects } from '@data/projects'
import './LaboratorySection.scss'

const LaboratorySection = () => {
  const largeProject = laboratoryProjects.find(p => p.gridSize === 'large')
  const smallProjects = laboratoryProjects.filter(p => p.gridSize !== 'large')

  return (
    <section className="laboratory" id="lab">
      <div className="laboratory__header">
        <div>
          <p className="laboratory__label">[ 01 ]</p>
          <h2 className="laboratory__title">EL LABORATORIO</h2>
        </div>
        <p className="laboratory__subtitle">Experimentos Personales &amp; I+D</p>
      </div>

      <div className="laboratory__grid">
        {largeProject && (
          <motion.article
            className="laboratory__card laboratory__card--large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="laboratory__card-image">
              <img src={largeProject.image} alt={largeProject.title} loading="lazy" />
              <div className="laboratory__card-overlay" />
            </div>
            <div className="laboratory__card-info">
              <span className="laboratory__card-status">{largeProject.status}</span>
              <h3>{largeProject.title}</h3>
              <p>{largeProject.description}</p>
            </div>
          </motion.article>
        )}

        {smallProjects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`laboratory__card laboratory__card--${project.gridSize}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="laboratory__card-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="laboratory__card-overlay" />
            </div>
            <div className="laboratory__card-info">
              <span className="laboratory__card-status">{project.status}</span>
              <h3>{project.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default LaboratorySection
