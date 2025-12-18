import { motion } from 'framer-motion';
import { DATA } from '@/data/portfolio';

export const ImpactStats = () => (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
        {DATA.impact.map((s, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-8 bg-card border rounded-3xl group hover:border-indigo-500/40 transition-all"
            >
                <p className="text-5xl font-black text-indigo-500 mb-2">{s.value}{s.suffix}</p>
                <p className="text-[10px] font-black uppercase tracking-widest mb-1">{s.label}</p>
                <p className="text-xs text-muted-foreground font-medium">{s.sub}</p>
            </motion.div>
        ))}
    </section>
);
