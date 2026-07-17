import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { PERSONAL_SERVICES } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Jean N'TCHOUGAN" },
      { name: "description", content: "Software development services for web apps, APIs and dashboards." },
      { property: "og:title", content: "Services — Jean N'TCHOUGAN" },
      { property: "og:description", content: "Development services." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useT();
  return (
    <Section
      eyebrow={t("services.personal.eyebrow")}
      title={t("services.personal.title")}
      description={t("services.personal.desc")}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PERSONAL_SERVICES.map((s) => (
          <ServiceCard key={s.titleKey} icon={s.icon} title={t(s.titleKey)} desc={t(s.descKey)} />
        ))}
      </div>
    </Section>
  );
}
