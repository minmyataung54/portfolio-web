import { useState } from "react";
import { FiArrowUpRight, FiMessageSquare } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const copy = {
  en: {
    title: "What would you like to know about me?",
    intro: "Ask me anything you’d like to know, from what I’ve built and why I chose certain technologies to what I’m looking for in my next role, including salary expectations.",
    label: "Ask a question in your own words",
    placeholder: "What would you like to know?",
    submit: "Send question",
    loading: "Looking through my portfolio…",
    excerpts: "Related portfolio excerpts",
    sources: "Sources",
    contact: "Contact me for more information",
    error: "The Q&A service is temporarily unavailable. Please try again.",
  },
  ja: {
    title: "私の経歴や仕事について、ご質問はありますか？",
    intro: "これまでの開発経験や技術を選んだ理由、希望する勤務地・年収など、気になることがございましたら、お気軽にお尋ねください。",
    label: "ご質問",
    placeholder: "ご質問を自由にご入力ください",
    submit: "質問を送信",
    loading: "ポートフォリオを確認しています…",
    excerpts: "関連するポートフォリオの抜粋",
    sources: "出典",
    contact: "詳しくは、お気軽にお問い合わせください",
    error: "現在、質問機能をご利用いただけません。時間をおいて、もう一度お試しください。",
  },
};

const endpoint = import.meta.env.VITE_RESUME_API_URL?.replace(/\/$/, "") || "";

function QuestionForm({ lang }) {
  const t = copy[lang];
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [result, setResult] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  async function ask(event) {
    event.preventDefault();
    const value = question.trim();
    if (pending || !value) return;
    setSubmitted(value);
    setResult(null);
    setError(false);
    setPending(true);

    try {
      const response = await fetch(`${endpoint}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: value, lang }),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("Q&A request failed");
      setResult(await response.json());
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="resume-qa" aria-labelledby="resume-qa-title" className="relative mx-auto max-w-6xl scroll-mt-24 px-5">
      <div className="grid gap-8 rounded-[2rem] border border-cyan-200/20 bg-gradient-to-br from-[#182334] via-[#111827] to-[#19152c] p-5 shadow-2xl shadow-cyan-950/25 sm:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-12">
        <div>
          <h2 id="resume-qa-title" className="font-display max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75 sm:text-base">{t.intro}</p>
        </div>

        <div className="min-w-0">
          <form
            onSubmit={ask}
            aria-busy={pending}
            className="rounded-2xl border border-white/20 bg-[#0c1220] p-4 transition focus-within:border-cyan-300/70 sm:p-5"
          >
            <label htmlFor="resume-question" className="flex items-center gap-2 text-sm font-medium text-white/90">
              <FiMessageSquare aria-hidden="true" className="shrink-0 text-cyan-300" />
              {t.label}
            </label>
            <textarea
              id="resume-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              maxLength={400}
              rows={3}
              placeholder={t.placeholder}
              className="mt-3 block w-full resize-y rounded-lg bg-white/5 px-3 py-2.5 text-base leading-relaxed text-white placeholder:text-white/50 focus-visible:outline-2 focus-visible:outline-cyan-300"
            />
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                disabled={pending || !question.trim()}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition enabled:hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:bg-cyan-200/25 disabled:text-white/75"
              >
                {t.submit}
                <FiArrowUpRight aria-hidden="true" className="text-base" />
              </button>
            </div>
          </form>

          <div aria-live="polite" aria-relevant="additions text" className="text-sm leading-relaxed text-white/85">
            {submitted && (
              <div className="mt-5 space-y-3">
                <p className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-sm bg-cyan-300/15 px-4 py-2.5 whitespace-pre-wrap break-words text-cyan-50">
                  {submitted}
                </p>
                <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-black/20 p-4 sm:p-5">
                  {pending && <p>{t.loading}</p>}
                  {error && <p>{t.error}</p>}
                  {result?.answer && <p className="whitespace-pre-line break-words">{result.answer}</p>}
                  {(result?.mode === "unanswered" || result?.mode === "unavailable") && (
                    <a
                      href="#contact"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-cyan-300/35 px-3 py-2 font-medium text-cyan-100 transition hover:bg-cyan-300/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      {t.contact}
                      <FiArrowUpRight aria-hidden="true" className="shrink-0" />
                    </a>
                  )}
                  {!!result?.sources.length && (
                    <div className={result.answer ? "mt-4 border-t border-white/10 pt-3" : undefined}>
                      <h3 className="font-medium text-white">{result.mode === "excerpts" ? t.excerpts : t.sources}</h3>
                      <ul className="mt-2 space-y-3">
                        {result.sources.map(({ title, section, text }) => (
                          <li key={title}>
                            {section ? (
                              <a href={`#${section}`} className="text-cyan-200 underline underline-offset-4 hover:text-white">{title}</a>
                            ) : (
                              <span>{title}</span>
                            )}
                            {text && <p className="mt-1 whitespace-pre-line">{text}</p>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ResumeQA() {
  const { lang } = useLanguage();
  return <QuestionForm key={lang} lang={lang} />;
}
