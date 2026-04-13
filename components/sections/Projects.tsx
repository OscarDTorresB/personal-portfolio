import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

const techBadgeColors = [
  "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/40 dark:border-amber-800/50 dark:text-amber-300",
  "bg-sky-50 border-sky-200 text-sky-800 dark:bg-sky-950/40 dark:border-sky-800/50 dark:text-sky-300",
  "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800/50 dark:text-emerald-300",
  "bg-violet-50 border-violet-200 text-violet-800 dark:bg-violet-950/40 dark:border-violet-800/50 dark:text-violet-300",
];

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-12 flex items-center gap-2.5">
            <Code2 size={20} className="text-accent" />
            Projects
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {DATA.projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.1}>
              <div className="rounded-lg p-5 -mx-5 border border-transparent hover:border-border hover:bg-muted/40 transition-all">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {project.name}
                    <ArrowUpRight
                      size={16}
                      className="opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all"
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
                      <span className="text-accent mt-0.5 shrink-0 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-xs px-2 py-0.5 rounded border ${techBadgeColors[index % techBadgeColors.length]}`}
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
