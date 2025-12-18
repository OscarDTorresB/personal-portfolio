# Oscar Torres - Professional Portfolio 🚀

A high-performance, accessible, and interactive portfolio website built for a Senior Software Engineer & Tech Lead. This project showcases advanced React patterns, clean architecture, and AI integration.

## ✨ key Features

- **🎨 Modern Aesthetic**: Premium design using a custom Tailwind CSS system, glassmorphism, and fluid animations with Framer Motion.
- **🤖 AI Consultant**: Integrated "Digital Twin" powered by Google's Gemini 2.5 Flash API. Visitors can ask technical questions and get architectural advice based on Oscar's real-world experience.
- **⚡ Performance Optimized**: Built with Next.js 16 (App Router) & React 19 for server-side rendering, mostly static generation, and lightning-fast loads.
- **🌗 Dark/Light Mode**: Fully themeable UI with smooth transitions and system preference detection.
- **♿ Accessible**: WCAG-compliant color contrast, keyboard navigation support (CMD+Enter for forms), and semantic HTML.
- **🧱 Modular Architecture**: Clean separation of concerns with atomic components (`ui`, `features`, `sections`), centralized data layer, and server actions for security.
- **🛡️ Secure**: Server-side validation (Zod/Yup equivalent via Formik schema), rate limiting for API routes, and environment variable protection.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [Google Gemini API](https://ai.google.dev/)
- **Forms & Validation**: [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup)
- **Markdown Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown) + Tailwind Typography
- **Package Manager**: [Bun](https://bun.sh/)

## 🚀 Getting Started

### Prerequisites

- Node.js 24+ and Bun 1.3+
- A Google Cloud Project with the [Gemini API](https://ai.google.dev/) enabled.

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

3.  **Configure Environment Variables:**

    Create a `.env.local` file in the root directory and add your Gemini API Key:

    ```env
    GEMINI_API_KEY=your_actual_api_key_here
    ```

4.  **Run Development Server:**

    ```bash
    bun dev
    # or
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router root
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout with Metadata & Providers
│   └── page.tsx          # Main entry point composing the sections
├── components/           # React Components
│   ├── features/         # Complex Feature Components (e.g., BigAIConsultant)
│   ├── layout/           # Layout Components (Nav, Footer)
│   ├── sections/         # Page Sections (Hero, Experience, etc.)
│   └── ui/               # Reusable atomic UI components (Buttons, Cards)
├── data/                 # Static Content/Data Layer
│   └── portfolio.tsx     # Centralized content for easy editing
├── lib/                  # Utilities & Server Actions
│   └── gemini.ts         # Secure Server Action for AI Logic
└── public/               # Static Assets
```

## 🔒 Security & Performance

- **Rate Limiting**: The AI endpoint allows a maximum of 3 requests per minute per IP to prevent abuse.
- **Server Actions**: API keys are never exposed to the client; all AI communication happens server-side.
- **Input Validation**: All form inputs are strictly validated before processing.

## 👨‍💻 Author

**Oscar Torres**
- *Senior Software Engineer & Tech Lead*
- [LinkedIn](https://www.linkedin.com/in/oscardtorresb/)
- [GitHub](https://github.com/OscarDTorresB)

---
*Built with ❤️ in Colombia*
