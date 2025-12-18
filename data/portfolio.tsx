import { motion } from "framer-motion";
import { Cpu, Layout, LineChart, ShieldCheck } from "lucide-react";

export const DATA = {
    profile: {
        name: "Oscar Torres",
        role: "Senior Software Engineer",
        location: "Colombia",
        bio: "Senior Software Engineer specializing in the React ecosystem. I focus on writing clean, testable code and building accessible (WCAG) user interfaces that perform flawlessly at scale.",
        email: "oscardtorresb@gmail.com",
        linkedin: "https://www.linkedin.com/in/oscardtorresb/",
        github: "https://github.com/OscarDTorresB"
    },
    companies: [
        { name: "OPIS by Dow Jones", color: "bg-sky-600", logo: "/assets/logos/opis-dow-jones.png" },
        { name: "EPAM", color: "bg-blue-600", logo: "/assets/logos/epam.png" },
        { name: "The Body Shop", color: "bg-emerald-800", logo: "/assets/logos/thebodyshop.png" },
        { name: "Estée Lauder", color: "bg-slate-900", logo: "/assets/logos/estee-lauder.png" },
    ],
    impact: [
        { label: "CDA Appts/mo", value: "180", suffix: "+", sub: "500% Increase" },
        { label: "Daily Users", value: "10k", suffix: "+", sub: "In core libraries" },
        { label: "Test Coverage", value: "80", suffix: "%", sub: "Maintained at The Body Shop" },
        { label: "Teams Led", value: "3", suffix: "", sub: "Shared Architecture" }
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
            details: "Role-based architecture and reminder automation that skyrocketed virtual appointments from 30 to 180 monthly, directly impacting the client's ROI."
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
            company: "OPIS, A Dow Jones Company",
            role: "Senior React Engineer / Tech Lead",
            period: "June 2022 - November 2025",
            description: "Spearheaded frontend architecture and technical direction for high-visibility React projects.",
            achievements: [
                "Led the design of a specialized data-viz library for massive datasets using Web Components and Plotly.js.",
                "Architected a private npm Design System used across 3 global teams, ensuring WCAG accessibility compliance.",
                "Mentored junior and mid-level developers, establishing TDD and clean code best practices.",
                "Successfully resolved critical performance bottlenecks."
            ]
        },
        {
            company: "The Body Shop",
            role: "Software Engineer",
            period: "January 2021 - January 2022",
            description: "Drove the digital transformation and migration of the core e-commerce platform.",
            achievements: [
                "Implemented complex state management for the global shopping cart using React Context and Hooks.",
                "Achieved and maintained a testing coverage of over 80% using React Testing Library.",
                "Promoted early due to exceptional delivery quality and technical initiative.",
                "Migrated legacy codebase to a modern TypeScript/React stack."
            ]
        },
        {
            company: "SIICOING",
            role: "Full Stack Developer",
            period: "June 2020 - January 2021",
            description: "Specialized in internal tool optimization and UX redesign.",
            achievements: [
                "Redesigned mission-critical internal applications, improving UX/UI accessibility.",
                "Increased process efficiency through user-centric feature enhancements.",
                "Optimized database queries and API response times for internal reporting tools."
            ]
        }
    ],
    education: [
        { title: "Advanced React", institution: "Meta", year: "2023", details: "Patterns, performance, and advanced testing." },
        { title: "Full Stack Developer", institution: "Soy Henry", year: "2021", details: "Full Stack intensive program (JS, Node, React)." }
    ]
};
