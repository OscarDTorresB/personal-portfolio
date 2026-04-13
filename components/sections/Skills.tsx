import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

const skillGroups = [
  { label: "Languages", skills: DATA.skills.languages },
  { label: "Frontend", skills: DATA.skills.frontend },
  { label: "AI & LLMs", skills: DATA.skills.ai },
  { label: "Testing & Platform", skills: DATA.skills.platform },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-12">Skills</h2>
        </FadeIn>

        <div className="space-y-8">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.label} delay={index * 0.1}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="sm:w-44 shrink-0">
                  <span className="text-sm font-semibold text-foreground">
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-muted text-muted-foreground border border-border"
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
