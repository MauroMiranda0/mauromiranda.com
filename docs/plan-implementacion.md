# Plan de Implementación

**Rama:** `feature/generate-plan`
**Fecha:** 25/06/2026
**Origen:** Análisis de gaps entre `.specify/specs.md` y código actual

---

## Resumen

| Specs IMPLEMENTADO | Specs PARCIAL | Bloques en plan |
|-------------------|---------------|-----------------|
| 12 | 2 (SPEC-09, SPEC-12) | 4 |

---

## Bloques del Plan

### BLOQUE-1 · Completar Página de Detalle de Proyecto

**Specs cubiertas:** SPEC-09
**Tipo:** modificación
**Riesgo:** bajo — solo afecta `ProjectPage.jsx`, datos ya existen en `projects.js`
**Prioridad:** alta (es la única funcionalidad PARCIAL de usuario visible)
**Estimación:** 2-3 horas

**Descripción:**
Enriquecer `ProjectPage.jsx` para implementar los criterios pendientes de SPEC-09:
- Estructura Reto/Solución/Impacto con diseño de dos columnas
- Visualización de métricas del proyecto (chart o lista estilizada)
- Visualización de tecnologías como tags
- Timeline y team size
- Enlace funcional a caso de estudio
- Hero metadata consistente con SPEC-04 (LOC, REF, STATUS)
- Fallback elegante si faltan datos

**Dependencias:** Ninguna (datos ya existen en `projects.js`)

---

### BLOQUE-2 · Implementar SCSS: Themes (Dark/Light)

**Specs cubiertas:** SPEC-12
**Tipo:** nuevo
**Riesgo:** bajo — archivos placeholder ya existen, solo implementar contenido
**Prioridad:** media
**Estimación:** 30 min

**Descripción:**
Implementar el contenido de los partials de tema:
- `themes/_dark.scss`: Sobrescritura de variables CSS para modo oscuro (ya existen en `_variables.scss` como `[data-theme="dark"]`, migrar aquí)
- `themes/_light.scss`: Variables explícitas para modo claro

---

### BLOQUE-3 · Implementar SCSS: Layout y Componentes Base

**Specs cubiertas:** SPEC-12
**Tipo:** nuevo
**Riesgo:** bajo — no afecta componentes existentes hasta que se usen
**Prioridad:** media
**Estimación:** 1-2 horas

**Descripción:**
Implementar partials de layout y componentes base:
- `layout/_grid.scss`: Sistema de grid responsivo (clases `.grid`, `.grid-cols-N`, `.gap-N`)
- `layout/_container.scss`: Contenedores (`.container`, `.container-fluid`) con max-width y padding responsivo
- `components/_buttons.scss`: Clases `.btn`, `.btn--primary`, `.btn--secondary` con estilos base
- `components/_cards.scss`: Clases `.card`, `.card--featured`, `.card--hover`
- `components/_animations.scss`: Keyframes reutilizables (`fadeIn`, `slideUp`, `scaleIn`)
- `components/_icons.scss`: Estilos globales de iconos (alineación, tamaño contextual)

---

### BLOQUE-4 · Implementar SCSS: Vendors, Base y Utilities

**Specs cubiertas:** SPEC-12
**Tipo:** nuevo
**Riesgo:** bajo — no afecta componentes existentes
**Prioridad:** baja
**Estimación:** 1 hora

**Descripción:**
Completar partials restantes:
- `vendors/_normalize.scss`: Normalización cross-browser (box-sizing, margin reset, form elements)
- `base/_reset.scss`: Reset específico del proyecto (extiende normalize)
- `base/_typography.scss`: Estilos de headings, párrafos, listas, links, font-face si aplica
- `utilities/_spacing.scss`: Clases `.m-N`, `.p-N`, `.gap-N` basadas en $spacing map
- `utilities/_text.scss`: Clases `.text-left`, `.text-center`, `.text-sm`, `.text-lg`, etc.
- `utilities/_display.scss`: Clases `.flex`, `.grid`, `.d-none`, `.d-block`, etc.

---

## Orden de Implementación Sugerido

```
Fase 5a → BLOQUE-1 (ProjectPage) — impacto visible inmediato
Fase 5b → BLOQUE-2 (Themes) — necesario para consistencia visual
Fase 5c → BLOQUE-3 (Layout + Components) — estandarización
Fase 5d → BLOQUE-4 (Vendors + Base + Utilities) — completitud
```

## Análisis de Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Datos faltantes en projects.js | Baja | Medio | Validación en ProjectPage (fallback gracefull ya existe) |
| Breakage visual por cambios SCSS | Baja | Medio | Probar build después de cada bloque |
| Dependencias entre bloques SCSS | Baja | Bajo | Temas (B2) independientes de Layout (B3) |
