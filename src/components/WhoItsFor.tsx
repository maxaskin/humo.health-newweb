export default function WhoItsFor() {
  const scenarios = [
    {
      emoji: "💻",
      role: "Tech leads & engineers",
      line: "You've started dreading calendar notifications. Sprint planning feels like survival.",
      accent: "border-l-accent-teal",
      emojiBg: "bg-accent-teal/15",
    },
    {
      emoji: "🏥",
      role: "Healthcare professionals",
      line: "You take care of everyone else. Who takes care of you?",
      accent: "border-l-accent-rose",
      emojiBg: "bg-accent-rose/15",
    },
    {
      emoji: "📊",
      role: "Finance & consulting",
      line: "High performance is the expectation. Admitting fatigue isn't an option.",
      accent: "border-l-accent-amber",
      emojiBg: "bg-accent-amber/15",
    },
    {
      emoji: "🎓",
      role: "Researchers & academics",
      line: "Publish-or-perish pressure has crept into weekends, sleep, and self-worth.",
      accent: "border-l-accent-purple",
      emojiBg: "bg-accent-purple/15",
    },
  ];

  return (
    <section id="who" className="bg-gradient-to-b from-white to-surface/30 py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary-dark uppercase">
            Who It&apos;s For
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for high performers who can still push through — but
            shouldn&apos;t have to.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            You&apos;re not broken. You&apos;re stretched. And the earlier you
            notice it, the less drastic your reset needs to be.
          </p>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {scenarios.map((s) => (
            <div
              key={s.role}
              className={`flex items-start gap-4 rounded-2xl border border-border/80 border-l-4 ${s.accent} bg-white p-6 shadow-sm hover:shadow-md hover:bg-surface/30 transition-all`}
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${s.emojiBg}`}>
                <span className="text-xl">{s.emoji}</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {s.role}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {s.line}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
