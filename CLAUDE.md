# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start development server
bun run build    # Production build
bun run start    # Start production server
bun run lint     # Run ESLint
```

> The project uses **Bun** as the package manager. Prefer `bun` over `npm`/`yarn`.

## Architecture Overview

This is a **Next.js 16 + React 19** personal portfolio using the App Router. TypeScript strict mode is enabled.

### Directory Structure

- `app/` — App Router pages and routes. `page.tsx` composes all sections; `layout.tsx` sets global metadata and fonts.
- `components/ui/` — Atomic, reusable primitives (shadcn/ui style with Radix UI + Tailwind).
- `components/features/` — Complex interactive features (e.g., `BigAIConsultant` — the AI chat interface).
- `components/sections/` — Full-page sections rendered in `app/page.tsx`.
- `components/layout/` — `Nav` and `Footer`.
- `components/animations/` — `FadeIn` Framer Motion wrapper used throughout sections.
- `data/portfolio.tsx` — **Single source of truth** for all content (profile, experience, companies, stats, architecture projects, education). Edit here to update site content.
- `lib/gemini.ts` — Server action that calls Google Gemini API (keeps key server-side, has rate limiting and retry logic).
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).

### Key Patterns

**Content Updates**: All site content lives in `data/portfolio.tsx`. Sections import directly from this file — no CMS or external API.

**Styling**: Tailwind CSS v4 with design tokens defined as CSS custom properties in `app/globals.css`. There is no `tailwind.config.js` theme — all customization is via CSS variables. The shadcn/ui component style is `new-york` (configured in `components.json`).

**AI Feature**: `components/features/BigAIConsultant.tsx` is a client component that submits to the `callGemini()` server action in `lib/gemini.ts`. The server action rate-limits to 3 requests/minute per IP and uses Gemini 2.5 Flash.

**Animations**: Use the `FadeIn` wrapper from `components/animations/` for scroll-triggered entrance animations. It accepts `delay`, `direction`, and `className` props.

**Component Conventions**: UI components use `cn()` for className composition. Variants follow shadcn/ui patterns (class-variance-authority). Icons come from `lucide-react`.

### Environment Variables

- `GEMINI_API_KEY` — Google Gemini API key (server-side only)
- `NEXT_PUBLIC_SITE_URL` — Public site URL (defaults to `https://oscartorres.co`)
