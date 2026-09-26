import { Boxes, Layers, Network, Smartphone, type LucideIcon } from "lucide-react";
import type { dict } from "@/i18n/translations";

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  titleKey: keyof typeof dict | string;
  descKey: keyof typeof dict | string;
  problemKey: keyof typeof dict | string;
  solutionKey: keyof typeof dict | string;
  deliverablesKey: keyof typeof dict | string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "app-development",
    icon: Smartphone,
    titleKey: "svc.appDev.title",
    descKey: "svc.appDev.desc",
    problemKey: "svc.appDev.problem",
    solutionKey: "svc.appDev.solution",
    deliverablesKey: "svc.appDev.deliverables",
  },
  {
    id: "business-digitalization",
    icon: Layers,
    titleKey: "svc.digitalization.title",
    descKey: "svc.digitalization.desc",
    problemKey: "svc.digitalization.problem",
    solutionKey: "svc.digitalization.solution",
    deliverablesKey: "svc.digitalization.deliverables",
  },
  {
    id: "systems-integration",
    icon: Network,
    titleKey: "svc.integration.title",
    descKey: "svc.integration.desc",
    problemKey: "svc.integration.problem",
    solutionKey: "svc.integration.solution",
    deliverablesKey: "svc.integration.deliverables",
  },
  {
    id: "erp-architecture",
    icon: Boxes,
    titleKey: "svc.erp.title",
    descKey: "svc.erp.desc",
    problemKey: "svc.erp.problem",
    solutionKey: "svc.erp.solution",
    deliverablesKey: "svc.erp.deliverables",
  },
];

// Backward compatibility export
export const PERSONAL_SERVICES = SERVICES.map((s) => ({
  icon: s.icon,
  titleKey: s.titleKey as keyof typeof dict,
  descKey: s.descKey as keyof typeof dict,
}));
