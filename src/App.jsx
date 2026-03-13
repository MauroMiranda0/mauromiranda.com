/**
 * Componente principal de la aplicación
 * Maneja el routing y la estructura general
 */
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import HomePage from '@components/pages/HomePage'
import ProjectPage from '@components/pages/ProjectPage'
import NotFoundPage from '@components/pages/NotFoundPage'
import { ThemeProvider } from '@hooks/useTheme'
import ScrollToTop from '@components/common/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Helmet>
          <html lang="es" />
          <title>Mauro Miranda | Ingeniería Web de Elite</title>
          <meta name="description" content="Mauro Miranda - Ingeniería Web de Elite. Arquitectura de software y experimentación digital de alto rendimiento." />
          <meta name="theme-color" content="#0da6f2" />
          <meta property="og:title" content="Mauro Miranda | Ingeniería Web de Elite" />
          <meta property="og:description" content="Ingeniería Web de Elite. Creando arquitecturas digitales de alto rendimiento con estética minimalista y precisión científica." />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        </Helmet>
        
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyecto/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App