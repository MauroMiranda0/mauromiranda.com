/**
 * Datos de proyectos del portafolio
 * Estructura centralizada para fácil mantenimiento - Versión en Español
 */

export const developmentProjects = [
  {
    id: 'asistente-digital',
    title: 'Asistente Digital para Citas Psicológicas Online',
    category: 'Salud Digital',
    status: 'EXPLORACIÓN_058',
    description: 'Concepto de asistente digital para agendar citas psicológicas online, dar seguimiento inicial y facilitar la comunicación entre paciente y profesional.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=center',
    tags: ['Agenda Online', 'Asistente Digital', 'Salud', 'UX'],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0b2545 55%, #0da6f2 160%)',
    demoUrl: '/construccion',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'large',
    featured: true
  },
  {
    id: 'crud-avanzado',
    title: 'CRUD Avanzado',
    category: 'Aplicaciones Web',
    status: 'PROTOTIPO_031',
    description: 'Vista previa de un sistema CRUD avanzado con gestión de registros, filtros dinámicos, formularios enriquecidos y flujo de administración orientado a operaciones reales.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center',
    tags: ['React', 'CRUD', 'Formularios', 'Dashboard'],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #12335c 55%, #3b82f6 160%)',
    demoUrl: '/construccion',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small',
    featured: true
  },
  {
    id: 'paneles-solares',
    title: 'Panel de Control de Paneles Solares',
    category: 'Energía Solar',
    status: 'EN_DESARROLLO_061',
    description: 'Panel de control para monitoreo de paneles solares: registro de generación, métricas de rendimiento y visualización de datos energéticos en tiempo real.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop&crop=center',
    tags: ['Dashboard', 'Energía', 'IoT', 'Datos'],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0b2a47 55%, #38bdf8 155%)',
    demoUrl: '/construccion',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small'
  },
  {
    id: 'medicina-estetica',
    title: 'Medicina Estética',
    category: 'Salud y Bienestar',
    status: 'EN_DESARROLLO_062',
    description: 'Plataforma digital para un centro de medicina estética: presentación de tratamientos, agendamiento de citas y canal de contacto directo con especialistas.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop&crop=center',
    tags: ['Landing', 'Citas', 'Salud', 'UX'],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0c3554 55%, #0ea5e9 155%)',
    demoUrl: '/construccion',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small'
  },
  {
    id: 'edalum',
    title: 'Edalum',
    category: 'Comercio Electrónico',
    status: 'EN_DESARROLLO_063',
    description: 'Plataforma de catálogo y venta para soluciones de iluminación: exhibición de productos, fichas técnicas y consultas directas por canal de venta.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop&crop=center',
    tags: ['Catálogo', 'E-commerce', 'Iluminación', 'Lead'],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #60a5fa 160%)',
    demoUrl: '/construccion',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small'
  },
  {
    id: 'agencia-viajes',
    title: 'Agencia de Viajes',
    category: 'Turismo',
    status: 'EN_DESARROLLO_064',
    description: 'Plataforma para una agencia de viajes: exploración de destinos, paquetes turísticos y solicitud de cotizaciones personalizadas.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop&crop=center',
    tags: ['Turismo', 'Destinos', 'Paquetes', 'UX'],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #6366f1 160%)',
    demoUrl: '/construccion',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small'
  }
]

export const laboratoryProjects = [
  {
    id: 'animacion-lampara',
    title: 'Animación de Lámpara',
    category: 'Animación Digital',
    status: 'PROTOTIPO_017',
    description: 'Animación procedural de una lámpara con física de sombras y iluminación dinámica en tiempo real.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center',
    video: './experimentos/animacion-lampara/animacionLampara-optimized.mp4',
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
    video: './experimentos/teseracto-template/teseracto-optimized.mp4',
    poster: './experimentos/teseracto-template/teseracto-poster.jpg',
    tags: ['Video', '3D', 'Loop Cinemático', 'WebGL'],
    demoUrl: './experimentos/teseracto-template/tesseract-experiment.html',
    githubUrl: 'https://github.com/MauroMiranda0/mauromiranda.com/tree/main/experimentos/teseracto-template',
    gridSize: 'small'
  },
  {
    id: 'editor-web-local',
    title: 'Editor Web Local',
    category: 'Herramientas',
    status: 'R&D_LAB_06',
    description: 'Editor de código ejecutable completamente en el navegador: resaltado de sintaxis, vista previa en vivo y persistencia en almacenamiento local.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center',
    tags: ['Editor', 'HTML/CSS/JS', 'Vista Previa', 'LocalStorage'],
    demoUrl: '/construccion',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small'
  },
  {
    id: 'generador-storytelling',
    title: 'Generador de Storytelling',
    category: 'IA Generativa',
    status: 'R&D_LAB_07',
    description: 'Experimento de generación de narrativa: construcción de historias y guiones a partir de premisas, personajes y arcos argumentales.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=400&fit=crop&crop=center',
    tags: ['IA', 'Narrativa', 'Generación', 'Prompt'],
    demoUrl: '/construccion',
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
    technologies: ['React', 'Vite', 'Framer Motion', 'EmailJS', 'SCSS'],
    timeline: '3 meses',
    team: '1 desarrollador',
    founders: ['Leonardo Yáñez', 'Mariusz Szczepan'],
    location: 'Grande Prairie, Alberta, Canadá',
    caseStudyUrl: 'https://knemco-manufacturing-fullstack.vercel.app/',
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
    caseStudyUrl: 'https://app-impresion3-d-pwa.vercel.app/',
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
      { label: 'STACK', value: 'REACT, VITE, FRAMER MOTION' },
      { label: 'CANAL DE VENTA', value: 'PEDIDOS POR WHATSAPP' }
    ],
    technologies: ['React', 'Vite', 'Framer Motion', 'Swiper', 'WhatsApp'],
    timeline: '3 meses',
    team: '1 desarrollador',
    caseStudyUrl: 'https://sonicstore.website/',
    featured: true
  },
  {
    id: 'conciencia-landing',
    title: 'Conciencia Landing Page',
    category: 'Landing Page Estratégica',
    client: 'Conciencia',
    description: 'Landing page de alto rendimiento para el centro de atención integral Conciencia CAI, con dos variantes temáticas (Varonil y Femenil). Enfoque en conversión con navegación por anclas, testimonios, galería, mapa interactivo y contacto directo por WhatsApp.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
    metrics: [
      { label: 'RENDIMIENTO', value: '96/100 LIGHTHOUSE' },
      { label: 'VARIANTES', value: 'VARONIL Y FEMENIL' },
      { label: 'STACK', value: 'REACT, VITE' }
    ],
    technologies: ['React', 'Vite', 'SEO', 'WhatsApp'],
    timeline: '3 meses',
    team: '1 desarrollador',
    caseStudyUrl: 'https://conciencia-cai.org/',
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
  return [...developmentProjects, ...laboratoryProjects, ...productionProjects].filter(
    project => project.category === category
  )
}

// Función helper para obtener proyectos destacados
export const getFeaturedProjects = () => {
  return [...developmentProjects, ...laboratoryProjects, ...productionProjects].filter(
    project => project.featured
  )
}

// Función helper para obtener proyecto por ID
export const getProjectById = (id) => {
  return [...developmentProjects, ...laboratoryProjects, ...productionProjects].find(
    project => project.id === id
  )
}
