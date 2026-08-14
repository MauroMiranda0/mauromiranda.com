/**
 * Sección [01 DESARROLLO] — Proyectos Personales
 * Grid reutilizable de proyectos
 */
import BentoProjectsSection from '@components/sections/BentoProjectsSection'
import { developmentProjects } from '@data/projects'

const DevelopmentSection = () => {
  return (
    <BentoProjectsSection
      id="development"
      label="[ 01 DESARROLLO ]"
      title="PROYECTOS PERSONALES"
      projects={developmentProjects}
    />
  )
}

export default DevelopmentSection
