/**
 * Datos de proyectos del portafolio
 * Estructura centralizada para fácil mantenimiento - Versión en Español
 */

export const laboratoryProjects = [
  {
    id: 'animacion-lampara',
    title: 'Animación de Lámpara',
    category: 'Animación Digital',
    status: 'PROTOTIPO_017',
    description: 'Animación procedural de una lámpara con física de sombras y iluminación dinámica en tiempo real.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center',
    video: './experimentos/animacion-lampara/animacionLampara.mp4',
    poster: './experimentos/animacion-lampara/animacionLampara-poster.jpg',
    tags: ['Canvas API', 'Animación', 'Física de Luz', 'Tiempo Real'],
    demoUrl: './experimentos/animacion-lampara/index.html',
    githubUrl: 'https://github.com/MauroMiranda0/mauromiranda.com/tree/main/experimentos/animacion-lampara',
    gridSize: 'large',
    featured: true
  },
  {
    id: 'dashboard-template',
    title: 'Plantilla de Dashboard',
    category: 'Interfaces de Usuario',
    status: 'EXPLORACIÓN_042',
    description: 'Plantilla de dashboard con diseno responsivo, componentes modulares y un sistema de diseno tecnico.',
    image: './experimentos/dashboard-template/vistaPrevia.png',
    tags: ['SCSS', 'Dashboard', 'Componentes UI', 'Responsivo'],
    demoUrl: './experimentos/dashboard-template/index.html',
    githubUrl: 'https://github.com/MauroMiranda0/mauromiranda.com/tree/main/experimentos/dashboard-template',
    gridSize: 'small',
    featured: true
  },
  {
    id: 'teseracto-template',
    title: 'Plantilla Teseracto',
    category: 'Visualización Experimental',
    status: 'R&D_LAB_05',
    description: 'Visualizador experimental de video 3D con composición moderna, controles ligeros y una capa visual pensada para demos interactivas.',
    image: 'https://images.unsplash.com/photo-1637144113536-9c6e917e6b24?w=400&h=400&fit=crop&crop=center',
    video: './experimentos/teseracto-template/teseracto.mp4',
    tags: ['Video', '3D', 'Loop Cinemático', 'WebGL'],
    demoUrl: './experimentos/teseracto-template/tesseract-experiment.html',
    githubUrl: 'https://github.com/MauroMiranda0/mauromiranda.com/tree/main/experimentos/teseracto-template',
    gridSize: 'small'
  },
  {
    id: 'neural-pattern-synth',
    title: 'CRUD Avanzado',
    category: 'Aplicaciones Web',
    status: 'PROTOTIPO_031',
    description: 'Vista previa de un sistema CRUD avanzado con gestion de registros, filtros dinamicos, formularios enriquecidos y flujo de administracion orientado a operaciones reales.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center',
    tags: ['React', 'CRUD', 'Formularios', 'Dashboard'],
    demoUrl: '#',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small'
  },
  {
    id: 'waveform-visualizer',
    title: 'Asistente Digital para Citas Psicologicas Online',
    category: 'Salud Digital',
    status: 'EXPLORACIÓN_058',
    description: 'Concepto de asistente digital para agendar citas psicologicas online, dar seguimiento inicial y facilitar la comunicacion entre paciente y profesional.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=center',
    tags: ['Agenda Online', 'Asistente Digital', 'Salud', 'UX'],
    demoUrl: '#',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small'
  }
]

