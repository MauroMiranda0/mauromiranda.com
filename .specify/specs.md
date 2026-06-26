# Especificaciones del Portafolio — Mauro Miranda

**Source of Truth:** Este archivo es la fuente de verdad única del proyecto.
**Última actualización:** 25/06/2026
**Constitución:** `constitution.md` — 7 principios de portafolio

---

### SPEC-01 · Routing y Estructura General de la Aplicación

**Estado:** IMPLEMENTADO
**Principio constitución:** P3 (Liderazgo tecnológico), P6 (Identidad visual coherente)

**Descripción funcional:**
La aplicación es una SPA con React Router que navega entre tres rutas principales: Home (`/`), detalle de proyecto (`/proyecto/:slug`) y página 404 (`*`). Incluye Header, Footer, navegación por anclas smooth-scroll, scroll-to-top automático y configuración de Vite con aliases y code splitting.

**Criterios de aceptación:**
- CA-1: La ruta `/` renderiza HomePage completa con Header, Hero, Laboratorio, Producción, Stack y Footer
- CA-2: La ruta `/proyecto/:slug` renderiza ProjectPage con datos del proyecto correspondiente
- CA-3: Cualquier ruta no definida renderiza NotFoundPage (404)
- CA-4: El scrolling a anclas (#about, #lab, #works, #stack) funciona con smooth behavior
- CA-5: Al cambiar de ruta, el scroll vuelve al top automáticamente
- CA-6: Los aliases `@components`, `@styles`, `@data`, `@hooks`, `@utils` resuelven correctamente
- CA-7: El bundle se divide en chunks vendor (React), animations (Framer Motion) y router (React Router)
- CA-8: Helmet meta tags se actualizan por ruta (title, description, OG)

**Specs técnicas:**
- Arquitectura: SPA con React Router v6, layout compuesto (Header + main + Footer)
- Rendimiento: Lighthouse score ≥ 90 en rutas principales
- Dependencias: react-router-dom@^6.20.1, framer-motion@^10.16.16, react-helmet-async@^2.0.4

**Precondiciones:**
- Proyecto inicializado con Vite + React
- Node modules instalados

**Dependencias de otras specs:**
- SPEC-05 (Hero Section)
- SPEC-06 (Laboratorio)
- SPEC-07 (Producción)
- SPEC-08 (Stack Técnico)
- SPEC-09 (Página de Proyecto)
- SPEC-10 (Página 404)

---

### SPEC-02 · Sistema de Temas (Dark/Light)

**Estado:** IMPLEMENTADO
**Principio constitución:** P6 (Identidad visual coherente)

**Descripción funcional:**
Sistema de tema oscuro/claro con detección de preferencia del sistema, persistencia en localStorage y toggle manual. El tema se aplica mediante clases CSS y atributos `data-theme` en el elemento `html`.

**Criterios de aceptación:**
- CA-1: Al cargar sin tema guardado, detecta `prefers-color-scheme` del sistema operativo
- CA-2: Al hacer toggle, cambia entre tema dark y light inmediatamente
- CA-3: El tema seleccionado persiste en localStorage al recargar la página
- CA-4: Los componentes visuales reaccionan al tema mediante variables CSS (`--bg-light`/`--bg-dark`, `--text-primary`, etc.)
- CA-5: El hook `useTheme` expone: `theme`, `toggleTheme`, `setTheme`, `isDark`, `isLight`
- CA-6: Error si `useTheme` se usa fuera de `ThemeProvider`

**Specs técnicas:**
- Arquitectura: Context API + hook personalizado, variables CSS
- Las variables de tema están en `_variables.scss` y `_base.scss`

**Precondiciones:**
- `ThemeProvider` envuelve la aplicación en `App.jsx`

**Dependencias de otras specs:**
- SPEC-13 (Sistema de Estilos SCSS)

---

### SPEC-03 · Datos Centralizados del Portafolio

**Estado:** IMPLEMENTADO
**Principio constitución:** P4 (Narrativa de impacto), P7 (Discurso de autoridad)

**Descripción funcional:**
Archivos de datos centralizados (`projects.js` y `copy-content.js`) que contienen toda la información del portafolio: proyectos (laboratorio y producción), stack técnico, copy de secciones y helpers de consulta.

**Criterios de aceptación:**
- CA-1: `projects.js` exporta `laboratoryProjects` (4 proyectos), `productionProjects` (2 proyectos) y `techStack` (4 tecnologías)
- CA-2: Cada proyecto en laboratorio tiene: id, title, category, status, description, image, tags, featured, gridSize
- CA-3: Cada proyecto en producción tiene: id, title, category, client, description, image, metrics, technologies, timeline, team, caseStudyUrl, featured
- CA-4: Los helpers `getProjectById`, `getProjectsByCategory`, `getFeaturedProjects` funcionan correctamente
- CA-5: `copy-content.js` contiene: heroContent, aboutContent, projectShowcase (estructura PAS), servicesContent, ctaContent
- CA-6: El copy sigue el tono consultivo y estratégico del principio P7

**Specs técnicas:**
- Arquitectura: Datos planos exportados como módulos ES, sin estado global
- Separación de contenido y presentación

**Precondiciones:**
- Directorio `src/data/` existe

**Dependencias de otras specs:**
- SPEC-05, SPEC-06, SPEC-07, SPEC-08 (consumen estos datos)

---

### SPEC-04 · Hero Section

**Estado:** IMPLEMENTADO
**Principio constitución:** P1 (Declaración de propósito), P2 (Visión transformadora)

**Descripción funcional:**
Sección principal de la home page que presenta a Mauro Miranda con título destacado, subtítulo, metadatos técnicos (coordenadas, referencia de archivo, estado) y dos botones CTA (Initialize Project, View Manifesto). Incluye animaciones de entrada con Framer Motion.

**Criterios de aceptación:**
- CA-1: Se renderiza como primera sección de la home page
- CA-2: Muestra título principal "MAURO MIRANDA: ARQUITECTURA SOFTWARE & EXPERIMENTACIÓN"
- CA-3: Muestra metadatos: LOC, REF, STATUS
- CA-4: Los botones CTA se renderizan con iconos
- CA-5: Las animaciones usan `useInView` con `triggerOnce: true`
- CA-6: Los textos son consistentes con el tono de la constitución (P1, P2)

**Specs técnicas:**
- Dependencias: framer-motion, react-intersection-observer
- Estilos: `HeroSection.scss`

**Precondiciones:**
- SPEC-01 implementada (ruteo y layout)

**Dependencias de otras specs:**
- SPEC-01 (layout), SPEC-03 (datos), SPEC-12 (Iconos)

---

### SPEC-05 · Sección Laboratorio

**Estado:** IMPLEMENTADO
**Principio constitución:** P5 (Innovación aplicada), P2 (Visión transformadora)

**Descripción funcional:**
Sección "El Laboratorio" que muestra proyectos experimentales en un grid tipo bento. Un proyecto principal grande (gridSize: large) ocupa 2 columnas y 2 filas, los proyectos pequeños (gridSize: small) en formato cuadrado, y proyectos medianos (gridSize: medium) en formato horizontal 2 columnas. Los datos provienen de `laboratoryProjects`.

**Criterios de aceptación:**
- CA-1: Se renderiza en la home page después del Hero
- CA-2: Muestra título "EL LABORATORIO" y label "[ 01 ]"
- CA-3: El grid es responsivo: 1 columna en mobile, 4 columnas en desktop
- CA-4: El proyecto con `gridSize: 'large'` ocupa 2x2 en desktop
- CA-5: Los proyectos con `gridSize: 'medium'` ocupan 2 columnas en desktop
- CA-6: Cada card muestra imagen, status badge, título y descripción (solo large)
- CA-7: Las cards tienen overlay gradient y hover zoom en la imagen
- CA-8: Las animaciones usan `whileInView` con Framer Motion

**Specs técnicas:**
- Arquitectura: Componente que consume `laboratoryProjects` de `projects.js`
- CSS Grid con `grid-column: span N` para layout bento

**Precondiciones:**
- SPEC-03 (datos de proyectos), SPEC-01 (layout)

**Dependencias de otras specs:**
- SPEC-03

---

### SPEC-06 · Sección Producción

**Estado:** IMPLEMENTADO
**Principio constitución:** P4 (Narrativa de impacto), P3 (Liderazgo tecnológico)

**Descripción funcional:**
Sección "Unidades de Producción" que muestra proyectos profesionales como casos de estudio. Cada proyecto se presenta en un layout de dos columnas (imagen + contenido) con categoría, título, descripción, métricas, tecnologías y enlace a caso de estudio. El layout se alterna (imagen izquierda/derecha) por cada proyecto.

**Criterios de aceptación:**
- CA-1: Se renderiza después de la sección Laboratorio
- CA-2: Muestra título "UNIDADES DE PRODUCCIÓN" y label "[ 02 ]"
- CA-3: Cada proyecto se alterna: primero imagen izquierda, segundo imagen derecha
- CA-4: Muestra métricas del proyecto (formato: label + value)
- CA-5: El enlace "VER CASO DE ESTUDIO" tiene icono y hover effect
- CA-6: Las animaciones usan `whileInView` con Framer Motion
- CA-7: Responsive: single column en mobile

**Specs técnicas:**
- CSS Grid con `grid-template-columns: 7fr 5fr`
- Orden alternado con clase `--reverse`

**Precondiciones:**
- SPEC-03 (datos de proyectos)

**Dependencias de otras specs:**
- SPEC-03, SPEC-12 (Iconos)

---

### SPEC-07 · Sección Stack Técnico

**Estado:** IMPLEMENTADO
**Principio constitución:** P3 (Liderazgo tecnológico), P7 (Discurso de autoridad)

**Descripción funcional:**
Sección "Panel de Control Técnico" que muestra las tecnologías del portafolio en un grid de 4 columnas. Cada tecnología muestra icono, nombre, barra de progreso (nivel de expertise) y valor numérico. Incluye un CTA al final para contacto.

**Criterios de aceptación:**
- CA-1: Se renderiza después de la sección Producción
- CA-2: Muestra título "Panel de Control Técnico" y label "[ 03 / STACK_PRINCIPAL ]"
- CA-3: Grid de 2 columnas en mobile, 4 columnas en desktop
- CA-4: Cada card muestra: icono, nombre, barra de progreso (según `tech.level`), nivel numérico
- CA-5: Las barras de progreso se animan al hacer scroll
- CA-6: El CTA inferior tiene título, descripción y botón "INICIAR_CONTACTO.SH"
- CA-7: Animaciones con `whileInView` escalonadas por índice

**Precondiciones:**
- SPEC-03 (datos del stack)

**Dependencias de otras specs:**
- SPEC-03, SPEC-12 (Iconos)

---

### SPEC-08 · Página 404 (No Encontrado)

**Estado:** IMPLEMENTADO
**Principio constitución:** P6 (Identidad visual coherente)

**Descripción funcional:**
Página de error 404 con diseño consistente al portafolio: icono, título "404", subtítulo, descripción y botón "Volver al Inicio".

**Criterios de aceptación:**
- CA-1: Se renderiza para cualquier ruta no definida en `<Routes>`
- CA-2: Muestra icono `error_outline`, número 404, subtítulo y descripción
- CA-3: El botón "Volver al Inicio" navega a `/` usando `<Link>`
- CA-4: Incluye Header, Footer y BackgroundGrid
- CA-5: Animación de entrada con Framer Motion

**Precondiciones:**
- SPEC-01 (ruteo con ruta catch-all `*`)

**Dependencias de otras specs:**
- SPEC-01, SPEC-12 (Iconos)

---

### SPEC-09 · Página de Detalle de Proyecto

**Estado:** PARCIAL
**Principio constitución:** P4 (Narrativa de impacto)

**Descripción funcional:**
Página de detalle para un proyecto específico, accesible vía `/proyecto/:slug`. Muestra información básica del proyecto (título, descripción, imagen) con validación de existencia. Actualmente no implementa la estructura completa Reto/Solución/Impacto.

**Criterios de aceptación:**
- CA-1: La ruta `/proyecto/:slug` resuelve usando `getProjectById(slug)`
- CA-2: Si el proyecto existe, muestra título, descripción e imagen
- CA-3: Si el proyecto no existe, muestra mensaje "Proyecto no encontrado"
- CA-4: Incluye Header, Footer y BackgroundGrid
- CA-5: Animación de entrada con Framer Motion
- CA-6: [PENDIENTE] Implementar estructura Reto/Solución/Impacto según P4
- CA-7: [PENDIENTE] Mostrar métricas, tecnologías, timeline y team
- CA-8: [PENDIENTE] Enlace funcional a caso de estudio
- CA-9: [PENDIENTE] Hero metadata (LOC, REF, STATUS) consistente con SPEC-04

**Specs técnicas:**
- Routing dinámico con `useParams`
- Layout de dos columnas para contenido enriquecido

**Precondiciones:**
- SPEC-01, SPEC-03

**Dependencias de otras specs:**
- Ninguna (es hoja en el árbol de routing)

---

### SPEC-10 · Sistema de Iconos

**Estado:** IMPLEMENTADO
**Principio constitución:** P6 (Identidad visual coherente)

**Descripción funcional:**
Componente `Icon` que wrappea Material Symbols de Google con soporte para variantes (outlined, rounded, sharp), tamaños (xs a 2xl), fill, weight, grade y opticalSize. Estilos definidos en `Icon.scss`.

**Criterios de aceptación:**
- CA-1: Renderiza un `<span>` con clase `material-symbols-outlined`
- CA-2: Acepta props: name (requerido), className, size, variant, fill, weight, grade, opticalSize
- CA-3: Los tamaños mapean a clases: xs=0.75rem, sm=0.875rem, md=1rem, lg=1.25rem, xl=1.5rem, 2xl=2rem
- CA-4: `fontVariationSettings` se aplica como style inline
- CA-5: `aria-hidden="true"` por defecto
- CA-6: PropTypes validan los valores permitidos

**Precondiciones:**
- Google Fonts Material Symbols cargadas en `index.html`

**Dependencias de otras specs:**
- SPEC-01 (layout global)

---

### SPEC-11 · Background Grid Decorativo

**Estado:** IMPLEMENTADO
**Principio constitución:** P6 (Identidad visual coherente)

**Descripción funcional:**
Componente `BackgroundGrid` que renderiza un patrón de puntos decorativo fijo como fondo de la aplicación. Usa un radial-gradient con puntos pequeños del color primario. Es puramente decorativo (`aria-hidden="true"`).

**Criterios de aceptación:**
- CA-1: Se renderiza como `div` fijo (fixed) ocupando toda la pantalla
- CA-2: `pointer-events: none` para no interferir con interacción
- CA-3: `aria-hidden="true"` para accesibilidad
- CA-4: Opacidad 0.5 para no competir con contenido
- CA-5: Patrón de puntos de 40px de separación

**Precondiciones:**
- SPEC-01 (layout global)

**Dependencias de otras specs:**
- Ninguna

---

### SPEC-12 · Sistema de Estilos SCSS

**Estado:** PARCIAL
**Principio constitución:** P6 (Identidad visual coherente)

**Descripción funcional:**
Sistema de estilos basado en SCSS con variables de diseño, mixins reutilizables y estructura modular. Actualmente implementados: `_variables.scss` (colores, tipografía, espaciado, breakpoints, radios, transiciones, z-index), `_mixins.scss` (responsive, theme, layout, typography, efectos, botones, utilidades), y `_base.scss` (reset, body, imágenes, links). Faltan partials de vendors, layout, componentes, páginas, themes y utilities.

**Criterios de aceptación:**
- CA-1: `_variables.scss` define todas las variables CSS del sistema de diseño
- CA-2: `_mixins.scss` provee mixins para responsive, dark-mode, flex, grid, container, botones
- CA-3: `_base.scss` implementa reset básico y estilos del body
- CA-4: [PENDIENTE] Implementar `vendors/_normalize.scss` con normalización cross-browser
- CA-5: [PENDIENTE] Implementar `layout/_grid.scss` con sistema de rejilla
- CA-6: [PENDIENTE] Implementar `layout/_container.scss` con contenedores responsivos
- CA-7: [PENDIENTE] Implementar `components/_buttons.scss` con estilos de botones globales
- CA-8: [PENDIENTE] Implementar `components/_cards.scss` con estilos de tarjetas globales
- CA-9: [PENDIENTE] Implementar `components/_animations.scss` con keyframes reutilizables
- CA-10: [PENDIENTE] Implementar `themes/_dark.scss` y `_light.scss` con variables de tema
- CA-11: [PENDIENTE] Implementar `utilities/` con clases helper

**Specs técnicas:**
- Preprocesador: Sass (Dart Sass vía Vite)
- Variables CSS para theming en tiempo real
- Mixins con `@content` para responsive queries

**Precondiciones:**
- Vite configurado con `sass` y `additionalData` para variables y mixins

**Dependencias de otras specs:**
- SPEC-02 (sistema de temas consume variables)

---

### SPEC-13 · Infraestructura Speckit

**Estado:** IMPLEMENTADO
**Principio constitución:** P3 (Liderazgo tecnológico)

**Descripción funcional:**
Infraestructura completa de Speckit para desarrollo gobernado por especificaciones: `.specify/` con memoria, templates, extensiones git, workflows, agentes de GitHub y constitución. Permite el flujo SDD (spec → plan → tasks → implement → verify).

**Criterios de aceptación:**
- CA-1: `.specify/memory/constitution.md` contiene la constitución real del portafolio
- CA-2: `.specify/specs.md` existe como source of truth (este archivo)
- CA-3: Los templates de spec, plan y tasks existen en `.specify/templates/`
- CA-4: Los agentes de GitHub están en `.github/agents/`
- CA-5: Los prompts de Speckit están en `.github/prompts/`
- CA-6: Las extensiones git están configuradas en `.specify/extensions/git/`
- CA-7: `.vscode/settings.json` tiene configuraciones de Speckit

**Precondiciones:**
- Repositorio git inicializado

**Dependencias de otras specs:**
- Ninguna (es infraestructura de desarrollo)

---

### SPEC-14 · Configuración de Build y Dependencias

**Estado:** IMPLEMENTADO
**Principio constitución:** P3 (Liderazgo tecnológico)

**Descripción funcional:**
Configuración de Vite con plugin React, aliases de importación, preprocesamiento SCSS con variables globales y code splitting manual para vendor, animations y router.

**Criterios de aceptación:**
- CA-1: `vite.config.js` tiene plugin `@vitejs/plugin-react`
- CA-2: Aliases: `@`, `@components`, `@styles`, `@assets`, `@data`, `@hooks`, `@utils`
- CA-3: SCSS `additionalData` inyecta `_variables.scss` y `_mixins.scss` automáticamente
- CA-4: Code splitting: chunks vendor (react, react-dom), animations (framer-motion), router (react-router-dom)
- CA-5: `npm run build` produce build sin errores
- CA-6: `npm run dev` inicia servidor de desarrollo

**Precondiciones:**
- Node.js y npm instalados

**Dependencias de otras specs:**
- Ninguna (es infraestructura)
