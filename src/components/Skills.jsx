import { useLanguage } from "../context/LanguageContext";
import { getSkillIcon } from "../data/skillIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUP_ACCENTS = [
  "from-violet-400 to-purple-300",
  "from-cyan-300 to-blue-300",
  "from-pink-300 to-rose-300",
  "from-emerald-300 to-cyan-300",
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.skills.kicker} title={t.skills.title} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.skills.groups.map((group, gi) => (
            <Reveal key={group.name} delay={gi * 0.1}>
              <div className="glass glow-border h-full rounded-2xl p-6">
                <h3 className="font-display flex items-center gap-2 text-lg font-semibold text-white">
                  <span
                    className={`h-2 w-2 rounded-full bg-gradient-to-r ${GROUP_ACCENTS[gi % GROUP_ACCENTS.length]}`}
                  />
                  {group.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = getSkillIcon(item);
                    return (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                      >
                        <Icon className="text-cyan-300/80" size={13} />
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
