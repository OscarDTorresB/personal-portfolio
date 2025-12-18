import { Linkedin, Mail } from 'lucide-react';
import { DATA } from '@/data/portfolio';

export const Contact = () => (
    <section id="contact" className="py-20 text-center">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">Let's Build the<br /><span className="text-indigo-500 italic underline decoration-indigo-500/20">Future Core</span>.</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto font-medium">
            Looking for a Tech Lead to drive your next enterprise system or a consultant to optimize your performance?
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href={`mailto:${DATA.profile.email}`} className="px-12 py-6 bg-foreground text-background font-black rounded-3xl hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg shadow-2xl">
                <Mail /> Reach Out Directly
            </a>
            <a href="#" className="px-12 py-6 bg-card border-2 font-black rounded-3xl hover:bg-muted transition-all flex items-center justify-center gap-3 text-lg">
                <Linkedin /> LinkedIn Profile
            </a>
        </div>
    </section>
);
