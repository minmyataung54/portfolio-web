import Reveal from "./Reveal";

export default function SectionHeading({ kicker, title, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">{kicker}</p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}
