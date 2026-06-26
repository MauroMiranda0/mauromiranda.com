import { motion } from 'framer-motion'
import Icon from '@components/common/Icon'
import { liderazgoTecnologico } from '@data/copy-content'
import './LiderazgoSection.scss'

const LiderazgoSection = () => {
  return (
    <section className="liderazgo">
      <div className="liderazgo__container">
        <motion.div
          className="liderazgo__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="liderazgo__label">[ 02 / LIDERAZGO ]</p>
          <h2 className="liderazgo__title">{liderazgoTecnologico.title}</h2>
          <p className="liderazgo__text">{liderazgoTecnologico.content}</p>
          <a href="#contact" className="liderazgo__cta">
            {liderazgoTecnologico.cta}
            <Icon name="arrow_forward_ios" className="liderazgo__cta-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default LiderazgoSection
