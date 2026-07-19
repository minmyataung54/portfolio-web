import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.about.kicker} title={t.about.title} />

        <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-base leading-relaxed text-white/65 sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="glass glow-border flex h-full flex-col justify-center rounded-2xl p-5 text-center">
                  <div className="font-display gradient-text text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs leading-snug text-white/55">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
