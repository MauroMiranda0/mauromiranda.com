/**
 * Página de detalle de proyecto
 * Muestra información completa de un proyecto específico
 */
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectById } from '@data/projects'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import BackgroundGrid from '@components/common/BackgroundGrid'

const ProjectPage = () => {
  const { slug } = useParams()
  const project = getProjectById(slug)

  if (!project) {
    return (
      <div className="project-page">
        <BackgroundGrid />
        <Header />
        <main className="main-content">
          <section className="project-not-found">
            <div className="container">
              <h1>Proyecto no encontrado</h1>
              <p>El proyecto que buscas no existe o ha sido movido.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <motion.div 
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BackgroundGrid />
      <Header />
      
      <main className="main-content">
        <section className="project-hero">
          <div className="container">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.image && (
              <img src={project.image} alt={project.title} />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  )
}

export default ProjectPage