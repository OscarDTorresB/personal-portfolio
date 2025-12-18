import { Github, Linkedin, Globe } from 'lucide-react';
import { DATA } from '@/data/portfolio';

export const Footer = () => (
    <footer className="py-20 border-t bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="font-black text-2xl tracking-tighter mb-4">OT<span className="text-sky-500">.</span>ENGINEERING</p>
            <p className="text-xs text-muted-foreground uppercase font-black tracking-[0.3em]">
                System Architecture // React Engineering // Technical Leadership
            </p>
            <div className="mt-8 flex justify-center gap-6 text-muted-foreground">
                <a href={DATA.profile.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border rounded-lg hover:border-sky-500 transition-all"><Github size={18} /></a>
                <a href={DATA.profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border rounded-lg hover:border-sky-500 transition-all"><Linkedin size={18} /></a>
            </div>
            <p className="mt-12 text-[10px] text-muted-foreground font-mono">
                OSCAR_TORRES_DOCS_v3_BUILD_2025 // COLOMBIA // NO_CMS_ALL_CODE
            </p>
        </div>
    </footer>
);
