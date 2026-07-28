import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Icon from '@components/common/Icon'
import './AboutSection.scss'

const AboutSection = () => {
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
    <section className="about" id="about" ref={ref}>
      <div className="about__container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="about__label">[ 04 / PERFIL ]</p>
          <h2 className="about__title">SOBRE MÍ</h2>
        </motion.div>

        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="about__profile" variants={itemVariants}>
            <div className="about__profile-info">
              <h3 className="about__name">MAURICIO VERGARA MIRANDA</h3>
              <p className="about__headline">
                Ingeniero en Sistemas Computacionales &bull; Especialista en Ingeniería Web &bull; Fundador de Agencia
              </p>
              <div className="about__contact">
                <span className="about__contact-item">
                  <Icon name="location_on" />
                  Mineral de la Reforma, Hidalgo, México
                </span>
                <span className="about__contact-item">
                  <Icon name="call" />
                  771 241 5122
                </span>
                <span className="about__contact-item">
                  <Icon name="mail" />
                  mvergara04@hotmail.com
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about__card" variants={itemVariants}>
            <h4 className="about__card-title">PERFIL PROFESIONAL</h4>
            <p className="about__card-text">
              Ingeniero en Sistemas Computacionales con sólida formación en electrónica, automatización y desarrollo web, complementada con una Maestría en Ingeniería en Sitios Web. Experiencia en proyectos de automatización, programación y mantenimiento electrónico, así como en la fundación y dirección de la Agencia Ingeniería Web Miranda, enfocada en soluciones digitales innovadoras. Me caracterizo por el liderazgo, la proactividad y la capacidad de resolver problemas con enfoque estratégico y profesional.
            </p>
          </motion.div>

          <motion.div className="about__card" variants={itemVariants}>
            <h4 className="about__card-title">COMPETENCIAS CLAVE</h4>
            <div className="about__skills">
              {[
                { label: 'Desarrollo Web', tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'React', 'NodeJS'] },
                { label: 'Programación', tags: ['C', 'C++', 'Python', 'Java', 'QBasic'] },
                { label: 'Electrónica y Automatización', tags: ["PLC's", 'VHDL', 'Microcontroladores PIC'] },
                { label: 'Herramientas Digitales', tags: ['VS Code', 'Git', 'GitHub', 'MATLAB', 'LabVIEW', 'Proteus'] },
                { label: 'Sistemas Operativos', tags: ['Windows', 'Linux'] },
                { label: 'Gestión y Liderazgo', tags: ['Dirección de proyectos', 'Docencia', 'Trabajo en equipo'] }
              ].map(group => (
                <div key={group.label} className="about__skill-group">
                  <span className="about__skill-label">{group.label}</span>
                  <div className="about__skill-tags">
                    {group.tags.map(tag => (
                      <span key={tag} className="about__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about__card" variants={itemVariants}>
            <h4 className="about__card-title">EDUCACIÓN</h4>
            <div className="about__timeline">
              {[
                { period: '2023 \u2013 2025', title: 'Maestría en Ingeniería en Sitios Web', institution: 'UNIR México', grade: 'Promedio: 9.5/10' },
                { period: '2019 \u2013 2022', title: 'Licenciatura en Ingeniería en Sistemas Computacionales', institution: 'Centro Universitario Hidalguense', grade: 'Promedio: 9.1/10' },
                { period: '2002 \u2013 2004', title: 'Técnico Superior Universitario en Electrónica y Automatización', institution: 'Universidad Tecnológica Tula-Tepeji', grade: 'Promedio: 8.2/10' },
                { period: '1999 \u2013 2002', title: 'Bachillerato en Ciencias Exactas', institution: 'Centro Hidalguense de Estudios Superiores', grade: 'Promedio: 8.8/10' }
              ].map(item => (
                <div key={item.period} className="about__timeline-item">
                  <div className="about__timeline-period">{item.period}</div>
                  <div className="about__timeline-content">
                    <h5 className="about__timeline-title">{item.title}</h5>
                    <p className="about__timeline-institution">{item.institution}</p>
                    <span className="about__timeline-grade">{item.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about__card" variants={itemVariants}>
            <h4 className="about__card-title">EXPERIENCIA PROFESIONAL</h4>
            <div className="about__experience">
              {[
                { role: 'Fundador', org: 'Agencia Ingeniería Web Miranda', location: 'Pachuca, HGO', desc: 'Dirección de proyectos digitales, desarrollo de sitios web y consultoría tecnológica.', period: '2 años' },
                { role: 'Técnico Electrónico', org: 'IMSS', desc: 'Conservación y mantenimiento de unidades médicas y hospitalarias.' },
                { role: 'Docente de Física y Matemáticas', org: 'Universidad del Futbol (Grupo Pachuca)', desc: 'Tutorías y enseñanza en ciencias exactas.' },
                { role: 'Técnico Electrónico', org: 'Silos y Camiones SA de CV', desc: 'Fabricación de tableros de control y automatización.' }
              ].map((exp, i) => (
                <div key={i} className="about__experience-item">
                  <div className="about__experience-header">
                    <h5 className="about__experience-role">{exp.role}</h5>
                    <span className="about__experience-org">{exp.org}</span>
                    {exp.location && <span className="about__experience-location">{exp.location}</span>}
                  </div>
                  <p className="about__experience-desc">{exp.desc}</p>
                  {exp.period && <span className="about__experience-period">{exp.period}</span>}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about__card" variants={itemVariants}>
            <h4 className="about__card-title">ESTANCIAS ACADÉMICAS &amp; CURSOS</h4>
            <div className="about__extra">
              <div className="about__extra-section">
                <h5 className="about__extra-subtitle">Estancias Internacionales</h5>
                <ul className="about__extra-list">
                  <li>Automatización de olfatómetro &ndash; CINVESTAV, IPN (2004)</li>
                  <li>Proyecto pedagógico de VHDL &ndash; Universidad de Toulon, Francia (2004)</li>
                </ul>
              </div>
              <div className="about__extra-section">
                <h5 className="about__extra-subtitle">Cursos y Reconocimientos</h5>
                <ul className="about__extra-list">
                  <li>Congreso Nacional de Electrónica y Automatización &ndash; Universidad Tecnológica de Zacatecas</li>
                  <li>Curso de Internet &ndash; ICATHI, Mineral de la Reforma</li>
                  <li>Diplomado en Inteligencia Artificial Online &ndash; TopLearning (en curso)</li>
                </ul>
              </div>
              <div className="about__extra-row">
                <div className="about__extra-section">
                  <h5 className="about__extra-subtitle">Idiomas</h5>
                  <div className="about__languages">
                    <span className="about__language">Inglés &ndash; 70%</span>
                    <span className="about__language">Francés &ndash; 60%</span>
                  </div>
                </div>
                <div className="about__extra-section">
                  <h5 className="about__extra-subtitle">Valores Personales</h5>
                  <div className="about__values">
                    {['Honestidad', 'Liderazgo', 'Proactividad', 'Responsabilidad', 'Innovación', 'Profesionalismo'].map(v => (
                      <span key={v} className="about__value-tag">{v}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
