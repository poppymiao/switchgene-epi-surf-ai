<p align="center">
  <img src="public/logo.png" alt="SwitchGene logo" width="96" />
</p>

<h1 align="center">SwitchGene</h1>

<p align="center">
  <strong>AI-powered chromatin accessibility prediction for genomic research and drug discovery.</strong>
</p>

<p align="center">
  <a href="https://github.com/poppymiao/switchgene-epi-surf-ai/actions/workflows/ci.yml"><img src="https://github.com/poppymiao/switchgene-epi-surf-ai/actions/workflows/ci.yml/badge.svg" alt="CI status" /></a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3" />
</p>

---

## Overview

This repository contains the company website and interactive product demo for **SwitchGene**.

SwitchGene is a lightweight AI tool that integrates **ATAC-seq**, **NanoMe-seq** and **Fiber-seq** data to predict chromatin accessibility at the molecular level. Researchers can submit a DNA sequence or a genomic region, receive accessibility scores, and explore the predictions in interactive visualisations.

The site includes:

- **Hero and features**: the product value proposition and core capabilities.
- **Interactive demo**: sequence and genomic-region input, with a visualisation of predicted accessibility.
- **Applications**: use cases for research labs, pharmaceutical companies (drug discovery and target validation) and gene therapy (vector delivery optimisation).
- **Contact**: routes for sales and demo requests.

> **Note:** the demo uses simulated predictions for illustration. It is not connected to the production model.

## Tech stack

| Layer      | Tools                                                                    |
| ---------- | ------------------------------------------------------------------------ |
| Framework  | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 5](https://vitejs.dev/)                                            |
| Styling    | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI) |
| Charts     | [Recharts](https://recharts.org/)                                        |
| Icons      | [Lucide](https://lucide.dev/)                                            |
| Routing    | [React Router](https://reactrouter.com/)                                 |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later (see [`.nvmrc`](.nvmrc))
- npm 10 or later

### Installation

```sh
git clone https://github.com/poppymiao/switchgene-epi-surf-ai.git
cd switchgene-epi-surf-ai
npm ci
```

### Development

```sh
npm run dev
```

The development server starts at <http://localhost:8080> with hot module reloading.

### Available scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the local development server           |
| `npm run build`     | Create an optimised production build in `dist/` |
| `npm run build:dev` | Create a development-mode build              |
| `npm run preview`   | Serve the production build locally           |
| `npm run lint`      | Run ESLint across the codebase               |

## Project structure

```
.
├── public/                 # Static assets (logo, robots.txt)
├── src/
│   ├── components/
│   │   ├── ui/             # shadcn/ui primitives
│   │   ├── Navbar.tsx      # Top navigation
│   │   ├── Hero.tsx        # Landing hero section
│   │   ├── Features.tsx    # Product features
│   │   ├── Demo.tsx        # Interactive prediction demo
│   │   ├── GenomicVisualization.tsx
│   │   ├── Applications.tsx
│   │   └── Footer.tsx
│   ├── hooks/              # Shared React hooks
│   ├── lib/                # Utilities
│   ├── pages/              # Route-level pages
│   ├── App.tsx             # Router and providers
│   └── main.tsx            # Application entry point
├── index.html              # HTML template and SEO metadata
├── tailwind.config.ts
└── vite.config.ts
```

## Deployment

`npm run build` writes a static site to `dist/`. It can be hosted on any static hosting provider, such as Vercel, Netlify, Cloudflare Pages or GitHub Pages.

The project is also connected to [Lovable](https://lovable.dev/), which syncs changes with this repository in both directions.

## Contact

- **Email:** [contact@switchgene.ai](mailto:contact@switchgene.ai)
- **Location:** Cambridge, UK

## License

Copyright © 2025 SwitchGene. All rights reserved. See [LICENSE](LICENSE) for details.
