/**
 * Sección Hero - Presentación principal
 * Incluye título principal, descripción y CTAs
 */
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from '@components/common/Icon'
import { heroContent } from '@data/copy-content'
import './HeroSection.scss'

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="hero" ref={ref}>
      <div className="hero__container">
        {/* Información de ubicación/estado */}
        <motion.div 
          className="hero__metadata"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero__metadata-line">LOC: 40.7128° N, 74.0060° W</div>
          <div className="hero__metadata-line">REF: ARCH_PROTO_01</div>
          <div className="hero__metadata-line">STATUS: ACTIVE</div>
        </motion.div>

        {/* Contenido principal */}
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p 
            className="hero__label"
            variants={itemVariants}
          >
            [ 00 / INITIALIZATION ]
          </motion.p>

          <motion.h1 
            className="hero__title"
            variants={itemVariants}
          >
            {heroContent.title}
          </motion.h1>

          <motion.p 
            className="hero__description"
            variants={itemVariants}
          >
            {heroContent.description}
          </motion.p>

          <motion.div 
            className="hero__actions"
            variants={itemVariants}
          >
            <button className="hero__cta hero__cta--primary">
              {heroContent.cta}
              <Icon name="arrow_forward_ios" className="hero__cta-icon" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection