(function () {
  "use strict";

  var tabs = Array.prototype.slice.call(document.querySelectorAll(".dyn-tab"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));
  var tabsBar = document.getElementById("dyn-tabs");

  function activate(name) {
    var found = false;

    tabs.forEach(function (tab) {
      var on = tab.getAttribute("data-tab") === name;
      tab.classList.toggle("active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.setAttribute("tabindex", on ? "0" : "-1");
      if (on) { found = true; }
    });

    if (!found) { return false; }

    panels.forEach(function (panel) {
      var on = panel.id === name;
      panel.hidden = !on;
      panel.classList.toggle("active", on);
    });

    return true;
  }

  function currentName() {
    return (window.location.hash || "").replace(/^#/, "");
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var name = tab.getAttribute("data-tab");
      if (!activate(name)) { return; }

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", "#" + name);
      }

      if (tabsBar && window.scrollY > tabsBar.offsetTop) {
        tabsBar.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    tab.addEventListener("keydown", function (event) {
      var index = tabs.indexOf(tab);
      var next = null;

      if (event.key === "ArrowRight") { next = tabs[(index + 1) % tabs.length]; }
      if (event.key === "ArrowLeft") { next = tabs[(index - 1 + tabs.length) % tabs.length]; }

      if (next) {
        event.preventDefault();
        next.focus();
        activate(next.getAttribute("data-tab"));
      }
    });
  });

  if (!activate(currentName())) {
    activate("mughals");
  }

  window.addEventListener("hashchange", function () {
    activate(currentName() || "mughals");
  });

  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
