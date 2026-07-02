import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 border-t border-border scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeading overline="Education" title="Degrees & certifications" />
        </FadeIn>

        <div className="mt-8 space-y-7">
          {DATA.education.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[13.5px] text-faint-foreground mb-1.5">
                    {item.institution} &middot; {item.year}
                  </p>
                  <p className="text-[15.5px] leading-relaxed text-muted-foreground max-w-[62ch]">
                    {item.details}
                  </p>
                </div>
                {(item.link || item.badge) && (
                  <div className="flex flex-col items-end gap-3 shrink-0 pt-1.5">
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                        aria-label={`Verify ${item.title} certificate`}
                      >
                        Verify
                        <ArrowUpRight size={13} />
                      </Link>
                    )}
                    {item.badge && (
                      <Image
                        src={item.badge}
                        alt={`${item.title} badge`}
                        width={72}
                        height={72}
                        className="hidden sm:block"
                      />
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
