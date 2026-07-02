import Link from "next/link";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  name?: string;
  href?: string;
  className?: string;
}

export function Wordmark({ name = "Oscar Torres", href, className }: WordmarkProps) {
  const inner = (
    <span
      className={cn(
        "font-display font-bold tracking-[-0.01em] text-foreground whitespace-nowrap",
        className
      )}
    >
      {name}
      <span className="text-accent-warm">.</span>
    </span>
  );
  return href ? (
    <Link href={href} className="no-underline">
      {inner}
    </Link>
  ) : (
    inner
  );
}
