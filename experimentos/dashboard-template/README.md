# Dashboard de Leads — Experimento

Dashboard interactivo con gráficas canvas, animaciones y controles en tiempo real. Experimento de portafolio.

## Estructura

```
dashboard-template/
├── index.html            # Markup con charts, botones y toolbar
├── main.css              # Estilos compilados (tema oscuro, glassmorphism)
├── main.scss             # Entry point SCSS
├── _variables.scss       # Tokens: fuentes, radios, breakpoints
├── _base.scss            # Reset + custom properties
├── _buttons.scss         # Botones con micro-interacciones
├── _layout.scss          # Contenedor, grid, cards
├── _components.scss      # Hero, stats, spotlight, timeline, charts
├── _table.scss           # Toolbar, tabs, tabla de leads
├── _responsive.scss      # Media queries
├── script.js             # Lógica: charts canvas, filtros, toasts, counters
└── README.md
```

## Funcionalidades

- **Gráficas canvas**: donut (canales) + barras (embudo operativo)
- **Filtros combinados**: búsqueda, canal, etapa, prioridad, orden por score
- **Contadores animados**: valores con transición easing cúbico
- **Toast system**: notificaciones para cada acción
- **Exportar CSV**: descarga de leads visibles
- **Refresh simulado**: actualización con spinner y feedback
- **Atajos de teclado**: `Ctrl+K` foco en búsqueda, `Ctrl+R` refresh
- **Animaciones**: entrance stagger en filas, timeline, dashboard load
- **Tema oscuro**: glassmorphism, gradientes sutiles, tipografía mono

## Uso

Abrir `index.html` en el navegador — sin build ni dependencias.

## Editar estilos (SCSS)

```bash
npm install -g sass
sass --watch main.scss:main.css --style=expanded
```
