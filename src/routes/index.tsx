import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { PERSONAL_SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/skills";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jean N'TCHOUGAN — Software Developer" },
      { name: "description", content: "Software developer specializing in web applications, APIs and dashboards." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t } = useT();
  const featured = PROJECTS.slice(0, 3);
  return (
    <>
      <Hero />

      <Section
        id="about"
        eyebrow={t("home.aboutEyebrow")}
        title={t("home.aboutTitle")}
        description={t("home.aboutDesc")}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: t("home.pillar1.t"), d: t("home.pillar1.d") },
            { t: t("home.pillar2.t"), d: t("home.pillar2.d") },
            { t: t("home.pillar3.t"), d: t("home.pillar3.d") },
          ].map((b) => (
            <div key={b.t} className="card-surface p-6">
              <h3 className="font-medium">{b.t}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/about" className="text-sm inline-flex items-center gap-1 text-muted hover:text-foreground">
            {t("home.readBackground")} <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      <Section
        id="services"
        eyebrow={t("home.servicesEyebrow")}
        title={t("home.servicesTitle")}
        description={t("home.servicesDesc")}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERSONAL_SERVICES.map((s) => (
            <ServiceCard key={s.titleKey} icon={s.icon} title={t(s.titleKey)} desc={t(s.descKey)} />
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow={t("home.workEyebrow")}
        title={t("home.projectsTitle")}
        description={t("home.projectsDesc")}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-10">
          <Link to="/projects" className="text-sm inline-flex items-center gap-1 text-muted hover:text-foreground">
            {t("home.seeAll")} <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow={t("home.stackEyebrow")}
        title={t("home.stackTitle")}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="card-surface p-6">
              <h3 className="text-sm uppercase tracking-[0.18em] text-muted">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs px-2.5 py-1 border border-border rounded-md">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="cta"
        eyebrow={t("home.ctaEyebrow")}
        title={t("home.ctaTitle")}
        description={t("home.ctaDesc")}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-[#0A192F] px-5 py-3 rounded-md text-sm font-medium hover:bg-white/90"
        >
          {t("home.ctaButton")} <ArrowRight size={16} />
        </Link>
      </Section>
    </>
  );
}
