var WARS_DATA = WARS_A.concat(WARS_B);

var ERA_LABELS = {
  foundations: "Foundations",
  "mughal-twilight": "Mughal Twilight",
  "company-expansion": "Company Expansion",
  "frontier-sikh": "Maratha, Sikh & Frontier",
  "crown-resistance": "Crown Rule & Resistance"
};

var TYPE_LABELS = {
  british: "British War",
  indian: "Indian War",
  european: "European Rivalry",
  uprising: "Uprising"
};

var ROLE_LABELS = {
  belligerent: "Belligerent",
  ally: "Ally",
  neutral: "Not involved",
  indirect: "Indirect involvement"
};

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getWarById(id) {
  for (var i = 0; i < WARS_DATA.length; i += 1) {
    if (WARS_DATA[i].id === id) return WARS_DATA[i];
  }
  return null;
}

function formatYear(year) {
  return String(year);
}

function formatReign(ruler) {
  if (ruler.start === ruler.end) return formatYear(ruler.start);
  return formatYear(ruler.start) + "–" + formatYear(ruler.end);
}

function powerName(key) {
  if (key === "british") return "British India";
  return POWERS[key] ? POWERS[key].name : key;
}

function eraLabel(key) {
  return ERA_LABELS[key] || key;
}

function typeLabel(key) {
  return TYPE_LABELS[key] || key;
}

function roleLabel(key) {
  return ROLE_LABELS[key] || "Not involved";
}

function getRulersForWar(war) {
  var rows = [];
  Object.keys(POWERS).forEach(function (key) {
    var power = POWERS[key];
    var rulers = power.rulers.filter(function (ruler) {
      return ruler.start <= war.end && ruler.end >= war.start;
    });
    if (!rulers.length) return;
    rows.push({
      key: key,
      power: power,
      rulers: rulers,
      role: war.involvement && war.involvement[key] ? war.involvement[key] : "neutral",
      note: war.rulerNotes && war.rulerNotes[key] ? war.rulerNotes[key] : ""
    });
  });
  return rows;
}

function getBritishHeadsForWar(war) {
  if (!war.britishScopes || !war.britishScopes.length) return [];
  return BRITISH_HEADS.filter(function (head) {
    return war.britishScopes.indexOf(head.scope) !== -1 &&
      head.start <= war.end && head.end >= war.start;
  }).sort(function (a, b) {
    return a.start - b.start;
  });
}

function renderRulersTable(war) {
  var rows = getRulersForWar(war);
  var body = rows.map(function (row) {
    var rulerHtml = row.rulers.map(function (ruler) {
      return "<span class=\"ruler-name\">" + escapeHtml(ruler.name) + "</span>" +
        "<span class=\"ruler-title\">" + escapeHtml(ruler.title) + "</span>";
    }).join("<span class=\"ruler-divider\" aria-hidden=\"true\"></span>");
    var reigns = row.rulers.map(function (ruler) {
      return "<span>" + escapeHtml(formatReign(ruler)) + "</span>";
    }).join("<br>");
    var roleText = roleLabel(row.role);
    var note = row.note ? "<p class=\"role-note\">" + escapeHtml(row.note) + "</p>" : "";
    return "<tr class=\"role-" + escapeHtml(row.role) + "\">" +
      "<th scope=\"row\"><span class=\"power-name\">" + escapeHtml(row.power.name) + "</span>" +
      "<span class=\"power-region\">" + escapeHtml(row.power.region) + "</span></th>" +
      "<td><div class=\"ruler-list\">" + rulerHtml + "</div></td>" +
      "<td class=\"reign-cell\">" + reigns + "</td>" +
      "<td><span class=\"role-badge role-" + escapeHtml(row.role) + "\">" + escapeHtml(roleText) + "</span>" + note + "</td>" +
      "</tr>";
  }).join("");

  return "<div class=\"table-wrap\">" +
    "<table class=\"rulers-table\">" +
    "<caption>Rulers of the major powers at the time of this war</caption>" +
    "<thead><tr><th scope=\"col\">Power / region</th><th scope=\"col\">Ruler</th><th scope=\"col\">Reign</th><th scope=\"col\">Role in this war</th></tr></thead>" +
    "<tbody>" + body + "</tbody>" +
    "</table>" +
    "</div>" +
    "<p class=\"table-note\">Powers not yet established are omitted. Where a ruler's reign overlapped only part of the war, the full reign is shown. Maratha Chhatrapati and Peshwa, and Mysore's Wodeyar and effective rulers, are listed separately.</p>";
}

