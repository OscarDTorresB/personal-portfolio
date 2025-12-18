import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { DATA } from '@/data/portfolio';

export const Architecture = () => (
    <section id="architecture" className="mb-32">
        <SectionTitle subtitle="My strength isn't just writing code, but designing the systems that sustain it.">
            Core Architecture & Leadership
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
            {DATA.architecture.map((item, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="group relative p-8 bg-card border rounded-3xl hover:border-indigo-500/50 transition-all overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                        <Layers className="text-indigo-500" size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{item.description}</p>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {item.tech.map((t, i) => (
                                <span key={i} className="text-[10px] px-2 py-1 bg-muted rounded-md uppercase font-bold tracking-wider">{t}</span>
                            ))}
                        </div>
                        <p className="text-xs leading-relaxed italic border-l-2 border-indigo-500/30 pl-3">
                            {item.details}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);
