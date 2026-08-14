/**
 * Sección [03 LABORATORIO] — Experimentos
 * Grid reutilizable de proyectos
 */
import BentoProjectsSection from '@components/sections/BentoProjectsSection'
import { laboratoryProjects } from '@data/projects'

const LaboratorySection = () => {
  return (
    <BentoProjectsSection
      id="lab"
      label="[ 03 LABORATORIO ]"
      title="EXPERIMENTOS"
      projects={laboratoryProjects}
    />
  )
}

export default LaboratorySection