function renderBritishPanel(war) {
  var heads = getBritishHeadsForWar(war);
  var roleText = {
    belligerent: "Britain was a belligerent in this conflict.",
    neutral: "Britain was not a belligerent; these administrators governed British India at the time.",
    indirect: "Britain was indirectly involved in this conflict.",
    "not-present": "No British territorial government existed in India at the time."
  }[war.britishRole] || "Britain's role is shown for context.";

  if (!heads.length) {
    return "<section class=\"british-panel\">" +
      "<div class=\"panel-heading\"><span class=\"eyebrow\">British India</span><h2>Governor-General / Viceroy</h2></div>" +
      "<p class=\"panel-role\">" + escapeHtml(roleText) + "</p>" +
      "<p class=\"panel-note\">" + escapeHtml(war.britishNote || "No British administrator is recorded for this period.") + "</p>" +
      "</section>";
  }

  var list = heads.map(function (head) {
    return "<article class=\"british-card\">" +
      "<div class=\"british-years\">" + escapeHtml(formatYear(head.start)) + "–" + escapeHtml(formatYear(head.end)) + "</div>" +
      "<h3>" + escapeHtml(head.name) + "</h3>" +
      "<p class=\"british-title\">" + escapeHtml(head.title) + "</p>" +
      "<p class=\"british-note\">" + escapeHtml(head.note) + "</p>" +
      "</article>";
  }).join("");

  return "<section class=\"british-panel\">" +
    "<div class=\"panel-heading\"><span class=\"eyebrow\">British India</span><h2>Governor-General / Viceroy at the time</h2></div>" +
    "<p class=\"panel-role\">" + escapeHtml(roleText) + "</p>" +
    "<div class=\"british-grid\">" + list + "</div>" +
    "<p class=\"panel-note\">" + escapeHtml(war.britishNote || "") + "</p>" +
    "</section>";
}

function renderBelligerents(war) {
  return war.belligerents.map(function (side) {
    var powers = side.powers.map(powerName).join(", ");
    var commanders = side.commanders.map(escapeHtml).join(", ");
    return "<div class=\"belligerent\">" +
      "<h3>" + escapeHtml(side.side) + "</h3>" +
      "<p class=\"belligerent-powers\">" + escapeHtml(powers) + "</p>" +
      "<p class=\"belligerent-commanders\"><span>Commanders:</span> " + commanders + "</p>" +
      "</div>";
  }).join("");
}

function renderKeyBattles(war) {
  return "<ol class=\"battle-list\">" + war.keyBattles.map(function (battle) {
    return "<li><span class=\"battle-year\">" + escapeHtml(battle.year) + "</span>" +
      "<div><h3>" + escapeHtml(battle.name) + "</h3><p>" + escapeHtml(battle.note) + "</p></div></li>";
  }).join("") + "</ol>";
}

function renderRelated(war) {
  var related = war.related.map(getWarById).filter(Boolean);
  if (!related.length) return "";
  return "<section class=\"related-section\">" +
    "<div class=\"section-heading\"><span class=\"eyebrow\">Keep exploring</span><h2>Related conflicts</h2></div>" +
    "<div class=\"related-grid\">" + related.map(function (item) {
      return "<a class=\"related-card\" href=\"war.html?war=" + encodeURIComponent(item.id) + "\">" +
        "<span class=\"related-era\">" + escapeHtml(eraLabel(item.era)) + "</span>" +
        "<span class=\"related-years\">" + escapeHtml(item.years) + "</span>" +
        "<h3>" + escapeHtml(item.title) + "</h3>" +
        "<p>" + escapeHtml(item.summary) + "</p>" +
        "</a>";
    }).join("") + "</div></section>";
}

