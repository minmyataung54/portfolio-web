import { writeFileSync } from "node:fs";
import { content } from "../src/data/content.js";

const interviewAnswers = {
  en: [
    {
      title: "Salary expectations",
      text: "My expected annual salary is ¥3,300,000 to ¥4,000,000 (JPY).",
    },
    {
      title: "Preferred work location",
      text: "I am open to working anywhere in Japan.",
    },
  ],
  ja: [
    {
      title: "希望年収",
      text: "年収は330万円から400万円を希望しております。",
    },
    {
      title: "希望勤務地",
      text: "日本国内であれば、地域を問わず勤務可能です。",
    },
  ],
};

const corpus = Object.fromEntries(
  Object.entries(content).map(([lang, { hero, about, skills, experience, projects, education }]) => [
    lang,
    [
      {
        section: "about",
        title: about.title,
        text: [hero.name, hero.role, ...about.paragraphs].join("\n"),
      },
      ...skills.groups.map(({ name, items }) => ({
        section: "skills", title: name, text: items.join(", "),
      })),
      ...experience.items.map(({ role, org, orgSub, period, points, stack }) => ({
        section: "experience",
        title: `${org} · ${role}`,
        text: [orgSub, period, ...points, stack.join(", ")].join("\n"),
      })),
      ...projects.items.map(({ name, role, description, tags }) => ({
        section: "projects", title: name, text: [role, description, tags.join(", ")].join("\n"),
      })),
      {
        section: "education",
        title: education.title,
        text: [
          education.school, education.degree, education.period,
          ...education.languages.map(({ name, detail }) => `${name} · ${detail}`),
        ].join("\n"),
      },
      ...interviewAnswers[lang],
    ],
  ]),
);

writeFileSync(new URL("./corpus.json", import.meta.url), JSON.stringify(corpus, null, 2) + "\n");
