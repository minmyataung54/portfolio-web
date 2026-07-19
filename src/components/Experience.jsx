import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.experience.kicker} title={t.experience.title} />

        <div className="relative mt-14 space-y-10 border-l border-white/10 pl-8 sm:pl-10">
          {t.experience.items.map((item, i) => (
            <Reveal key={item.org} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[calc(2rem+7px)] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300 shadow-[0_0_0_5px_rgba(139,92,246,0.15)] sm:-left-[calc(2.5rem+7px)]" />
                <div className="glass glow-border rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-cyan-300/90">
                        {item.org} <span className="text-white/40">· {item.orgSub}</span>
                      </p>
                    </div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/55 ring-1 ring-white/10">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point, pi) => (
                      <li key={pi} className="flex gap-2.5 text-sm leading-relaxed text-white/60">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-300/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
