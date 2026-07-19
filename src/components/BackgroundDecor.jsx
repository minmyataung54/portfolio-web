export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-ink)]" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="animate-blob absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-violet-600/25 blur-[120px]" />
      <div
        className="animate-blob absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-pink-500/15 blur-[120px]"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
