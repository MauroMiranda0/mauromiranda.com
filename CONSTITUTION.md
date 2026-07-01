# CONSTITUCIÓN DEL PORTAFOLIO

> **MAUROMIRANDA.COM** — Guía central de identidad, narrativa y arquitectura técnica.
> Versión: 1.0 | Idioma: Español

---

## ÍNDICE

1. [Preámbulo](#1-preámbulo)
2. [Identidad Visual](#2-identidad-visual)
3. [Narrativa Estratégica](#3-narrativa-estratégica)
4. [Lineamientos Técnicos](#4-lineamientos-técnicos)
5. [Filosofía de Innovación](#5-filosofía-de-innovación)
6. [Tono y Voz](#6-tono-y-voz)
7. [Glosario](#7-glosario)

---

## 1. PREÁMBULO

Este documento establece los principios fundacionales del portafolio profesional de **Mauro Miranda**. Funciona como la fuente de verdad única para todas las decisiones de diseño, desarrollo y contenido. Cualquier cambio en el portafolio debe alinearse con lo aquí estipulado.

**Propósito del portafolio:** Posicionar a Mauro Miranda como ingeniero web de elite, arquitecto de software y consultor estratégico, especializado en transformar visiones digitales en experiencias de alto rendimiento.

**Audiencia primaria:** Directores de tecnología (CTOs), fundadores de startups tecnológicas, directores de agencias, y líderes de producto que buscan expertise en arquitectura web avanzada.

**Audiencia secundaria:** Reclutadores técnicos, peers de la industria, y clientes potenciales de habla hispana.

---

## 2. IDENTIDAD VISUAL

### 2.1 Paleta de Color

#### Color Primario (Brand)

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `--primary` | `#0da6f2` | `13, 166, 242` | Acentos, botones primarios, bordes activos, enlaces, gradientes, indicadores de estado |

#### Fondos

| Token | Hex | RGB | Tema |
|-------|-----|-----|------|
| `--bg-light` | `#f5f7f8` | `245, 247, 248` | Claro (principal) |
| `--bg-dark` | `#0f172a` | `15, 23, 42` | Oscuro (principal) |

#### Textos

| Token | Hex | Tema Claro | Tema Oscuro |
|-------|-----|------------|-------------|
| `--text-primary` | `#0f172a` / `#f1f5f9` | slate-900 | slate-100 |
| `--text-secondary` | `#64748b` / `#cbd5e1` | slate-500 | slate-300 |
| `--text-tertiary` | `#94a3b8` | slate-400 | slate-400 |

#### Bordes

| Token | Hex | Tema |
|-------|-----|------|
| `--border-light` | `#e2e8f0` | Claro |
| `--border-dark` | `#334155` | Oscuro |

#### Gradiente Hero

`linear-gradient(135deg, #0da6f2, #3b82f6)` — Aplica exclusivamente al texto del título principal (`h1`) mediante `bg-clip-text`.

#### Reglas de uso

- El color primario **nunca** debe usarse como fondo de texto extenso. Solo para acentos, botones y elementos decorativos.
- En modo oscuro, los fondos oscuros combinados con texto primario claro deben mantener un ratio de contraste AA mínimo.
- Las opacidades del primario (`bg-primary/5`, `bg-primary/10`, `border-primary/20`) se usan para fondos sutiles de tarjetas y contenedores.

### 2.2 Tipografía

#### Jerarquía de fuentes

| Rol | Fuente | Pesos | Variable |
|-----|--------|-------|----------|
| **Display** (títulos y cuerpo) | `Inter` | 300 (light), 400 (regular), 700 (bold), 900 (black) | `font-display` |
| **Mono** (etiquetas, metadata, botones, navegación) | `JetBrains Mono` | 400 (regular), 700 (bold) | `font-mono` |
| **Iconos** | `Material Symbols Outlined` | Variable: `wght` 100–700, `GRAD` -25–200, `FILL` 0–1, `opsz` 20–48 | Clase `material-symbols-outlined` |

#### Escala fluida (clamp)

| Token | Tamaño (clamp) |
|-------|----------------|
| `xs` | `clamp(0.75rem, 0.8vw, 0.875rem)` |
| `sm` | `clamp(0.875rem, 1vw, 1rem)` |
| `base` | `clamp(1rem, 1.2vw, 1.125rem)` |
| `lg` | `clamp(1.125rem, 1.4vw, 1.25rem)` |
| `xl` | `clamp(1.25rem, 1.6vw, 1.5rem)` |
| `2xl` | `clamp(1.5rem, 2vw, 1.875rem)` |
| `3xl` | `clamp(1.875rem, 2.5vw, 2.25rem)` |
| `4xl` | `clamp(2.25rem, 3vw, 3rem)` |
| `5xl` | `clamp(3rem, 4vw, 4rem)` |
| `6xl` | `clamp(4rem, 5vw, 5rem)` |
| `7xl` | `clamp(5rem, 6vw, 6rem)` |
| `8xl` | `clamp(6rem, 8vw, 8rem)` |

#### Interlineados

| Token | Valor |
|-------|-------|
| `tight` | `1.25` |
| `snug` | `1.375` |
| `normal` | `1.5` |
| `relaxed` | `1.625` |
| `loose` | `2` |

#### Reglas tipográficas

- La fuente **mono** es la voz dominante del sitio: etiquetas de sección, navegación, botones, metadata, panel de control técnico. Refuerza la estética de terminal/panel de control.
- La fuente **display** se reserva para títulos principales, descripciones extensas y cuerpo de texto general (leads de sección, descripciones de proyecto).
- Los iconos **Material Symbols** siempre llevan `aria-hidden="true"` y se usan exclusivamente como decoración visual, nunca como único medio de comunicación.
- En títulos del hero (`h1`), el peso **black (900)** combinado con `tracking-tighter` es la norma.

### 2.3 Espaciado

El sistema de espaciado se basa en una escala de 0.25rem:

```scss
$spacing: (
  '0': 0,      '1': 0.25rem,  '2': 0.5rem,   '3': 0.75rem,
  '4': 1rem,    '5': 1.25rem,  '6': 1.5rem,   '8': 2rem,
  '10': 2.5rem, '12': 3rem,    '16': 4rem,    '20': 5rem,
  '24': 6rem,   '32': 8rem,    '40': 10rem,   '48': 12rem,
  '56': 14rem,  '64': 16rem
);
```

**Convenciones de sección:**
- Padding vertical de sección: `5rem` (`py-20`)
- Padding horizontal: `1rem` en mobile, `2.5rem` en desktop (`px-4 lg:px-10`)
- Máximo ancho de contenedor: `1400px`
- Gap entre tarjetas en grilla: `1rem`

### 2.4 Radios de Borde

| Token | Valor |
|-------|-------|
| Default | `0.25rem` |
| `lg` | `0.5rem` |
| `xl` | `0.75rem` |
| `full` | `9999px` |

- Los botones primarios usan `lg`.
- Las tarjetas (bento grid, proyectos) usan `xl`.
- Los indicadores de estado usan `full`.

### 2.5 Efectos Visuales Distintivos

| Efecto | Implementación | Propósito |
|--------|---------------|-----------|
| **Grid pattern** | `radial-gradient` dots @ 40px, opacity 0.5, primary 0.1 alpha | Textura de fondo persistente |
| **Backdrop blur** | `backdrop-filter: blur(12px)` | Efecto glass en header sticky |
| **Scanline** | Gradiente lineal horizontal en parte superior | Estética CRT/tech |
| **Pulso** | `animate-pulse` en indicador "SISTEMA EN LÍNEA" | Sensación de sistema vivo |
| **Hover lift** | `translateY(-2px)` en botones primarios | Retroalimentación interactiva |
| **Press effect** | `scale(0.98)` / `active:scale-95` en clic | Respuesta táctil |
| **Gradient overlay** | `bg-gradient-to-t from-slate-900/90 to-transparent` | Legibilidad de texto sobre imágenes |
| **Sombra** | `shadow-2xl` en imágenes de proyecto | Profundidad visual |

### 2.6 Modo Oscuro / Claro

- El tema oscuro es el predeterminado (`<html class="dark">`).
- El toggle de tema persiste en `localStorage`.
- Si no hay tema guardado, se respeta la preferencia del sistema (`prefers-color-scheme`).
- Las transiciones entre modos deben ser suaves (`transition-colors`).
- El marcado `data-theme` se usa en SCSS; la clase `dark`/`light` se usa en Tailwind.

---

## 3. NARRATIVA ESTRATÉGICA

### 3.1 Propósito y Posicionamiento

Mauro Miranda se posiciona como **arquitecto de soluciones web** que opera en la intersección de la ingeniería de software, la estrategia digital y la innovación tecnológica. No es "un desarrollador más" — es un consultor técnico que resuelve problemas complejos de escalabilidad, rendimiento y arquitectura.

**Frase de posicionamiento (H1):**
> *Ingeniería Web e Innovación Digital Estratégica*

### 3.2 Arquitectura de Contenido

El portafolio se estructura como un **sistema operativo / panel de control técnico**:

```
[ 00 / ARQUITECTURA WEB E INNOVACIÓN DIGITAL ]   → Hero / Presentación
[ 01 ]                                             → Laboratorio de Innovación (I+D)
[ 02 ]                                             → Proyectos Estratégicos (Producción)
[ 03 / ECOSISTEMA_TECNOLÓGICO ]                    → Stack Técnico
```

Cada sección usa una nomenclatura de **terminal/sistema** para reforzar la identidad técnica.

### 3.3 Secciones y Mensajes Clave

#### Hero (`[ 00 ]`)

| Elemento | Texto |
|----------|-------|
| Label | `[ ARQUITECTURA WEB E INNOVACIÓN DIGITAL ]` |
| Título | "Ingeniería Web" (gradiente) + "e" (itálico) + "Innovación" + "Digital Estratégica" |
| Descripción | "Arquitectura de software y diseño estratégico para experiencias digitales de alto impacto." |
| Metadata | `RENDIMIENTO: 94+ LIGHTHOUSE PROM`, `STACK: REACT + NEXT.JS + TS`, `ESTADO: DISPONIBLE` |
| CTA Primario | `INICIAR PROYECTO` |
| CTA Secundario | `EXPLORAR PROYECTOS` |

**Propósito:** Establecer autoridad inmediata y filtrar audiencia. Quien entiende "94+ Lighthouse" es el cliente ideal.

#### Laboratorio de Innovación (`[ 01 ]`)

| Elemento | Texto |
|----------|-------|
| Título | `LABORATORIO DE INNOVACIÓN` |
| Subtítulo | `Prototipado Estratégico & Exploración Técnica` |

Las 4 tarjetas del bento grid representan **proyectos de I+D personal**. Cada una incluye:
- Un identificador de experimento (`PROTOTIPO_023`, `EXPLORACIÓN_007`, `R&D_LAB_05`)
- Un estado de versión (`ESTABLE / v3.0.0`)
- Una descripción técnica aspiracional (ej: "Sistema de componentes inteligentes con detección contextual de patrones de uso")

**Propósito:** Demostrar capacidad técnica, curiosidad intelectual y mentalidad de investigación. Lo que se muestra aquí puede o no ser un producto real — lo que importa es la *narrativa de innovación*.

#### Proyectos Estratégicos (`[ 02 ]`)

| Elemento | Texto |
|----------|-------|
| Título | `PROYECTOS ESTRATÉGICOS` |
| Subtítulo | `Soluciones de producción que impulsan el crecimiento de marcas con ambición digital.` |

Cada proyecto debe incluir:
- **Categoría** (ej: "Transformación Fintech", "Experiencia de Compra Premium")
- **Nombre del proyecto** (ej: "Plataforma de Gestión Financiera", "Marketplace de Alta Gama")
- **Descripción** que hable de *arquitectura, escalabilidad y tecnologías*, no solo de funcionalidad
- **Métricas clave** (Lighthouse, SKU, stack tecnológico)
- **CTA** a caso de estudio (`VER CASO DE ESTUDIO`)

**Propósito:** Probar con resultados que la expertise técnica tiene aplicación real en el mercado.

#### Stack Técnico (`[ 03 ]`)

| Elemento | Texto |
|----------|-------|
| Label | `[ 03 / ECOSISTEMA_TECNOLÓGICO ]` |
| Título | `Arquitectura y Herramientas` |
| CTA inferior | `_DISPONIBLE_PARA_PROYECTOS` → "Abierto a colaboraciones estratégicas y proyectos desafiantes." |
| Botón | `INICIAR_CONVERSACIÓN` |

Las 4 tarjetas representan el stack fundamental:
1. **REACT / NEXT.JS** — Frontend
2. **PYTHON / DJANGO** — Backend
3. **POSTGRESQL** — Base de datos
4. **AWS / DEVOPS** — Infraestructura

Ya no se muestran barras de progreso ni niveles de expertise.

#### Footer

| Elemento | Texto |
|----------|-------|
| Marca | `Mauro Miranda Labs` |
| Descripción | "Consultoría de ingeniería web enfocada en estrategia digital, arquitectura de software y experiencia de usuario de alto nivel." |
| Copyright | `© 2024 MAURO MIRANDA. INGENIERÍA WEB E INNOVACIÓN DIGITAL.` |
| Estado del sistema | `TIEMPO ACTIVO: 99.99%`, `LATENCIA: 24MS`, `REGIÓN: EU_CENTRAL` |

### 3.4 Narrativa de Respaldo (B2B — copy alternativo)

El archivo `src/data/copy-content.js` contiene una línea narrativa más agresiva y cuantificable, orientada a directores de tecnología. Esta narrativa **no es la principal del sitio actual**, pero sirve como:

- Contenido para campañas de email/outbound
- Guía para casos de estudio detallados
- Framework de argumentación de ventas

Su enfoque central: *"Transformo sitios web lentos en máquinas de conversión que escalan."*

Los principios que aplican son:
1. **Rendimiento = Ingresos** — Cada optimización se mide en impacto de negocio
2. **Escalabilidad Preventiva** — Arquitecturas que anticipan el crecimiento
3. **Código Auditable** — Soluciones documentadas y transferibles

---

## 4. LINEAMIENTOS TÉCNICOS

### 4.1 Arquitectura General

El portafolio existe en dos capas:

| Capa | Tecnología | Estado |
|------|-----------|--------|
| **Estática (producción actual)** | HTML + Tailwind CSS (CDN) | En vivo como `index.html` |
| **React (en desarrollo)** | Vite + React 18 + SCSS + Framer Motion | Migración en curso en `src/` |

**Meta final:** La versión React debe reemplazar completamente a la versión estática.

### 4.2 Estructura de Páginas

Todas las páginas deben seguir el siguiente esqueleto:

```
BackgroundGrid (fondo decorativo)
├── Header
│   ├── Brand (logo + versión)
│   ├── Navigation
│   ├── Theme Toggle
│   └── CTA "CONECTAR"
├── Main
│   ├── HeroSection
│   ├── LaboratorySection (bento grid)
│   ├── ProductionSection (proyectos)
│   └── TechStackSection
└── Footer
    ├── Brand + Descripción
    ├── Mapa del Sitio
    ├── Red Social
    ├── Estado del Sistema
    └── Copyright + Legal
```

Rutas del router:
| Ruta | Componente | Propósito |
|------|-----------|-----------|
| `/` | `HomePage` | Página principal |
| `/proyecto/:slug` | `ProjectPage` | Detalle de proyecto individual |
| `*` | `NotFoundPage` | Página 404 |

### 4.3 Convenciones de Nomenclatura

#### Archivos y Componentes

| Tipo | Convención | Ejemplo |
|------|-----------|---------|
| Componente React | PascalCase | `HeroSection.jsx`, `TechStackSection.jsx` |
| Archivo SCSS | Mismo nombre que el componente | `HeroSection.scss` |
| Hook | camelCase con `use` prefix | `useTheme.jsx` |
| Data | camelCase | `projects.js`, `copy-content.js` |
| Páginas | PascalCase + suffix `Page` | `HomePage.jsx`, `ProjectPage.jsx` |

#### CSS (BEM)

```
bloque__elemento--modificador
```

Ejemplos:
- `hero__title--highlight`
- `header__container`
- `navigation__link--active`
- `footer__status-value`

**Scoping:** Cada componente tiene su archivo SCSS colocalizado en el mismo directorio. No se escriben estilos globales fuera de `src/styles/abstracts/`.

### 4.4 SEO

| Elemento | Valor |
|----------|-------|
| Lang | `es` |
| Title | `Mauro Miranda | Ingeniería Web de Elite` |
| Description | `Mauro Miranda - Ingeniería Web de Elite. Arquitectura de software y experimentación digital de alto rendimiento.` |
| OG Title | `Mauro Miranda | Ingeniería Web de Elite` |
| OG Description | `Ingeniería Web de Elite. Creando arquitecturas digitales de alto rendimiento con estética minimalista y precisión científica.` |
| Theme Color | `#0da6f2` |
| Implementación | `react-helmet-async` en `App.jsx` |

### 4.5 Rendimiento

- Google Fonts con `display=swap` y `preconnect`
- Code-splitting con `manualChunks`: vendor (react, react-dom), animations (framer-motion), router (react-router-dom)
- Imágenes con `loading="lazy"` y atributos `width`/`height` explícitos
- Imágenes de Unsplash con parámetros de tamaño (`w=800&h=600&fit=crop`) para evitar descargas innecesarias

### 4.6 Dependencias Técnicas

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `react` | ^18.2.0 | UI framework |
| `react-dom` | ^18.2.0 | Renderizado DOM |
| `react-router-dom` | ^6.20.1 | Enrutamiento |
| `react-helmet-async` | ^2.0.4 | Meta tags SEO |
| `framer-motion` | ^10.16.16 | Animaciones |
| `react-intersection-observer` | ^9.5.3 | Animaciones por scroll |
| `sass` | ^1.69.5 | Preprocesador CSS |
| `vite` | ^7.3.1 | Bundler |

### 4.7 Alias de Importación

| Alias | Ruta |
|-------|------|
| `@` | `./src` |
| `@components` | `./src/components` |
| `@styles` | `./src/styles` |
| `@assets` | `./src/assets` |
| `@data` | `./src/data` |
| `@hooks` | `./src/hooks` |
| `@utils` | `./src/utils` |

### 4.8 Breakpoints Responsive

| Breakpoint | Ancho mínimo |
|------------|-------------|
| `mobile` | 320px |
| `mobile-lg` | 480px |
| `tablet` | 768px |
| `tablet-lg` | 1024px |
| `desktop` | 1280px |
| `desktop-lg` | 1440px |
| `desktop-xl` | 1920px |

Estrategia: **mobile-first** — los estilos base son para mobile y se sobrescriben hacia arriba.

### 4.9 Estructura de Archivos (vigente)

```
mauromiranda.com/
├── index.html                     # Versión estática (producción)
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                   # Entry point
    ├── App.jsx                    # Router + Helmet
    ├── hooks/
    │   └── useTheme.jsx           # Contexto de tema
    ├── data/
    │   ├── projects.js            # Datos de proyectos
    │   └── copy-content.js        # Copy B2B alternativo
    ├── styles/
    │   ├── main.scss              # Master import
    │   └── abstracts/
    │       ├── _variables.scss    # Design tokens
    │       └── _mixins.scss       # Mixins reutilizables
    └── components/
        ├── common/
        │   ├── BackgroundGrid.jsx # Fondo decorativo
        │   ├── Icon.jsx           # Wrapper Material Symbols
        │   └── ScrollToTop.jsx    # Scroll reset en ruta
        ├── layout/
        │   ├── Header.jsx         # Header con navegación
        │   └── Footer.jsx         # Footer completo
        ├── navigation/
        │   └── Navigation.jsx     # Menú de navegación
        ├── sections/
        │   └── HeroSection.jsx    # Hero con animaciones
        └── pages/
            ├── HomePage.jsx       # Página principal
            ├── ProjectPage.jsx    # Detalle de proyecto
            └── NotFoundPage.jsx   # Página 404
```

### 4.10 Consistencia en Títulos y Descripciones

| Sección | Título | Subtítulo / Label |
|---------|--------|--------------------|
| Hero | *"Ingeniería Web e Innovación Digital Estratégica"* (h1) | `[ ARQUITECTURA WEB E INNOVACIÓN DIGITAL ]` |
| Laboratorio | `LABORATORIO DE INNOVACIÓN` | `[ 01 ]` / "Prototipado Estratégico & Exploración Técnica" |
| Producción | `PROYECTOS ESTRATÉGICOS` | `[ 02 ]` / "Soluciones de producción que impulsan el crecimiento de marcas con ambición digital." |
| Stack | `Arquitectura y Herramientas` | `[ 03 / ECOSISTEMA_TECNOLÓGICO ]` |

---

## 5. FILOSOFÍA DE INNOVACIÓN

### 5.1 Principios Rectores

1. **La ingeniería es estrategia, no solo ejecución.** Cada decisión técnica se evalúa por su impacto en el negocio y la experiencia del usuario.

2. **El portafolio es un producto.** Debe tratarse con el mismo rigor que cualquier aplicación en producción: rendimiento, accesibilidad, SEO y mantenibilidad.

3. **Innovación demostrada, no declarada.** En lugar de decir "uso IA", se muestra un "Motor de Síntesis Neural". En lugar de decir "hago animaciones", se nombra "Motor de Animaciones". El laboratorio de I+D es la prueba viva de la capacidad técnica.

4. **Estética técnica.** La belleza del sitio está en su precisión: tipografía mono, etiquetas de terminal, métricas de sistema, indicadores de estado. No es un portafolio creativo — es un panel de control de ingeniería.

### 5.2 Temas de Innovación Recurrentes

| Tema | Manifestación en el portafolio |
|------|-------------------------------|
| **IA / ML** | "Framework de Interacción Adaptativa" — sistema de patrones contextuales |
| **WebAssembly / Rust** | Procesamiento de alto rendimiento en el navegador |
| **Tiempo real** | WebSockets, RabbitMQ, latencia de 24ms |
| **Gráficos avanzados** | GLSL, WebGL, Three.js, compute shaders |
| **Simulación física** | Ecuaciones de Navier-Stokes, dinámica de fluidos |
| **Arquitecturas modernas** | Microservicios, headless commerce, micro-frontends |
| **Cloud / DevOps** | AWS, CI/CD, containerización, escalabilidad cloud |

### 5.3 Identificadores de Laboratorio

Los proyectos de I+D usan una nomenclatura de versionado y experimentación:

| Formato | Ejemplo | Significado |
|---------|---------|-------------|
| `PROTOTIPO_###` | `PROTOTIPO_023` | Proyecto en fase de prototipo |
| `EXPLORACIÓN_###` | `EXPLORACIÓN_007` | Investigación técnica exploratoria |
| `R&D_LAB_##` | `R&D_LAB_05` | Proyecto formal de investigación y desarrollo |
| `ESTABLE / vX.X.X` | `ESTABLE / v3.0.0` | Proyecto estabilizado con versión |

### 5.4 Automatización y Excelencia Técnica

- **CI/CD mentalidad:** El portafolio tiene scripts de build, lint y preview. Debe mantenerse con cero warnings de linter.
- **TypeScript readiness:** Los alias de importación y la estructura de componentes están diseñados para una eventual migración a TypeScript.
- **Rendimiento obsesivo:** El objetivo es mantener 94+ Lighthouse en todas las métricas.

---

## 6. TONO Y VOZ

### 6.1 Principios de Tono

| Principio | Descripción |
|-----------|-------------|
| **Consultivo, no ejecutor** | El tono es de *arquitecto que asesora*, no de *desarrollador que ejecuta tareas* |
| **Preciso, no florido** | Se prefieren términos técnicos exactos sobre metáforas creativas |
| **Autoritario, no arrogante** | Los logros se presentan como hechos, no como jactancia |
| **Terminal / Sistema** | El sitio es un panel de control, no una página de presentación |

### 6.2 Reglas de Estilo

| Contexto | Regla | Ejemplo |
|----------|-------|---------|
| **Navegación** | Mayúsculas sostenidas | `EXPERIMENTOS`, `PRODUCCIÓN` |
| **CTAs** | Mayúsculas sostenidas, estilo comando | `INICIAR PROYECTO`, `CONECTAR` |
| **Identificadores de sección** | Corchetes + número | `[ 01 ]`, `[ 03 / ECOSISTEMA ]` |
| **Estado del sistema** | Mayúsculas + dos puntos | `TIEMPO ACTIVO: 99.99%` |
| **Variables / código** | Snake case con guion bajo | `_DISPONIBLE_PARA_PROYECTOS` |
| **Versiones** | Barra doble | `MauroMiranda // DEV_v1.0` |
| **Descripciones** | Español neutral, oración completa | "Arquitectura de software y diseño estratégico..." |

### 6.3 Términos Técnicos

- Los términos técnicos en inglés se mantienen sin traducir: *headless, WebSockets, Lighthouse, bundle, micro-frontends, CDN, CI/CD, SSG, SSR, serverless, containerización, compute shaders, WebAssembly*.
- Las conjugaciones en primera persona (`Implementé`, `Desarrollé`) se evitan. Preferir voz pasiva o nominalizaciones: `"Arquitectura diseñada para..."` en lugar de `"Diseñé una arquitectura..."`.

### 6.4 Estructura de Frases para Descripciones de Proyecto

Plantilla recomendada:

> **[Sustantivo/Arquitectura] diseñada/construida/implementada para [propósito/contexto]. Enfoque en [valor diferencial 1], [valor diferencial 2] y [valor diferencial 3].**

Ejemplo:
> *"Plataforma de comercio electrónico headless construida para una marca de lujo. Enfoque en experiencia de usuario fluida, rendimiento óptimo y alcance global."*

### 6.5 Errores Comunes que Deben Evitarse

| ❌ Incorrecto | ✅ Correcto |
|---------------|-------------|
| "Soy un desarrollador React" | "Arquitecto de soluciones web especializado en React" |
| "Trabajé en..." | "Arquitectura diseñada para..." |
| "Me gusta la tecnología" | "Laboratorio de innovación con proyectos de I+D" |
| "Contáctame" | `INICIAR_CONVERSACIÓN` / `CONECTAR` |
| Explicar demasiado | Ser conciso y dejar que las métricas hablen |

---

## 7. GLOSARIO

| Término | Significado en el contexto del portafolio |
|---------|------------------------------------------|
| **Bento Grid** | Sistema de grilla asimétrica para el laboratorio de I+D, combinando tarjetas de distintos tamaños |
| **Core Web Vitals** | Conjunto de métricas de Google que miden la experiencia de usuario en la web |
| **Ecosistema Tecnológico** | Conjunto de herramientas y plataformas que forman el stack técnico |
| **Headless** | Arquitectura de comercio donde el frontend está desacoplado del backend |
| **Lighthouse** | Herramienta de Google para auditar rendimiento, accesibilidad y SEO |
| **Material Symbols** | Biblioteca de iconos variable de Google, usada como sistema de iconografía único |
| **Micro-frontends** | Patrón arquitectónico donde el frontend se divide en módulos independientes |
| **Panel de Control** | Metáfora central del sitio — el portafolio funciona como un dashboard de ingeniería |
| **Prototipado Estratégico** | Proceso de crear experimentos técnicos para validar ideas antes de producción |

---

> *Este documento es la fuente de verdad única para el desarrollo y mantenimiento de mauromiranda.com. Cualquier desviación debe ser evaluada contra estos principios antes de ser implementada.*
>
> — Última actualización: Junio 2026
