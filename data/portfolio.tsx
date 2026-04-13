import { motion } from "framer-motion";
import { Cpu, Layout, LineChart, ShieldCheck } from "lucide-react";

export const DATA = {
    profile: {
        name: "Oscar Torres",
        role: "Senior Software Engineer",
        location: "Colombia",
        bio: "Senior Frontend Engineer specializing in the React ecosystem, with a growing focus on AI-powered systems. I build clean, testable, and accessible interfaces and architect solutions that leverage modern AI capabilities — from Claude API integrations to agentic workflows.",
        email: "oscar@oscartorres.co",
        linkedin: "https://www.linkedin.com/in/oscardtorresb/",
        github: "https://github.com/OscarDTorresB"
    },
    companies: [
        { name: "Starbucks", color: "bg-green-700", logo: "/assets/logos/starbucks.png" },
        { name: "OPIS by Dow Jones", color: "bg-sky-600", logo: "/assets/logos/opis-dow-jones.png" },
        { name: "Estée Lauder", color: "bg-slate-900", logo: "/assets/logos/estee-lauder.png" },
        { name: "The Body Shop", color: "bg-emerald-800", logo: "/assets/logos/thebodyshop.png" },
    ],
    impact: [
        { label: "Appts/mo", value: "2k", suffix: "+", sub: "40% Increase via automation" },
        { label: "Daily Users", value: "10k", suffix: "+", sub: "Tables & Charts platform" },
        { label: "Bundle Size", value: "80", suffix: "%", sub: "Reduction at OPIS" },
        { label: "No-show Rate", value: "70", suffix: "%", sub: "Reduction via reminders" }
    ],
    architecture: [
        {
            title: "High-Performance Graphics Library",
            description: "Development of a Web Components library optimized for processing massive datasets.",
            tech: ["Web Components", "Plotly.js", "ExcelJS", "Performance Optimization"],
            details: "Critical refactoring for fluid visualization of complex tables and charts on mobile devices, handling large data volumes without compromising the main thread."
        },
        {
            title: "Corporate Design System",
            description: "Architecture of an atomic component system distributed internally at Dow Jones.",
            tech: ["React", "TypeScript", "Azure Artifacts", "WCAG"],
            details: "Private library consumed by 3 different teams. Focused on state-agnostic components, audited accessibility, and scalable distribution via npm."
        },
        {
            title: "CDA Management & Automation",
            description: "Comprehensive management system with advanced security architecture and marketing automation.",
            tech: ["Full Stack", "RBAC Security", "Process Automation"],
            details: "Role-based architecture and automated WhatsApp reminders that increased monthly appointments by 40%, reduced no-shows by 70%, and now handle about 2,000 appointments per month."
        }
    ],
    bentoArchitecture: [
        {
            title: "Data Visualization Engine",
            description: "Custom library for massive datasets.",
            tech: ["Plotly.js", "ExcelJS", "Web Components"],
            icon: <LineChart className="text-sky-500" />,
            size: "md:col-span-2",
            visual: (
                <div className="flex items-end gap-1 h-12 mt-4" >
                    {
                        [40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: i * 0.1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
                                className="w-full bg-sky-500/40 rounded-t-sm"
                            />
                        ))}
                </div>
            )
        },
        {
            title: "Scalable Design System",
            description: "Stateless accessible UI core.",
            tech: ["TypeScript", "WCAG"],
            icon: <Layout className="text-pink-500" />,
            size: "md:col-span-1",
            visual: (
                <div className="grid grid-cols-3 gap-1 mt-4" >
                    {[...Array(6)].map((_, i) => <div key={i} className="h-4 bg-pink-500/20 rounded-sm border border-pink-500/30" />)}
                </div>
            )
        },
        {
            title: "Security & Role Management",
            description: "Enterprise RBAC architecture.",
            tech: ["Node.js", "Security"],
            icon: <ShieldCheck className="text-emerald-500" />,
            size: "md:col-span-1",
            visual: (
                <div className="mt-4 flex justify-center" >
                    <div className="relative w-12 h-12 border-2 border-emerald-500/30 rounded-full flex items-center justify-center" >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }
                        } className="absolute w-full h-full border-t-2 border-emerald-500 rounded-full" />
                        <ShieldCheck size={20} className="text-emerald-500" />
                    </div>
                </div>
            )
        },
        {
            title: "SRE Infrastructure",
            description: "Continuous integration and delivery for microfrontends.",
            tech: ["Azure Pipelines", "Azure Artifacts"],
            icon: <Cpu className="text-sky-500" />,
            size: "md:col-span-2",
            visual: (
                <div className="mt-4 flex gap-4 items-center overflow-hidden" >
                    <div className="flex-1 h-1 bg-sky-500/20 rounded-full overflow-hidden" >
                        <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity }
                        } className="w-1/3 h-full bg-sky-500" />
                    </div>
                    < div className="flex-1 h-1 bg-sky-500/20 rounded-full overflow-hidden" >
                        <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="w-1/3 h-full bg-sky-500" />
                    </div>
                </div>
            )
        }
    ],
    experience: [
        {
            company: "Starbucks",
            role: "Senior Software Engineer",
            period: "March 2026 - Present",
            description: "Supporting the modernization of legacy React applications that power starbucks.com and the US rewards experience.",
            achievements: [
                "Supporting the modernization of legacy React applications that power starbucks.com and the US rewards experience through framework upgrades, maintenance, and new feature delivery.",
                "Contributing to frontend improvements across customer-facing flows with a focus on maintainability, production support, and incremental migration of older code."
            ]
        },
        {
            company: "OPIS, A Dow Jones Company",
            role: "Senior Software Engineer",
            period: "June 2022 - November 2025",
            description: "Architected frontend systems and platforms for high-visibility data products used by thousands of daily users.",
            achievements: [
                "Architected a microfrontend platform with React and web components that enabled isolated deployments, accelerated delivery, and was adopted across 2 product teams.",
                "Built a shared React design system with private npm distribution and Storybook documentation that standardized UI development across 3 teams.",
                "Reduced JavaScript bundle size by nearly 80% and improved load times by about 66% through targeted React and Vite optimization.",
                "Developed a high-performance Excel-driven tables and charts platform used by about 10,000 daily users across CMA and McCloskey.",
                "Increased test coverage from 0% to 70% with Jest, React Testing Library, and Cypress while leading legacy migration, onboarding, and shared package maintenance."
            ]
        },
        {
            company: "The Estée Lauder Companies",
            role: "Software Engineer",
            period: "February 2022 - June 2022",
            description: "Developed and integrated frontend solutions for LATAM ecommerce sites across multiple regional brands.",
            achievements: [
                "Developed and integrated a new checkout experience for LATAM ecommerce sites, delivering a refreshed interface for multiple regional brands.",
                "Improved frontend security by identifying vulnerable React dependencies, upgrading affected packages, and refactoring component implementations to safer alternatives.",
                "Supported onboarding improvements and frontend maintenance across Drupal-based ecommerce experiences used by LATAM markets."
            ]
        },
        {
            company: "The Body Shop",
            role: "Frontend Software Engineer",
            period: "February 2021 - February 2022",
            description: "Built core user experiences and enrollment flows for a global direct-sales e-commerce platform.",
            achievements: [
                "Built the consultant enrollment flow with React and TypeScript, partnering with backend engineers to define secure contracts and a scalable multi-step architecture.",
                "Owned the My Profile experience end to end, adding intuitive account management, purchase history filters, and infinite scrolling to improve navigation and usability.",
                "Supported stakeholder demos and coordinated frontend delivery plans that enabled parallel development across multiple steps of a shared user journey."
            ]
        }
    ],
    education: [
        { title: "Claude Certified Architect - Foundations", institution: "Anthropic", year: "2025", details: "Validates hands-on knowledge of the Claude API, Claude Agent SDK, Claude Code, and Model Context Protocol (MCP).", link: "https://verify.skilljar.com/c/wm4i64zqtwqy" },
        { title: "Advanced React", institution: "Meta", year: "2023", details: "Patterns, performance, and advanced testing.", link: "https://coursera.org/verify/PFLHUXYY9PEL" },
        { title: "BSc in Systems Engineering", institution: "EAN University", year: "In Progress", details: "Undergraduate degree in Systems Engineering." }
    ]
};
