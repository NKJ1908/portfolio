import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { useT } from "@/i18n/LanguageProvider";
import type { dict } from "@/i18n/translations";

export function Footer() {
  const { t, lang } = useT();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 76;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <footer className="border-t border-border bg-surface/50 mt-16 transition-colors">
      <div className="container-x py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-bold text-foreground tracking-tight text-base">{SITE.name}</div>
          <div className="text-xs text-muted mt-1">
            {lang === "fr"
              ? "Développeur d'applications · Lomé, Togo"
              : "Application Developer · Lomé, Togo"}
          </div>
        </div>

        {/* Anchor Links */}
        <nav
          className="flex flex-wrap gap-x-6 gap-y-2 text-xs"
          aria-label="Navigation pied de page"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-muted hover:text-foreground transition-colors cursor-pointer"
            >
              {t(item.labelKey as keyof typeof dict)}
            </a>
          ))}
        </nav>

        {/* Professional Links */}
        <div className="flex items-center gap-2">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:border-border-hover transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:border-border-hover transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:border-border-hover transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="container-x py-5 text-xs text-muted flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-border/60">
        <span>
          &copy; {new Date().getFullYear()} {SITE.name}. {t("footer.rights")}
        </span>
        <span className="font-mono text-[11px] text-muted-strong">Lomé, Togo</span>
      </div>
    </footer>
  );
}