function renderSources(war) {
  return "<section class=\"sources-section\">" +
    "<div class=\"section-heading\"><span class=\"eyebrow\">Further reading</span><h2>Sources</h2></div>" +
    "<ul class=\"source-list\">" + war.sources.map(function (source) {
      return "<li>" + escapeHtml(source) + "</li>";
    }).join("") + "</ul>" +
    "<p class=\"source-note\">Dates and reign spans follow standard reference works; where sources differ, the most widely accepted dating is used.</p>" +
    "</section>";
}

function renderDetail() {
  var params = new URLSearchParams(window.location.search);
  var id = params.get("war");
  var war = getWarById(id);
  var target = document.getElementById("war-detail");
  if (!target) return;

  if (!war) {
    target.innerHTML = "<section class=\"empty-state\">" +
      "<span class=\"eyebrow\">Dossier not found</span>" +
      "<h1>That war is not in the archive</h1>" +
      "<p>The link may be incomplete. Return to the war index to choose a conflict.</p>" +
      "<a class=\"btn btn-primary\" href=\"index.html\">Browse all wars</a>" +
      "</section>";
    document.title = "War not found | Wars of India";
    return;
  }

  var sorted = WARS_DATA.slice().sort(function (a, b) { return a.start - b.start; });
  var index = sorted.findIndex(function (item) { return item.id === war.id; });
  var previous = index > 0 ? sorted[index - 1] : null;
  var next = index < sorted.length - 1 ? sorted[index + 1] : null;

  document.title = war.title + " (" + war.years + ") | Wars of India";
  var meta = document.querySelector("meta[name=\"description\"]");
  if (meta) meta.setAttribute("content", war.summary);

  target.innerHTML = "<article class=\"war-dossier\">" +
    "<nav class=\"breadcrumb\" aria-label=\"Breadcrumb\"><a href=\"index.html\">Wars</a><span aria-hidden=\"true\">/</span><a href=\"index.html#era-" + escapeHtml(war.era) + "\">" + escapeHtml(eraLabel(war.era)) + "</a><span aria-hidden=\"true\">/</span><span>" + escapeHtml(war.title) + "</span></nav>" +
    "<header class=\"dossier-hero\">" +
      "<div class=\"dossier-tags\"><span class=\"era-tag\">" + escapeHtml(eraLabel(war.era)) + "</span><span class=\"type-tag type-" + escapeHtml(war.type) + "\">" + escapeHtml(typeLabel(war.type)) + "</span></div>" +
      "<h1>" + escapeHtml(war.title) + "</h1>" +
      "<p class=\"dossier-years\">" + escapeHtml(war.years) + " · " + escapeHtml(war.region) + "</p>" +
      "<p class=\"dossier-summary\">" + escapeHtml(war.summary) + "</p>" +
      "<p class=\"dossier-result\"><span>Result</span> " + escapeHtml(war.result) + "</p>" +
    "</header>" +
    "<section class=\"glance-grid\" aria-label=\"At a glance\">" +
      "<div class=\"glance-card glance-belligerents\"><h2>Belligerents</h2>" + renderBelligerents(war) + "</div>" +
      "<div class=\"glance-card\"><h2>Key facts</h2><dl class=\"fact-list\">" +
        "<div><dt>Region</dt><dd>" + escapeHtml(war.region) + "</dd></div>" +
        "<div><dt>Key battles</dt><dd>" + war.keyBattles.length + " recorded</dd></div>" +
        "<div><dt>Treaty / settlement</dt><dd>" + escapeHtml(war.treaty) + "</dd></div>" +
        "<div><dt>Outcome</dt><dd>" + escapeHtml(war.result) + "</dd></div>" +
      "</dl></div>" +
    "</section>" +
    "<section class=\"narrative-section\"><h2>Background and causes</h2><p>" + escapeHtml(war.sections.background) + "</p></section>" +
    "<section class=\"narrative-section\"><h2>Course of the war</h2><p>" + escapeHtml(war.sections.course) + "</p></section>" +
    "<section class=\"narrative-section\"><h2>Outcome and settlement</h2><p>" + escapeHtml(war.sections.outcome) + "</p></section>" +
    "<section class=\"narrative-section\"><h2>Aftermath</h2><p>" + escapeHtml(war.sections.aftermath) + "</p></section>" +
    "<section class=\"battles-section\"><div class=\"section-heading\"><span class=\"eyebrow\">Turning points</span><h2>Key battles and events</h2></div>" + renderKeyBattles(war) + "</section>" +
    "<section class=\"rulers-section\"><div class=\"section-heading\"><span class=\"eyebrow\">Who ruled when</span><h2>Rulers at the time of the war</h2></div>" + renderRulersTable(war) + "</section>" +
    renderBritishPanel(war) +
    renderRelated(war) +
    renderSources(war) +
    "<nav class=\"dossier-nav\" aria-label=\"Previous and next war\">" +
      (previous ? "<a class=\"dossier-prev\" href=\"war.html?war=" + encodeURIComponent(previous.id) + "\"><span>Previous</span><strong>" + escapeHtml(previous.title) + "</strong></a>" : "<span></span>") +
      (next ? "<a class=\"dossier-next\" href=\"war.html?war=" + encodeURIComponent(next.id) + "\"><span>Next</span><strong>" + escapeHtml(next.title) + "</strong></a>" : "<span></span>") +
    "</nav>" +
  "</article>";
}

