import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { PERSONAL_SERVICES } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

export default function ServicesPage() {
  const { t } = useT();
  return <Section eyebrow={t("services.personal.eyebrow")} title={t("services.personal.title")} description={t("services.personal.desc")}><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{PERSONAL_SERVICES.map((service) => <ServiceCard key={service.titleKey} icon={service.icon} title={t(service.titleKey)} desc={t(service.descKey)} />)}</div></Section>;
}
