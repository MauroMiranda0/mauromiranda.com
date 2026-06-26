import { motion } from 'framer-motion'
import Icon from '@components/common/Icon'
import { ctaContent } from '@data/copy-content'
import './CtaSection.scss'

const CtaSection = () => {
  return (
    <section className="cta-final" id="contact">
      <div className="cta-final__container">
        <motion.div
          className="cta-final__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="cta-final__label">[ 08 / CONTACTO ]</p>
          <h2 className="cta-final__title">{ctaContent.title}</h2>
          <p className="cta-final__subtitle">{ctaContent.subtitle}</p>
          <div className="cta-final__actions">
            <a href="#agendar" className="cta-final__cta cta-final__cta--primary">
              {ctaContent.primaryCta}
              <Icon name="calendar_today" className="cta-final__cta-icon" />
            </a>
            <a href="#contactar" className="cta-final__cta cta-final__cta--secondary">
              {ctaContent.secondaryCta}
              <Icon name="north_east" className="cta-final__cta-icon" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection
