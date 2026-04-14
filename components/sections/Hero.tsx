"use client";

import Link from "next/link";
import { MapPin, ArrowRight, Sparkles, FileText } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center relative overflow-hidden">
      {/* Amber ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-175 h-175 rounded-full bg-amber-500/6 blur-3xl -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-amber-500/4 blur-3xl translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 relative">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-1.5 text-sm font-mono text-accent mb-6 tracking-wide uppercase">
            <MapPin size={14} />
            {DATA.profile.location}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
            Hi, I&apos;m{" "}
            <span className="text-accent">{DATA.profile.name}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 border-l-2 border-accent pl-4">
            {DATA.profile.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View my work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#digital-twin"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <Sparkles size={15} />
              Ask my AI twin
            </Link>
            <Link
              href="/assets/files/Oscar_Torres_Software_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <FileText size={15} />
              View CV
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
