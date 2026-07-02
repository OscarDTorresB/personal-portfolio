"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Ask Oscar", href: "#digital-twin" },
];

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-lg tracking-[-0.01em] text-foreground"
        >
          Oscar Torres<span className="text-accent-warm">.</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 text-muted-foreground hover:text-accent transition-colors"
            aria-label="Toggle theme"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="dark:hidden" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 text-foreground"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="sm:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lift flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-[17px] font-semibold text-foreground border-b border-border last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
