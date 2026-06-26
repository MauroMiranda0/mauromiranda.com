# Fase 1: Actualización de Constitución

**Rama:** `feature/update-constitution`
**Fecha:** 25/06/2026

---

## 1. Estado anterior

El archivo `.specify/memory/constitution.md` contenía una plantilla genérica con placeholders (`[PRINCIPLE_1_NAME]`, `[PROJECT_NAME]`, etc.) sin ningún principio definido.

**Backup:** `.specify/memory/constitution.md.template.backup`

## 2. Constitución instalada

`constitution.md` (raíz) → copiada a `.specify/memory/constitution.md`

Constitución: **"Documento Constitución de Portafolio"** — 59 líneas, 7 principios + resultado esperado.

---

## 3. Principios y su mapeo a criterios de specs

### PRINCIPIO 1: Declaración de propósito

> El portafolio es un manifiesto de innovación digital, no una galería.

**Criterios para specs (Fase 2):**
- Toda funcionalidad debe demostrar **cómo convierte un reto en oportunidad**
- Las specs de proyectos deben incluir sección de "impacto" o "valor generado"
- No se aceptan specs que sean meros listados de características técnicas

---

### PRINCIPIO 2: Visión transformadora

> Cada proyecto transforma ideas en experiencias digitales de impacto real. Estrategia + innovación + confianza.

**Criterios para specs (Fase 2):**
- Las specs de landing/sections deben priorizar **narrativa sobre catálogo**
- El layout debe comunicar "ecosistema digital", no lista de proyectos
- La arquitectura debe escalar para múltiples formatos de caso de estudio

---

### PRINCIPIO 3: Liderazgo tecnológico

> Rol de arquitecto de soluciones digitales, no solo desarrollador.

**Criterios para specs (Fase 2):**
- Las specs técnicas deben reflejar **decisiones arquitectónicas**, no solo implementación
- Los componentes deben documentar su rol en la arquitectura global
- Las secciones deben posicionar al dueño como autoridad técnica

---

### PRINCIPIO 4: Narrativa de impacto

> Cada proyecto se estructura como: Reto → Solución → Impacto.

**Criterios para specs (Fase 2):**
- La spec de ProjectPage debe forzar la estructura **Reto / Solución / Impacto**
- Los datos de proyectos deben incluir métricas de impacto verificables
- Los CTA deben guiar hacia caso de estudio completo

---

### PRINCIPIO 5: Innovación aplicada

> IA, automatización y diseño avanzado son pilares filosóficos.

**Criterios para specs (Fase 2):**
- Las demostraciones de laboratorio deben usar tecnologías innovadoras (WebGL, TensorFlow.js, etc.)
- Los componentes que lo permitan deben incluir elementos interactivos/experimentales
- Las transiciones y animaciones deben ser fluidas (Framer Motion)

---

### PRINCIPIO 6: Identidad visual coherente

> Azul eléctrico, pantallas protagonistas, contraste claro/oscuro.

**Criterios para specs (Fase 2):**
- Todas las specs visuales deben referenciar el sistema de diseño (`_variables.scss`, tokens)
- El tema oscuro/claro debe ser consistente en todos los componentes
- Los colores, tipografía y espaciado deben usar las variables CSS definidas

---

### PRINCIPIO 7: Discurso de autoridad

> Tono consultivo, visionario y estratégico. Mostrar el "por qué" y el "qué cambió".

**Criterios para specs (Fase 2):**
- Los textos del portafolio deben seguir la narrativa de `copy-content.js`
- Cada sección debe responder: ¿qué problema resuelve? ¿qué cambia para el usuario?
- Las call-to-action deben ser consistentes con el tono de autoridad técnica

---

## 4. Resumen de cambios

| Aspecto | Anterior (template) | Nuevo (constitución real) |
|---------|--------------------|---------------------------|
| Propósito | Placeholder genérico | Manifiesto de innovación digital |
| Principios | 5 placeholders sin definir | 7 principios detallados |
| Aplicación | Sin criterios asociados | 25 criterios para specs (mapeados arriba) |
| Formato | Plantilla con marcadores | Documento narrativo completo |

---

## PAUSA — FASE 1 COMPLETADA

### Trabajo realizado:
- Verificada y respaldada la constitución existente (template en `.specify/memory/`)
- Copiada la constitución real `constitution.md` → `.specify/memory/constitution.md`
- Creado `docs/constitution-update.md` con mapeo explícito de 7 principios → 25 criterios para specs

### Archivos modificados/creados:
- `.specify/memory/constitution.md` — actualizado con constitución real
- `.specify/memory/constitution.md.template.backup` — backup del template original
- `docs/constitution-update.md` — mapeo constitución → criterios de specs

### Trazabilidad de esta fase:
- Sin specs aún (se crearán en Fase 2)

### Estado del source of truth (.specify/specs.md):
- AÚN NO EXISTE (se creará en Fase 2)

### Siguiente fase (Fase 2):
Generar especificaciones formales en `.specify/specs.md` para cada funcionalidad identificada en Fase 0, aplicando los 25 criterios derivados de la constitución.

**¿Apruebas la nueva constitución y su mapeo? ¿Continúo con Fase 2?**
