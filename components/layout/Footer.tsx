import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { DATA } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {DATA.profile.name}
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link
            href={`mailto:${DATA.profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Mail size={14} />
            {DATA.profile.email}
          </Link>
          <Link
            href={DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Linkedin size={14} />
            LinkedIn
          </Link>
          <Link
            href={DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Github size={14} />
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
