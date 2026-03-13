/**
 * Datos de proyectos del portafolio
 * Estructura centralizada para fácil mantenimiento - Versión en Español
 */

export const laboratoryProjects = [
  {
    id: 'neural-synth-engine',
    title: 'Motor de Síntesis Neural',
    category: 'Aprendizaje Automático',
    status: 'ESTABLE / v2.1.0',
    description: 'Síntesis de audio generativa impulsada por algoritmos de aprendizaje automático en el navegador.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=800&fit=crop&crop=center',
    tags: ['WebAudio API', 'TensorFlow.js', 'React', 'Web Workers'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    gridSize: 'large' // large, medium, small
  },
  {
    id: 'vector-engine',
    title: 'Motor Vectorial',
    category: 'Matemáticas',
    status: 'EXPERIMENTO_042',
    description: 'Motor de visualización de campos vectoriales en tiempo real y computación matemática.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop&crop=center',
    tags: ['WebGL', 'GLSL', 'Canvas API', 'Matemáticas'],
    demoUrl: '#',
    githubUrl: '#',
    gridSize: 'small'
  },
  {
    id: 'fluid-dynamics',
    title: 'Dinámica de Fluidos',
    category: 'Simulación Física',
    status: 'SIM_009',
    description: 'Simulación interactiva de fluidos usando ecuaciones de Navier-Stokes en tiempo real.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center',
    tags: ['Física', 'WebGL', 'Compute Shaders', 'Tiempo Real'],
    demoUrl: '#',
    githubUrl: '#',
    gridSize: 'small'
  },
  {
    id: 'shader-lab',
    title: 'Experimentos de Shader Lab',
    category: 'Programación Gráfica',
    status: 'GLSL_LAB_10',
    description: 'Colección de shaders experimentales y efectos visuales para aplicaciones web.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center',
    tags: ['GLSL', 'WebGL', 'Three.js', 'Efectos Visuales'],
    demoUrl: '#',
    githubUrl: '#',
    gridSize: 'medium'
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