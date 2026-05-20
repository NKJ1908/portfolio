import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { PERSONAL_SERVICES, AGENCY_SERVICES } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Alex Mensah" },
      { name: "description", content: "Software development services for web apps, APIs and dashboards. Brand and design via the agency." },
      { property: "og:title", content: "Services — Alex Mensah" },
      { property: "og:description", content: "Development and agency services." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Personal"
        title="Development services."
        description="Primary practice. Direct work with founders and engineering teams."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERSONAL_SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </Section>
      <Section
        eyebrow="Agency"
        title="Brand & design services."
        description="Delivered through the studio. Useful when a project needs both engineering and identity in lockstep."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AGENCY_SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </Section>
    </>
  );
}
