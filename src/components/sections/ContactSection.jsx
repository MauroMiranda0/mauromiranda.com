import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from '@components/common/Icon'
import './ContactSection.scss'

const ContactSection = () => {
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

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="contact__label">[ 05 CONTACTO ]</p>
          <h2 className="contact__title">INICIAR PROYECTO</h2>
          <p className="contact__subtitle">
            Cuéntame sobre tu proyecto. Estoy listo para convertir tu visión en una solución digital de alto rendimiento.
          </p>
        </motion.div>

        <motion.div
          className="contact__content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.form
            className="contact__form"
            variants={itemVariants}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="contact-name">NOMBRE</label>
              <input
                id="contact-name"
                type="text"
                className="contact__input"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label-field" htmlFor="contact-email">CORREO</label>
              <input
                id="contact-email"
                type="email"
                className="contact__input"
                placeholder="tu@correo.com"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label-field" htmlFor="contact-message">MENSAJE</label>
              <textarea
                id="contact-message"
                className="contact__textarea"
                placeholder="Describe tu proyecto o idea..."
                rows={5}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="contact__submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon name="send" />
              ENVIAR MENSAJE
            </motion.button>
          </motion.form>

          <motion.div className="contact__info" variants={itemVariants}>
            <div className="contact__info-card">
              <h4 className="contact__info-title">DISPONIBILIDAD</h4>
              <div className="contact__info-item">
                <span className="contact__info-dot" />
                <span className="contact__info-text">Disponible para nuevos proyectos</span>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-dot" />
                <span className="contact__info-text">Respuesta en menos de 24hrs</span>
              </div>
            </div>

            <div className="contact__info-card">
              <h4 className="contact__info-title">CANALES</h4>
              <div className="contact__info-item">
                <Icon name="mail" className="contact__info-icon" />
                <span className="contact__info-text">mvergara04@hotmail.com</span>
              </div>
              <div className="contact__info-item">
                <Icon name="call" className="contact__info-icon" />
                <span className="contact__info-text">771 241 5122</span>
              </div>
              <div className="contact__info-item">
                <Icon name="location_on" className="contact__info-icon" />
                <span className="contact__info-text">Mineral de la Reforma, Hidalgo, México</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
