import { motion } from 'framer-motion';

export const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
    <div className="mb-12">
        <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-sky-500"
        >
            {children}
        </motion.h2>
        {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
    </div>
);
