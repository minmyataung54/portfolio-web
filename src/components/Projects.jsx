import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.projects.kicker} title={t.projects.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.1}>
              <div className="glass glow-border group flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                    {project.name}
                  </h3>
                  <div className="flex shrink-0 items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-white/60 ring-1 ring-white/10 transition hover:text-white hover:bg-white/10"
                      >
                        <FaGithub size={13} />
                      </a>
                    )}
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300/90 ring-1 ring-white/10">
                      {project.role}
                    </span>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-400/10 px-2.5 py-1 text-xs text-white/60 ring-1 ring-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
