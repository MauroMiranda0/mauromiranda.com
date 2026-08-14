import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from '@components/common/Icon'
import { techStack } from '@data/projects'
import './TechStackSection.scss'

const TechStackSection = () => {
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

  const handleContact = () => {
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="tech-stack" id="stack" ref={ref}>
      <div className="tech-stack__container">
        <motion.div
          className="tech-stack__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="tech-stack__label">[ 04 STACK TECNOLÓGICO ]</p>
          <h2 className="tech-stack__title">Arquitectura y Herramientas</h2>
        </motion.div>

        <motion.div
          className="tech-stack__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {techStack.map((item) => (
            <motion.article
              key={item.id}
              className="tech-card group"
              variants={itemVariants}
            >
              <div className="tech-card__icon-wrapper">
                <Icon name={item.icon} className="tech-card__icon" />
              </div>
              <div className="tech-card__body">
                <div className="tech-card__header">
                  <span className="tech-card__category">{item.category}</span>
                  <h3 className="tech-card__name">{item.name}</h3>
                </div>
                <p className="tech-card__description">{item.description}</p>
                <div className="tech-card__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tech-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="tech-stack__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="tech-stack__cta-label">_DISPONIBLE_PARA_PROYECTOS</p>
          <p className="tech-stack__cta-text">
            Abierto a colaboraciones estrat&eacute;gicas y proyectos desafiantes.
          </p>
          <button className="tech-stack__cta-button" onClick={handleContact}>
            INICIAR_CONVERSACIÓN
            <Icon name="arrow_forward" className="tech-stack__cta-icon" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackSection
