import {
  Code2, Globe, Layout, Server, Plug, Boxes, ShoppingCart, GaugeCircle,
  Palette, PenTool, Sparkles, FileImage, Megaphone, BadgeCheck, Image as ImageIcon,
} from "lucide-react";
import type { dict } from "@/i18n/translations";

type Key = keyof typeof dict;

export const PERSONAL_SERVICES: { icon: typeof Code2; titleKey: Key; descKey: Key }[] = [
  { icon: Code2,        titleKey: "svc.webapp.t",   descKey: "svc.webapp.d" },
  { icon: Globe,        titleKey: "svc.bizsite.t",  descKey: "svc.bizsite.d" },
  { icon: Layout,       titleKey: "svc.frontend.t", descKey: "svc.frontend.d" },
  { icon: Server,       titleKey: "svc.backend.t",  descKey: "svc.backend.d" },
  { icon: Plug,         titleKey: "svc.api.t",      descKey: "svc.api.d" },
  { icon: Boxes,        titleKey: "svc.custom.t",   descKey: "svc.custom.d" },
  { icon: ShoppingCart, titleKey: "svc.ecom.t",     descKey: "svc.ecom.d" },
  { icon: GaugeCircle,  titleKey: "svc.dash.t",     descKey: "svc.dash.d" },
];

export const AGENCY_SERVICES: { icon: typeof Code2; titleKey: Key; descKey: Key }[] = [
  { icon: BadgeCheck, titleKey: "ag.branding.t", descKey: "ag.branding.d" },
  { icon: Palette,    titleKey: "ag.graphic.t",  descKey: "ag.graphic.d" },
  { icon: PenTool,    titleKey: "ag.logo.t",     descKey: "ag.logo.d" },
  { icon: FileImage,  titleKey: "ag.flyers.t",   descKey: "ag.flyers.d" },
  { icon: ImageIcon,  titleKey: "ag.posters.t",  descKey: "ag.posters.d" },
  { icon: Megaphone,  titleKey: "ag.social.t",   descKey: "ag.social.d" },
  { icon: Sparkles,   titleKey: "ag.corp.t",     descKey: "ag.corp.d" },
];
