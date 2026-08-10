document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const experiment = document.querySelector('[data-lamp-experiment]');

  if (!experiment) return;

  const video = experiment.querySelector('[data-lamp-video]');
  const toggle = experiment.querySelector('[data-lamp-toggle]');
  const status = experiment.querySelector('[data-lamp-status]');

  if (!video || !toggle || !status) return;

  let isOn = true;
  let isVisible = false;

  function updateStatus() {
    status.textContent = isOn ? 'Reproduciendo' : 'Detenido';
    toggle.setAttribute('aria-pressed', String(isOn));
    experiment.classList.toggle('is-off', !isOn);
  }

  async function playVideo() {
    if (!isOn || prefersReducedMotion || !isVisible) return;

    try {
      await video.play();
    } catch (_) {
      // Algunos navegadores pueden bloquear autoplay; no rompemos la UI.
    }
  }

  function pauseVideo() {
    video.pause();
  }

  function syncPlayback() {
    if (isOn && isVisible && !prefersReducedMotion) {
      playVideo();
      return;
    }

    pauseVideo();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target !== experiment) return;

        isVisible = entry.isIntersecting;
        syncPlayback();
      });
    },
    { threshold: 0.45 }
  );

  observer.observe(experiment);

  toggle.addEventListener('click', () => {
    isOn = !isOn;
    updateStatus();
    syncPlayback();
  });

  if (prefersReducedMotion) {
    isOn = false;
  }

  updateStatus();
  syncPlayback();
});
