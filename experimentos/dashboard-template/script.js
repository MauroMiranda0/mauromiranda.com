const leads = [
  { id: 1, name: "Camila Torres", email: "camila@brandnorth.mx", channel: "Meta Ads", stage: "Demo", score: 94, priority: "hot", action: "Agendar demo" },
  { id: 2, name: "Javier Núñez", email: "javier@tekpulse.io", channel: "Google Search", stage: "Calificado", score: 91, priority: "hot", action: "Enviar propuesta" },
  { id: 3, name: "Marta Ríos", email: "marta@orbeagency.com", channel: "Email Nurture", stage: "Demo", score: 82, priority: "warm", action: "Confirmar asistencia" },
  { id: 4, name: "Andrea López", email: "alopez@novadigital.co", channel: "Landing Organica", stage: "Nuevo", score: 66, priority: "cold", action: "Enviar secuencia" },
  { id: 5, name: "Diego Salas", email: "diego@orbita.app", channel: "Meta Ads", stage: "Contactado", score: 76, priority: "warm", action: "Dar seguimiento" },
  { id: 6, name: "Paula Méndez", email: "pmendez@scaleforge.io", channel: "Google Search", stage: "Nuevo", score: 88, priority: "hot", action: "Llamar hoy" }
];

const state = {
  search: "",
  channel: "all",
  stage: "all",
  priority: "all",
  sortDesc: true
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const els = {
  leadRows: $("#leadRows"),
  emptyState: $("#emptyState"),
  searchInput: $("#searchInput"),
  channelFilter: $("#channelFilter"),
  stageFilter: $("#stageFilter"),
  sortBtn: $("#sortBtn"),
  resetBtn: $("#resetFiltersBtn"),
  addBtn: $("#addLeadBtn"),
  exportBtn: $("#exportBtn"),
  refreshBtn: $("#refreshBtn"),
  reportBtn: $("#reportBtn"),
  visibleLeads: $("#visibleLeads"),
  avgScore: $("#avgScore"),
  hotLeads: $("#hotLeads"),
  responseTime: $("#responseTime"),
  responseBadge: $("#responseBadge"),
  nextAction: $("#nextActionMetric"),
  sysStatus: $("#sysStatus"),
  chartCenter: $("#chartCenter"),
  channelLegend: $("#channelLegend"),
  stageLegend: $("#stageLegend"),
  timeline: $("#timeline"),
  toastContainer: $("#toastContainer")
};

const CHART_COLORS = {
  hot: "#ef6b5e",
  warm: "#f0b429",
  cold: "#00d4aa",
  channels: ["#00d4aa", "#5ba3f2", "#f0b429", "#8b9bb5"]
};

function initials(name) {
  return name.split(" ").slice(0, 2).map(s => s.charAt(0).toUpperCase()).join("");
}

function priorityLabel(p) {
  return p === "hot" ? "Hot" : p === "warm" ? "Warm" : "Cold";
}

/* ─── TOAST SYSTEM ─── */
function toast(msg, duration = 2800) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  els.toastContainer.appendChild(el);
  setTimeout(() => {
    el.classList.add("toast--out");
    el.addEventListener("animationend", () => el.remove());
  }, duration);
}

