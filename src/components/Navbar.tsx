import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/constants/site";
import { useT } from "@/i18n/LanguageProvider";
import { LANGS } from "@/i18n/translations";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useT();

  const items = [
    { to: "/", label: t("nav.home"), exact: true },
    { to: "/about", label: t("nav.about"), exact: false },
    { to: "/services", label: t("nav.services"), exact: false },
    { to: "/projects", label: t("nav.projects"), exact: false },
    { to: "/contact", label: t("nav.contact"), exact: false },
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block size-2 rounded-full bg-white" />
          {SITE.name}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {items.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.exact}
              className={({ isActive }) =>
                `nav-link text-sm ${isActive ? "is-active text-foreground" : "text-muted hover:text-foreground"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <div
            role="group"
            aria-label={t("nav.langLabel")}
            className="flex items-center border border-border rounded-md overflow-hidden text-xs"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1.5 transition-colors cursor-pointer ${
                  lang === l.code ? "bg-white text-[#0A192F]" : "text-muted hover:text-foreground"
                }`}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-4 py-2 text-sm border border-border rounded-md hover:bg-surface transition-colors cursor-pointer"
          >
            {t("nav.cta")}
          </Link>
        </div>
        <button
          aria-label={t("nav.toggleMenu")}
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {items.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                end={n.exact}
                className={({ isActive }) =>
                  `text-sm py-1 ${isActive ? "text-foreground" : "text-muted hover:text-foreground"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
                    lang === l.code
                      ? "bg-white text-[#0A192F] border-white"
                      : "border-border text-muted"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
