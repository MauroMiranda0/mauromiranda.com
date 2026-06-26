import { motion } from 'framer-motion'
import { visionTransformadora } from '@data/copy-content'
import './VisionSection.scss'

const VisionSection = () => {
  return (
    <section className="vision">
      <div className="vision__container">
        <motion.div
          className="vision__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="vision__label">[ 01 / VISIÓN ]</p>
          <h2 className="vision__title">{visionTransformadora.title}</h2>
          <p className="vision__text">{visionTransformadora.content}</p>
          <blockquote className="vision__quote">
            <span className="vision__quote-mark">&ldquo;</span>
            {visionTransformadora.quote}
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionSection
