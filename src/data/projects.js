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
  },
  {
    id: 'neural-pattern-synth',
    title: 'Motor de Síntesis Neural',
    category: 'Inteligencia Artificial',
    status: 'PROTOTIPO_031',
    description: 'Sistema de síntesis de patrones visuales generativos impulsado por redes neuronales ligeras en el navegador.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=center',
    tags: ['TensorFlow.js', 'WebGL', 'Generativo', 'IA'],
    demoUrl: '#',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small'
  },
  {
    id: 'waveform-visualizer',
    title: 'Visualizador de Ondas',
    category: 'Audio Visual',
    status: 'EXPLORACIÓN_058',
    description: 'Visualizador de audio en tiempo real con análisis espectral, shaders GLSL y respuesta dinámica a frecuencias.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop&crop=center',
    tags: ['Web Audio API', 'GLSL', 'Espectral', 'Tiempo Real'],
    demoUrl: '#',
    githubUrl: 'https://github.com/MauroMiranda0',
    gridSize: 'small'
  }
]

export const productionProjects = [
  {
    id: 'knemco-manufacturing',
    title: 'Knemco Manufacturing',
    category: 'Transformación Industrial',
    client: 'Knemco',
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
    id: 'print3d-webapp',
    title: 'Print3D Webapp',
    category: 'Núcleo E-Commerce',
    client: 'Print3D',
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
    category: 'Frontend',
    description: 'Construcción de interfaces dinámicas con React y optimización server-side con Next.js. Enfoque en componentes modulares, SSR/SSG y experiencia de usuario fluida.',
    tags: ['JavaScript', 'NodeJS', 'CSS', 'HTML']
  },
  {
    id: 'python-php',
    name: 'PYTHON / PHP',
    icon: 'settings_ethernet',
    category: 'Backend',
    description: 'Desarrollo backend versátil con Python para soluciones de IA y automatización, y PHP para aplicaciones web robustas. Integración con bases de datos y APIs REST.',
    tags: ['Python', 'PHP', 'SQL', 'APIs REST']
  },
  {
    id: 'sql-database',
    name: 'SQL / POSTGRESQL',
    icon: 'database',
    category: 'Base de Datos',
    description: 'Modelado y administración de bases de datos relacionales con SQL y PostgreSQL. Optimización de consultas, integridad referencial y escalabilidad de datos.',
    tags: ['PostgreSQL', 'MySQL', 'Query Optimization', 'Data Modeling']
  },
  {
    id: 'git-devops',
    name: 'GIT / DEVOPS',
    icon: 'cloud',
    category: 'Infraestructura',
    description: 'Control de versiones con Git y GitHub, despliegue en entornos Linux y Windows. Automatización de flujos de trabajo y mantenimiento de infraestructura.',
    tags: ['Git', 'GitHub', 'Linux', 'VS Code']
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