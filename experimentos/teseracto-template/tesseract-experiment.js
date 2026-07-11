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
      this.userPaused = false;

      if (!this.video || !this.toggle) return;

      this.bindEvents();
      this.observeVisibility();

      if (prefersReducedMotion) {
        this.video.pause();
        this.renderStaticReadout();
      }
    }

    bindEvents() {
      this.video.addEventListener('loadedmetadata', () => {
        this.syncViewportRatio();
        this.updateRuntime();
      });

      this.video.addEventListener('timeupdate', () => this.updateRuntime());

      this.video.addEventListener('ended', () => {
        if (!this.userPaused && !prefersReducedMotion) {
          this.video.currentTime = 0;
          this.video.play().catch(() => {});
        }
      });

      this.video.addEventListener('play', () => {
        this.toggle.setAttribute('aria-pressed', 'true');
        this.toggle.setAttribute('aria-label', 'Pausar animacion');

        if (!prefersReducedMotion) {
          this.startTelemetry();
        }
      });

      this.video.addEventListener('pause', () => {
        this.toggle.setAttribute('aria-pressed', 'false');
        this.toggle.setAttribute('aria-label', 'Reproducir animacion');
        this.stopTelemetry();
      });

      this.toggle.addEventListener('click', () => {
        if (this.video.paused) {
          this.userPaused = false;
          this.video.play().catch(() => {});
        } else {
          this.userPaused = true;
          this.video.pause();
        }
      });
    }

    observeVisibility() {
      if (!('IntersectionObserver' in window)) {
        if (!prefersReducedMotion) {
          this.video.play().catch(() => {});
        }
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (prefersReducedMotion) return;

            if (entry.isIntersecting && !this.userPaused) {
              this.video.play().catch(() => {});
            } else if (!entry.isIntersecting) {
              this.video.pause();
            }
          });
        },
        { threshold: 0.1 }
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
        const deltaTime = (now - this.lastFrameTime) / 1000;
        this.lastFrameTime = now;

        PLANES.forEach((plane) => {
          this.angles[plane] = (this.angles[plane] + PLANE_SPEEDS[plane] * deltaTime) % 360;
          this.readoutValues[plane].textContent = `${this.angles[plane].toFixed(1).padStart(5, '0')} deg`;
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

    renderStaticReadout() {
      PLANES.forEach((plane) => {
        this.readoutValues[plane].textContent = `${this.angles[plane].toFixed(1).padStart(5, '0')} deg`;
      });
    }

    updateRuntime() {
      if (!this.runtime) return;

      const formatTime = (seconds) => {
        if (!isFinite(seconds)) return '00:00';

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      };

      this.runtime.textContent = `${formatTime(this.video.currentTime)} / ${formatTime(this.video.duration)}`;
    }
  }

  document.querySelectorAll(ROOT_SELECTOR).forEach((element) => {
    new TesseractExperiment(element);
  });
})();