/* ─── COUNTER ANIMATION ─── */
function animateCounter(el, target, duration = 400) {
  const start = parseInt(el.textContent) || 0;
  if (start === target) return;
  const diff = target - start;
  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + diff * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ─── FILTER / SORT ─── */
function getFiltered() {
  return leads
    .filter(l => {
      const term = state.search.trim().toLowerCase();
      return (!term || [l.name, l.email, l.channel].some(v => v.toLowerCase().includes(term)))
        && (state.channel === "all" || l.channel === state.channel)
        && (state.stage === "all" || l.stage === state.stage)
        && (state.priority === "all" || l.priority === state.priority);
    })
    .sort((a, b) => state.sortDesc ? b.score - a.score : a.score - b.score);
}

/* ─── DONUT CHART ─── */
const channelCanvas = document.getElementById("channelChart");
const channelCtx = channelCanvas.getContext("2d");
const dpr = window.devicePixelRatio || 1;

function resizeCanvas(canvas, w, h) {
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  canvas.getContext("2d").scale(dpr, dpr);
}

resizeCanvas(channelCanvas, 220, 220);

function drawDonut(data) {
  const ctx = channelCanvas.getContext("2d");
  const w = 220, h = 220, cx = w / 2, cy = h / 2, r = 88, sw = 38;
  ctx.clearRect(0, 0, w, h);

  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const colors = CHART_COLORS.channels;
  let start = -Math.PI / 2;

  data.forEach((d, i) => {
    const angle = (d.value / total) * Math.PI * 2;
    if (angle === 0) return;
    ctx.beginPath();
    ctx.arc(cx, cy, r, start, start + angle);
    ctx.strokeStyle = colors[i % colors.length];
    ctx.lineWidth = sw;
    ctx.lineCap = "round";
    ctx.stroke();
    start += angle;
  });

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255,255,255,0.05)";
  ctx.lineWidth = 1;
  ctx.stroke();
}

/* ─── BAR CHART ─── */
const stageCanvas = document.getElementById("stageChart");
resizeCanvas(stageCanvas, 440, 180);

function drawBars(counts) {
  const ctx = stageCanvas.getContext("2d");
  const w = 440, h = 180;
  ctx.clearRect(0, 0, w, h);

  const items = [
    { label: "Nuevo", value: counts.Nuevo, color: "#8b9bb5" },
    { label: "Contactado", value: counts.Contactado, color: "#f0b429" },
    { label: "Calificado", value: counts.Calificado, color: "#5ba3f2" },
    { label: "Demo", value: counts.Demo, color: "#00d4aa" }
  ];

  const total = items.reduce((s, d) => s + d.value, 0) || 1;
  const maxVal = Math.max(...items.map(d => d.value), 1);
  const pad = { top: 16, bottom: 28, left: 20, right: 20 };
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;
  const barW = Math.min(chartW / items.length * 0.6, 60);
  const gap = (chartW - barW * items.length) / (items.length + 1);

  items.forEach((d, i) => {
    const x = pad.left + gap + i * (barW + gap);
    const barH = (d.value / maxVal) * chartH;
    const y = pad.top + chartH - barH;

    // bar bg
    ctx.fillStyle = "rgba(255,255,255,0.03)";
    ctx.beginPath();
    ctx.roundRect(x, pad.top, barW, chartH, 6);
    ctx.fill();

    // bar fill
    const grad = ctx.createLinearGradient(x, y, x, pad.top + chartH);
    grad.addColorStop(0, d.color);
    grad.addColorStop(1, d.color + "44");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, barH, [6, 6, 0, 0]);
    ctx.fill();

    // value on top
    ctx.fillStyle = "#e2eaf5";
    ctx.font = "700 14px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText(d.value, x + barW / 2, y - 4);

    // label
    ctx.fillStyle = "#8b9bb5";
    ctx.font = "500 10px 'JetBrains Mono', monospace";
    ctx.textBaseline = "top";
    ctx.fillText(d.label, x + barW / 2, pad.top + chartH + 6);
  });
}

/* ─── UPDATE CHARTS ─── */
function updateCharts(filtered) {
  const channelCounts = {};
  filtered.forEach(l => { channelCounts[l.channel] = (channelCounts[l.channel] || 0) + 1; });
  const chData = Object.entries(channelCounts).map(([label, value]) => ({ label, value }));
  drawDonut(chData);

  const total = filtered.length;
  els.chartCenter.textContent = total;
  els.channelLegend.innerHTML = chData.map((d, i) =>
    `<span class="legend-item"><span class="legend-item__dot" style="background:${CHART_COLORS.channels[i % CHART_COLORS.channels.length]}"></span>${d.label} (${d.value})</span>`
  ).join("");

  const stageCounts = { Nuevo: 0, Contactado: 0, Calificado: 0, Demo: 0 };
  filtered.forEach(l => { if (stageCounts.hasOwnProperty(l.stage)) stageCounts[l.stage]++; });
  drawBars(stageCounts);

  const stageTotal = filtered.length || 1;
  els.stageLegend.innerHTML = Object.entries(stageCounts).map(([label, count]) =>
    `<span class="legend-item">${label}: <strong style="margin-left:4px;color:var(--text);">${count}</strong> (${Math.round(count / stageTotal * 100)}%)</span>`
  ).join("");
}

