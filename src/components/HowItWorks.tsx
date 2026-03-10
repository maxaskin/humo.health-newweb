export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Check in",
      desc: "Quick self-checks and passive sensing from your wearable and calendar. No manual entry needed — Humo listens to signals you're already generating.",
      dotBg: "bg-accent-teal/15",
      icon: "📲",
    },
    {
      num: "02",
      title: "Detect early",
      desc: "Humo tracks 7 life domains — energy, rhythm, confidence, mind space, and more — to spot imbalance months before you'd notice it yourself.",
      dotBg: "bg-accent-purple/15",
      icon: "🔍",
    },
    {
      num: "03",
      title: "Act with precision",
      desc: "Evidence-informed tools and protocols — from caffeine audits to exposure reps — delivered as small, time-bound actions that fit between meetings.",
      dotBg: "bg-accent-amber/15",
      icon: "⚡",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-surface to-[#e4f0ec] py-3 md:py-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary-dark uppercase">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            From silent drift to guided recovery.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Three steps — each designed to meet you where you are.
          </p>
        </div>

        <div className="mt-7 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-border/60 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${step.dotBg}`}>
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="text-xs font-bold text-muted">{step.num}</span>
                <h3 className="text-xl font-bold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
