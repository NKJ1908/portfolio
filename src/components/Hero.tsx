import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail } from "lucide-react";
import portrait from "@/assets/portrait.png";
import { SITE } from "@/constants/site";
import { useT } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t, lang } = useT();
  return (
    <section className="pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="container-x grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-7 order-2 md:order-1 fade-in-up">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted mb-6">
            <span className="size-1.5 rounded-full bg-white" />
            {t("hero.available")}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            {lang === "fr" ? (
              <>
                Développeur logiciel concevant des systèmes web{" "}
                <span className="text-muted">calmes et précis</span>.
              </>
            ) : (
              <>
                Software developer building <span className="text-muted">calm, precise</span> web systems.
              </>
            )}
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
            {t("hero.intro")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-white text-[#0A192F] px-5 py-3 rounded-md text-sm font-medium hover:bg-white/90 transition-colors"
            >
              {t("hero.viewProjects")} <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md text-sm font-medium hover:bg-surface transition-colors"
            >
              <Mail size={16} /> {t("hero.contactMe")}
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-white/60" />
              {SITE.location}
            </span>
            <a href={`mailto:${SITE.email}`} className="hover:text-foreground transition-colors">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
              {SITE.phone}
            </a>
          </div>
        </div>
        <div className="md:col-span-5 order-1 md:order-2 fade-in-up">
          <div className="relative">
            <div className="absolute -inset-3 border border-border rounded-2xl" aria-hidden />
            <img
              src={portrait}
              alt={`${SITE.name}, ${SITE.role}`}
              className="relative w-full h-auto rounded-xl object-cover shadow-2xl shadow-black/40 ring-1 ring-border"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