/* ─── UPDATE SUMMARY ─── */
function updateSummary(filtered) {
  const n = filtered.length;
  const avg = n ? Math.round(filtered.reduce((s, l) => s + l.score, 0) / n) : 0;
  const hot = filtered.filter(l => l.priority === "hot").length;

  animateCounter(els.visibleLeads, n);
  animateCounter(els.avgScore, avg);
  animateCounter(els.hotLeads, hot);

  const rt = n ? Math.max(4, 14 - hot) : 0;
  const rtText = rt ? rt + " min" : "--";
  els.responseTime.textContent = rtText;
  els.responseBadge.textContent = rtText;
  els.nextAction.textContent = Math.max(1, hot + 2) + " demos";
}

/* ─── UPDATE TIMELINE ─── */
function updateTimeline() {
  const items = [
    { dot: "C", title: "Camila Torres pidió demo enterprise", copy: "Abrió formulario, dejó teléfono directo y respondió al primer contacto.", time: "12 min" },
    { dot: "J", title: "Javier Núñez subió de score", copy: "Visitó pricing, abrió correos y pasó a seguimiento prioritario.", time: "25 min" },
    { dot: "M", title: "Marta Ríos confirmó llamada", copy: "Agendó reunión después de un segundo follow-up automatizado.", time: "41 min" }
  ];
  els.timeline.innerHTML = items.map((d, i) =>
    `<article class="timeline-item" style="animation-delay:${i * 0.08}s">
      <div class="timeline-dot" style="background:${i === 0 ? "var(--danger-soft)" : "var(--accent-soft)"};color:${i === 0 ? "var(--danger)" : "var(--accent)"}">${d.dot}</div>
      <div>
        <p class="timeline-title">${d.title}</p>
        <p class="timeline-copy">${d.copy}</p>
      </div>
      <span class="timeline-time">${d.time}</span>
    </article>`
  ).join("");
}

/* ─── RENDER ─── */
function renderLeads() {
  const filtered = getFiltered();

  els.leadRows.innerHTML = filtered.map((l, i) =>
    `<div class="lead-row" style="animation-delay:${i * 0.04}s">
      <div class="lead-main">
        <div class="lead-avatar">${initials(l.name)}</div>
        <div>
          <p class="lead-name">${l.name}</p>
          <p class="lead-meta">${l.email}</p>
        </div>
      </div>
      <span class="muted">${l.channel}</span>
      <span class="muted">${l.stage}</span>
      <strong class="score">${l.score}</strong>
      <span class="pill ${l.priority}">
        <span class="priority-dot" style="background:${CHART_COLORS[l.priority]}"></span>
        ${priorityLabel(l.priority)}
      </span>
      <a href="#" class="link-action" data-id="${l.id}">${l.action}</a>
    </div>`
  ).join("");

  els.emptyState.style.display = filtered.length ? "none" : "block";
  updateSummary(filtered);
  updateCharts(filtered);
}

/* ─── RESET ─── */
function resetFilters() {
  state.search = ""; state.channel = "all"; state.stage = "all"; state.priority = "all"; state.sortDesc = true;
  els.searchInput.value = ""; els.channelFilter.value = "all"; els.stageFilter.value = "all";
  els.sortBtn.textContent = "Ordenar por score";
  $$(".filter-tab").forEach(t => t.classList.toggle("is-active", t.dataset.priority === "all"));
  renderLeads();
  toast("Filtros restablecidos");
}

