import { motion } from 'framer-motion'
import { productionProjects } from '@data/projects'
import Icon from '@components/common/Icon'
import './ProductionSection.scss'

const ProductionSection = () => {
  return (
    <section className="production" id="works">
      <div className="production__header">
        <div>
          <p className="production__label">[ 02 ]</p>
          <h2 className="production__title">UNIDADES DE PRODUCCIÓN</h2>
        </div>
        <p className="production__subtitle">
          Entornos de producción de alto rendimiento para clientes empresariales y startups.
        </p>
      </div>

      <div className="production__list">
        {productionProjects.map((project, index) => (
          <motion.article
            key={project.id}
            className={`production__item ${index % 2 === 1 ? 'production__item--reverse' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="production__item-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="production__item-content">
              <p className="production__item-category">{project.category}</p>
              <h3 className="production__item-title">{project.title}</h3>
              <p className="production__item-description">{project.description}</p>
              <ul className="production__item-metrics">
                {project.metrics?.map((metric, i) => (
                  <li key={i}>
                    <span className="production__metric-dot" />
                    {metric.label}: {metric.value}
                  </li>
                ))}
              </ul>
              <a href={project.caseStudyUrl} className="production__item-link">
                VER CASO DE ESTUDIO
                <Icon name="north_east" size="sm" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ProductionSection
