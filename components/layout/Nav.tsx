import { Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Nav = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">O</div>
                    <a href='#' className="font-bold text-xl tracking-tighter">OSCAR<span className="text-indigo-500">.</span>ENGINEERING</a>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <a href="#experience" className="hover:text-indigo-500 transition-colors">Experience</a>
                        <a href="#architecture" className="hover:text-indigo-500 transition-colors">Stack</a>
                        <a href="#advisor" className="hover:text-indigo-500 transition-colors">AI Advisor</a>
                    </div>
                    <button
                        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Toggle theme"
                    >
                        {mounted && (resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
                    </button>
                </div>
            </div>
        </nav>
    );
};
