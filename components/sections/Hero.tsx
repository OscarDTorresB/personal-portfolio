"use client";

import Link from "next/link";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <FadeIn delay={0}>
          <p className="text-sm font-mono text-accent mb-4 tracking-wide uppercase">
            {DATA.profile.location}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
            Hi, I&apos;m {DATA.profile.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            {DATA.profile.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#experience"
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View my work
            </Link>
            <Link
              href="#digital-twin"
              className="inline-flex items-center px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Ask my AI twin
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
