import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeading overline="Experience" title="Where I've been" />
        </FadeIn>

        <div className="mt-8">
          {DATA.experience.map((job, index) => (
            <FadeIn key={job.company} delay={index * 0.08}>
              <div
                className={`grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 py-6 ${
                  index < DATA.experience.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
              >
                <span className="font-mono text-[13.5px] text-faint-foreground pt-0.5">
                  {job.period}
                  {job.current && (
                    <span className="ml-2 inline-flex items-center gap-1 text-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
                      Now
                    </span>
                  )}
                </span>

                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <span className="text-[15.5px] font-medium text-accent">
                      {job.company}
                    </span>
                  </div>
                  <ul className="space-y-1.5 pl-4.5 list-disc marker:text-accent">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-[15.5px] leading-relaxed text-muted-foreground"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
