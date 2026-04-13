export const DATA = {
  profile: {
    name: "Oscar Torres",
    role: "Senior Software Engineer",
    location: "Colombia",
    tagline: "Senior Software Engineer building fast, accessible React applications and AI-powered agents and tools. Currently helping scale starbucks.com.",
    bio: "Senior Software Engineer based in Colombia with 5+ years of experience building high-performance React applications and AI-powered systems. I specialize in frontend architecture, design systems, and performance optimization. Currently at Starbucks modernizing the React apps that power starbucks.com and the US Rewards experience. Previously at OPIS (Dow Jones), where I led frontend architecture work used daily by thousands of users.",
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
      period: "March 2026 - Present",
      current: true,
      description: "Supporting the modernization of legacy React applications that power starbucks.com and the US rewards experience.",
      achievements: [
        "Modernizing the React applications behind starbucks.com and the US Starbucks Rewards experience, covering framework upgrades, new feature delivery, and bug fixes.",
        "Improving customer-facing frontend flows with a focus on code quality, production stability, and incremental migration of legacy code.",
      ],
      logo: "/assets/logos/starbucks.png",
    },
    {
      company: "OPIS, a Dow Jones Company",
      role: "Senior Software Engineer",
      period: "June 2022 - November 2025",
      current: false,
      description: "Architected frontend systems and platforms for high-visibility data products used by thousands of daily users.",
      achievements: [
        "Architected a microfrontend platform with React and web components that enabled isolated deployments, accelerated delivery, and was adopted across 2 product teams.",
        "Built a shared React component library with Storybook documentation, used by 3 teams to standardize how the UI is built and maintain consistency across products.",
        "Cut JavaScript bundle size by 80% and reduced page load times by 66% through focused React and Vite performance work.",
        "Built a high-performance data platform with spreadsheet-style tables and charts, used daily by around 10,000 users across two products.",
        "Grew automated test coverage from 0% to 70% using Jest, React Testing Library, and Cypress.",
      ],
      logo: "/assets/logos/opis-dow-jones.png",
    },
    {
      company: "The Estée Lauder Companies",
      role: "Software Engineer",
      period: "February 2022 - June 2022",
      current: false,
      description: "Developed and integrated frontend solutions for LATAM ecommerce sites across multiple regional brands.",
      achievements: [
        "Built and shipped a new checkout flow for multiple LATAM ecommerce sites across several regional brand properties.",
        "Strengthened frontend security by identifying outdated React dependencies and replacing them with safer alternatives.",
        "Maintained and improved Drupal-based ecommerce sites across multiple brands in the region.",
      ],
      logo: "/assets/logos/estee-lauder.png",
    },
    {
      company: "The Body Shop",
      role: "Frontend Software Engineer",
      period: "February 2021 - February 2022",
      current: false,
      description: "Built core user experiences and enrollment flows for a global direct-sales e-commerce platform.",
      achievements: [
        "Built the consultant enrollment flow in React and TypeScript, working closely with backend engineers to design a secure multi-step form architecture.",
        "Owned the My Profile section from design to production: account settings, purchase history with filters, and infinite scroll pagination.",
        "Supported stakeholder demos and helped coordinate frontend delivery across several parallel development tracks.",
      ],
      logo: "/assets/logos/thebodyshop.png",
    },
  ],
  projects: [
    {
      name: "Autolisto Appointments",
      url: "https://appointments-autolisto.vercel.app",
      description: "Full-stack scheduling and operations platform with role-based access, automated reminders, WhatsApp campaigns, and customer search.",
      tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS", "WhatsApp Business Cloud"],
      highlights: [
        "Handles around 2,000 appointments per month for a team of 20 internal users.",
        "Grew monthly appointments by 40% through automated scheduling workflows.",
        "Cut appointment no-shows by 70% using automated WhatsApp reminders.",
      ],
    },
    {
      name: "Erika Torres",
      url: "https://erikatorresb.com",
      description: "Marketing website and CMS for a healthcare provider.",
      tech: ["Next.js", "Strapi", "Tailwind CSS", "Strapi Cloud"],
      highlights: [
        "Drives 400+ monthly visitors through organic search with no paid advertising.",
        "Generated a 30% increase in appointment bookings from organic search traffic.",
      ],
    },
    {
      name: "Autolisto CDA",
      url: "https://cdaautolisto.com.co",
      description: "Customer-facing website with an interactive pricing calculator that breaks down vehicle inspection costs by type.",
      tech: ["WordPress", "Elementor"],
      highlights: [
        "Maintained 95% SLA and 99.95% uptime over the past year.",
      ],
    },
  ],
  education: [
    {
      title: "Claude Certified Architect - Foundations",
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
    systemPrompt: `You are Oscar Torres, a Senior Software Engineer based in Colombia with 5+ years of experience building high-performance React applications and, more recently, AI-powered systems.

You speak in first person as Oscar. Sound like a real person having a conversation, not a chatbot or a resume. Be direct, specific, and genuine. Never use filler phrases like "Great question!", "Certainly!", "Of course!", or "I'd be happy to". Do not use em dashes. Write the way a confident engineer talks, not the way a press release reads. Keep it natural and to the point.

Background:
- Currently at Starbucks (since March 2026), modernizing legacy React apps for starbucks.com and the US rewards experience
- Previously at OPIS (Dow Jones, June 2022-Nov 2025): architected microfrontend platforms, built a shared design system used by 3 teams, optimized bundle size by ~80%, built an Excel-driven data platform for ~10k daily users, grew test coverage from 0% to 70%
- The Estée Lauder Companies (Feb-June 2022): checkout experiences for LATAM ecommerce, frontend security improvements
- The Body Shop (Feb 2021-Feb 2022): consultant enrollment flows, profile management, multi-step React/TypeScript architecture

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
- Claude Certified Architect - Foundations (Anthropic, 2025)
- Advanced React (Meta, 2023)
- BSc in Systems Engineering at EAN University (In Progress)

Working style:
- Oscar values clean, testable, maintainable code over clever or showy solutions
- He's comfortable in both senior IC and tech-lead-adjacent roles
- He cares about documentation, onboarding, and shared tooling that lifts entire teams
- He's remote-first and has worked fully distributed since 2021
- He's open to senior IC, staff-level, or tech lead roles, preferably with a strong frontend or full-stack focus and room to work with AI systems

Contact: oscar@oscartorres.co | linkedin.com/in/oscardtorresb

Keep answers concise but complete. If someone asks a yes/no question, answer it first, then add context. Stay in character as Oscar. If asked about something not in your context, say "That's not something I have context on. You can reach Oscar directly at oscar@oscartorres.co."`,
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
