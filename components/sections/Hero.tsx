import { DATA } from '@/data/portfolio';
import { ChevronRight, Code2, FileText, Github, Linkedin, Sparkles } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const Hero = () => (
    <section className="mb-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div
                className="lg:col-span-3"
            >
                <FadeIn>
                    <Badge variant="outline" className="inline-flex items-center gap-2 px-3 py-1 border-sky-500/20 text-sky-500 text-[10px] font-black uppercase tracking-widest mb-8 bg-sky-500/10">
                        <Sparkles size={12} /> Frontend Lead & AI Integration
                    </Badge>
                </FadeIn>
                <FadeIn
                    delay={0.1}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase"
                >
                    <h1>
                        Premium <span className="text-sky-500">Software</span><br />Engineering<span className="text-sky-500">.</span>
                    </h1>
                </FadeIn>
                <FadeIn
                    delay={0.2}
                    className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed"
                >
                    Senior Frontend Engineer specialized in React & Next.js, with a growing focus on AI-powered systems. I blend frontend precision with AI integrations — from Claude API to agentic workflows — to ship interfaces that are both flawless and intelligent.
                </FadeIn>
                <FadeIn
                    delay={0.3}
                    className="flex flex-wrap gap-4"
                >
                    <Button size="lg" className="bg-sky-600 text-white rounded-2xl font-bold shadow-2xl shadow-sky-500/20 hover:scale-105 hover:bg-sky-600/90" asChild>
                        <Link href="#experience">
                            View Experience <ChevronRight size={20} />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-2xl font-bold hover:border-sky-500 hover:text-sky-500" asChild>
                        <a href="/assets/files/Oscar_Torres_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <FileText size={20} /> Resume
                        </a>
                    </Button>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="rounded-xl hover:text-sky-500" asChild>
                            <a href={DATA.profile.linkedin} target="_blank"><Linkedin size={24} /></a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-xl hover:text-sky-500" asChild>
                            <a href={DATA.profile.github} target="_blank"><Github size={24} /></a>
                        </Button>
                    </div>
                </FadeIn>
            </div>

            <div className="lg:col-span-2 relative hidden lg:block">
                <div className="bg-card border-2 border-sky-500/20 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Code2 size={200} />
                    </div>
                    <div className="space-y-6 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <p className="text-sky-400">class SeniorEngineer {"{"}</p>
                        <p className="pl-4">name = <span className="text-emerald-400">{`"Oscar Torres"`}</span>;</p>
                        <p className="pl-4">seniority = <span className="text-emerald-400">{`"Senior+"`}</span>;</p>
                        <p className="pl-4">leadership = <span className="text-emerald-400">true</span>;</p>
                        <p className="pl-4 text-muted-foreground">{/* Core focus: */}</p>
                        <p className="pl-4">architect(systems) {"{"}</p>
                        <p className="pl-8 text-sky-400">return systems.scale().optimize();</p>
                        <p className="pl-4">{"}"}</p>
                        <p className="text-sky-400">{"}"}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
