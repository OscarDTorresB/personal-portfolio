import Link from "next/link";

export const Nav = () => {
    return (
        <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold">O</div>
                    <Link href='#' className="font-bold text-xl tracking-tighter">OSCAR<span className="text-sky-500">.</span>ENGINEERING</Link>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <Link href="#experience" className="hover:text-sky-500 transition-colors">Experience</Link>
                        <Link href="#architecture" className="hover:text-sky-500 transition-colors">Stack</Link>
                        <Link href="#advisor" className="hover:text-sky-500 transition-colors">AI Advisor</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
