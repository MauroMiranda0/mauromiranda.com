# Tareas Accionables

**Rama base:** `feature/generate-tasks`
**Fecha:** 25/06/2026
**Total tareas:** 4
**Specs cubiertas:** SPEC-09, SPEC-12

---

#### TASK-01 · Completar Página de Detalle de Proyecto

**spec_ref:** SPEC-09
**bloque_ref:** BLOQUE-1
**Prioridad:** alta
**Estimación:** 2-3 horas
**Dependencias:** ninguna

**Descripción:**
Enriquecer `ProjectPage.jsx` para mostrar toda la información disponible del proyecto. Actualmente solo renderiza título, descripción e imagen. Debe mostrar: métricas con diseño visual destacado, tecnologías como tags, timeline, tamaño del equipo, cliente, enlace funcional a caso de estudio y metadata hero (LOC, REF, STATUS) consistente con SPEC-04. Implementar la estructura narrativa Reto/Solución/Impacto para proyectos de producción.

**Criterios de aceptación (heredados de SPEC-09 + contexto técnico):**
- CA-1: Muestra `project.title` como heading principal
- CA-2: Muestra `project.description` completa
- CA-3: Muestra `project.image` con overlay y efecto hover
- CA-4: Muestra `project.metrics` como lista estilizada con dots decorativos
- CA-5: Muestra `project.technologies` como tags visuales
- CA-6: Muestra `project.timeline` y `project.team` cuando existen
- CA-7: Muestra `project.client` cuando existe
- CA-8: El enlace `project.caseStudyUrl` es funcional y abre en nueva pestaña
- CA-9: Hero metadata (LOC, REF, STATUS) simulada al estilo SPEC-04
- CA-10: Si `project` no tiene ciertos campos, no se renderizan (fallback gracefull)
- CA-11: Animación de entrada con Framer Motion
- CA-12: Incluye Header, Footer y BackgroundGrid
- CA-13: Estilos responsivos en `ProjectPage.scss`

**Comando de verificación:**
```bash
npm run build
# Luego navegar manualmente a /proyecto/quantum-ledger-v2
# y /proyecto/neural-synth-engine en el servidor dev
```

---

#### TASK-02 · Implementar SCSS Themes Dark/Light

**spec_ref:** SPEC-12
**bloque_ref:** BLOQUE-2
**Prioridad:** media
**Estimación:** 30 min
**Dependencias:** ninguna

**Descripción:**
Implementar los partials de temas con las variables de color correspondientes a cada modo. Mover las reglas `[data-theme="dark"]` actualmente en `_variables.scss` a `themes/_dark.scss`. Crear `themes/_light.scss` con valores explícitos.

**Criterios de aceptación (heredados de SPEC-12 + contexto técnico):**
- CA-1: `themes/_dark.scss` define `[data-theme="dark"]` con `--text-primary: #f1f5f9`, `--text-secondary: #cbd5e1`, `--text-tertiary: #94a3b8`
- CA-2: `themes/_light.scss` define los valores por defecto del tema claro
- CA-3: Las reglas migradas desde `_variables.scss` se eliminan de allí y se importan desde `themes/`
- CA-4: El build compila sin errores ni warnings de variables no definidas
- CA-5: `npm run dev` muestra el tema correctamente en ambos modos

**Comando de verificación:**
```bash
npm run build
```

---

#### TASK-03 · Implementar SCSS Layout y Componentes Base

**spec_ref:** SPEC-12
**bloque_ref:** BLOQUE-3
**Prioridad:** media
**Estimación:** 1-2 horas
**Dependencias:** TASK-02 (los componentes pueden usar variables de tema)

**Descripción:**
Implementar partials de layout (grid, container) y componentes base (buttons, cards, animations, icons). Usar mixins de `_mixins.scss` y variables de `_variables.scss` para consistencia.

**Criterios de aceptación (heredados de SPEC-12 + contexto técnico):**
- CA-1: `layout/_grid.scss` define clases `.grid`, `.grid-cols-N` (1-12), `.gap-N` usando `$spacing`
- CA-2: `layout/_container.scss` define `.container` (max-width: 1400px + padding responsivo usando mixin `container`) y `.container-fluid`
- CA-3: `components/_buttons.scss` define `.btn`, `.btn--primary`, `.btn--secondary` usando mixin `button-primary` y `button-secondary`
- CA-4: `components/_cards.scss` define `.card` con border-radius, shadow, hover-lift
- CA-5: `components/_animations.scss` define keyframes `fadeIn`, `slideUp`, `scaleIn` y clases helper
- CA-6: `components/_icons.scss` define estilos base para iconos inline con texto
- CA-7: El build compila sin errores

**Comando de verificación:**
```bash
npm run build
```

---

#### TASK-04 · Implementar SCSS Vendors, Base y Utilities

**spec_ref:** SPEC-12
**bloque_ref:** BLOQUE-4
**Prioridad:** baja
**Estimación:** 1 hora
**Dependencias:** TASK-03 (por orden de importación en main.scss)

**Descripción:**
Completar partials de vendors, base y utilities para cerrar el sistema SCSS. Implementar normalize cross-browser, reset específico del proyecto, estilos tipográficos base y clases utilitarias de espaciado, texto y display.

**Criterios de aceptación (heredados de SPEC-12 + contexto técnico):**
- CA-1: `vendors/_normalize.scss` normaliza box-sizing, margins, form elements, images
- CA-2: `base/_reset.scss` extiende normalize con reset específico (links, listas, botones)
- CA-3: `base/_typography.scss` define estilos para h1-h6, p, small, strong, em, blockquote
- CA-4: `utilities/_spacing.scss` genera clases `.m-{key}`, `.p-{key}`, `.mx-{key}`, etc. desde `$spacing` map
- CA-5: `utilities/_text.scss` define `.text-left`, `.text-center`, `.text-right`, `.text-sm`, `.text-lg`, `.text-muted`
- CA-6: `utilities/_display.scss` define `.d-none`, `.d-block`, `.d-flex`, `.d-grid`, `.flex-center`, `.flex-between`
- CA-7: El build compila sin errores

**Comando de verificación:**
```bash
npm run build
```
