/* ============================================================
   India's Freedom Struggle (1857-1947) - Interactivity
   - Reading progress bar
   - Nav shadow on scroll + scroll-spy active link
   - Reveal-on-scroll animations
   - Timeline era filtering with alternating layout
   ============================================================ */

(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var progress = document.getElementById("progress");
  var events = Array.prototype.slice.call(document.querySelectorAll(".tl-event"));
  var fbuttons = Array.prototype.slice.call(document.querySelectorAll(".fbtn"));
  var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));

  /* ---------- Reading progress bar + nav shadow ---------- */

  function onScroll() {
    var st = window.scrollY || document.documentElement.scrollTop;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (st / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    if (nav) nav.classList.toggle("scrolled", st > 10);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Alternating left/right layout for timeline ---------- */

  function applyAlternating(addVisible) {
    var visibleIndex = 0;
    events.forEach(function (ev) {
      if (ev.classList.contains("hide")) return;
      ev.classList.toggle("right", visibleIndex % 2 === 1);
      if (addVisible) ev.classList.add("visible");
      visibleIndex++;
    });
  }

  applyAlternating(false);

  /* ---------- Timeline era filtering ---------- */

  fbuttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      fbuttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      var filter = btn.getAttribute("data-filter");

      events.forEach(function (ev) {
        var show = filter === "all" || ev.getAttribute("data-era") === filter;
        ev.classList.toggle("hide", !show);
      });

      applyAlternating(true);
    });
  });

  /* ---------- Reveal on scroll ---------- */

  var revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach(function (el) { revealObserver.observe(el); });

    /* ---------- Scroll-spy for nav links ---------- */

    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (sec) { spyObserver.observe(sec); });
  } else {
    revealItems.forEach(function (el) { el.classList.add("visible"); });
  }
})();
