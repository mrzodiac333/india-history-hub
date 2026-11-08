/* India After 1857 — shared site behaviour: theme, nav, progress, reveal, back-to-top */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  /* ---------- Theme ---------- */
  var forcedTheme = null;
  try {
    forcedTheme = new URLSearchParams(location.search).get("theme");
  } catch (e) { /* ignore */ }

  try {
    var saved = localStorage.getItem("ia1857-theme");
    if (forcedTheme === "light" || forcedTheme === "dark") {
      root.setAttribute("data-theme", forcedTheme);
    } else if (saved) {
      root.setAttribute("data-theme", saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.setAttribute("data-theme", "dark");
    }
  } catch (e) { /* storage unavailable */ }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function syncThemeButtons() {
    var dark = currentTheme() === "dark";
    document.querySelectorAll(".theme-btn").forEach(function (btn) {
      btn.textContent = dark ? "\u2600\uFE0F" : "\uD83C\uDF19";
      btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      btn.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  document.addEventListener("click", function (ev) {
    var t = ev.target.closest ? ev.target.closest(".theme-btn") : null;
    if (t) {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("ia1857-theme", next); } catch (e) { /* ignore */ }
      syncThemeButtons();
    }
  });

  /* ---------- Mobile nav ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
    nav.addEventListener("click", function (ev) {
      if (ev.target.tagName === "A") {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Active nav link ---------- */
  var here = location.pathname.split(/[\\/]/).pop() || "index.html";
  if (here === "") { here = "index.html"; }
  document.querySelectorAll(".nav a").forEach(function (a) {
    var target = (a.getAttribute("href") || "").split("#")[0];
    if (target === here) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });

  /* ---------- Scroll progress + back to top ---------- */
  var bar = document.querySelector(".page-progress");
  var topBtn = document.querySelector(".to-top");

  function onScroll() {
    var el = document.documentElement;
    var max = el.scrollHeight - el.clientHeight;
    var p = max > 0 ? el.scrollTop / max : 0;
    if (bar) { bar.style.transform = "scaleX(" + p + ")"; }
    if (topBtn) { topBtn.classList.toggle("show", el.scrollTop > 500); }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  if (topBtn) {
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  syncThemeButtons();
})();
