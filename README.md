# SA Online School

Marketing and enrolment site for an online school, built as a single-page React app in
three languages.

## What is interesting here

**Trilingual, including right-to-left.** Arabic, English and Russian share one layout
(`src/i18n/{ar,en,ru}.json`). Arabic is not a translation bolted on at the end; the
direction flips and the layout has to hold in both, which is the actual constraint.

**Consent that persists.** A school policy modal and toast, backed by a
`usePolicyAgreement` hook, so a visitor is asked once rather than on every visit.

**Theme and language as first-class state.** `useTheme` and `useLanguage` hooks with a
switcher in the header, both surviving reload.

## Sections

Hero, About, Courses, Pricing, Rules, Contact, with a scroll progress indicator and a
scroll-to-top control.

## Stack

`React` `TypeScript` `Vite` `Tailwind CSS` `Framer Motion` `Heroicons`

## Running it

```bash
npm install
npm run dev      # development
npm run build    # production build
npm run preview  # preview the build
```
