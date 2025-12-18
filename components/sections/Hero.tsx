import { DATA } from '@/data/portfolio';
import { ChevronRight, Code2, Github, Linkedin, Sparkles } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

export const Hero = () => (
    <section className="mb-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div
                className="lg:col-span-3"
            >
                <FadeIn className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-500 text-[10px] font-black uppercase tracking-widest mb-8">
                    <Sparkles size={12} /> Tech Lead & Software Architect
                </FadeIn>
                <FadeIn
                    delay={0.1}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase wrap-break-word hyphens-auto"
                >
                    Premium <span className="text-sky-500">Software</span><br />Engineering<span className="text-sky-500">.</span>
                </FadeIn>
                <FadeIn
                    delay={0.2}
                    className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed"
                >
                    Senior Software Engineer specialized in React & Next.js. I blend technical precision with architectural best practices to build pixel-perfect, scalable web interfaces.
                </FadeIn>
                <FadeIn
                    delay={0.3}
                    className="flex flex-wrap gap-4"
                >
                    <a href="#experience" className="px-10 py-4 bg-sky-600 text-white rounded-2xl font-bold shadow-2xl shadow-sky-500/20 hover:scale-105 transition-all flex items-center gap-2">
                        View Experience <ChevronRight size={20} />
                    </a>
                    <div className="flex items-center gap-4">
                        <a href={DATA.profile.linkedin} target="_blank" className="p-3 bg-card border rounded-xl hover:text-sky-500 transition-colors"><Linkedin size={24} /></a>
                        <a href={DATA.profile.github} target="_blank" className="p-3 bg-card border rounded-xl hover:text-sky-500 transition-colors"><Github size={24} /></a>
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
                        <p className="pl-4">name = <span className="text-emerald-400">"Oscar Torres"</span>;</p>
                        <p className="pl-4">seniority = <span className="text-emerald-400">"Senior+"</span>;</p>
                        <p className="pl-4">leadership = <span className="text-emerald-400">true</span>;</p>
                        <p className="pl-4 text-muted-foreground">// Core focus:</p>
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
