import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { NAV, SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container-x py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-semibold">{SITE.name}</div>
          <div className="text-sm text-muted mt-1">{SITE.role}</div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-muted hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={SITE.github} aria-label="GitHub" className="p-2 border border-border rounded-md hover:bg-surface">
            <Github size={16} />
          </a>
          <a href={SITE.linkedin} aria-label="LinkedIn" className="p-2 border border-border rounded-md hover:bg-surface">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Email" className="p-2 border border-border rounded-md hover:bg-surface">
            <Mail size={16} />
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 text-xs text-muted flex justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Built with intent.</span>
        </div>
      </div>
    </footer>
  );
}
