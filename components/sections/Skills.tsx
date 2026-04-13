import { Code2, Layers, Sparkles, TestTube2, Cpu } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

const skillGroups = [
  {
    label: "Languages",
    skills: DATA.skills.languages,
    icon: Code2,
    badgeClass:
      "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/40 dark:border-amber-800/50 dark:text-amber-300",
  },
  {
    label: "Frontend",
    skills: DATA.skills.frontend,
    icon: Layers,
    badgeClass:
      "bg-sky-50 border-sky-200 text-sky-800 dark:bg-sky-950/40 dark:border-sky-800/50 dark:text-sky-300",
  },
  {
    label: "AI & LLMs",
    skills: DATA.skills.ai,
    icon: Sparkles,
    badgeClass:
      "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800/50 dark:text-emerald-300",
  },
  {
    label: "Testing & Platform",
    skills: DATA.skills.platform,
    icon: TestTube2,
    badgeClass:
      "bg-violet-50 border-violet-200 text-violet-800 dark:bg-violet-950/40 dark:border-violet-800/50 dark:text-violet-300",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-12 flex items-center gap-2.5">
            <Cpu size={20} className="text-accent" />
            Skills
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.label} delay={index * 0.1}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="sm:w-44 shrink-0">
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <group.icon size={15} className="text-accent" />
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-2.5 py-1 rounded border ${group.badgeClass}`}
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
