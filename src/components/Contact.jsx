import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="glass-strong glow-border relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
            <div className="animate-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

            <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              {t.contact.kicker}
            </p>
            <h2 className="font-display relative mt-2 text-3xl font-semibold text-white sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-white/60">{t.contact.text}</p>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/30"
              >
                <FaEnvelope /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/85 transition hover:text-white"
              >
                <FaPhone /> {profile.phone}
              </a>
            </div>

            <div className="relative mt-8 flex items-center justify-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition hover:text-white hover:-translate-y-1"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition hover:text-white hover:-translate-y-1"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-white/35">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>{t.contact.footerNote}</p>
        </footer>
      </div>
    </section>
  );
}
