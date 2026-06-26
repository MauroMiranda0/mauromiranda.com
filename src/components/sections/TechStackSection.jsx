import { motion } from 'framer-motion'
import { techStack } from '@data/projects'
import Icon from '@components/common/Icon'
import './TechStackSection.scss'

const TechStackSection = () => {
  return (
    <section className="tech-stack" id="stack">
      <div className="tech-stack__header">
        <p className="tech-stack__label">[ 03 / STACK_PRINCIPAL ]</p>
        <h2 className="tech-stack__title">Panel de Control Técnico</h2>
        <div className="tech-stack__divider" />
      </div>

      <div className="tech-stack__grid">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.id}
            className="tech-stack__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Icon name={tech.icon} size="2xl" className="tech-stack__card-icon" />
            <h4 className="tech-stack__card-name">{tech.name}</h4>
            <div className="tech-stack__card-bar">
              <div
                className="tech-stack__card-bar-fill"
                style={{ width: `${tech.level * 100}%` }}
              />
            </div>
            <p className="tech-stack__card-level">
              NIVEL EXPERTO: {tech.level.toFixed(2)}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="tech-stack__cta">
        <div className="tech-stack__cta-content">
          <h4>_SISTEMA_PRINCIPAL_LISTO</h4>
          <p>
            Actualmente aceptando desafíos arquitectónicos selectos para Q3/Q4 2024.
            Ingeniería de experiencias digitales de alta gama.
          </p>
        </div>
        <button className="tech-stack__cta-button">
          INICIAR_CONTACTO.SH
        </button>
      </div>
    </section>
  )
}

export default TechStackSection
