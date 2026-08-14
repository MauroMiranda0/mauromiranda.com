/**
 * Página principal del portafolio
 * Contiene todas las secciones principales del sitio
 */
import { motion } from 'framer-motion'
import Header from '@components/layout/Header'
import HeroSection from '@components/sections/HeroSection'
import DevelopmentSection from '@components/sections/DevelopmentSection'
import ProductionSection from '@components/sections/ProductionSection'
import LaboratorySection from '@components/sections/LaboratorySection'
import TechStackSection from '@components/sections/TechStackSection'
import AboutSection from '@components/sections/AboutSection'
import ContactSection from '@components/sections/ContactSection'
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
        <DevelopmentSection />
        <ProductionSection />
        <LaboratorySection />
        <TechStackSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </motion.div>
  )
}

export default HomePage