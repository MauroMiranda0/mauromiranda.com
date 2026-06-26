import { motion } from 'framer-motion'
import Icon from '@components/common/Icon'
import { innovacionAplicada, discursoAutoridad } from '@data/copy-content'
import './InnovacionDiscursoSection.scss'

const InnovacionDiscursoSection = () => {
  return (
    <section className="innovacion-discurso">
      <div className="innovacion-discurso__container">
        <motion.div
          className="innovacion-discurso__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="innovacion-discurso__label">[ 04 / INNOVACIÓN & AUTORIDAD ]</p>
          <h2 className="innovacion-discurso__title">{innovacionAplicada.title}</h2>
          <p className="innovacion-discurso__text">{innovacionAplicada.content}</p>
          <blockquote className="innovacion-discurso__quote">
            <span className="innovacion-discurso__quote-mark">&ldquo;</span>
            {innovacionAplicada.quote}
          </blockquote>

          <div className="innovacion-discurso__list">
            {discursoAutoridad.points.map((point, index) => (
              <motion.div
                key={index}
                className="innovacion-discurso__item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <span className="innovacion-discurso__item-icon">→</span>
                <p className="innovacion-discurso__item-text">{point}</p>
              </motion.div>
            ))}
          </div>

          <a href="#ia" className="innovacion-discurso__cta">
            {innovacionAplicada.cta}
            <Icon name="arrow_forward_ios" className="innovacion-discurso__cta-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default InnovacionDiscursoSection
