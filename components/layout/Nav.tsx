"use client";

import Link from "next/link";
import { DATA } from "@/data/portfolio";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Ask Oscar", href: "#digital-twin" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-foreground tracking-tight hover:text-accent transition-colors"
        >
          {DATA.profile.name}
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
