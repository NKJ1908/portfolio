import { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/constants/site";
import { useTheme } from "@/context/ThemeContext";
import { useActiveSection } from "@/hooks/use-active-section";
import { useT } from "@/i18n/LanguageProvider";
import { LANGS, type dict } from "@/i18n/translations";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useT();
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(SECTION_IDS, 100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 72;
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="container-x flex h-16 items-center justify-between">
        {/* Minimal Brand Mark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-bold tracking-tight text-foreground transition-opacity hover:opacity-85 text-sm sm:text-base"
        >
          {SITE.name}
        </a>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link text-xs tracking-wide uppercase transition-colors duration-150 ${
                  isActive
                    ? "is-active text-foreground font-semibold"
                    : "text-muted hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {t(item.labelKey as keyof typeof dict)}
              </a>
            );
          })}
        </nav>

        {/* Desktop Controls: Theme, Language, CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle (discreet) */}
          <div
            role="group"
            aria-label="Langue"
            className="flex items-center rounded-md border border-border bg-surface p-0.5 text-xs font-medium"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`rounded px-2 py-0.5 transition-colors cursor-pointer ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-muted hover:text-foreground"
                }`}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle (discreet) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Basculer en mode clair" : "Basculer en mode sombre"}
            title={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
            className="flex size-8 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:text-foreground cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun size={15} className="text-amber-400" />
            ) : (
              <Moon size={15} className="text-slate-700" />
            )}
          </button>

          {/* Direct CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="cta-button inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-2xs hover:opacity-90 cursor-pointer"
          >
            <span>{lang === "fr" ? "Discuter" : "Let's talk"}</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="flex size-8 items-center justify-center rounded-md border border-border bg-surface text-muted"
          >
            {theme === "dark" ? (
              <Sun size={15} className="text-amber-400" />
            ) : (
              <Moon size={15} className="text-slate-700" />
            )}
          </button>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            className="flex size-8 items-center justify-center rounded-md border border-border bg-surface text-foreground"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-b border-border bg-background/98 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="container-x py-4 flex flex-col gap-3">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-surface font-semibold text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span>{t(item.labelKey as keyof typeof dict)}</span>
                    {isActive && <span className="size-1.5 rounded-full bg-primary" />}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center justify-between border-t border-border pt-3">
              <div
                role="group"
                aria-label="Langue"
                className="flex items-center rounded-md border border-border bg-surface p-0.5 text-xs"
              >
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLang(l.code)}
                    className={`rounded px-2.5 py-1 ${
                      lang === l.code
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
              >
                <span>{lang === "fr" ? "Discuter" : "Let's talk"}</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
