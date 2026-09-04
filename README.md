# SA Online School

Trilingual marketing and enrolment site for an online English school, built as a single-page React application.

## Overview

SA Online School is a single-page site presenting an online English-language school: its courses, pricing, and contact details. The page is fully localized in English, Russian, and Arabic (including right-to-left layout for Arabic), and persists the visitor's language, theme, and school-policy consent across visits.

## Features

- Trilingual content (English, Russian, Arabic) driven by JSON dictionaries, with automatic RTL layout for Arabic
- Light/dark theme toggle with state persisted via a `useTheme` hook
- Language switcher with state persisted via a `useLanguage` hook
- School policy consent modal and toast, shown once per visitor via a `usePolicyAgreement` hook
- Landing sections: Hero, About, Courses, Pricing, Rules, and Contact
- Scroll progress indicator and scroll-to-top button
- Animated UI built with Framer Motion and Heroicons

## Tech stack

- React 18 + TypeScript
- Vite (build tooling and dev server)
- Tailwind CSS (utility-first styling, class-based dark mode)
- Framer Motion (animation)
- Heroicons (icon set)

## Getting started

### Prerequisites

- Node.js and npm

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview a production build

```bash
npm run preview
```

There are no required environment variables.

## Project structure

```
index.html                  # HTML entry point, mounts #root
src/
  main.tsx                  # React entry point
  App.tsx                   # App shell
  pages/
    Home.tsx                # Assembles the landing page sections
  components/
    common/                 # Header, Footer, theme/language switchers,
                             #   policy modal/toast, scroll progress/top-button
    sections/                # Hero, About, Courses, Pricing, Rules, Contact
  hooks/
    useLanguage.tsx          # Active language + persistence
    useTheme.tsx             # Light/dark theme + persistence
    usePolicyAgreement.tsx   # One-time school policy consent
  i18n/
    en.json, ru.json, ar.json  # Per-language content
    index.ts                 # Language registry and default language
  styles/
    index.css                # Tailwind entry point
```

## License

MIT. See [LICENSE](LICENSE).
