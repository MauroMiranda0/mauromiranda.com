/**
 * Contenido de copy optimizado para directores de ingeniería
 * Enfoque en autoridad técnica y beneficios de negocio - Versión en Español
 */

export const heroContent = {
  // Propuesta de valor única - Una frase que posiciona autoridad
  valueProposition: "Transformo sitios web lentos en máquinas de conversión que escalan sin comprometer la experiencia del usuario.",
  
  // Subtítulo que refuerza credibilidad
  subtitle: "Ingeniero React especializado en rendimiento crítico para PyMES de alto crecimiento.",
  
  // Estadísticas de impacto
  stats: [
    { metric: "5 años", label: "optimizando React en producción" },
    { metric: "40+ proyectos", label: "escalados exitosamente" },
    { metric: "2.3s promedio", label: "reducción en tiempo de carga" }
  ]
}

export const aboutContent = {
  title: "De debugger nocturno a arquitecto de rendimiento",
  
  // Storytelling que conecta origen con expertise actual
  story: `
    **2019. 2:47 AM. Un e-commerce perdía €12,000 por hora.**
    
    Mientras el equipo dormía, yo estaba en mi laptop diseccionando cada línea de código de una aplicación React que colapsaba bajo Black Friday. El bundle de 2.8MB tardaba 8 segundos en cargar. Los usuarios abandonaban antes de ver el primer producto.
    
    **Esa noche cambió mi carrera.**
    
    No solo rescaté el sitio (reduciéndolo a 1.2s de carga), sino que descubrí mi verdadera especialización: **transformar código que funciona en código que escala**.
    
    Desde entonces, he desarrollado una metodología sistemática para diagnosticar, optimizar y escalar aplicaciones React en entornos de alta demanda. Mi enfoque no es solo técnico—es estratégico. Entiendo que cada milisegundo perdido en carga es revenue perdido en conversión.
    
    **Hoy ayudo a CTOs y directores de ingeniería a:**
    - Rescatar proyectos críticos antes de que impacten el negocio
    - Implementar arquitecturas que soporten crecimiento exponencial  
    - Reducir costos de infraestructura mediante optimización inteligente
    
    Mi stack no es solo React, Next.js y TypeScript. Es **ingeniería orientada al rendimiento** aplicada donde más importa: en el resultado final del negocio.
  `,
  
  // Principios técnicos que guían el trabajo
  principles: [
    {
      title: "Rendimiento = Ingresos",
      description: "Cada optimización se mide en impacto de negocio, no solo en métricas técnicas."
    },
    {
      title: "Escalabilidad Preventiva", 
      description: "Arquitecturas que anticipan el crecimiento, no que reaccionan a él."
    },
    {
      title: "Código Auditable",
      description: "Soluciones documentadas que cualquier equipo puede mantener y evolucionar."
    }
  ]
}

