import { FadeIn } from "@/components/animations/FadeIn";
import { DigitalTwinChat } from "@/components/features/DigitalTwinChat";

export function DigitalTwin() {
  return (
    <section
      id="digital-twin"
      className="py-24 border-t-2 border-accent bg-muted/30"
    >
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
            Digital Twin
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Can&apos;t make it to a call? Talk to my AI.
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
            This AI is trained on my full professional background — experience,
            technical decisions, and working style. Ask it anything you&apos;d
            ask me in a screening call. I&apos;ll follow up personally if you
            reach out.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <DigitalTwinChat />
        </FadeIn>
      </div>
    </section>
  );
}
