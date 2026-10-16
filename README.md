# India History Hub

A merged site bringing together four projects on Indian history, joined by a
shared slim top bar on every page:

- **Freedom Struggle** (site root) - single-page site covering India's freedom
  struggle, from the Revolt of 1857 to Independence on 15 August 1947
- **Reformers of India** (`reformers/`) - a gallery of twelve illustrated
  biographies of the social and religious reformers of the 19th and early
  20th centuries
- **Chronicles of the Raj** (`chronicles/`) - an interactive timeline of the
  Governors-General and Viceroys of British India (1773-1947)
- **Dynasties & Rulers** (`dynasties/`) - the Mughals, Marathas, the Nawabs of
  Awadh and Bengal, and the Rani of Jhansi, with their rulers and the major
  events of their times

## How to open

Double-click `index.html`, or right-click it and choose "Open with" your
browser. No server or installation is required.

Note: the Freedom Struggle, Reformers and Dynasties sections work fully
offline; the Chronicles section loads its fonts/icons from a CDN and its
portraits from Wikimedia Commons, so it needs an internet connection.

## Contents

### Freedom Struggle (root)

- **Hero** - introduction to the struggle (1857-1947)
- **Explore the Series** - links to the two companion projects
- **Background** - causes of the Revolt of 1857 and its immediate trigger,
  followed by "The Rise of Nationalism" - six forces that turned the failed
  revolt into an organised national movement
- **Timeline** - 23 milestone events from 1857 to 1947, with era filters
  (Early Struggle / Extremist Era / Gandhian Era / Final Push)
- **Movements** - the great movements in depth: Swadeshi (1905), Home Rule
  (1916), Non-Cooperation & Khilafat (1920-22), Civil Disobedience & Dandi
  (1930-34), Quit India (1942) and the Revolutionary stream - each with its
  causes, course and outcome
- **Leaders** - profiles of eleven key figures, plus more names
- **Legacy** - outcomes of the struggle and the Independence moment

### Reformers of India (`reformers/`)

- Home gallery, timeline and about pages, plus twelve profile pages
- Each profile covers life, work, key contributions and legacy

### Chronicles of the Raj (`chronicles/`)

- Interactive dark-themed timeline grouped by era: Bengal (1773-1833),
  India (1833-1858) and Viceroys (1858-1947)
- Click any figure for a detail panel with portrait and full profile

### Dynasties & Rulers (`dynasties/`)

- One page with five tabs: Mughals, Marathas, Awadh, Bengal and
  Jhansi & the Rani
- Each tab has the era's introduction, ruler cards with reign years and a
  timeline of major events; later rulers (after Aurangzeb, the Peshwas) are
  grouped into compact blocks
- Tabs are linkable, e.g. `dynasties/index.html#marathas`, and monogram
  avatars keep the whole section working offline

## Details on demand

In the Freedom Struggle section, nearly every card (causes, timeline events,
movements, leaders) carries a "More details" toggle that expands extra facts,
lists and context - keeping the page scannable while hiding the deeper
material one click away.

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Freedom Struggle home page (site root) |
| `style.css` | Freedom Struggle theme, layout, animations, expandable panels |
| `script.js` | Era filtering, scroll reveal, scroll-spy, progress bar |
| `shared-nav.css` | Slim top bar styling shared by all three sections |
| `reformers/` | Reformers of India site (own pages, CSS and images) |
| `chronicles/` | Chronicles of the Raj app (own HTML, CSS, JS) |
| `dynasties/` | Dynasties & Rulers page (own HTML, CSS, JS) |

## Navigation

Every page carries the same fixed top bar:

`India History Hub` | Freedom Struggle | Reformers | Chronicles of the Raj | Dynasties

The bar highlights the section you are currently in and links between the
four projects with plain relative links - no server needed.

## Features

- Freedom Struggle, Reformers and Dynasties work fully offline, no external libraries
- Responsive: desktop, tablet and mobile layouts in all four sections
- Interactive timeline filtering with smooth reveal animations
- Expandable "More details" panels on cards (native `<details>`, no scripts)
- Reading progress bar and navigation scroll-spy

## Note

This is a concise educational overview of a vast history - many events and
heroes are not listed. Figures and dates follow the standard historical record.
