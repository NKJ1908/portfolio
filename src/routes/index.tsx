import { useEffect } from "react";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StackSection } from "@/components/StackSection";

export default function Home() {
  // Smoothly scroll to anchor on initial load if present in URL
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const timer = setTimeout(() => {
          const headerOffset = 76;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 80);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
