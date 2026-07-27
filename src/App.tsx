import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { LanguageProvider, useT } from "@/i18n/LanguageProvider";

import About from "@/routes/about";
import Contact from "@/routes/contact";
import Home from "@/routes/index";
import Projects from "@/routes/projects";
import Services from "@/routes/services";

function NotFound() {
  const { t } = useT();

  return (
    <div className="container-x py-24 text-center">
      <h1 className="text-7xl font-semibold">404</h1>

      <p className="mt-4 text-muted">{t("err.notFoundDesc")}</p>

      <Link to="/" className="btn btn-primary mt-6">
        {t("err.goHome")}
      </Link>
    </div>
  );
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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className={`
        fixed bottom-6 right-6 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full
        border border-border/60
        bg-surface/90
        text-foreground
        shadow-xl
        backdrop-blur-md

        transition-all duration-500 ease-out

        hover:-translate-y-1
        hover:scale-110
        hover:bg-primary
        hover:text-primary-foreground
        hover:shadow-2xl

        active:scale-50

        ${
          show
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-8 opacity-0 pointer-events-none"
        }
      `}
    >
      <ArrowUp
        size={20}
        className="animate-bounce"
        style={{
          animationDuration: "1.8s",
        }}
      />
    </button>
  );
}

export function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main key={location.pathname} className="flex-1 page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <ScrollToTopButton />

        <Footer />
      </div>
      <Analytics />
    </LanguageProvider>
  );
}
