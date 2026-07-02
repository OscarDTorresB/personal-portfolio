import Link from "next/link";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-border scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            overline="Selected work"
            title="Things I've shipped"
            description="Side projects running in production — real users, real uptime, real numbers."
          />
        </FadeIn>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {DATA.projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.08} className="h-full">
              <div className="h-full flex flex-col gap-3 p-6 rounded-2xl bg-card border border-border shadow-card hover:border-accent hover:shadow-lift transition-all">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-foreground">
                    {project.name}
                  </h3>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-accent hover:text-accent-hover whitespace-nowrap transition-colors"
                  >
                    View &rarr;
                  </Link>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.impact && (
                  <span className="font-mono text-[13.5px] text-accent-hover dark:text-accent">
                    {project.impact}
                  </span>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-[13px] font-medium whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
