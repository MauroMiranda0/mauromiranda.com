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
    title: 'Dashboard Template',
    category: 'Interfaces de Usuario',
    status: 'EXPLORACIÓN_042',
    description: 'Template de dashboard con diseño responsivo, componentes modulares y sistema de diseño technical.',
    image: './experimentos/dashboard-template/vistaPrevia.png',
    tags: ['SCSS', 'Dashboard', 'UI Components', 'Responsive'],
    demoUrl: './experimentos/dashboard-template/index.html',
    githubUrl: 'https://github.com/MauroMiranda0/mauromiranda.com/tree/main/experimentos/dashboard-template',
    gridSize: 'small',
    featured: true
  },
  {
    id: 'teseracto-template',
    title: 'Teseracto Template',
    category: 'Visualización Experimental',
    status: 'R&D_LAB_05',
    description: 'Visualizador experimental de video 3D con composición moderna, controles ligeros y una capa visual pensada para demos interactivas.',
    image: 'https://images.unsplash.com/photo-1637144113536-9c6e917e6b24?w=400&h=400&fit=crop&crop=center',
    video: './experimentos/teseracto-template/teseracto.mp4',
    tags: ['Video', '3D', 'Loop Cinemático', 'WebGL'],
    demoUrl: './experimentos/teseracto-template/tesseract-experiment.html',
    githubUrl: 'https://github.com/MauroMiranda0/mauromiranda.com/tree/main/experimentos/teseracto-template',
    gridSize: 'small'
  }
]

export const productionProjects = [
  {
    id: 'quantum-ledger-v2',
    title: 'Quantum Ledger v2',
    category: 'Arquitectura Fintech',
    client: 'Financial Technology Corp',
    description: 'Renovación arquitectónica completa para una plataforma de trading en tiempo real. Implementé una arquitectura de micro-frontends personalizada usando React y módulos WebAssembly impulsados por Rust.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
    metrics: [
      { label: 'RENDIMIENTO', value: '98/100 LIGHTHOUSE' },
      { label: 'STACK', value: 'NEXT.JS, RUST, WEBSOCKETS' }
    ],
    technologies: ['Next.js', 'React', 'Rust', 'WebAssembly', 'WebSockets', 'PostgreSQL'],
    timeline: '6 meses',
    team: '8 desarrolladores',
    caseStudyUrl: '#',
    featured: true
  },
  {
    id: 'aura-luxury-marketplace',
    title: 'Aura Luxury Marketplace',
    category: 'Núcleo E-Commerce',
    client: 'Casa de Moda de Lujo',
    description: 'Una experiencia de compra minimalista y de alto rendimiento para una casa de moda de alta gama. Enfocado en estabilidad de layout, transiciones suaves y Core Web Vitals.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center',
    metrics: [
      { label: 'ESCALA', value: '500K+ GESTIÓN DE SKU' },
      { label: 'STACK', value: 'HEADLESS COMMERCE, GSAP' }
    ],
    technologies: ['React', 'Shopify Plus', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
    timeline: '4 meses',
    team: '5 desarrolladores',
    caseStudyUrl: '#',
    featured: true
  }
]

export const techStack = [
  {
    id: 'react-nextjs',
    name: 'REACT / NEXT.JS',
    icon: 'javascript',
    level: 0.95,
    category: 'Frontend',
    description: 'Patrones avanzados de React, SSR/SSG, optimización de rendimiento'
  },
  {
    id: 'python-django',
    name: 'PYTHON / DJANGO',
    icon: 'settings_ethernet',
    level: 0.88,
    category: 'Backend',
    description: 'APIs REST, GraphQL, arquitectura de microservicios'
  },
  {
    id: 'postgresql',
    name: 'POSTGRESQL',
    icon: 'database',
    level: 0.90,
    category: 'Base de Datos',
    description: 'Optimización de consultas, estrategias de indexación, modelado de datos'
  },
  {
    id: 'aws-devops',
    name: 'AWS / DEVOPS',
    icon: 'cloud',
    level: 0.82,
    category: 'Infraestructura',
    description: 'Pipelines CI/CD, containerización, arquitectura cloud'
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