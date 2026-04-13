"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Briefcase, FolderOpen, Cpu, Sparkles } from "lucide-react";
import { DATA } from "@/data/portfolio";

const navLinks = [
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Ask Oscar", href: "#digital-twin", icon: Sparkles },
];

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-bold text-foreground tracking-tight hover:text-accent transition-colors"
        >
          <span className="text-accent leading-none">◆</span>
          {DATA.profile.name}
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <link.icon size={13} />
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 text-muted-foreground hover:text-accent transition-colors"
            aria-label="Toggle theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />
            ) : (
              <span className="w-4 h-4 block" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
