const { createApp, ref, computed, watch, onMounted, onUnmounted } = Vue;

createApp({
    setup() {
        const negativePromptGlobalDefault = "extra fingers, mutated hands, bad anatomy, distorted faces, fake metrics, unreadable text, blurry dashboard, glitchy interfaces, futuristic sci-fi exaggeration, neon overload, mid-speech audio cut off";

        const escenasIniciales = [
            { id: 1, nombre: 'GANCHO + PROBLEMA', tiempo: '0–8 s', funcion: 'Captar atención y presentar el problema central.', voz: '', visual: '', negativePrompt: 'extra fingers, distorted text, blurry interface, audio cut off', campoExtra: true, campoExtraLabel: 'Dolor principal', campoExtraPlaceholder: 'Pérdida, lentitud o fricción inicial', campoExtraValue: '' },
            { id: 2, nombre: 'CONTEXTO + IMPACTO', tiempo: '8–16 s', funcion: 'Explicar por qué el problema importa y cómo afecta al negocio.', voz: '', visual: '', negativePrompt: 'bad proportions, fake graphs, glitching screens', campoExtra: true, campoExtraLabel: 'Impacto a mostrar', campoExtraPlaceholder: 'Conversión, tiempo, abandono, errores', campoExtraValue: '' },
            { id: 3, nombre: 'SOLUCIÓN TÉCNICA', tiempo: '16–24 s', funcion: 'Presentar la solución con claridad técnica y visual.', voz: '', visual: '', negativePrompt: 'distorted code text, floating hands, random symbols', campoExtra: true, campoExtraLabel: 'Conceptos técnicos', campoExtraPlaceholder: 'API / DATOS / FRONTEND / BACKEND', campoExtraValue: 'FRONTEND / BACKEND / API REST' },
            { id: 4, nombre: 'RESULTADO / TRANSFORMACIÓN', tiempo: '24–32 s', funcion: 'Mostrar el cambio logrado y su beneficio tangible.', voz: '', visual: '', negativePrompt: 'blurry metrics, unnatural glow, fake chart spike', campoExtra: true, campoExtraLabel: 'Resultado a comunicar', campoExtraPlaceholder: 'RAPIDEZ / CONTROL / SEGURIDAD / ESCALABILIDAD', campoExtraValue: 'ESCALABILIDAD Y CONTROL' },
            { id: 5, nombre: 'MARCA + CTA', tiempo: '32–40 s', funcion: 'Cerrar la historia y conectar con la marca.', voz: '', visual: '', negativePrompt: 'misspelled logo text, distorted URL, bad typography', campoExtra: true, campoExtraLabel: 'CTA Variable', campoExtraPlaceholder: 'SOLICITAR DIAGNÓSTICO / HABLEMOS', campoExtraValue: 'Solicita un diagnóstico técnico' }
        ];

        const metadata = ref({ tema: '', concepto: '', estetica: '' });
        const negativePromptGlobal = ref(negativePromptGlobalDefault);
        const mostrarNegativeGlobal = ref(false);
        const escenas = ref(JSON.parse(JSON.stringify(escenasIniciales)));
        const escenaActiva = ref(0);
        const tabPrevio = ref('reproductor');
        const currentStep = ref(1);
        const copiado = ref(false);

        const steps = [
            { id: 1, short: 'Brief', title: 'Briefing', description: 'Define tema, concepto, tono y restricciones base.' },
            { id: 2, short: 'Scenes', title: 'Escenas', description: 'Construye la narrativa una escena a la vez.' },
            { id: 3, short: 'Preview', title: 'Preview', description: 'Revisa simulación y lectura del guión.' },
            { id: 4, short: 'Export', title: 'Exportar', description: 'Copia o descarga el resultado final.' }
        ];

        const escenaSimulada = ref(1);
        const progresoEscena = ref(0);
        const reproduciendo = ref(false);
        let timerInterval = null;

        const modalAIOpen = ref(false);
        const promptAI = ref('');
        const generandoAI = ref(false);
        const errorAI = ref('');

        const toast = ref({ show: false, message: '' });
        const mostrarToast = (msg) => {
            toast.value.message = msg;
            toast.value.show = true;
            setTimeout(() => { toast.value.show = false; }, 3000);
        };

        const contarPalabras = (texto) => {
            if (!texto) return 0;
            return texto.trim().split(/\s+/).filter((w) => w.length > 0).length;
        };

        const palabrasTotales = computed(() => escenas.value.reduce((total, sc) => total + contarPalabras(sc.voz), 0));

        const obtenerEstadoPalabras = (cantidad, objetivoMin, objetivoMax, limiteMax) => {
            if (cantidad === 0) {
                return {
                    label: 'Sin texto',
                    texto: 'text-slate-500',
                    clase: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
                    claseSuave: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
                    barra: 'bg-slate-500/60'
                };
            }

            if (cantidad < objetivoMin) {
                return {
                    label: 'Corta',
                    texto: 'text-amber-300 font-semibold',
                    clase: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
                    claseSuave: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
                    barra: 'bg-amber-400'
                };
            }

            if (cantidad <= objetivoMax) {
                return {
                    label: 'Ideal',
                    texto: 'text-emerald-300 font-semibold',
                    clase: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
                    claseSuave: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
                    barra: 'bg-emerald-400'
                };
            }

            if (cantidad <= limiteMax) {
                return {
                    label: 'Larga',
                    texto: 'text-amber-300 font-semibold',
                    clase: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
                    claseSuave: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
                    barra: 'bg-amber-400'
                };
            }

            return {
                label: 'Excesiva',
                texto: 'text-rose-300 font-semibold',
                clase: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
                claseSuave: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
                barra: 'bg-rose-400'
            };
        };

        const estadoPalabrasEscena = (texto) => obtenerEstadoPalabras(contarPalabras(texto), 12, 18, 22);
        const porcentajePalabrasEscena = (texto) => Math.min((contarPalabras(texto) / 22) * 100, 100);
        const estadoPalabrasTotales = computed(() => obtenerEstadoPalabras(palabrasTotales.value, 60, 90, 110));
        const porcentajePalabrasTotales = computed(() => Math.min((palabrasTotales.value / 110) * 100, 100));
        const escenasCompletas = computed(() => escenas.value.filter((sc) => sc.voz.trim() && sc.visual.trim()).length);
        const currentStepMeta = computed(() => steps.find((step) => step.id === currentStep.value) || steps[0]);

        const irAPaso = (step) => {
            currentStep.value = Math.min(Math.max(step, 1), 4);
            if (currentStep.value === 3) tabPrevio.value = 'reproductor';
            if (currentStep.value === 4) tabPrevio.value = 'texto';
        };

        const pasoSiguiente = () => irAPaso(currentStep.value + 1);
        const pasoAnterior = () => irAPaso(currentStep.value - 1);

        const textoFormateado = computed(() => {
            let txt = `TEMA DEL VIDEO:\n${metadata.value.tema || '[ ]'}\n\nCONCEPTO PRINCIPAL:\n${metadata.value.concepto || '[ ]'}\n\nESTÉTICA O AMBIENTE:\n${metadata.value.estetica || '[ ]'}\n\nPROMPT NEGATIVO BASE (GLOBAL):\n${negativePromptGlobal.value}\n\n--- ESTRUCTURA NARRATIVA (5 ESCENAS × 8s = 40s) ---\n\n`;

            escenas.value.forEach((sc) => {
                txt += `${sc.tiempo} — ${sc.nombre}\nVoz: ${sc.voz || '[ ]'}\nVisual (Prompt Positivo): ${sc.visual || '[ ]'}\nNegative Prompt: ${sc.negativePrompt || '[ ]'}\n`;
                if (sc.campoExtraValue) {
                    txt += `${sc.campoExtraLabel}: ${sc.campoExtraValue}\n`;
                }
                txt += `\n`;
            });

            txt += `ELEMENTOS FIJOS DEL CIERRE:\nLogotipo oficial de Ingeniería Web Miranda\ningenieriawebmiranda.com\nCTA: ${escenas.value[4].campoExtraValue || '[ SOLICITAR DIAGNÓSTICO ]'}`;
            return txt;
        });

        const toggleReproduccion = () => {
            reproduciendo.value = !reproduciendo.value;
            if (reproduciendo.value) iniciarTemporizador();
            else detenerTemporizador();
        };

        const iniciarTemporizador = () => {
            detenerTemporizador();
            timerInterval = setInterval(() => {
                progresoEscena.value += 5;
                if (progresoEscena.value >= 100) {
                    progresoEscena.value = 0;
                    if (escenaSimulada.value < 5) escenaSimulada.value++;
                    else escenaSimulada.value = 1;
                }
            }, 400);
        };

        const detenerTemporizador = () => {
            if (timerInterval) clearInterval(timerInterval);
        };

        const siguienteEscena = () => {
            progresoEscena.value = 0;
            if (escenaSimulada.value < 5) escenaSimulada.value++;
            else escenaSimulada.value = 1;
        };

        const anteriorEscena = () => {
            progresoEscena.value = 0;
            if (escenaSimulada.value > 1) escenaSimulada.value--;
            else escenaSimulada.value = 5;
        };

        const cargarEjemplo = () => {
            metadata.value = {
                tema: 'Velocidad Web y Pérdida de Clientes',
                concepto: 'Cómo una arquitectura rápida y estable mejora conversión y confianza',
                estetica: 'Líneas de código limpias, dashboard con gráficos en vivo, ambiente oscuro tecnológico'
            };

            escenas.value[0].voz = 'Cada segundo de espera enfria la intención de compra y dispara el abandono.';
            escenas.value[0].visual = 'Usuario frente a una web lenta, cursor inmóvil y spinner persistente sobre una interfaz premium.';
            escenas.value[0].negativePrompt = 'extra fingers, deformed hands, blurry face, distorted spinner, audio cut off';
            escenas.value[0].campoExtraValue = 'Pérdida inmediata de atención y confianza';
            escenas.value[1].voz = 'No es solo diseño: una mala arquitectura rompe conversiones, confianza y rendimiento.';
            escenas.value[1].visual = 'Dashboard de analítica con caída de conversiones, rebote alto y latencia visible en tiempo real.';
            escenas.value[1].negativePrompt = 'fake graph metrics, pixelated dashboard, blurry numbers';
            escenas.value[1].campoExtraValue = 'Conversión, rebote y lentitud percibida';
            escenas.value[2].voz = 'La mejora real llega con frontend optimizado, backend estable y datos bien servidos.';
            escenas.value[2].visual = 'Transición limpia desde interfaz web hacia arquitectura técnica con API, servidor y flujo de datos ordenado.';
            escenas.value[2].negativePrompt = 'distorted code lines, glowing futuristic magic, chaotic screen';
            escenas.value[3].voz = 'El resultado se nota rápido: menos espera, más control y una experiencia que convierte.';
            escenas.value[3].visual = 'Métricas en verde mostrando carga veloz, estabilidad y experiencia fluida en dispositivos reales.';
            escenas.value[3].negativePrompt = 'unreadable text, bad alignment, chaotic wires';
            escenas.value[3].campoExtraValue = 'Rapidez, control y escalabilidad';
            escenas.value[4].voz = 'Evoluciona tu plataforma con Ingeniería Web Miranda y solicita un diagnóstico técnico.';
            escenas.value[4].visual = 'Cierre de marca elegante con logotipo de Ingeniería Web Miranda y URL sobre fondo tecnológico limpio.';
            escenas.value[4].negativePrompt = 'misspelled logo, deformed url text, blurry branding';
            escenas.value[4].campoExtraValue = 'Solicita un diagnóstico técnico gratuito';

            currentStep.value = 2;
            mostrarToast('Ejemplo técnico con Prompts Negativos cargado.');
        };

        const limpiarTodo = () => {
            metadata.value = { tema: '', concepto: '', estetica: '' };
            negativePromptGlobal.value = negativePromptGlobalDefault;
            escenas.value = JSON.parse(JSON.stringify(escenasIniciales));
            currentStep.value = 1;
            escenaActiva.value = 0;
            tabPrevio.value = 'reproductor';
            mostrarToast('Plantilla reiniciada.');
        };

        const copiarTexto = () => {
            const el = document.createElement('textarea');
            el.value = textoFormateado.value;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            copiado.value = true;
            mostrarToast('Guión copiado al portapapeles');
            setTimeout(() => { copiado.value = false; }, 2000);
        };

        const descargarMarkdown = () => {
            const blob = new Blob([textoFormateado.value], { type: 'text/markdown;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `Storytelling_Miranda_${metadata.value.tema || 'Video'}.md`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            mostrarToast('Archivo Markdown descargado');
        };

        const abrirModalAI = () => {
            modalAIOpen.value = true;
            errorAI.value = '';
        };

        const generarConIA = async () => {
            if (!promptAI.value.trim()) {
                errorAI.value = 'Por favor escribe un tema o idea clave.';
                return;
            }

            generandoAI.value = true;
            errorAI.value = '';

            const apiKey = '';
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
            const systemInstruction = `Eres un guionista experto en videos verticales (Reels/TikTok 9:16) para 'Ingeniería Web Miranda'.
Debes generar un guión dividido estrictamente en 5 escenas de 8 segundos cada una (40 segundos total).
Reglas clave:
- Voz en Off: Idealmente entre 12 y 18 palabras por escena para aprovechar los 8 segundos sin provocar cortes de voz en la herramienta de IA (Google Veo/Flow).
- Visual: Descripción clara en español/inglés.
- Negative Prompt: Genera un Negative Prompt específico en inglés para cada escena que evite distorsión de código, manos con dedos extras, pantallas deformadas o cortes mid-speech.

Estructura obligatoria de escenas:
1. Gancho + Problema (0-8s)
2. Contexto + Impacto (8-16s)
3. Solución Técnica (16-24s)
4. Resultado / Transformación (24-32s)
5. Cierre + Marca (32-40s)

Devuelve la respuesta EXCLUSIVAMENTE en JSON estructurado con este formato:
{
  "tema": "...",
  "concepto": "...",
  "estetica": "...",
  "escenas": [
    { "id": 1, "voz": "...", "visual": "...", "negativePrompt": "..." },
    { "id": 2, "voz": "...", "visual": "...", "negativePrompt": "..." },
    { "id": 3, "voz": "...", "visual": "...", "negativePrompt": "..." },
    { "id": 4, "voz": "...", "visual": "...", "negativePrompt": "..." },
    { "id": 5, "voz": "...", "visual": "...", "negativePrompt": "...", "cta": "..." }
  ]
}`;

            const payload = {
                contents: [{ parts: [{ text: `Tema del video: ${promptAI.value}` }] }],
                systemInstruction: { parts: [{ text: systemInstruction }] },
                generationConfig: { responseMimeType: 'application/json' }
            };

            let delay = 1000;
            let success = false;
            let responseData = null;

            for (let attempt = 0; attempt < 5; attempt++) {
                try {
                    const res = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (res.ok) {
                        responseData = await res.json();
                        success = true;
                        break;
                    }
                } catch (e) {
                    // Backoff
                }

                await new Promise((r) => setTimeout(r, delay));
                delay *= 2;
            }

            generandoAI.value = false;

            if (success && responseData) {
                try {
                    const parsed = JSON.parse(responseData.candidates[0].content.parts[0].text);
                    metadata.value.tema = parsed.tema || promptAI.value;
                    metadata.value.concepto = parsed.concepto || '';
                    metadata.value.estetica = parsed.estetica || '';

                    if (parsed.escenas && parsed.escenas.length === 5) {
                        parsed.escenas.forEach((sc, i) => {
                            if (escenas.value[i]) {
                                escenas.value[i].voz = sc.voz || '';
                                escenas.value[i].visual = sc.visual || '';
                                escenas.value[i].negativePrompt = sc.negativePrompt || 'extra fingers, distorted text, audio cut off';
                                if (i === 4 && sc.cta) escenas.value[i].campoExtraValue = sc.cta;
                            }
                        });
                    }

                    modalAIOpen.value = false;
                    promptAI.value = '';
                    currentStep.value = 2;
                    mostrarToast('¡Guión y Prompts Negativos generados con éxito!');
                } catch (err) {
                    errorAI.value = 'Error al procesar la respuesta de la IA.';
                }
            } else {
                errorAI.value = 'No se pudo conectar con el servicio de IA. Inténtalo de nuevo.';
            }
        };

        onMounted(() => {
            lucide.createIcons();
        });

        watch(escenaActiva, () => {
            setTimeout(() => lucide.createIcons(), 50);
        });

        watch(currentStep, () => {
            setTimeout(() => lucide.createIcons(), 50);
        });

        watch(modalAIOpen, () => {
            setTimeout(() => lucide.createIcons(), 50);
        });

        watch(mostrarNegativeGlobal, () => {
            setTimeout(() => lucide.createIcons(), 50);
        });

        onUnmounted(() => {
            detenerTemporizador();
        });

        return {
            metadata,
            negativePromptGlobal,
            mostrarNegativeGlobal,
            escenas,
            escenaActiva,
            tabPrevio,
            currentStep,
            steps,
            currentStepMeta,
            irAPaso,
            pasoSiguiente,
            pasoAnterior,
            copiado,
            palabrasTotales,
            escenasCompletas,
            estadoPalabrasEscena,
            porcentajePalabrasEscena,
            estadoPalabrasTotales,
            porcentajePalabrasTotales,
            textoFormateado,
            contarPalabras,
            escenaSimulada,
            progresoEscena,
            reproduciendo,
            toggleReproduccion,
            siguienteEscena,
            anteriorEscena,
            cargarEjemplo,
            limpiarTodo,
            copiarTexto,
            descargarMarkdown,
            toast,
            modalAIOpen,
            promptAI,
            generandoAI,
            errorAI,
            abrirModalAI,
            generarConIA
        };
    }
}).mount('#app');
