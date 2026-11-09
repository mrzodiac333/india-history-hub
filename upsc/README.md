# UPSC Topic Explorer

A small, dependency-free website that picks a random UPSC-relevant topic and explains it from scratch: a short introduction, five facts, why it matters, and links to verify the details.

## Features

- 100 curated topics across 10 categories:
  - Polity & Constitution
  - Indian History
  - World History
  - Geography
  - Science
  - Technology
  - Economics
  - Environment & Ecology
  - Art & Culture
  - International Relations
- "Surprise me" random topic picker
- Category filters with seen/total counts
- Search by title, keyword or tag
- No-repeat cycle: a topic is not shown again until every topic in the current filter has been seen (stored in `localStorage`)
- Progress tracker with reset
- Dark mode, remembered between visits
- Keyboard shortcuts: `Space` or `N` for the next topic, `/` to focus search
- Fully offline, no external fonts, images, trackers or APIs

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```powershell
python -m http.server 8000
```

Then visit http://localhost:8000

## Project structure

```
upsc-topics/
├── index.html            Page shell
├── css/style.css         Styles and dark theme
├── js/data-part1.js      Categories + 50 topics (polity, history, geography, science)
├── js/data-part2.js      50 topics (technology, economics, environment, culture, IR)
├── js/app.js             Random picker, filters, search, progress, theme
├── README.md
└── .nojekyll             For GitHub Pages
```

## Adding or editing topics

Topics live in `js/data-part1.js` and `js/data-part2.js`. Each topic uses this shape:

```js
{
  id: "polity-preamble",
  category: "polity",
  title: "The Preamble",
  hook: "One line that makes the reader curious.",
  intro: "Two or three sentences assuming no prior knowledge.",
  facts: ["Fact one.", "Fact two.", "Fact three.", "Fact four.", "Fact five."],
  why: "Why this matters for UPSC.",
  tags: ["preamble", "constitution", "we the people"],
  sources: [
    wikiSource("Preamble to the Constitution of India"),
    officialSource("Legislative Department", "https://legislative.gov.in/constitution-of-india")
  ]
}
```

- `category` must match an `id` in `window.UPSC_CATEGORIES`.
- Keep `id` unique. It is used for progress tracking.
- The UI works with any number of facts, but five keeps topics short.
- `wikiSource(...)` builds a Wikipedia link from an article title; `officialSource(...)` takes a label and URL.

## Content and sources

The content is educational and simplified for beginners. It is based on standard references such as NCERT textbooks, Laxmikanth's *Indian Polity*, Spectrum's history books, the Constitution of India, and the per-topic links shown on each card. Verify current or legally important details against official sources before relying on them.

## Deploying

The site is static, so it can be hosted on GitHub Pages, Netlify, Cloudflare Pages or any web server. For GitHub Pages, keep `.nojekyll` in the root.

## License

Personal educational project. Reuse and adapt as you like.
