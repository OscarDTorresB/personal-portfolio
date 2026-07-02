import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DigitalTwinChat } from "@/components/features/DigitalTwinChat";

export function DigitalTwin() {
  return (
    <section
      id="digital-twin"
      className="py-16 sm:py-24 border-t border-border bg-muted/40 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            overline="Digital twin"
            title={
              <>
                Can&apos;t make it to a call? Talk to my AI
                <span className="text-accent-warm">.</span>
              </>
            }
            description="Trained on my full professional background: experience, technical decisions, and working style. Ask it anything you'd ask me in a screening call. I'll follow up personally if you reach out."
          />
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10">
          <DigitalTwinChat />
        </FadeIn>
      </div>
    </section>
  );
}
