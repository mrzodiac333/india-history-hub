(function () {
  function centerActive() {
    var links = document.querySelector(".hubbar-links");
    if (!links) return;
    var active = links.querySelector("a.active");
    if (!active) return;
    var target = active.offsetLeft - (links.clientWidth - active.offsetWidth) / 2;
    links.scrollLeft = Math.max(0, target);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", centerActive);
  } else {
    requestAnimationFrame(centerActive);
  }
})();
