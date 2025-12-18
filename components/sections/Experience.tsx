import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { DATA } from '@/data/portfolio';

export const Experience = () => (
    <section id="experience" className="mb-32">
        <SectionTitle subtitle="Technical trajectory in high-demand corporate environments.">
            Professional Experience
        </SectionTitle>
        <div className="space-y-12">
            {DATA.experience.map((exp, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-8 relative"
                >
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <p className="text-sky-500 font-medium mb-2">{exp.role}</p>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">{exp.period}</p>
                    </div>
                    <div className="md:w-2/3 space-y-4">
                        <ul className="space-y-3">
                            {exp.achievements.map((a, i) => (
                                <li key={i} className="flex gap-3 text-muted-foreground">
                                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" />
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
