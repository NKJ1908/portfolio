import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

import portrait from "@/assets/portrait.jpg";
import { SITE } from "@/constants/site";
import { useT } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t, lang } = useT();

  return (
    <section aria-labelledby="hero-title" className="pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="container-x grid items-center gap-12 md:grid-cols-12 md:gap-16">
        {/* Hero Content */}
        <div className="order-2 md:order-1 md:col-span-7">
          <h1
            id="hero-title"
            className="hero-enter hero-enter-2 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-5xl"
          >
            {lang === "fr" ? <>{t("hero.title")}</> : <>{t("hero.title")}</>}
          </h1>

          <p className="hero-enter hero-enter-3 mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t("hero.intro")}
          </p>

          <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="cta-button group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-[#0A192F] hover:bg-white/90"
            >
              {t("hero.viewProjects")}
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              to="/contact"
              className="cta-button inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-surface"
            >
              <Mail size={16} aria-hidden="true" />
              {t("hero.contactMe")}
            </Link>
          </div>
        </div>

        {/* Hero Portrait */}
        <div className="hero-portrait-enter order-1 md:order-2 md:col-span-5">
          <div className="relative mx-auto max-w-md">
            {/* Decorative Frame */}
            <div
              className="portrait-frame portrait-frame-outline absolute -inset-3 rounded-2xl border border-white/10"
              aria-hidden="true"
            />

            <div
              className="portrait-frame portrait-frame-top absolute -left-2 -top-2 size-12 border-l border-t border-white/45"
              aria-hidden="true"
            />

            <div
              className="portrait-frame portrait-frame-bottom absolute -bottom-2 -right-2 size-12 border-b border-r border-white/45"
              aria-hidden="true"
            />

            {/* Portrait */}
            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#0D1D34] p-2 shadow-2xl shadow-black/45">
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={portrait}
                  alt={`${SITE.name} — ${SITE.role}`}
                  className="block h-auto w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
