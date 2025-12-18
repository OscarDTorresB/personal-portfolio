import { DATA } from '@/data/portfolio';
import { FadeIn } from '../animations/FadeIn';

export const ImpactStats = () => (
    <section
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-32"
    >
        {DATA.impact.map((s, i) => (
            <FadeIn
                key={i}
                delay={i * 0.1}
                className="p-6 md:p-8 bg-card border rounded-3xl group hover:border-sky-500/40 transition-all"
            >
                <p className="text-4xl md:text-5xl font-black text-sky-500 mb-2">{s.value}{s.suffix}</p>
                <p className="text-[10px] font-black uppercase tracking-widest mb-1">{s.label}</p>
                <p className="text-xs text-muted-foreground font-medium">{s.sub}</p>
            </FadeIn>
        ))}
    </section>
);