function warCard(war) {
  var belligerents = war.belligerents.map(function (side) {
    return side.side;
  }).join(" vs ");
  return "<a class=\"war-card\" href=\"war.html?war=" + encodeURIComponent(war.id) + "\" data-era=\"" + escapeHtml(war.era) + "\" data-type=\"" + escapeHtml(war.type) + "\" data-search=\"" + escapeHtml((war.title + " " + war.years + " " + war.region + " " + war.summary + " " + belligerents + " " + war.result).toLowerCase()) + "\">" +
    "<div class=\"card-top\"><span class=\"era-tag\">" + escapeHtml(eraLabel(war.era)) + "</span><span class=\"type-tag type-" + escapeHtml(war.type) + "\">" + escapeHtml(typeLabel(war.type)) + "</span></div>" +
    "<span class=\"card-years\">" + escapeHtml(war.years) + "</span>" +
    "<h3>" + escapeHtml(war.title) + "</h3>" +
    "<p class=\"card-summary\">" + escapeHtml(war.summary) + "</p>" +
    "<p class=\"card-belligerents\">" + escapeHtml(belligerents) + "</p>" +
    "<span class=\"card-result\">" + escapeHtml(war.result) + "</span>" +
    "<span class=\"card-go\">Open dossier <span aria-hidden=\"true\">→</span></span>" +
    "</a>";
}

