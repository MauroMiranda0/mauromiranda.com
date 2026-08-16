# CONSTITUTION

## Proposito
`proyectoVisualizarCodigo` existe para editar, previsualizar y validar componentes web pequenos desde un entorno simple. El producto debe permitir trabajar con HTML, CSS y JavaScript sin depender de un framework ni de un build step.

## Funcionalidad nuclear
1. El usuario debe poder editar HTML, CSS y JS en paneles separados.
2. El sistema debe generar un documento HTML completo y renderizarlo en un `iframe` seguro con `sandbox="allow-scripts"`.
3. El usuario debe poder alternar entre preview visual y codigo fuente consolidado.
4. El usuario debe poder probar distintos anchos de preview mediante presets responsive claros y rapidos.
5. El proyecto debe seguir funcionando tanto en local como en Google Colab.
6. La interfaz HTML standalone principal del proyecto debe vivir en `index.html`.

## Principios de producto
1. Primero visualizar, luego refinar: el preview debe ser la zona dominante del layout.
2. Feedback inmediato: cualquier accion principal debe acercar al usuario a ver el resultado rapido.
3. Baja friccion: sin configuracion compleja, sin dependencias pesadas, sin pasos ocultos.
4. Claridad visual: la interfaz debe separar con nitidez zona de trabajo, resultado y ayudas contextuales.
5. Responsive real: la UI del producto no solo debe verse bien en movil, tambien debe ayudar a probar UIs moviles.

## Sistema visual
La referencia visual del proyecto es una interfaz tipo dashboard calida, suave y editorial, inspirada en tarjetas organicas sobre fondo crema.

### Paleta de color oficial
- `#f6f1e7`: fondo principal
- `#fbf7ef`: fondo suave
- `#fffdf8`: superficie fuerte
- `#2d2926`: superficie oscura y tabs activas
- `#1f1c1a`: fondo de codigo
- `#2b2522`: texto principal
- `#756a62`: texto secundario
- `#f0c95a`: acento principal
- `#d7aa23`: acento fuerte para controles activos
- `#f7e6a6`: acento suave
- `#6f8f6b`: exito
- `#b76e58`: alerta o error suave

### Reglas de UI
1. Usar tarjetas con radios amplios y sombras suaves; evitar cajas duras o estilo enterprise frio.
2. Reservar el acento amarillo para acciones primarias, estados destacados y puntos de foco.
3. Mantener los editores en tema oscuro para favorecer contraste durante escritura prolongada.
4. Usar superficies claras para contenedores de dashboard y fondo oscuro solo en areas de codigo o apoyo.
5. Priorizar tipografia sans en la interfaz y monospace unicamente dentro del codigo.
6. El preview debe ocupar la mayor parte del espacio util cuando la pantalla lo permita.
7. Los controles de tamano responsive deben vivir debajo del preview, no competir con el editor.

## Arquitectura de interfaz
1. Header superior con identidad simple del producto.
2. Hero corto que explique el objetivo del tablero.
3. `article.panel` en la parte superior con el editor por tabs y una accion explicita de `Actualizar preview`.
4. `article.preview-card` en la parte media como bloque principal para preview y codigo fuente.
5. Presets responsive debajo del preview con al menos cinco tamanos de referencia.
6. `article.task-card` en la parte inferior como guia compacta del flujo de uso.

## Limites tecnicos
1. No introducir dependencias de frontend ni pipelines de build salvo necesidad concreta.
2. Mantener compatibilidad con HTML standalone para apertura local en navegador.
3. Evitar ejecucion fuera del `iframe`; el JS del usuario solo debe correr dentro del preview.
4. Cualquier rediseño debe conservar la capacidad de generar un solo documento HTML completo.
5. Los presets responsive deben modificar el ancho del preview sin romper la proporcion general del layout.

## Criterios para cambios futuros
1. Un cambio visual debe mejorar legibilidad o flujo de trabajo, no solo decoracion.
2. Una nueva funcionalidad debe reforzar la tarea principal de editar y visualizar codigo.
3. Si una decision compite entre estetica y claridad, gana claridad.
4. Si una decision compite entre complejidad y rapidez de uso, gana rapidez de uso.
