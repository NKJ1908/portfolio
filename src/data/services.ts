import {
  Code2, Globe, Layout, Server, Plug, Boxes, ShoppingCart, GaugeCircle,
  Palette, PenTool, Sparkles, FileImage, Megaphone, BadgeCheck, Image as ImageIcon,
} from "lucide-react";

export const PERSONAL_SERVICES = [
  { icon: Code2,        title: "Web Application Development", desc: "Production-grade SPAs and full-stack apps." },
  { icon: Globe,        title: "Business Websites",           desc: "Fast, SEO-ready marketing sites." },
  { icon: Layout,       title: "Frontend Development",        desc: "Accessible, typed React interfaces." },
  { icon: Server,       title: "Backend Development",         desc: "APIs, auth, data modeling, queues." },
  { icon: Plug,         title: "API Integration",             desc: "Payments, CRMs, AI, third-party systems." },
  { icon: Boxes,        title: "Custom Solutions",            desc: "Bespoke tools for specific workflows." },
  { icon: ShoppingCart, title: "E-commerce Systems",          desc: "Stores, checkout, inventory, fulfillment." },
  { icon: GaugeCircle,  title: "Dashboards",                  desc: "Analytics and operations interfaces." },
];

export const AGENCY_SERVICES = [
  { icon: BadgeCheck, title: "Branding",            desc: "Identity systems built to scale." },
  { icon: Palette,    title: "Graphic Design",      desc: "Editorial-grade visual communication." },
  { icon: PenTool,    title: "Logo Design",         desc: "Marks crafted for clarity and longevity." },
  { icon: FileImage,  title: "Flyers",              desc: "Print-ready event and campaign assets." },
  { icon: ImageIcon,  title: "Posters",             desc: "Large-format visuals with intent." },
  { icon: Megaphone,  title: "Social Media Design", desc: "Cohesive templates across channels." },
  { icon: Sparkles,   title: "Corporate Identity",  desc: "Guidelines, stationery, brand assets." },
];
