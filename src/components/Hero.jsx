import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/content";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-5 w-full">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.hero.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {t.hero.greeting}
              <br />
              <span className="gradient-text">{t.hero.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display mt-4 text-lg font-medium text-white/80 sm:text-xl"
            >
              {t.hero.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/55"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-violet-500/20 transition hover:shadow-violet-500/40 hover:scale-[1.03]"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="glow-border rounded-full glass px-6 py-3 text-sm font-semibold text-white/85 transition hover:text-white"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex items-center gap-4"
            >
              {[
                { icon: FaEnvelope, href: `mailto:${profile.email}`, label: "Email" },
                { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: FaGithub, href: profile.github, label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto hidden md:block"
          >
            <div className="animate-float relative h-72 w-72 lg:h-80 lg:w-80">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-500/40 via-cyan-400/20 to-pink-400/30 blur-2xl" />
              <div className="glass-strong relative h-full w-full overflow-hidden rounded-[2.5rem]">
                <img
                  src="/profile.png"
                  alt={t.hero.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2 text-xs text-white/70">
                  &lt;/&gt; + AI
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition"
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex"
        >
          <FaArrowDown />
        </motion.span>
      </motion.button>
    </section>
  );
}