export const productionProjects = [
  {
    id: 'knemco-manufacturing',
    title: 'Knemco Manufacturing',
    category: 'Manufactura Digital',
    client: 'Knemco',
    description: 'Plataforma web integral de manufactura aditiva construida para un taller de impresión 3D con base en Grande Prairie, Alberta. Enfoque en exhibición de productos personalizados (iluminación escultórica, macetas de diseño, accesorios para mascotas, regalos personalizados), visualización interactiva de modelos, y sistema de captación de leads con formularios inteligentes segmentados por tipo de proyecto (fabricación, inversión comunitaria, alianzas).',
    image: '/assets/knemco/hero-background-CEUOhYPQ.jpg',
    metrics: [
      { label: 'RENDIMIENTO', value: '96/100 LIGHTHOUSE' },
      { label: 'PRODUCTOS', value: '4 LÍNEAS + FABRICACIÓN BAJO DEMANDA' },
      { label: 'STACK', value: 'REACT, FRAMER MOTION, EMAILJS' }
    ],
    technologies: ['React', 'Vite', 'Framer Motion', 'EmailJS', 'CSS Modules', 'React Scroll'],
    timeline: '3 meses',
    team: '1 desarrollador',
    founders: ['Leonardo Yáñez', 'Mariusz Szczepan'],
    location: 'Grande Prairie, Alberta, Canadá',
    caseStudyUrl: '#',
    featured: true
  },
  {
    id: 'control-costos-3d',
    title: 'Control de Costos Impresión 3D',
    category: 'Software de Fabricación',
    client: 'Print3D',
    description: 'Aplicación web progresiva construida para el cálculo preciso y la gestión de costos en manufactura aditiva. Arquitectura offline-first con sincronización eficiente, interfaz optimizada para entornos de taller y persistencia de datos mediante almacenamiento local.',
    image: '/distImpresion3D/assets/logo-_meTbGYN.png',
    metrics: [
      { label: 'RENDIMIENTO', value: '96/100 LIGHTHOUSE' },
      { label: 'STACK', value: 'PWA, SERVICE WORKER, LOCALSTORAGE' },
      { label: 'MODO OFFLINE', value: 'SINCRONIZACIÓN AUTOMÁTICA' }
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Service Worker API', 'Web Manifest', 'LocalStorage API'],
    timeline: '2 meses',
    team: '1 desarrollador',
    caseStudyUrl: '#',
    featured: true
  },
  {
    id: 'sonic-store',
    title: 'Sonic Store',
    category: 'Experiencia de Compra Premium',
    client: 'Sonic Store',
    description: 'Plataforma de comercio electrónico construida para una tienda de belleza, moda y estilo de vida con alcance en calzado, hogar y cosmética. Enfoque en catálogo visual multicategoría, integración con canales de venta directa mediante WhatsApp y experiencia de navegación fluida optimizada para conversión móvil.',
    image: '/distSonic/img/logo.png',
    metrics: [
      { label: 'CATEGORÍAS', value: '5 LÍNEAS DE PRODUCTO' },
      { label: 'STACK', value: 'REACT, VITE, CSS CUSTOM PROPERTIES' },
      { label: 'CANAL DE VENTA', value: 'INTEGRACIÓN WHATSAPP API' }
    ],
    technologies: ['React', 'Vite', 'CSS Custom Properties', 'React Router', 'WhatsApp API'],
    timeline: '3 meses',
    team: '1 desarrollador',
    caseStudyUrl: '#',
    featured: true
  },
  {
    id: 'conciencia-landing',
    title: 'Conciencia Landing Page',
    category: 'Landing Page Estratégica',
    client: 'Conciencia',
    description: 'Landing page de alto rendimiento diseñada para maximizar conversiones y transmitir el propósito de la marca con una experiencia visual impactante.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
    metrics: [
      { label: 'RENDIMIENTO', value: '96/100 LIGHTHOUSE' },
      { label: 'STACK', value: 'NEXT.JS, FRAMER MOTION' }
    ],
    technologies: ['Next.js', 'Framer Motion', 'SCSS', 'SEO'],
    timeline: '3 meses',
    team: '3 desarrolladores',
    caseStudyUrl: '#',
    featured: true
  }
]

export const techStack = [
  {
    id: 'react-nextjs',
    name: 'REACT / NEXT.JS',
    icon: 'javascript',
    category: 'Desarrollo Frontend',
    description: 'Desarrollo de interfaces modernas y dinámicas con React, optimizadas con Next.js para renderizado server-side (SSR) y generación estática (SSG). Enfoque en componentes modulares, accesibilidad y experiencias de usuario fluidas.',
    tags: ['JavaScript', 'NodeJS', 'CSS', 'HTML']
  },
  {
    id: 'python-nodejs',
    name: 'PYTHON / NODEJS',
    icon: 'settings_ethernet',
    category: 'Desarrollo Backend',
    description: 'Backend versátil con Python para soluciones de IA, automatización y análisis de datos; y NodeJS para aplicaciones web en tiempo real. Integración con APIs REST, servicios cloud y arquitecturas escalables.',
    tags: ['Python', 'NodeJS', 'APIs REST', 'IA']
  },
  {
    id: 'supabase-postgresql',
    name: 'SUPABASE / POSTGRESQL',
    icon: 'database',
    category: 'Base de Datos',
    description: 'Gestión de datos con Supabase como plataforma backend en tiempo real y PostgreSQL como motor relacional robusto. Incluye autenticación, almacenamiento seguro y escalabilidad para proyectos de alto rendimiento.',
    tags: ['Supabase', 'PostgreSQL', 'Auth', 'Tiempo Real']
  },
  {
    id: 'docker-n8n',
    name: 'DOCKER / N8N',
    icon: 'cloud',
    category: 'Infraestructura y Automatización',
    description: 'Contenedores Docker para entornos reproducibles y despliegues eficientes; n8n para automatización de flujos de trabajo. Control de versiones con Git y despliegue en servidores Linux, garantizando estabilidad y continuidad.',
    tags: ['Docker', 'n8n', 'Git', 'Linux']
  }
]

// Función helper para obtener proyectos por categoría
export const getProjectsByCategory = (category) => {
  return [...laboratoryProjects, ...productionProjects].filter(
    project => project.category === category
  )
}

// Función helper para obtener proyectos destacados
export const getFeaturedProjects = () => {
  return [...laboratoryProjects, ...productionProjects].filter(
    project => project.featured
  )
}

// Función helper para obtener proyecto por ID
export const getProjectById = (id) => {
  return [...laboratoryProjects, ...productionProjects].find(
    project => project.id === id
  )
}
