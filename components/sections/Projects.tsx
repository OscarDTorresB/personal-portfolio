import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-12">Projects</h2>
        </FadeIn>

        <div className="space-y-12">
          {DATA.projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.1}>
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {project.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-accent mt-0.5 shrink-0">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {index < DATA.projects.length - 1 && (
                  <div className="mt-12 border-b border-border" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
