import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider, useT } from "@/i18n/LanguageProvider";

import Home from "@/routes/index";

const SITE_URL = "https://jean-ntchougan.tech";

function PageMetadata() {
  const { lang } = useT();

  useEffect(() => {
    const meta = {
      en: {
        title: "Jean N'TCHOUGAN — Application Developer & Digital Solutions",
        description:
          "Jean N'TCHOUGAN designs and builds reliable web and mobile applications for businesses and organizations in Lomé, Togo.",
      },
      fr: {
        title: "Jean N'TCHOUGAN — Développeur d'applications & Solutions numériques",
        description:
          "Jean N'TCHOUGAN conçoit et développe des solutions web, mobiles et intégrées pour faire évoluer les opérations d'entreprises.",
      },
    }[lang];

    document.title = meta.title;

    const updateMeta = (selector: string, content: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
    };

    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", `${SITE_URL}/`);
    updateMeta('meta[name="description"]', meta.description);
    updateMeta('meta[property="og:url"]', `${SITE_URL}/`);
    updateMeta('meta[property="og:title"]', meta.title);
    updateMeta('meta[property="og:description"]', meta.description);
    updateMeta('meta[name="twitter:title"]', meta.title);
    updateMeta('meta[name="twitter:description"]', meta.description);
  }, [lang]);

  return null;
}

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShow(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.pushState(null, "", "#home");
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className={`
        fixed bottom-6 right-6 z-40
        flex size-11 items-center justify-center
        rounded-full
        border border-border
        bg-surface/90
        text-foreground
        shadow-lg
        backdrop-blur-md
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-border-hover
        hover:bg-primary
        hover:text-primary-foreground
        hover:shadow-xl
        cursor-pointer
        ${
          show
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-8 opacity-0 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={18} />
    </button>
  );
}

export function App() {
  const location = useLocation();

  // Scroll to anchor on route change with hash
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const headerOffset = 72;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location.hash]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
          {/* Subtle Global Architectural Background */}
          <AnimatedBackground />

          {/* Minimal Custom Cursor */}
          <CustomCursor />

          <PageMetadata />
          <Navbar />

          <main className="relative z-10 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Backward compatibility: redirect any past separate routes to their anchor in the one-page landing */}
              <Route path="/about" element={<Navigate to="/#about" replace />} />
              <Route path="/services" element={<Navigate to="/#services" replace />} />
              <Route path="/stack" element={<Navigate to="/#stack" replace />} />
              <Route path="/projects" element={<Navigate to="/#projects" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <ScrollToTopButton />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
