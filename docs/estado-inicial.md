# Estado Inicial del Proyecto — Fase 0

**Fecha:** 25/06/2026
**Rama base:** `main`
**Backup:** `backup/pre-speckit` (commit `be0019f`)

---

## 1. Resumen del Proyecto

Portafolio profesional de Mauro Miranda — "Ingeniería Web de Elite". Proyecto React + Vite con enfoque en rendimiento, arquitectura y experimentación digital. Actualmente en estado de transición: coexisten una versión estática (Tailwind CSS en `index.html`) y una versión React SPA (`src/`) incompleta.

---

## 2. Inventario de Archivos (excluyendo node_modules)

### Raíz del proyecto
| Archivo | Propósito |
|---------|-----------|
| `index.html` | Entry point Vite (contiene versión Tailwind CSS estática completa, NO carga React) |
| `package.json` | Dependencias y scripts (v1.0.4) |
| `vite.config.js` | Configuración Vite con aliases, SCSS y code splitting |
| `README.md` | Documentación del proyecto |
| `constitution.md` | Constitución Speckit del portafolio |

### `.specify/` — Infraestructura Speckit
| Ruta | Propósito |
|------|-----------|
| `memory/constitution.md` | Copia oficial de la constitución |
| `extensions.yml` | Registro de extensiones |
| `extensions/git/` | Extensión git (scripts, comandos, config) |
| `templates/` | Plantillas para spec, plan, tasks, checklist |
| `workflows/` | Workflow Speckit |
| `integrations/` | Manifiestos Copilot y Speckit |
| `scripts/powershell/` | Scripts de automatización |
| `presets/.cache/` | Catálogos de presets |

### `.github/` — GitHub Agents & Prompts
Agentes: analyze, checklist, clarify, constitution, implement, plan, specify, tasks, etc.

### `src/` — Código fuente React
| Ruta | Propósito | Estado |
|------|-----------|--------|
| `main.jsx` | Entry point React (BrowserRouter, HelmetProvider) | ✓ Funcional |
| `App.jsx` | Routing principal (/, /proyecto/:slug, *) | ✓ Funcional |
| `hooks/useTheme.jsx` | Tema oscuro/claro con persistencia localStorage | ✓ Funcional |
| `data/projects.js` | Datos de proyectos (4 laboratorio + 2 producción) + helpers | ✓ Funcional |
| `data/copy-content.js` | Textos del portafolio (hero, about, servicios, CTA) | ✓ Funcional |
| `components/pages/HomePage.jsx` | Página principal | ⚠️ Importa secciones inexistentes |
| `components/pages/ProjectPage.jsx` | Detalle de proyecto | ✓ Funcional (básico) |
| `components/pages/NotFoundPage.jsx` | Página 404 | ✓ Funcional |
| `components/layout/Header.jsx` | Header con logo, nav, theme toggle, CTA | ✓ Funcional |
| `components/layout/Footer.jsx` | Footer con sitemap, redes, estado sistema | ✓ Funcional |
| `components/navigation/Navigation.jsx` | Navegación por anclas smooth-scroll | ✓ Funcional |
| `components/sections/HeroSection.jsx` | Hero principal con animaciones | ✓ Funcional |
| `components/common/Icon.jsx` | Wrapper Material Symbols | ✓ Funcional |
| `components/common/BackgroundGrid.jsx` | Grid decorativo de fondo | ✓ Funcional |
| `components/common/ScrollToTop.jsx` | Scroll-to-top al cambiar ruta | ✓ Funcional |

### `src/styles/` — Estilos SCSS
| Archivo | Estado |
|---------|--------|
| `main.scss` | Existe — importa 19 partials, solo 3 existen |
| `abstracts/_variables.scss` | ✓ Completo (colores, tipografía, espaciado, breakpoints) |
| `abstracts/_mixins.scss` | ✓ Completo (responsive, theme, layout, typography, efectos) |
| `abstracts/_functions.scss` | ❌ No existe (importado en main.scss) |
| `vendors/normalize` | ❌ No existe |
| `base/reset`, `base/typography`, `base/base` | ❌ No existen |
| `layout/grid`, `layout/container` | ❌ No existen |
| `components/buttons`, `components/cards`, `components/icons`, `components/animations` | ❌ No existen |
| `pages/home` | ❌ No existe |
| `themes/dark`, `themes/light` | ❌ No existen |
| `utilities/spacing`, `utilities/text`, `utilities/display` | ❌ No existen |

---

## 3. Funcionalidades Identificadas

### A. Funcionalidades bien definidas (implementadas y funcionales)

