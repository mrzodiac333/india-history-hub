/* UPSC Topic Explorer — random topic picker, filters, search, progress */
(function () {
  "use strict";

  var TOPICS = Array.isArray(window.UPSC_TOPICS) ? window.UPSC_TOPICS : [];
  var CATEGORIES = Array.isArray(window.UPSC_CATEGORIES) ? window.UPSC_CATEGORIES : [];

  var SEEN_KEY = "ut-seen-v1";
  var THEME_KEY = "ut-theme";

  var root = document.documentElement;
  var topicRegion = document.getElementById("topicRegion");
  var chipsWrap = document.getElementById("categoryChips");
  var surpriseBtn = document.getElementById("surpriseBtn");
  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");
  var searchBox = searchInput ? searchInput.closest(".search-box") : null;
  var progressText = document.getElementById("progressText");
  var progressBar = document.getElementById("progressBar");
  var progressFill = document.getElementById("progressFill");
  var resetBtn = document.getElementById("resetBtn");
  var themeBtn = document.querySelector(".theme-btn");
  var themeLabel = document.querySelector(".theme-label");
  var toastEl = document.getElementById("toast");

  var categoryById = {};
  CATEGORIES.forEach(function (cat) { categoryById[cat.id] = cat; });

  var topicsByCategory = {};
  CATEGORIES.forEach(function (cat) { topicsByCategory[cat.id] = []; });
  TOPICS.forEach(function (topic) {
    topic._search = [
      topic.title,
      topic.hook,
      topic.why,
      (topic.tags || []).join(" "),
      categoryName(topic.category)
    ].join(" ").toLowerCase();
    if (!topicsByCategory[topic.category]) { topicsByCategory[topic.category] = []; }
    topicsByCategory[topic.category].push(topic);
  });

  var currentCategory = "all";
  var currentId = null;
  var seen = loadSeen();
  var toastTimer = null;
  var searchActiveIndex = -1;
  var searchMatches = [];

  function categoryName(id) {
    return categoryById[id] ? categoryById[id].name : id;
  }

  function loadSeen() {
    var set = new Set();
    try {
      var raw = localStorage.getItem(SEEN_KEY);
      if (raw) {
        var arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          arr.forEach(function (id) { if (typeof id === "string") { set.add(id); } });
        }
      }
    } catch (e) { /* storage unavailable */ }
    return set;
  }

  function saveSeen() {
    try {
      localStorage.setItem(SEEN_KEY, JSON.stringify(Array.from(seen)));
    } catch (e) { /* storage unavailable */ }
  }

  function saveTheme(theme) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage unavailable */ }
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (typeof text === "string") { node.textContent = text; }
    return node;
  }

  function toast(message) {
    if (!toastEl) { return; }
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2800);
  }

  function seenCountFor(categoryId) {
    var list = categoryId === "all" ? TOPICS : (topicsByCategory[categoryId] || []);
    var count = 0;
    list.forEach(function (t) { if (seen.has(t.id)) { count += 1; } });
    return count;
  }

  function totalFor(categoryId) {
    return categoryId === "all" ? TOPICS.length : (topicsByCategory[categoryId] || []).length;
  }

  function buildChips() {
    if (!chipsWrap) { return; }
    chipsWrap.innerHTML = "";

    var entries = [{ id: "all", name: "All topics" }].concat(CATEGORIES);
    entries.forEach(function (entry) {
      var chip = el("button", "chip");
      chip.type = "button";
      chip.setAttribute("aria-pressed", entry.id === currentCategory ? "true" : "false");
      chip.dataset.category = entry.id;

      var dot = el("span", "dot cat-" + entry.id);
      dot.setAttribute("aria-hidden", "true");
      chip.appendChild(dot);

      chip.appendChild(document.createTextNode(entry.name));

      var count = el("span", "count");
      count.dataset.countFor = entry.id;
      chip.appendChild(count);

      chip.addEventListener("click", function () {
        currentCategory = entry.id;
        syncChipStates();
        showRandom(false);
      });

      chipsWrap.appendChild(chip);
    });

    syncChipStates();
  }

  function syncChipStates() {
    if (!chipsWrap) { return; }
    var chips = chipsWrap.querySelectorAll(".chip");
    Array.prototype.forEach.call(chips, function (chip) {
      var id = chip.dataset.category;
      chip.setAttribute("aria-pressed", id === currentCategory ? "true" : "false");
      var countEl = chip.querySelector(".count");
      if (countEl) {
        countEl.textContent = seenCountFor(id) + "/" + totalFor(id);
      }
    });
  }

  function updateProgress() {
    var total = TOPICS.length;
    var count = seenCountFor("all");
    var percent = total ? Math.round((count / total) * 100) : 0;

    if (progressText) {
      progressText.textContent = "Explored " + count + " of " + total + " topics (" + percent + "%)";
    }
    if (progressBar) {
      progressBar.setAttribute("aria-valuenow", String(percent));
      progressBar.setAttribute("aria-valuetext", count + " of " + total + " topics explored");
    }
    if (progressFill) {
      progressFill.style.width = percent + "%";
    }

    syncChipStates();
  }

  function markSeen(id) {
    if (!seen.has(id)) {
      seen.add(id);
      saveSeen();
    }
  }

  function topicsInPool(categoryId) {
    return categoryId === "all" ? TOPICS.slice() : (topicsByCategory[categoryId] || []).slice();
  }

  function showRandom(silentReset) {
    var pool = topicsInPool(currentCategory);
    if (!pool.length) {
      renderEmpty("No topics found for this filter.");
      return;
    }

    var unseen = pool.filter(function (t) { return !seen.has(t.id); });
    var resetMessage = "";

    if (!unseen.length) {
      pool.forEach(function (t) { seen.delete(t.id); });
      saveSeen();
      resetMessage = currentCategory === "all"
        ? "You explored every topic. A new cycle has started."
        : "You explored every topic in " + categoryName(currentCategory) + ". That category has been reset.";
      unseen = pool.slice();
    }

    var options = unseen.length > 1
      ? unseen.filter(function (t) { return t.id !== currentId; })
      : unseen;
    if (!options.length) { options = unseen; }

    var pick = options[Math.floor(Math.random() * options.length)];
    currentId = pick.id;
    markSeen(pick.id);
    renderTopic(pick);
    updateProgress();

    if (resetMessage && !silentReset) { toast(resetMessage); }
  }

  function renderTopic(topic) {
    if (!topicRegion) { return; }

    var catTopics = topicsByCategory[topic.category] || [];
    var position = catTopics.indexOf(topic) + 1;
    var total = catTopics.length;

    var card = el("article", "topic-card cat-" + topic.category);

    var top = el("div", "topic-top");
    var badge = el("span", "badge cat-" + topic.category, categoryName(topic.category));
    top.appendChild(badge);
    top.appendChild(el("span", "topic-position",
      "Topic " + position + " of " + total + " in this category"));
    card.appendChild(top);

    card.appendChild(el("h2", "topic-title", topic.title));
    card.appendChild(el("p", "topic-hook", topic.hook));
    card.appendChild(el("p", "topic-intro", topic.intro));

    var facts = el("ol", "facts");
    (topic.facts || []).forEach(function (fact) {
      facts.appendChild(el("li", "", fact));
    });
    card.appendChild(facts);

    if (topic.why) {
      var why = el("div", "why");
      why.appendChild(el("h3", "", "Why it matters"));
      why.appendChild(el("p", "", topic.why));
      card.appendChild(why);
    }

    if (topic.sources && topic.sources.length) {
      var sources = el("div", "sources");
      sources.appendChild(el("span", "sources-label", "Verify"));
      topic.sources.forEach(function (source, i) {
        if (i > 0) {
          sources.appendChild(el("span", "sep", "·"));
        }
        var link = el("a", "", source.label);
        link.href = source.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        sources.appendChild(link);
      });
      card.appendChild(sources);
    }

    var actions = el("div", "card-actions");
    var nextBtn = el("button", "btn btn-next", "Next random topic");
    nextBtn.type = "button";
    nextBtn.id = "nextBtn";
    actions.appendChild(nextBtn);

    var hint = el("span", "kbd-hint");
    hint.innerHTML = "or press <kbd>Space</kbd> / <kbd>N</kbd>. Press <kbd>/</kbd> to search.";
    actions.appendChild(hint);

    card.appendChild(actions);

    topicRegion.innerHTML = "";
    topicRegion.appendChild(card);

    card.classList.add("enter");
    window.setTimeout(function () { card.classList.remove("enter"); }, 500);

    var next = card.querySelector(".btn-next");
    if (next) {
      next.addEventListener("click", function () { showRandom(false); });
    }
  }

  function renderEmpty(message) {
    if (!topicRegion) { return; }
    topicRegion.innerHTML = "";
    var box = el("div", "topic-card empty-state", message);
    topicRegion.appendChild(box);
  }

  /* ---------- search ---------- */

  function openResults() {
    if (!searchResults) { return; }
    searchResults.hidden = false;
    if (searchInput) { searchInput.setAttribute("aria-expanded", "true"); }
  }

  function closeResults() {
    if (!searchResults) { return; }
    searchResults.hidden = true;
    searchActiveIndex = -1;
    if (searchInput) { searchInput.setAttribute("aria-expanded", "false"); }
  }

  function renderSearchResults(query) {
    if (!searchResults || !searchInput) { return; }

    var q = query.trim().toLowerCase();
    if (!q) {
      searchMatches = [];
      closeResults();
      return;
    }

    searchMatches = TOPICS.filter(function (t) {
      return t._search.indexOf(q) !== -1;
    }).slice(0, 8);

    searchResults.innerHTML = "";
    searchActiveIndex = -1;

    if (!searchMatches.length) {
      searchResults.appendChild(el("div", "no-results", "No topics match \u201C" + query.trim() + "\u201D."));
      openResults();
      return;
    }

    searchMatches.forEach(function (topic, index) {
      var btn = el("button", "result");
      btn.type = "button";
      btn.setAttribute("role", "option");
      btn.setAttribute("aria-selected", "false");
      btn.dataset.index = String(index);
      btn.appendChild(el("span", "result-title", topic.title));
      btn.appendChild(el("span", "result-cat", categoryName(topic.category)));
      btn.addEventListener("click", function () { selectTopic(topic); });
      btn.addEventListener("mouseenter", function () { setActiveResult(index); });
      searchResults.appendChild(btn);
    });

    openResults();
  }

  function setActiveResult(index) {
    searchActiveIndex = index;
    if (!searchResults) { return; }
    var nodes = searchResults.querySelectorAll(".result");
    Array.prototype.forEach.call(nodes, function (node, i) {
      node.classList.toggle("active", i === index);
      node.setAttribute("aria-selected", i === index ? "true" : "false");
    });
  }

  function selectTopic(topic) {
    currentId = topic.id;
    markSeen(topic.id);
    renderTopic(topic);
    updateProgress();
    if (searchInput) { searchInput.value = ""; }
    closeResults();
  }

  function moveActive(delta) {
    if (!searchResults || searchResults.hidden || !searchMatches.length) { return; }
    var count = searchMatches.length;
    var next = searchActiveIndex + delta;
    if (next < 0) { next = count - 1; }
    if (next >= count) { next = 0; }
    setActiveResult(next);
    var active = searchResults.querySelector(".result.active");
    if (active && active.scrollIntoView) { active.scrollIntoView({ block: "nearest" }); }
  }

  /* ---------- theme ---------- */

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    if (themeBtn) {
      var dark = theme === "dark";
      themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
      themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      themeBtn.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
    }
    if (themeLabel) {
      themeLabel.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }
  }

  function initTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved === "dark" || saved === "light") {
        applyTheme(saved);
      } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        applyTheme("dark");
      } else {
        applyTheme("light");
      }
    } catch (e) {
      applyTheme("light");
    }
  }

  /* ---------- keyboard ---------- */

  function isTypingTarget(target) {
    if (!target || !target.closest) { return false; }
    return !!target.closest("input, textarea, select, button, a, [contenteditable='true']");
  }

  document.addEventListener("keydown", function (event) {
    if (!searchInput) { return; }

    if (document.activeElement === searchInput) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveActive(1);
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        moveActive(-1);
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        if (searchActiveIndex >= 0 && searchMatches[searchActiveIndex]) {
          selectTopic(searchMatches[searchActiveIndex]);
        } else if (searchMatches.length) {
          selectTopic(searchMatches[0]);
        }
        return;
      }
      if (event.key === "Escape") {
        closeResults();
        searchInput.blur();
        return;
      }
    }

    if (event.key === "/" && !isTypingTarget(event.target)) {
      event.preventDefault();
      searchInput.focus();
      return;
    }

    if ((event.key === " " || event.key === "n" || event.key === "N") && !isTypingTarget(event.target)) {
      event.preventDefault();
      showRandom(false);
    }
  });

  /* ---------- wiring ---------- */

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      saveTheme(next);
    });
  }

  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", function () { showRandom(false); });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      if (!seen.size) {
        toast("No progress to reset yet.");
        return;
      }
      seen.clear();
      saveSeen();
      updateProgress();
      toast("Progress reset. All topics are back in the mix.");
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      renderSearchResults(searchInput.value);
    });
    searchInput.addEventListener("focus", function () {
      if (searchInput.value.trim()) { renderSearchResults(searchInput.value); }
    });
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeResults();
        searchInput.blur();
      }
    });
  }

  document.addEventListener("click", function (event) {
    if (searchBox && !searchBox.contains(event.target)) { closeResults(); }
  });

  /* ---------- init ---------- */

  initTheme();
  buildChips();
  updateProgress();

  if (TOPICS.length) {
    showRandom(true);
  } else {
    renderEmpty("No topics loaded. Check that the data files are present.");
  }
})();
