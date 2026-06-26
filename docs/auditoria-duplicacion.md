# Auditoría de Duplicación: index.html vs React SPA

## Diagnóstico

El proyecto tiene **dos versiones completas** del mismo portafolio:

### Versión A: Static Tailwind (`index.html`)
- `index.html` contiene un sitio completo con Tailwind CSS vía CDN
- **No carga** el bundle React (no tiene `<div id="root">` ni `<script type="module">`)
- Es funcional por sí mismo como página estática
- Usa Tailwind classes + inline styles

### Versión B: React SPA (`src/`)
- Aplicación React con Vite, Framer Motion, React Router
- Contenido rico en `copy-content.js` (narrativa, casos de estudio)
- Componentes con SCSS module-style
- **No se sirve** porque `index.html` no carga el bundle React

## Comparativa por Sección

| Sección | Static HTML | React SPA | Estado |
|---------|-------------|-----------|--------|
| Header/Nav | Tailwind + inline | Header.jsx + Navigation.jsx | ✅ Ambos funcionales |
| Hero | "Transformo sitios lentos..." | "MAURO MIRANDA: ARQUITECTURA SOFTWARE..." | ⚠️ Contenido diferente |
| Laboratorio | 4 proyectos hardcodeados | `projects.js` + LaboratorySection.jsx (nuevo) | ✅ React ahora completo |
| Producción | 2 proyectos hardcodeados | `projects.js` + ProductionSection.jsx (nuevo) | ✅ React ahora completo |
| Stack Técnico | 4 techs hardcodeados | `projects.js` + TechStackSection.jsx (nuevo) | ✅ React ahora completo |
| Footer | Tailwind + inline | Footer.jsx | ✅ Ambos funcionales |
| Fuentes | Google Fonts CDN | Google Fonts en `index.html` | ✅ Mantener |

## Inline CSS en index.html que migrar a SCSS

| Clase/Regla | Destino SCSS |
|-------------|-------------|
| `.scanline` | `components/_animations.scss` |
| `.grid-pattern` | `common/BackgroundGrid.scss` |
| `body` (min-height) | `base/_base.scss` |
| `img` (max-width, height) | `base/_base.scss` |
| `.transition-optimized` | `components/_animations.scss` |

## Propuesta de Unificación

### Objetivo: Una sola arquitectura (React SPA)

**Paso 1** — Convertir `index.html` en entry point Vite:
- Eliminar Tailwind CDN y scripts
- Eliminar todo el contenido HTML de body
- Agregar `<div id="root"></div>` 
- Agregar `<script type="module" src="/src/main.jsx"></script>`

**Paso 2** — Migrar inline CSS a SCSS:
- Mover `.grid-pattern` a `BackgroundGrid.scss`
- Mover reglas `body` e `img` a `base/_base.scss`
- Mover `.scanline` a `components/_animations.scss`

**Paso 3** — Mantener fuentes y metadatos en `index.html`

**Paso 4** — Verificar que `npm run dev` sirva la app React correctamente