/* ─── EVENT LISTENERS ─── */
els.searchInput.addEventListener("input", e => { state.search = e.target.value; renderLeads(); });
els.channelFilter.addEventListener("change", e => { state.channel = e.target.value; renderLeads(); });
els.stageFilter.addEventListener("change", e => { state.stage = e.target.value; renderLeads(); });

els.sortBtn.addEventListener("click", () => {
  state.sortDesc = !state.sortDesc;
  els.sortBtn.textContent = state.sortDesc ? "Ordenar por score" : "Ascendente";
  renderLeads();
});

els.resetBtn.addEventListener("click", resetFilters);

$$(".filter-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    state.priority = tab.dataset.priority;
    $$(".filter-tab").forEach(t => t.classList.toggle("is-active", t === tab));
    renderLeads();
  });
});

els.addBtn.addEventListener("click", () => {
  const demo = { id: Date.now(), name: "Nuevo Lead Demo", email: "nuevo.lead@landingdemo.com", channel: "Landing Organica", stage: "Nuevo", score: 73, priority: "warm", action: "Contactar ahora" };
  leads.unshift(demo);
  renderLeads();
  toast("Lead demo agregado");
});

els.leadRows.addEventListener("click", e => {
  const link = e.target.closest("[data-id]");
  if (!link) return;
  e.preventDefault();
  const lead = leads.find(l => String(l.id) === link.dataset.id);
  if (!lead) return;
  const transitions = { Nuevo: "Contactado", Contactado: "Calificado", Calificado: "Demo", Demo: "Demo" };
  lead.stage = transitions[lead.stage];
  lead.score = Math.min(100, lead.score + 4);
  lead.priority = lead.score >= 90 ? "hot" : lead.score >= 75 ? "warm" : "cold";
  lead.action = lead.stage === "Demo" ? "Demo agendada" : "Siguiente paso";
  renderLeads();
  toast(`${lead.name} avanzó a ${lead.stage}`);
});

/* ─── EXPORT CSV ─── */
els.exportBtn.addEventListener("click", () => {
  const filtered = getFiltered();
  const header = "Nombre,Email,Canal,Etapa,Score,Prioridad,Acción";
  const rows = filtered.map(l => `"${l.name}","${l.email}","${l.channel}","${l.stage}",${l.score},"${priorityLabel(l.priority)}","${l.action}"`);
  const csv = [header, ...rows].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = "leads.csv"; a.click();
  URL.revokeObjectURL(url);
  toast(`Exportados ${filtered.length} leads`);
});

/* ─── REFRESH ─── */
els.refreshBtn.addEventListener("click", function () {
  this.classList.add("btn--loading");
  els.sysStatus.textContent = "Actualizando...";
  setTimeout(() => {
    leads.forEach(l => { l.score = Math.min(100, l.score + Math.floor(Math.random() * 6 - 2)); });
    renderLeads();
    this.classList.remove("btn--loading");
    els.sysStatus.textContent = "Datos actualizados";
    toast("Datos actualizados");
    setTimeout(() => { els.sysStatus.textContent = "Sistema operativo"; }, 2000);
  }, 800);
});

/* ─── REPORT ─── */
els.reportBtn.addEventListener("click", () => {
  const filtered = getFiltered();
  const n = filtered.length;
  const avg = n ? Math.round(filtered.reduce((s, l) => s + l.score, 0) / n) : 0;
  const hot = filtered.filter(l => l.priority === "hot").length;
  toast(`📊 Reporte: ${n} leads · Score ${avg} · ${hot} hot`, 4000);
});

/* ─── KEYBOARD SHORTCUTS ─── */
document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); els.searchInput.focus(); }
  if (e.key === "r" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); els.refreshBtn.click(); }
});

/* ─── INIT ─── */
updateTimeline();
renderLeads();
toast("Dashboard listo", 1500);
