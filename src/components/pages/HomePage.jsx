/**
 * Página principal del portafolio
 * Contiene todas las secciones principales del sitio
 */
import { motion } from 'framer-motion'
import Header from '@components/layout/Header'
import HeroSection from '@components/sections/HeroSection'
import VisionSection from '@components/sections/VisionSection'
import LiderazgoSection from '@components/sections/LiderazgoSection'
import ProductionSection from '@components/sections/ProductionSection'
import InnovacionDiscursoSection from '@components/sections/InnovacionDiscursoSection'
import LaboratorySection from '@components/sections/LaboratorySection'
import CtaSection from '@components/sections/CtaSection'
import Footer from '@components/layout/Footer'
import BackgroundGrid from '@components/common/BackgroundGrid'

const HomePage = () => {
  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BackgroundGrid />
      <Header />
      
      <div className="main-content">
        <HeroSection />
        <VisionSection />
        <LiderazgoSection />
        <ProductionSection />
        <InnovacionDiscursoSection />
        <LaboratorySection />
        <CtaSection />
      </div>
      
      <Footer />
    </motion.div>
  )
}

export default HomePage