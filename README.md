# Portfolio — María José Villarreal

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

🔗 **Live:** https://portfolio-puce-eight-67.vercel.app

## Features

- Bilingual (English / Spanish) using Astro's i18n routing
- Interactive globe (d3-geo) with a waving Argentine flag planted in Mendoza
- Light / dark / system theme, applied before first paint (no flash)
- Active section highlighting in the navigation
- SEO: canonical URLs, `hreflang`, Open Graph / Twitter cards and sitemap
- Accessible, keyboard-friendly menus

## Getting started

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + production build in ./dist
npm run preview  # preview the production build
```

## Project structure

```text
src/
├── components/   # Page sections (Hero, Globe, Experience, Projects, Education, About, Contact)
├── data/         # Shared data (tech stack)
├── i18n/         # Translations (en.json, es.json) and helpers
├── icons/        # SVG icons as Astro components
├── layouts/      # Base layout (head, SEO meta, theme)
├── pages/        # Routes: / (English) and /es (Spanish)
├── scripts/      # Shared client-side scripts
└── styles/       # Global styles and design tokens (colors in CSS variables)
```

To add or edit text, update both `src/i18n/en.json` and `src/i18n/es.json`.
