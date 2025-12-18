import { Linkedin, Mail } from 'lucide-react';
import { DATA } from '@/data/portfolio';
import { FadeIn } from '../animations/FadeIn';
import { Button } from '@/components/ui/button';

export const Contact = () => (
    <section
        id="contact"
        className="py-20 text-center"
    >
        <FadeIn>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">Let's Build the<br /><span className="text-sky-500 italic underline decoration-sky-500/20">Future Core</span>.</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto font-medium">
                Looking for a Tech Lead to drive your next enterprise system or a consultant to optimize your performance?
            </p>
        </FadeIn>
        <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <Button size="lg" className="rounded-3xl text-lg shadow-2xl hover:scale-105" asChild>
                    <a href={`mailto:${DATA.profile.email}`}>
                        <Mail /> Reach Out Directly
                    </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-3xl text-lg" asChild>
                    <a href="#">
                        <Linkedin /> LinkedIn Profile
                    </a>
                </Button>
            </div>
        </FadeIn>
    </section>
);