| ID | Funcionalidad | Archivos | Descripción |
|----|---------------|----------|-------------|
| F-01 | Routing SPA | `App.jsx`, `main.jsx` | 3 rutas: Home, Proyecto por slug, 404 |
| F-02 | Tema oscuro/claro | `useTheme.jsx` | Persistencia localStorage, detección sistema, toggle manual |
| F-03 | Datos de proyectos | `projects.js` | 6 proyectos con helper functions (getById, getByCategory, getFeatured) |
| F-04 | Copy del portafolio | `copy-content.js` | Textos hero, about, servicios, CTA con narrativa de rendimiento |
| F-05 | Hero section | `HeroSection.jsx` | Título, subtítulo, CTAs con animaciones Framer Motion |
| F-06 | Header | `Header.jsx` | Logo, navegación, status indicator, theme toggle, CTA button |
| F-07 | Footer | `Footer.jsx` | Brand info, sitemap, redes sociales, sistema status |
| F-08 | Navegación por anclas | `Navigation.jsx` | Smooth scroll a secciones (about, lab, works, stack) |
| F-09 | Página 404 | `NotFoundPage.jsx` | Error page con link de retorno |
| F-10 | Página de proyecto | `ProjectPage.jsx` | Detalle básico de proyecto con validación de existencia |
| F-11 | Iconos Material Symbols | `Icon.jsx` | Wrapper con variantes, tamaños, pesos |
| F-12 | Background grid | `BackgroundGrid.jsx` | Patrón decorativo sutil |
| F-13 | Scroll to top | `ScrollToTop.jsx` | Scroll automático en cambios de ruta |
| F-14 | Aliases Vite | `vite.config.js` | @, @components, @styles, @assets, @data, @hooks, @utils |
| F-15 | Code splitting | `vite.config.js` | Chunks vendor, animations, router |
| F-16 | Infraestructura Speckit | `.specify/`, `.github/agents/` | Constitución, agentes, workflows, templates |

### B. Funcionalidades parcialmente definidas (implementación incompleta)

| ID | Funcionalidad | Evidencia | Gap |
|----|---------------|-----------|-----|
| F-17 | Sección Laboratorio | `HomePage.jsx:27` importa `LaboratorySection` | Componente NO existe en `sections/` |
| F-18 | Sección Producción | `HomePage.jsx:28` importa `ProductionSection` | Componente NO existe en `sections/` |
| F-19 | Sección Stack Técnico | `HomePage.jsx:29` importa `TechStackSection` | Componente NO existe en `sections/` |
| F-20 | Sistema de estilos SCSS | `main.scss` importa 19 partials | Solo 3 partials existen; **16 faltan** |
| F-21 | Estilos de Icon | `Icon.jsx:6` importa `./Icon.scss` | Archivo NO existe |

### C. Funcionalidades sin definir (comportamiento no especificado)

| ID | Funcionalidad | Evidencia |
|----|---------------|-----------|
| F-22 | Versión duplicada del sitio | `index.html` contiene sitio Tailwind completo; React en `src/` es otra versión |
| F-23 | Página de proyecto detallada | `ProjectPage.jsx` es básica — sin métricas, tecnologías, timeline, caso de estudio |

---

## 4. Mapa de Dependencias del Proyecto

```
package.json
├── react@^18.2.0
├── react-dom@^18.2.0
├── react-router-dom@^6.20.1
├── framer-motion@^10.16.16
├── react-helmet-async@^2.0.4
├── react-intersection-observer@^9.5.3
├── sass@^1.69.5 (dev)
├── vite@^7.3.1 (dev)
├── @vitejs/plugin-react@^4.2.1 (dev)
├── eslint@^8.55.0 (dev)
├── eslint-plugin-react@^7.33.2 (dev)
├── eslint-plugin-react-hooks@^4.6.0 (dev)
├── eslint-plugin-react-refresh@^0.4.5 (dev)
├── vite-bundle-analyzer@^0.7.0 (dev)
└── @types/react + @types/react-dom (dev)
```

---

## 5. Estructura de Archivos (árbol)

```
/
├── .specify/                  # Infraestructura Speckit
│   ├── memory/constitution.md
│   ├── extensions/
│   ├── integrations/
│   ├── templates/
│   ├── workflows/
│   └── scripts/
├── .github/
│   ├── agents/                # Agentes Speckit (14 archivos)
│   ├── prompts/               # Prompts Speckit (14 archivos)
│   └── copilot-instructions.md
├── .vscode/settings.json
├── docs/                      # [NUEVO] Documentación del proceso SDD
│   └── estado-inicial.md
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── common/ (3 componentes)
│   │   ├── layout/ (2 componentes)
│   │   ├── navigation/ (1 componente)
│   │   ├── pages/ (3 componentes: Home, Project, NotFound)
│   │   └── sections/ (1 componente: HeroSection)
│   ├── data/ (2 archivos: projects, copy-content)
│   ├── hooks/ (1 hook: useTheme)
│   └── styles/
│       ├── main.scss
│       └── abstracts/ (2 partials)
├── constitution.md
├── index.html                 # [CONFUSIÓN] Versión Tailwind estática
├── package.json
├── vite.config.js
├── README.md
└── node_modules/
```

