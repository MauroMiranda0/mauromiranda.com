(() => {
  'use strict';

  const ROOT_SELECTOR = '[data-exp-tesseract]';
  const PLANES = ['xy', 'xz', 'xw', 'yz', 'yw', 'zw'];
  const PLANE_SPEEDS = {
    xy: 11,
    xz: 7,
    xw: 15,
    yz: 9,
    yw: 13,
    zw: 6
  };

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  class TesseractExperiment {
    constructor(root) {
      this.root = root;
      this.video = root.querySelector('.exp-tesseract__video');
      this.toggle = root.querySelector('.exp-tesseract__toggle');
      this.runtime = root.querySelector('[data-runtime]');
      this.readoutValues = {};

      PLANES.forEach((plane) => {
        this.readoutValues[plane] = root.querySelector(`[data-plane="${plane}"]`);
      });

      this.angles = { xy: 0, xz: 40, xw: 80, yz: 120, yw: 160, zw: 200 };
      this.lastFrameTime = null;
      this.rafId = null;
      this.isOn = true;
      this.isVisible = false;

      if (!this.video || !this.toggle) return;

      this.bindEvents();
      this.observeVisibility();

      if (prefersReducedMotion) {
        this.isOn = false;
      }

      this.updateToggle();
      this.syncPlayback();
    }

    bindEvents() {
      this.video.addEventListener('loadedmetadata', () => {
        this.syncViewportRatio();
        this.updateRuntime();
      });

      this.video.addEventListener('timeupdate', () => {
        this.updateRuntime();
        if (this.video.duration - this.video.currentTime < 0.15) {
          this.video.currentTime = 0;
        }
      });

      this.video.addEventListener('play', () => {
        this.toggle.setAttribute('aria-pressed', 'true');
        this.toggle.setAttribute('aria-label', 'Pausar animacion');
        if (!prefersReducedMotion) this.startTelemetry();
      });

      this.video.addEventListener('pause', () => {
        this.toggle.setAttribute('aria-pressed', 'false');
        this.toggle.setAttribute('aria-label', 'Reproducir animacion');
        this.stopTelemetry();
      });

      this.toggle.addEventListener('click', () => {
        this.isOn = !this.isOn;
        this.updateToggle();
        this.syncPlayback();
      });
    }

    updateToggle() {
      this.toggle.setAttribute('aria-pressed', String(this.isOn));
    }

    syncPlayback() {
      if (this.isOn && this.isVisible && !prefersReducedMotion) {
        this.video.play().catch(() => {});
      } else {
        this.video.pause();
      }
    }

    observeVisibility() {
      if (!('IntersectionObserver' in window)) {
        if (!prefersReducedMotion) this.video.play().catch(() => {});
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target !== this.root) return;
            this.isVisible = entry.isIntersecting;
            this.syncPlayback();
          });
        },
        { threshold: 0.45 }
      );

      observer.observe(this.root);
    }

    syncViewportRatio() {
      if (!this.video.videoWidth || !this.video.videoHeight) return;
      this.root.style.setProperty(
        '--video-ratio',
        `${this.video.videoWidth} / ${this.video.videoHeight}`
      );
    }

    startTelemetry() {
      if (this.rafId) return;
      this.lastFrameTime = performance.now();

      const tick = (now) => {
        const dt = (now - this.lastFrameTime) / 1000;
        this.lastFrameTime = now;

        PLANES.forEach((plane) => {
          this.angles[plane] = (this.angles[plane] + PLANE_SPEEDS[plane] * dt) % 360;
          this.readoutValues[plane].textContent =
            `${this.angles[plane].toFixed(1).padStart(5, '0')} deg`;
        });

        this.rafId = requestAnimationFrame(tick);
      };

      this.rafId = requestAnimationFrame(tick);
    }

    stopTelemetry() {
      if (!this.rafId) return;
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    updateRuntime() {
      if (!this.runtime) return;

      const fmt = (s) => {
        if (!isFinite(s)) return '00:00';
        return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
      };

      this.runtime.textContent =
        `${fmt(this.video.currentTime)} / ${fmt(this.video.duration)}`;
    }
  }

  document.querySelectorAll(ROOT_SELECTOR).forEach((el) => {
    new TesseractExperiment(el);
  });
})();
