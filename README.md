# Portfolio — María José Villarreal

A bilingual personal portfolio showcasing my projects, professional experience, and technical skills. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

**Live site:** [majovillarreal.vercel.app](https://majovillarreal.vercel.app)

## Features

- English and Spanish support using Astro's i18n routing
- Interactive globe built with `d3-geo`, featuring an animated Argentine flag marking Mendoza
- Light, dark, and system themes, applied before the first paint to prevent theme flicker
- Active section highlighting in the navigation
- SEO metadata, including canonical URLs, `hreflang`, Open Graph, Twitter cards, and a sitemap
- Keyboard-friendly navigation menus

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Globe visualization:** `d3-geo`
- **Deployment:** Vercel

## Getting Started

### Requirements

- Node.js (compatible with the project's Astro version)
- npm

### Installation

```sh
git clone https://github.com/MJVillarreal/portfolio.git
cd portfolio
npm install
```

### Development

```sh
npm run dev
```

The development server runs at `http://localhost:4321`.

### Build

```sh
npm run build
npm run preview
```

The production build is generated in `dist/` and can be previewed locally.

## Project Structure

```text
src/
├── components/   # Page sections and UI components
├── data/         # Shared data, including the tech stack
├── i18n/         # Translations (en.json, es.json) and helpers
├── icons/        # SVG icons as Astro components
├── layouts/      # Shared layout, SEO metadata, and theme
├── pages/        # Routes: / (English) and /es (Spanish)
├── scripts/      # Client-side scripts
└── styles/       # Global styles and design tokens
```

To add or edit content, update `src/i18n/en.json` and `src/i18n/es.json` for interface text, and `src/data/content.ts` for experience, projects, stack, and education. Both languages should be kept in sync.
