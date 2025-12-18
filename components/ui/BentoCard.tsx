import { motion, Variants } from 'framer-motion';

interface Props {
    item: {
        title: string;
        description: string;
        tech: string[];
        icon: React.ReactNode;
        size: string;
        visual: React.ReactNode;
    };
    variants?: Variants;
}

export const BentoCard = ({ item, variants }: Props) => (
    <motion.div
        variants={variants}
        whileHover={{ y: -5 }}
        className={`${item.size} group p-6 md:p-8 bg-card border rounded-3xl hover:border-indigo-500/50 transition-all relative overflow-hidden`}
    >
        <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">{item.icon}</div>
            <div className="flex flex-wrap gap-1 justify-end">
                {item.tech.map((t, i) => <span key={i} className="text-[10px] px-2 py-1 bg-muted rounded font-bold uppercase tracking-wider">{t}</span>)}
            </div>
        </div>
        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        {item.visual}
    </motion.div>
);