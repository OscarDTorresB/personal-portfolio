import { motion, Variants } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
        className="h-full"
    >
        <Card className="h-full p-6 md:p-8 rounded-3xl hover:border-sky-500/50 transition-all relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-sky-500/10 rounded-2xl text-sky-500">{item.icon}</div>
                <div className="flex flex-wrap gap-1 justify-end">
                    {item.tech.map((t, i) => <Badge key={i} variant="secondary" className="text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">{t}</Badge>)}
                </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            {item.visual}
        </Card>
    </motion.div>
);