---

## 6. Análisis de Gaps (Brechas)

### Gap 1: Versión duplicada del sitio
`index.html` contiene un sitio completo con Tailwind CSS (vía CDN) con Hero, Laboratorio, Producción y Stack. Paralelamente, `src/` contiene una versión React SPA que intenta hacer lo mismo pero está incompleta. **El entry point de Vite apunta a index.html, que NO carga el bundle React**. Esto sugiere que el proyecto migró de estático a React pero la migración está a medio hacer.

### Gap 2: Componentes faltantes (HomePage)
`HomePage.jsx` importa 3 secciones que no existen en el sistema de archivos. Sin estos componentes, la página principal solo renderiza Header, HeroSection, BackgroundGrid y Footer.

### Gap 3: Sistema SCSS incompleto
De 19 partials importados en `main.scss`, solo 3 existen físicamente. Sin los partials faltantes (base, layout, components, pages, themes, utilities), el build SCSS fallará si algún componente intenta usar mixins o variables que dependen de esos partials.

### Gap 4: Estilos de Icon faltantes
`Icon.jsx` importa `./Icon.scss` que no existe. Esto causará error en tiempo de compilación.

---

## 7. Análisis de Compatibilidad con Speckit

| Aspecto | Compatibilidad | Observaciones |
|---------|---------------|---------------|
| Estructura de proyecto | ⚠️ Parcial | `.specify/` ya instalado, pero sin specs formales |
| Separación de concerns | ✓ Alta | Componentes bien organizados por carpeta (pages, sections, layout, common) |
| Datos centralizados | ✓ Alta | `projects.js` y `copy-content.js` centralizan datos |
| Estado global | ⚠️ Parcial | Solo tema global; no hay store para otras necesidades |
| Testing | ❌ Ausente | No hay configuración de testing (Jest, Vitest, etc.) |
| Tipado | ❌ Ausente | No se usa TypeScript ni PropTypes en la mayoría de componentes |
| Documentación técnica | ❌ Ausente | Sin docs de arquitectura, decisiones técnicas o estándares |
| CI/CD | ❌ Ausente | Sin pipelines configurados |
| Linting | ✓ Configurado | ESLint con plugins de React |

---

## 8. Riesgos Identificados

1. **R1 — Build fallido**: Sin los partials SCSS faltantes y el Icon.scss, `npm run build` fallará si se activan las importaciones.
2. **R2 — HomePage incompleta**: Renderiza solo Header + Hero + Footer, dando una experiencia de usuario pobre.
3. **R3 — Confusión estático/React**: Puede llevar a trabajo duplicado o decisiones inconsistentes sobre qué versión mantener.
4. **R4 — Sin testing**: Cualquier refactor o nueva funcionalidad no tiene protección contra regresiones.

---

## 9. Recomendaciones para Fase 1

1. Decidir si se mantiene la versión React (`src/`) como única fuente de verdad, eliminando el HTML estático de `index.html` (o refactorizando su contenido a componentes React).
2. Completar los partials SCSS faltantes (al menos los críticos para el build: base/reset, base/typography, base/base).
3. Crear los 3 componentes de sección faltantes (LaboratorySection, ProductionSection, TechStackSection).
4. Crear `Icon.scss` para evitar errores de compilación.

---

## PAUSA — FASE 0 COMPLETADA

### Trabajo realizado:
- Inventario completo de archivos (excluyendo node_modules)
- Identificación de 23 funcionalidades (16 bien definidas, 5 parciales, 2 sin definir)
- Mapa de dependencias y árbol de directorios
- Análisis de 4 gaps críticos
- Análisis de compatibilidad con Speckit
- 4 riesgos documentados
- 4 recomendaciones para Fase 1

### Archivos modificados/creados:
- `docs/estado-inicial.md` — Inventario completo del proyecto

### Trazabilidad de esta fase:
- Sin referencias a specs (aún no existen)

### Estado del source of truth (.specify/specs.md):
- AÚN NO EXISTE (se creará en Fase 2)

### Riesgos / Decisiones pendientes:
- **R3 (versión duplicada):** Decidir si eliminar o refactorizar el HTML estático
- **R1 (build fallido):** Los partials SCSS faltantes y Icon.scss bloquearán el build

### Siguiente fase (Fase 1):
Actualizar constitución Speckit y documentar mapeo constitución → criterios de specs

**¿Apruebas continuar con la Fase 1?**
Responde: SÍ / NO / AJUSTAR / ENMIENDA
