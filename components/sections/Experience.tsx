import { Briefcase, Calendar } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-12 flex items-center gap-2.5">
            <Briefcase size={20} className="text-accent" />
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {DATA.experience.map((job, index) => (
            <FadeIn key={job.company} delay={index * 0.1}>
              <div
                className={`group pl-4 border-l-2 transition-colors ${
                  job.current ? "border-accent" : "border-transparent"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-foreground">
                      {job.company}
                    </h3>
                    {job.current && (
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-accent">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
                        Now
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground shrink-0">
                    <Calendar size={12} />
                    {job.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {job.role}
                </p>

                <ul className="space-y-1.5">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-accent mt-0.5 shrink-0 font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {index < DATA.experience.length - 1 && (
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
