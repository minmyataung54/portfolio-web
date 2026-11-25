import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const SECTION_IDS = ["about", "skills", "experience", "projects", "education", "contact"];

export default function Navbar({ resumeQAEnabled }) {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = SECTION_IDS.map((id) => ({ id, label: t.nav[id] }));

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const chatLink = resumeQAEnabled && (
    <a
      href="#resume-qa"
      onClick={() => setMenuOpen(false)}
      className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-sm font-semibold whitespace-nowrap text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
    >
      <FiMessageSquare aria-hidden="true" className="shrink-0" />
      {t.nav.resumeQA}
    </a>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-lg shadow-black/20" : ""
          }`}
        >
          <button
            onClick={() => handleNavClick("home")}
            className="font-display font-semibold tracking-tight text-lg text-white/90 hover:text-white transition"
          >
            MM<span className="gradient-text">A</span>
          </button>

          <nav className={`hidden items-center gap-1 ${resumeQAEnabled ? "lg:flex" : "md:flex"}`}>
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-3 py-2 text-sm text-white/65 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
            {chatLink}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="relative flex items-center rounded-full glass px-1 py-1 text-xs font-medium select-none"
              aria-label="Toggle language"
            >
              <span
                className={`relative z-10 px-2.5 py-1 rounded-full transition-colors ${
                  lang === "en" ? "text-black" : "text-white/60"
                }`}
              >
                EN
              </span>
              <span
                className={`relative z-10 px-2.5 py-1 rounded-full transition-colors ${
                  lang === "ja" ? "text-black" : "text-white/60"
                }`}
              >
                日本語
              </span>
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-violet-300 to-cyan-300"
                style={{
                  left: lang === "en" ? 4 : "auto",
                  right: lang === "ja" ? 4 : "auto",
                  width: lang === "en" ? "34px" : "52px",
                }}
              />
            </button>

            <button
              className={`rounded-lg p-2 text-white/80 hover:bg-white/5 ${resumeQAEnabled ? "lg:hidden" : "md:hidden"}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`mt-2 overflow-hidden rounded-2xl glass-strong ${resumeQAEnabled ? "lg:hidden" : "md:hidden"}`}
            >
              <div className="flex flex-col p-2">
                {chatLink}
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="px-4 py-3 text-left text-sm text-white/75 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
