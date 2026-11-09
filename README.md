# India History Hub

A merged site bringing together six learning projects, joined by a
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
- **India After 1857** (site root) - full arc from the 1857 revolt to modern India, across ten illustrated pages and a 101-event timeline.
- **UPSC Topic Explorer** (`upsc/`) - 100 beginner-friendly topics across
  polity, history, geography, science, technology, economics, environment,
  culture and international relations, picked at random with five key facts
  and verification links

## How to open

Live version: **https://india-history-hub.vercel.app** - auto-deploys from
this repo's `main` branch on every push.

Or run it locally: double-click `index.html`, or right-click it and choose
"Open with" your browser. No server or installation is required.

Note: all six sections work offline for their core content. The Chronicles
section loads its fonts/icons from a CDN and its portraits from Wikimedia
Commons, so it needs an internet connection. Source links in UPSC Topic
Explorer open external pages and also need a connection.

## Contents

### Freedom Struggle (root)

- **Hero** - introduction to the struggle (1857-1947)
- **Explore the Series** - links to the companion projects
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

### UPSC Topic Explorer (`upsc/`)

- One random topic at a time from ten categories: polity, Indian history,
  world history, geography, science, technology, economics, environment,
  culture and international relations
- Each card has a beginner introduction, five facts, a "why it matters" note,
  tags and two verification links
- Category filters, search, a no-repeat random cycle, progress tracking,
  dark mode and keyboard shortcuts (`Space`/`N` for next, `/` to search)

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
| `favicon.svg` | Hub icon: tricolour ring and gold Ashoka Chakra |
| `favicon.ico`, `favicon-16.png`, `favicon-32.png` | Browser favicon fallbacks |
| `apple-touch-icon.png` | Home-screen icon for iOS |
| `shared-nav.css` | Slim top bar styling shared by all sections |
| `reformers/` | Reformers of India site (own pages, CSS and images) |
| `chronicles/` | Chronicles of the Raj app (own HTML, CSS, JS) |
| `dynasties/` | Dynasties & Rulers page (own HTML, CSS, JS) |
| `upsc/` | UPSC Topic Explorer (own HTML, CSS, data and JS) |

## Navigation

Every page carries the same fixed top bar:

`India History Hub` | Freedom Struggle | Reformers | Chronicles of the Raj | Dynasties | After 1857 | UPSC Topics

The bar highlights the section you are currently in and links between the
six sections with plain relative links - no server needed.

## Features

- Freedom Struggle, Reformers, Dynasties, India After 1857 and UPSC Topic
  Explorer work fully offline, no external libraries
- Responsive: desktop, tablet and mobile layouts in all six sections
- Interactive timeline filtering with smooth reveal animations
- Expandable "More details" panels on cards (native `<details>`, no scripts)
- Reading progress bar and navigation scroll-spy

## Note

This is a concise educational overview of a vast history - many events and
heroes are not listed. Figures and dates follow the standard historical record.
