(() => {
  "use strict";
  const root = document.documentElement;
  root.classList.add("js-ready");

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      menuButton.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    }));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const header = document.querySelector(".site-header");
  const onScroll = () => { if (header) header.classList.toggle("scrolled", window.scrollY > 12); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Scroll reveals. Content remains visible if IntersectionObserver is unavailable.
  const targets = document.querySelectorAll(
    "main section:not(.home-hero), .intro-visual, .intro-text, .program-card, .home-card, .staff-card, .leadership-card, .value-grid article, .gallery-grid figure, .home-gallery > a, .journey-step, .faculty-highlight"
  );
  targets.forEach((el, i) => {
    el.classList.add("reveal");
    if (i % 4 === 1) el.classList.add("reveal-delay-1");
    if (i % 4 === 2) el.classList.add("reveal-delay-2");
    if (i % 4 === 3) el.classList.add("reveal-delay-3");
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -20px 0px" });
    targets.forEach((el) => revealObserver.observe(el));
  } else {
    targets.forEach((el) => el.classList.add("is-visible"));
  }

  // Count-up effect for explicitly marked numeric facts.
  const animateCounter = (el) => {
    if (el.dataset.counted === "true") return;
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    el.dataset.counted = "true";
    const start = performance.now();
    const duration = 1250;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => counterObserver.observe(el));
  } else counters.forEach((el) => { el.textContent = el.dataset.count; });

  // Homepage hero slideshow. Replace these paths with your own images if desired.
  const heroPhoto = document.querySelector(".home-hero-new .hero-photo");
  const slideButtons = [...document.querySelectorAll(".hero-dot")];
  const slideCurrent = document.getElementById("heroSlideCurrent");
  const nextButton = document.getElementById("heroNext");
  const slides = [
    { image: "assets/campus-front.webp", position: "center 43%", label: "College building" },
    { image: "assets/campus-courtyard.webp", position: "center center", label: "Campus courtyard" },
    { image: "assets/campus-learning-aids.webp", position: "center center", label: "Teaching-learning materials" },
    { image: "assets/campus-computer-room.webp", position: "center center", label: "Computer room" }
  ];
  let activeSlide = 0;
  let slideTimer;
  const showSlide = (index) => {
    if (!heroPhoto || !slides.length) return;
    activeSlide = (index + slides.length) % slides.length;
    const slide = slides[activeSlide];
    heroPhoto.style.backgroundImage = `url("${slide.image}")`;
    heroPhoto.style.backgroundPosition = slide.position;
    if (slideCurrent) slideCurrent.textContent = String(activeSlide + 1).padStart(2, "0");
    slideButtons.forEach((button, i) => {
      button.classList.toggle("active", i === activeSlide);
      button.setAttribute("aria-pressed", String(i === activeSlide));
    });
  };
  const stopSlider = () => { if (slideTimer) window.clearInterval(slideTimer); };
  const startSlider = () => {
    stopSlider();
    if (!reduceMotion && document.visibilityState === "visible") {
      slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 6000);
    }
  };
  if (heroPhoto) {
    slides.forEach((slide) => { const img = new Image(); img.src = slide.image; });
    slideButtons.forEach((button) => button.addEventListener("click", () => {
      showSlide(Number(button.dataset.slide) || 0);
      startSlider();
    }));
    if (nextButton) nextButton.addEventListener("click", () => {
      showSlide(activeSlide + 1);
      startSlider();
    });
    document.addEventListener("visibilitychange", startSlider);
    showSlide(0);
    startSlider();
  }

  // Give images a clear fallback class if a local filename is missing.
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => img.classList.add("image-missing"), { once: true });
  });
})();