import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  headingLevel?: 1 | 2;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  headingLevel = 1,
  description,
  children,
  className = "",
}: Props) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section ref={ref} id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">
        <div className={`reveal max-w-2xl mb-12 md:mb-16 ${isVisible ? "is-visible" : ""}`}>
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">{eyebrow}</div>
          )}
          <Heading className="text-3xl md:text-4xl font-semibold">{title}</Heading>
          {description && (
            <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">{description}</p>
          )}
        </div>
        <div className={`reveal-stagger ${isVisible ? "is-visible" : ""}`}>{children}</div>
      </div>
    </section>
  );
}
