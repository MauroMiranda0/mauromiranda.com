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
import ErrorBoundary from '@components/common/ErrorBoundary'
import SkipToContent from '@components/common/SkipToContent'

const SITE_URL = 'https://mauromiranda.com'
const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop'

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="app">
          <Helmet>
            <html lang="es" />
            <title>Mauro Miranda | Ingeniería Web de Elite</title>
            <meta name="description" content="Mauro Miranda - Ingeniería Web de Elite. Arquitectura de software y experimentación digital de alto rendimiento." />
            <meta name="theme-color" content="#0da6f2" />
            <meta property="og:title" content="Mauro Miranda | Ingeniería Web de Elite" />
            <meta property="og:description" content="Ingeniería Web de Elite. Creando arquitecturas digitales de alto rendimiento con estética minimalista y precisión científica." />
            <meta property="og:url" content={SITE_URL} />
            <meta property="og:image" content={DEFAULT_OG_IMAGE} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Mauro Miranda | Ingeniería Web de Elite" />
            <meta name="twitter:description" content="Ingeniería Web de Elite. Arquitectura de software y experimentación digital de alto rendimiento." />
            <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
            <link rel="canonical" href={SITE_URL} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="preconnect" href="https://images.unsplash.com" />
          </Helmet>

          <SkipToContent />
          <ScrollToTop />

          <main id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/proyecto/:slug" element={<ProjectPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App