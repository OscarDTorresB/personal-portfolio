import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillGroups = [
  { label: "Languages", skills: DATA.skills.languages },
  { label: "Frontend", skills: DATA.skills.frontend },
  { label: "AI / LLM", skills: DATA.skills.ai },
  { label: "Testing & Platform", skills: DATA.skills.platform },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-border scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeading overline="Toolbox" title="What I work with" />
        </FadeIn>

        <div className="mt-8 space-y-5">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.label} delay={index * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-faint-foreground sm:w-40 shrink-0">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-[13px] font-medium whitespace-nowrap"
                    >
                      {skill}
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
