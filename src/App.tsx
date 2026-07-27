import { Link, Route, Routes, useLocation } from "react-router-dom";
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

export function App() {
  const location = useLocation();
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 page-transition" key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
