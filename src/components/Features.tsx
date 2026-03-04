export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Early-warning radar",
      benefit: "Spots burnout early",
      desc: "See overload weeks before you hit the wall. Passive signals from wearables and calendar patterns feed Humo's detection engine.",
      emojiBg: "bg-accent-amber/15",
    },
    {
      icon: "📅",
      title: "Smart calendars",
      benefit: "Moves overload meetings",
      desc: "Humo identifies calendar strain and flags meetings that push you past sustainable thresholds.",
      emojiBg: "bg-accent-rose/15",
    },
    {
      icon: "🤖",
      title: "2-min AI coach",
      benefit: "Swift, in-between nudges",
      desc: "Short evidence-based interventions that fit between meetings. No long sessions, no homework.",
      emojiBg: "bg-accent-purple/15",
    },
    {
      icon: "📲",
      title: "Wearable auto-sync",
      benefit: "Zero manual entry",
      desc: "Connects to Apple Health and wearable devices. Your physiological data flows in automatically.",
      emojiBg: "bg-accent-teal/15",
    },
    {
      icon: "🔒",
      title: "On-device privacy",
      benefit: "Data never leaves phone",
      desc: "All processing happens locally on your iPhone. No cloud uploads, no third-party access.",
      emojiBg: "bg-accent-sky/15",
    },
    {
      icon: "📈",
      title: "7 life domains",
      benefit: "Watch energy climb daily",
      desc: "Track Life Rhythm, Mind Space, Confidence State, Energy Flow, Night Recharge, and more in one integrated score.",
      emojiBg: "bg-primary/15",
    },
  ];

  return (
    <section id="features" className="bg-gradient-to-b from-[#eef6f2] via-white to-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary-dark uppercase">
            Built for people who push through
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need. Nothing you don&apos;t.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border/80 bg-white p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md hover:bg-surface/30"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${f.emojiBg}`}>
                <span className="text-2xl">{f.icon}</span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-0.5 text-xs font-medium text-primary-dark">
                {f.benefit}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
