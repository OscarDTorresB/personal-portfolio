import { DATA } from '@/data/portfolio';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations';

export const SkillsEducation = () => (
    <section className="mb-32 grid md:grid-cols-2 gap-12">
        <motion.div
            className="p-10 bg-card border rounded-[2.5rem]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
        >
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3"><GraduationCap className="text-indigo-500" /> Continuous Learning</h3>
            <div className="space-y-6">
                {DATA.education.map((edu, i) => (
                    <div key={i} className="group">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold text-lg group-hover:text-indigo-500 transition-colors">{edu.title}</h4>
                            <span className="text-xs font-black bg-muted px-2 py-1 rounded">{edu.year}</span>
                        </div>
                        <p className="text-sm text-indigo-500 font-bold mb-1">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground">{edu.details}</p>
                    </div>
                ))}
            </div>
        </motion.div>
        <motion.div
            className="p-10 bg-card border rounded-[2.5rem]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
        >
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3"><Award className="text-indigo-500" /> Professional Stack</h3>
            <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "System Design", "Unit Testing", "TDD", "Frontend Performance", "Accessibility (WCAG)", "State Management", "Leadership", "CI/CD"].map((skill, i) => (
                    <motion.span
                        key={i}
                        variants={fadeInUp}
                        className="px-4 py-2 bg-muted text-xs font-bold rounded-xl border border-transparent hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-all"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    </section>
);
