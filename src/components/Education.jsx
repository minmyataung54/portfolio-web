import { FaGraduationCap, FaLanguage } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.education.kicker} title={t.education.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass glow-border h-full rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300">
                  <FaGraduationCap size={20} />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {t.education.period}
                </span>
              </div>
              <h3 className="font-display mt-4 text-lg font-semibold text-white">{t.education.school}</h3>
              <p className="mt-1 text-sm text-white/60">{t.education.degree}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass glow-border h-full rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-violet-400/20 text-pink-300">
                  <FaLanguage size={20} />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {t.education.languagesTitle}
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {t.education.languages.map((l) => (
                  <div key={l.name} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                    <span className="font-medium text-white/85">{l.name}</span>
                    <span className="text-sm text-white/55">{l.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
