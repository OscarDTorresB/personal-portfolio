export const DATA = {
  profile: {
    name: "Oscar Torres",
    role: "Senior Software Engineer",
    location: "Colombia",
    tagline: "Senior Software Engineer. I build fast, accessible React systems — and now I build with AI.",
    bio: "Senior Software Engineer based in Colombia with 5+ years of experience building high-performance React applications and AI-powered systems. I specialize in frontend architecture, design systems, and performance optimization. Currently at Starbucks modernizing legacy React apps, previously at OPIS (Dow Jones) where I architected microfrontend platforms and built shared tooling used by thousands.",
    email: "oscar@oscartorres.co",
    linkedin: "https://www.linkedin.com/in/oscardtorresb/",
    github: "https://github.com/OscarDTorresB",
    website: "https://oscartorres.co",
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Node.js"],
    frontend: ["React", "Next.js", "Tailwind CSS", "TanStack Query", "Zustand", "Vite", "Storybook", "Twig"],
    ai: ["Claude API", "Claude Agent SDK", "Claude Code", "Model Context Protocol (MCP)"],
    platform: ["Jest", "React Testing Library", "Cypress", "Prisma", "PostgreSQL", "Azure DevOps", "AWS", "Drupal"],
  },
  experience: [
    {
      company: "Starbucks",
      role: "Senior Software Engineer",
      period: "March 2026 – Present",
      current: true,
      description: "Supporting the modernization of legacy React applications that power starbucks.com and the US rewards experience.",
      achievements: [
        "Supporting the modernization of legacy React applications that power starbucks.com and the US rewards experience through framework upgrades, maintenance, and new feature delivery.",
        "Contributing to frontend improvements across customer-facing flows with a focus on maintainability, production support, and incremental migration of older code.",
      ],
      logo: "/assets/logos/starbucks.png",
    },
    {
      company: "OPIS, a Dow Jones Company",
      role: "Senior Software Engineer",
      period: "June 2022 – November 2025",
      current: false,
      description: "Architected frontend systems and platforms for high-visibility data products used by thousands of daily users.",
      achievements: [
        "Architected a microfrontend platform with React and web components that enabled isolated deployments, accelerated delivery, and was adopted across 2 product teams.",
        "Built a shared React design system with private npm distribution and Storybook documentation that standardized UI development across 3 teams.",
        "Reduced JavaScript bundle size by nearly 80% and improved load times by ~66% through targeted React and Vite optimization.",
        "Developed a high-performance Excel-driven tables and charts platform used by ~10,000 daily users across CMA and McCloskey.",
        "Increased test coverage from 0% to 70% with Jest, React Testing Library, and Cypress.",
      ],
      logo: "/assets/logos/opis-dow-jones.png",
    },
    {
      company: "The Estée Lauder Companies",
      role: "Software Engineer",
      period: "February 2022 – June 2022",
      current: false,
      description: "Developed and integrated frontend solutions for LATAM ecommerce sites across multiple regional brands.",
      achievements: [
        "Developed and integrated a new checkout experience for LATAM ecommerce sites across multiple regional brands.",
        "Improved frontend security by identifying vulnerable React dependencies and refactoring to safer alternatives.",
        "Supported onboarding improvements and frontend maintenance across Drupal-based ecommerce experiences.",
      ],
      logo: "/assets/logos/estee-lauder.png",
    },
    {
      company: "The Body Shop",
      role: "Frontend Software Engineer",
      period: "February 2021 – February 2022",
      current: false,
      description: "Built core user experiences and enrollment flows for a global direct-sales e-commerce platform.",
      achievements: [
        "Built the consultant enrollment flow with React and TypeScript, partnering with backend engineers on secure multi-step architecture.",
        "Owned the My Profile experience end to end: account management, purchase history filters, and infinite scrolling.",
        "Supported stakeholder demos and coordinated frontend delivery plans across parallel development streams.",
      ],
      logo: "/assets/logos/thebodyshop.png",
    },
  ],
  projects: [
    {
      name: "Autolisto Appointments",
      url: "https://appointments-autolisto.vercel.app",
      description: "Scheduling and operations platform with RBAC, automated reminders, WhatsApp campaigns, and customer search.",
      tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS", "WhatsApp Business Cloud"],
      highlights: [
        "Used by ~20 internal users, handles ~2,000 appointments/month.",
        "Increased monthly appointments 40% via automated workflows.",
        "Reduced no-shows 70% with WhatsApp reminder campaigns.",
      ],
    },
    {
      name: "Erika Torres",
      url: "https://erikatorresb.com",
      description: "Marketing website and CMS for a healthcare provider.",
      tech: ["Next.js", "Strapi", "Tailwind CSS", "Strapi Cloud"],
      highlights: [
        "400+ monthly organic visits without paid traffic.",
        "30% increase in appointments from organic search.",
      ],
    },
    {
      name: "Autolisto CDA",
      url: "https://cdaautolisto.com.co",
      description: "Customer-facing pricing calculator generating RTM cost breakdowns by vehicle type.",
      tech: ["Next.js", "Tailwind CSS"],
      highlights: [
        "Maintains 95% SLA and 99.95% SLI over the past year.",
      ],
    },
  ],
  education: [
    {
      title: "Claude Certified Architect – Foundations",
      institution: "Anthropic",
      year: "2025",
      details: "Validates hands-on knowledge of the Claude API, Claude Agent SDK, Claude Code, and Model Context Protocol (MCP).",
      link: "https://verify.skilljar.com/c/wm4i64zqtwqy",
    },
    {
      title: "Advanced React",
      institution: "Meta",
      year: "2023",
      details: "Patterns, performance, and advanced testing.",
      link: "https://coursera.org/verify/PFLHUXYY9PEL",
    },
    {
      title: "BSc in Systems Engineering",
      institution: "EAN University",
      year: "In Progress",
      details: "Undergraduate degree in Systems Engineering.",
    },
  ],
  digitalTwin: {
    systemPrompt: `You are Oscar Torres — a Senior Software Engineer based in Colombia with 5+ years of experience building high-performance React applications and, more recently, AI-powered systems.

You speak in first person as Oscar. You are professional, thoughtful, and direct. You give concrete, specific answers grounded in real experience. You don't oversell or use hollow buzzwords. If you don't know something or it's outside Oscar's experience, you say so honestly.

Background:
- Currently at Starbucks (since March 2026), modernizing legacy React apps for starbucks.com and the US rewards experience
- Previously at OPIS (Dow Jones, June 2022–Nov 2025): architected microfrontend platforms, built a shared design system used by 3 teams, optimized bundle size by ~80%, built an Excel-driven data platform for ~10k daily users, grew test coverage from 0% to 70%
- The Estée Lauder Companies (Feb–June 2022): checkout experiences for LATAM ecommerce, frontend security improvements
- The Body Shop (Feb 2021–Feb 2022): consultant enrollment flows, profile management, multi-step React/TypeScript architecture

Technical strengths:
- React ecosystem: React, Next.js, TypeScript, Vite, Zustand, TanStack Query, Storybook
- Frontend architecture: microfrontends, design systems, performance optimization, testing
- AI tools: Claude API, Claude Agent SDK, Claude Code, MCP (Model Context Protocol)
- Platform: Prisma, PostgreSQL, Node.js, Azure DevOps, AWS

Side projects you've built:
- Autolisto Appointments: a full-stack scheduling platform handling ~2,000 appts/month for a car inspection business, with RBAC, WhatsApp automation, and a 70% no-show reduction
- Erika Torres: a Next.js + Strapi marketing site driving 400+ monthly organic visits for a healthcare provider
- Autolisto CDA: a customer-facing pricing calculator for a vehicle inspection service

Education:
- Claude Certified Architect – Foundations (Anthropic, 2025)
- Advanced React (Meta, 2023)
- BSc in Systems Engineering at EAN University (In Progress)

Working style:
- Oscar values clean, testable, maintainable code over clever or showy solutions
- He's comfortable in both senior IC and tech-lead-adjacent roles
- He cares about documentation, onboarding, and shared tooling that lifts entire teams
- He's remote-first and has worked fully distributed since 2021
- He's open to senior IC, staff-level, or tech lead roles, preferably with a strong frontend or full-stack focus and room to work with AI systems

Contact: oscar@oscartorres.co | linkedin.com/in/oscardtorresb

Keep answers concise but complete. If a recruiter asks a yes/no question, answer it first, then elaborate. Always stay in character as Oscar. If asked about something not in your context, say "That's not something I have context on — reach out to Oscar directly at oscar@oscartorres.co."`,
    suggestedQuestions: [
      "What's your strongest technical skill?",
      "Tell me about a project you're proud of",
      "How do you approach performance optimization?",
      "What's your experience with AI integrations?",
      "How do you handle legacy codebases?",
      "What kind of teams do you work best in?",
    ],
  },
};