export const projectShowcase = {
  title: "Caso de Estudio: Rescate de E-commerce en Crisis",
  
  // Fórmula PAS (Problema, Agitación, Solución)
  problem: {
    title: "EL PROBLEMA",
    description: `
      **Una startup de e-commerce B2B perdía 40% de conversiones por rendimiento.**
      
      Su aplicación React, construida por un equipo junior, tenía problemas críticos:
      - Tiempo de carga inicial: 8.2 segundos
      - Bundle JavaScript: 2.8MB sin optimizar
      - Puntuación Lighthouse: 23/100
      - Tasa de abandono: 67% antes del primer producto
      
      **El contexto crítico:** Estaban a 3 semanas de una ronda de inversión Serie A. Los inversores evaluarían la plataforma en vivo.
    `
  },
  
  agitation: {
    title: "LAS CONSECUENCIAS",
    description: `
      **El costo del problema escalaba exponencialmente:**
      
      - **Ingresos perdidos:** €45,000/mes en conversiones fallidas
      - **Costo de adquisición inflado:** 3x más caro retener usuarios que abandonaban
      - **Riesgo de inversión:** La ronda de €2M dependía de demostrar escalabilidad técnica
      - **Deuda técnica:** Cada día sin solución multiplicaba el costo de refactoring
      
      **La presión:** El equipo interno había intentado 3 enfoques diferentes sin éxito. El CTO necesitaba una solución definitiva en 2 semanas.
    `
  },
  
  solution: {
    title: "LA SOLUCIÓN TÉCNICA",
    description: `
      **Implementé una estrategia de optimización en 4 fases:**
      
      **Fase 1: Diagnóstico Profundo (2 días)**
      - Auditoría completa con Lighthouse, WebPageTest y React DevTools
      - Identificación de 23 puntos críticos de optimización
      - Priorización por impacto en Core Web Vitals
      
      **Fase 2: Optimización Crítica (5 días)**
      - División inteligente de código: de 1 bundle a 12 chunks optimizados
      - Carga diferida de componentes no críticos
      - Implementación estratégica de React.memo y useMemo
      - Optimización de imágenes con WebP + carga diferida
      
      **Fase 3: Arquitectura Escalable (4 días)**
      - Migración a Next.js con SSG para páginas estáticas
      - Implementación de Service Worker para caché inteligente
      - Configuración de CDN para assets estáticos
      
      **Fase 4: Monitoreo Continuo (3 días)**
      - Integración con monitoreo de Core Web Vitals
      - Alertas automáticas para regresiones de rendimiento
      - Dashboard de métricas para stakeholders
    `
  },
  
  results: {
    title: "RESULTADOS MEDIBLES",
    metrics: [
      { before: "8.2s", after: "1.1s", improvement: "87%", metric: "Tiempo de carga inicial" },
      { before: "2.8MB", after: "340KB", improvement: "88%", metric: "Tamaño del bundle inicial" },
      { before: "23/100", after: "94/100", improvement: "309%", metric: "Puntuación Lighthouse" },
      { before: "67%", after: "23%", improvement: "66%", metric: "Tasa de abandono" }
    ],
    businessImpact: `
      **Impacto en el negocio:**
      - **+€67,000 ingresos adicionales** en los primeros 3 meses
      - **Ronda Serie A exitosa:** €2.1M levantados (€100K sobre objetivo)
      - **Reducción de costos:** 40% menos en infraestructura cloud
      - **Time-to-market:** Nuevas funcionalidades se despliegan 60% más rápido
      
      **El CTO después del proyecto:** *"No solo salvaste nuestra ronda de financiación. Nos diste una arquitectura que puede escalar a 10x nuestro tráfico actual sin modificaciones."*
    `
  }
}

export const servicesContent = {
  title: "Cómo Transformo Tu Stack Técnico en Ventaja Competitiva",
  
  services: [
    {
      title: "Auditoría y Rescate de Rendimiento",
      problem: "Tu aplicación React es lenta y pierdes usuarios",
      solution: "Auditoría completa + plan de optimización en 72 horas",
      deliverables: [
        "Diagnóstico técnico detallado con métricas actuales",
        "Hoja de ruta priorizada de optimizaciones por impacto",
        "Implementación de mejoras críticas",
        "Documentación para tu equipo interno"
      ],
      timeline: "1-2 semanas",
      ideal: "Startups con problemas críticos de rendimiento"
    },
    
    {
      title: "Diseño de Arquitectura Escalable", 
      problem: "Tu código funciona pero no escala con el crecimiento",
      solution: "Rediseño arquitectónico para soportar 10x más tráfico",
      deliverables: [
        "Arquitectura escalable con patrones probados",
        "Migración gradual sin tiempo de inactividad",
        "CI/CD optimizado para despliegues seguros",
        "Monitoreo y alertas proactivas"
      ],
      timeline: "3-6 semanas",
      ideal: "PyMES en crecimiento acelerado"
    },
    
    {
      title: "Due Diligence Técnico",
      problem: "Necesitas validar la calidad técnica antes de invertir/adquirir",
      solution: "Evaluación completa del stack y equipo técnico",
      deliverables: [
        "Reporte ejecutivo de salud técnica",
        "Identificación de riesgos y deuda técnica",
        "Estimación de costos de modernización",
        "Recomendaciones estratégicas"
      ],
      timeline: "1 semana",
      ideal: "Inversores y empresas en M&A"
    }
  ]
}

export const ctaContent = {
  primary: {
    title: "¿Tu aplicación React necesita escalar?",
    subtitle: "Hablemos de cómo transformar tu stack técnico en ventaja competitiva.",
    buttonText: "Agendar Consulta Técnica",
    note: "Consulta inicial gratuita de 30 minutos para evaluar tu situación específica."
  },
  
  secondary: {
    title: "Descarga mi Framework de Rendimiento",
    subtitle: "La metodología exacta que uso para optimizar aplicaciones React en producción.",
    buttonText: "Descargar Guía Gratuita",
    note: "PDF de 24 páginas con checklist y herramientas incluidas."
  }
}