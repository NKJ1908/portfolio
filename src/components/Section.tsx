import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: Props) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">
        <div className={`reveal max-w-2xl mb-12 md:mb-16 ${isVisible ? "is-visible" : ""}`}>
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">{eyebrow}</div>
          )}
          <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
          {description && (
            <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">{description}</p>
          )}
        </div>
        <div className={`reveal-stagger ${isVisible ? "is-visible" : ""}`}>{children}</div>
      </div>
    </section>
  );
}
