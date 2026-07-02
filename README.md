# Oscar Torres - Professional Portfolio

[![Next.js 16](https://img.shields.io/badge/Next.js-16-0E7C86?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-0E7C86?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-0E7C86?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-0E7C86?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Gemini 2.5 Flash](https://img.shields.io/badge/Gemini_2.5_Flash-E0762E?style=flat-square&logo=googlegemini&logoColor=white)](https://ai.google.dev/)

A high-performance, accessible, and interactive portfolio for a Senior Software Engineer. It showcases modern React patterns, clean architecture, and a production-minded AI integration.

## Key Features

- **Digital Twin**: An AI chat powered by Google Gemini 2.5 Flash, trained on Oscar's real professional background. Visitors ask the kinds of questions they would in a screening call and get grounded, first-person answers.
- **Performance Optimized**: Built on Next.js 16 (App Router) and React 19 for server rendering, mostly static generation, and fast loads.
- **Modern Aesthetic**: Custom Tailwind CSS v4 design tokens, a backdrop-blur navigation bar, and fluid entrance animations with Framer Motion.
- **Dark/Light Mode**: Fully themeable UI via `next-themes`, with smooth transitions and system preference detection.
- **Accessible**: WCAG-minded color contrast, keyboard-friendly chat (Enter to send), ARIA labels on interactive controls, and semantic HTML.
- **Modular Architecture**: Clean separation of concerns across atomic `ui`, `features`, `sections`, and `layout` components, with a single centralized content layer.
- **Secure by Default**: The Gemini API key stays server-side, requests are rate limited per IP, and transient upstream failures are retried with exponential backoff.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-variable design tokens, shadcn/ui `new-york` style, Radix primitives)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [Google Gemini](https://ai.google.dev/) via [`@google/genai`](https://www.npmjs.com/package/@google/genai)
- **Markdown Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown) + Tailwind Typography
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Package Manager**: [Bun](https://bun.sh/)

## Getting Started

### Prerequisites

- Node.js 20.9+ and Bun
- A Google AI Studio API key with the [Gemini API](https://ai.google.dev/) enabled.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/OscarDTorresB/personal-portfolio.git
    cd personal-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    # or
    npm install
    ```

3.  **Configure environment variables:**

    Create a `.env.local` file in the root directory and add your Gemini API key:

    ```env
    GEMINI_API_KEY=your_actual_api_key_here
    ```

4.  **Run the development server:**

    ```bash
    bun dev
    # or
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```bash
├── app/                  # Next.js App Router root
│   ├── api/chat/route.ts # Rate-limited Gemini route handler (server-side)
│   ├── globals.css       # Global styles & Tailwind v4 design tokens
│   ├── layout.tsx        # Root layout with metadata, ThemeProvider & Analytics
│   └── page.tsx          # Main entry point composing the sections
├── components/           # React components
│   ├── animations/       # FadeIn Framer Motion wrapper
│   ├── features/         # Complex interactive features (DigitalTwinChat)
│   ├── layout/           # Nav and Footer
│   ├── sections/         # Page sections (Hero, Experience, Projects, etc.)
│   └── ui/               # Reusable atomic UI primitives (Button, Card, Badge)
├── data/                 # Static content/data layer
│   └── portfolio.tsx     # Single source of truth for all site content
├── lib/                  # Utilities & shared types
│   ├── gemini.ts         # Shared conversation types for the chat
│   └── utils.ts          # cn() helper (clsx + tailwind-merge)
└── public/               # Static assets
```

## Security & Performance

- **Rate Limiting**: The chat endpoint allows a maximum of 5 requests per minute per IP to prevent abuse.
- **Server-Side Key**: The Gemini API key is read only on the server; it is never exposed to the client.
- **Resilient Calls**: Upstream 429 and 503 responses are retried up to 3 times with exponential backoff, and malformed request bodies are rejected with a 400.

## Author

**Oscar Torres**
- *Senior Software Engineer*
- [LinkedIn](https://www.linkedin.com/in/oscartorresb/)
- [GitHub](https://github.com/OscarDTorresB)

---
*Built with care in Colombia*