function renderLanding() {
  var grid = document.getElementById("war-grid");
  if (!grid) return;

  var search = document.getElementById("war-search");
  var count = document.getElementById("war-count");
  var eraFilters = document.getElementById("era-filters");
  var typeFilters = document.getElementById("type-filters");
  var timeline = document.getElementById("war-timeline");
  var eras = [];
  var types = [];
  WARS_DATA.forEach(function (war) {
    if (eras.indexOf(war.era) === -1) eras.push(war.era);
    if (types.indexOf(war.type) === -1) types.push(war.type);
  });

  function eraFromHash() {
    var match = /^#era-(.+)$/.exec(window.location.hash || "");
    if (!match) return null;
    return eras.indexOf(match[1]) !== -1 ? match[1] : null;
  }

  var initialEra = eraFromHash();
  var state = { era: initialEra || "all", type: "all", query: "" };

  function chip(label, value, group, active) {
    return "<button type=\"button\" class=\"filter-chip" + (active ? " active" : "") + "\" data-group=\"" + group + "\" data-value=\"" + escapeHtml(value) + "\" aria-pressed=\"" + (active ? "true" : "false") + "\">" + escapeHtml(label) + "</button>";
  }

  function renderFilters() {
    if (eraFilters) {
      eraFilters.innerHTML = chip("All eras", "all", "era", state.era === "all") +
        eras.map(function (era) {
          var n = WARS_DATA.filter(function (war) { return war.era === era; }).length;
          return chip(eraLabel(era) + " (" + n + ")", era, "era", state.era === era);
        }).join("");
    }
    if (typeFilters) {
      typeFilters.innerHTML = chip("All types", "all", "type", state.type === "all") +
        types.map(function (type) {
          var n = WARS_DATA.filter(function (war) { return war.type === type; }).length;
          return chip(typeLabel(type) + " (" + n + ")", type, "type", state.type === type);
        }).join("");
    }
  }

  function filteredWars() {
    var query = state.query.trim().toLowerCase();
    return WARS_DATA.filter(function (war) {
      if (state.era !== "all" && war.era !== state.era) return false;
      if (state.type !== "all" && war.type !== state.type) return false;
      if (!query) return true;
      var haystack = (war.title + " " + war.years + " " + war.region + " " + war.summary + " " + war.result + " " +
        war.belligerents.map(function (side) { return side.side + " " + side.powers.map(powerName).join(" "); }).join(" ")).toLowerCase();
      return haystack.indexOf(query) !== -1;
    }).sort(function (a, b) { return a.start - b.start; });
  }

  function renderGrid() {
    var wars = filteredWars();
    if (!wars.length) {
      grid.innerHTML = "<div class=\"empty-state\"><h2>No conflicts match those filters</h2><p>Try another era, type or search term.</p></div>";
    } else {
      grid.innerHTML = wars.map(warCard).join("");
    }
    if (count) count.textContent = "Showing " + wars.length + " of " + WARS_DATA.length + " conflicts";
  }

  function renderTimeline() {
    if (!timeline) return;
    var sorted = WARS_DATA.slice().sort(function (a, b) { return a.start - b.start; });
    timeline.innerHTML = sorted.map(function (war) {
      return "<a class=\"timeline-item\" href=\"war.html?war=" + encodeURIComponent(war.id) + "\">" +
        "<span class=\"timeline-dot\" aria-hidden=\"true\"></span>" +
        "<span class=\"timeline-year\">" + escapeHtml(war.years) + "</span>" +
        "<span class=\"timeline-name\">" + escapeHtml(war.title) + "</span>" +
        "</a>";
    }).join("");
  }

  function bindFilters() {
    [eraFilters, typeFilters].forEach(function (container) {
      if (!container) return;
      container.addEventListener("click", function (event) {
        var button = event.target.closest(".filter-chip");
        if (!button) return;
        var group = button.getAttribute("data-group");
        state[group] = button.getAttribute("data-value");
        if (group === "era") {
          if (state.era === "all") {
            history.replaceState(null, "", window.location.pathname + window.location.search);
          } else {
            history.replaceState(null, "", "#era-" + state.era);
          }
        }
        renderFilters();
        renderGrid();
      });
    });
  }

  if (search) {
    search.addEventListener("input", function () {
      state.query = search.value;
      renderGrid();
    });
  }

  renderFilters();
  renderGrid();
  renderTimeline();
  bindFilters();

  window.addEventListener("hashchange", function () {
    if (window.location.hash.indexOf("#era-") !== 0) return;
    state.era = eraFromHash() || "all";
    renderFilters();
    renderGrid();
  });

  if (initialEra) {
    var indexSection = document.getElementById("war-index");
    if (indexSection) indexSection.scrollIntoView();
  }
}

function init() {
  var page = document.body.getAttribute("data-page");
  if (page === "wars-home") renderLanding();
  if (page === "wars-detail") renderDetail();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
