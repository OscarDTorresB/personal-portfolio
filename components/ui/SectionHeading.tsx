import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("flex flex-col gap-2.5", className)}>
      <span aria-hidden="true" className="accent-mark" />
      {overline && (
        <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
          {overline}
        </span>
      )}
      <h2 className="font-display text-2xl sm:text-[28px] font-bold tracking-[-0.01em] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-muted-foreground max-w-[62ch]">
          {description}
        </p>
      )}
    </header>
  );
}
