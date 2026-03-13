/**
 * Página principal del portafolio
 * Contiene todas las secciones principales del sitio
 */
import { motion } from 'framer-motion'
import Header from '@components/layout/Header'
import HeroSection from '@components/sections/HeroSection'
import LaboratorySection from '@components/sections/LaboratorySection'
import ProductionSection from '@components/sections/ProductionSection'
import TechStackSection from '@components/sections/TechStackSection'
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
      
      <main className="main-content">
        <HeroSection />
        <LaboratorySection />
        <ProductionSection />
        <TechStackSection />
      </main>
      
      <Footer />
    </motion.div>
  )
}

export default HomePage