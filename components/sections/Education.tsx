import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold tracking-tight mb-12">
            Education & Certifications
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {DATA.education.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors shrink-0"
                      aria-label={`Verify ${item.title} certificate`}
                    >
                      Verify
                      <ExternalLink size={11} />
                    </Link>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {item.institution} &middot; {item.year}
                </p>
                <p className="text-sm text-muted-foreground">{item.details}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
