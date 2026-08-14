/**
 * Componente principal de la aplicación
 * Maneja el routing y la estructura general
 */
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import HomePage from '@components/pages/HomePage'
import ProjectPage from '@components/pages/ProjectPage'
import UnderConstructionPage from '@components/pages/UnderConstructionPage'
import NotFoundPage from '@components/pages/NotFoundPage'
import { ThemeProvider } from '@hooks/useTheme'
import ScrollToTop from '@components/common/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Helmet>
          <html lang="es" />
          <title>Mauro Miranda | Ingenieria Web de Alto Nivel</title>
          <meta name="description" content="Mauro Miranda - Ingenieria web de alto nivel. Arquitectura de software y experimentacion digital de alto rendimiento." />
          <meta name="theme-color" content="#0da6f2" />
          <meta property="og:title" content="Mauro Miranda | Ingenieria Web de Alto Nivel" />
          <meta property="og:description" content="Ingenieria web de alto nivel. Creando arquitecturas digitales de alto rendimiento con estetica minimalista y precision tecnica." />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        </Helmet>
        
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyecto/:slug" element={<ProjectPage />} />
          <Route path="/construccion" element={<UnderConstructionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
