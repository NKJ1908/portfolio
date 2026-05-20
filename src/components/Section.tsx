import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">
        <div className="max-w-2xl mb-12 md:mb-16 fade-in-up">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">{eyebrow}</div>
          )}
          <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
          {description && (
            <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
