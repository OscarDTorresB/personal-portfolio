"use client";

import Link from "next/link";
import { MapPin, ArrowRight, Sparkles, FileText } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground mb-6">
            <MapPin size={13} className="text-accent" />
            {DATA.profile.location}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-[56px] font-bold tracking-[-0.02em] leading-[1.05] max-w-[16ch] mb-6">
            {DATA.profile.headline}
            <span className="text-accent-warm">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground mb-3">
            {DATA.profile.subline}
          </p>
          <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[52ch] mb-10">
            {DATA.profile.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-[15px] font-semibold hover:bg-accent-hover transition-colors"
            >
              View projects
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/assets/files/Oscar_Torres_Software_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-accent text-accent text-[15px] font-semibold hover:bg-accent-wash hover:text-accent-hover transition-colors"
            >
              <FileText size={15} />
              Résumé
            </Link>
            <Link
              href="#digital-twin"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-muted-foreground text-[15px] font-semibold hover:bg-muted transition-colors"
            >
              <Sparkles size={15} />
              Ask my AI twin
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
