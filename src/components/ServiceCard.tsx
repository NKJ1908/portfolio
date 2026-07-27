import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="card-surface p-6 hover:border-white/20 transition-colors">
      <Icon size={20} className="text-white" />
      <h3 className="mt-4 font-medium">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}
