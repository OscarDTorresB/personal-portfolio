import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { DATA } from '@/data/portfolio';

export const ExperienceDetailed = () => (
    <section id="experience" className="mb-32">
        <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">Professional <span className="text-indigo-500">Journey</span></h2>
            <p className="text-muted-foreground max-w-xl text-lg italic underline decoration-indigo-500/20">A proven track record of architectural excellence and impact.</p>
        </div>

        <div className="space-y-16">
            {DATA.experience.map((exp, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="grid md:grid-cols-3 gap-8 p-10 bg-card/30 border rounded-[2.5rem] relative overflow-hidden group hover:bg-card/50 transition-all"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500"><Briefcase size={20} /></div>
                            <h3 className="text-2xl font-black">{exp.company}</h3>
                        </div>
                        <p className="text-indigo-500 font-bold mb-1">{exp.role}</p>
                        <p className="text-xs text-muted-foreground uppercase font-black tracking-widest">{exp.period}</p>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <p className="text-muted-foreground font-medium italic">{exp.description}</p>
                        <ul className="grid gap-4">
                            {exp.achievements.map((a, idx) => (
                                <li key={idx} className="flex gap-4 text-sm leading-relaxed">
                                    <CheckCircle2 className="text-indigo-500 shrink-0 mt-1" size={18} />
                                    <span>{a}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);
