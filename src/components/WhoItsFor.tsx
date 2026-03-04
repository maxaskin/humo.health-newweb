export default function WhoItsFor() {
  const scenarios = [
    {
      emoji: "💻",
      role: "Tech leads & engineers",
      line: "You've started dreading calendar notifications. Sprint planning feels like survival.",
    },
    {
      emoji: "🏥",
      role: "Healthcare professionals",
      line: "You take care of everyone else. Who takes care of you?",
    },
    {
      emoji: "📊",
      role: "Finance & consulting",
      line: "High performance is the expectation. Admitting fatigue isn't an option.",
    },
    {
      emoji: "🎓",
      role: "Researchers & academics",
      line: "Publish-or-perish pressure has crept into weekends, sleep, and self-worth.",
    },
  ];

  return (
    <section id="who" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {scenarios.map((s) => (
            <div
              key={s.role}
              className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/40 p-6"
            >
              <span className="text-2xl">{s.emoji}</span>
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

        <div className="mt-14 mx-auto max-w-xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="text-lg font-semibold text-foreground">
            Quick self-check
          </h3>
          <p className="mt-2 text-sm text-muted">
            Do any of these feel familiar in the last few weeks?
          </p>
          <ul className="mt-5 space-y-3 text-left">
            {[
              "I wake up feeling behind — almost every day",
              "I crash on weekends instead of resting",
              "I'm avoiding things that used to bring me joy",
            ].map((q) => (
              <li key={q} className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 shrink-0 rounded border border-primary/40 bg-white" />
                <span className="text-sm text-foreground">{q}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://humo.health/assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Take the Full Self-Check
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
