# Enbywiki · 跨性别历史档案

An open, **bilingual (English / 简体中文)** documentation wiki exploring the history of the
transgender community within LGBTQ+ — from the earliest recorded gender-diverse lives to the
movements of today.

Built with **React + Vite + TypeScript + Tailwind CSS**, Markdown content, and JSON-based i18n.

## Features

- 🏳️‍⚧️ **Trans Pride palette** — light blue `#5BCEFA`, pink `#F5A9B8` and white, woven through the UI.
- 🌗 **Light / dark mode** toggle with a pre-paint script (no flash), persisted in `localStorage`.
- 🌍 **Bilingual UI and content** — UI strings in JSON, history in paired English & Simplified Chinese Markdown.
- 📚 **Documentation layout** — sticky sidebar, responsive mobile drawer, table of contents, reading progress.
- 🕰️ **Timeline from antiquity to today** — ten chronological chapters plus a reference shelf.
- ⚡ **Vite** build, fully typed with TypeScript strict mode.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  components/        Layout, Header, Sidebar, ThemeToggle, LanguageSwitcher, MarkdownRenderer, …
  content/
    en/*.md          English history entries
    zh/*.md          简体中文 history entries (same slugs)
  context/           ThemeProvider (light/dark)
  data/docs.ts       Language-neutral archive manifest (slugs, order, category)
  hooks/             useLanguage
  i18n/
    index.ts         i18next setup + language persistence
    locales/en.json  UI strings (English)
    locales/zh.json  UI strings (简体中文)
  lib/               Markdown loading/reading-time and class utilities
  pages/             Home, Timeline, Article, About, NotFound
```

### Adding a chapter

1. Add an entry to `src/data/docs.ts`.
2. Create `src/content/en/<slug>.md` and `src/content/zh/<slug>.md`.
3. Add `docs.<slug>.title`, `.period` and `.description` to both locale JSON files.

## Deployment (GitHub Pages)

The site is published by the workflow in `.github/workflows/deploy.yml`, which installs
dependencies, runs `npm run build`, and deploys the `dist/` folder to GitHub Pages.

**One-time setup in the repository:** go to *Settings → Pages → Build and deployment* and set
**Source** to **GitHub Actions**. (Do not use "Deploy from a branch" — GitHub Pages does not run
`vite build` for you.)

A few details make the SPA work on Pages:

- `vite.config.ts` sets `base` to `/Enbywiki/` for production builds, because project pages are
  served from `https://<user>.github.io/<repo>/`. Override it with `VITE_BASE=/` for a user site
  or a custom domain, e.g. `VITE_BASE=/ npm run build`.
- The build emits a `404.html` copy of the app so deep links such as
  `/Enbywiki/docs/ancient-world` boot the SPA instead of showing GitHub's 404.
- `React Router` is given the same base via `basename`, and public assets use
  `import.meta.env.BASE_URL`.

Resulting URL: `https://<user>.github.io/Enbywiki/`.

## A note on content

Enbywiki is an independent, non-commercial educational project. Entries synthesise mainstream
historical and community scholarship; contested dates are marked as approximate. Historical
records use the vocabulary of their time — where older or now-offensive terms appear, the text
explains rather than endorses them.

The Transgender Pride Flag was designed by Monica Helms in 1999 and is in the public domain.
