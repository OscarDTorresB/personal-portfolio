import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { DATA } from "@/data/portfolio";
import { Wordmark } from "@/components/ui/Wordmark";

const socialLinks = [
  { label: "LinkedIn", href: DATA.profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: DATA.profile.github, icon: Github },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Wordmark className="text-base" />
          <span className="text-[13.5px] text-faint-foreground">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href={`mailto:${DATA.profile.email}`}
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            {DATA.profile.email}
          </Link>
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <link.icon size={19} strokeWidth={1.5} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
