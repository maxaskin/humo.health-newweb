import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Check in",
      desc: "Quick self-checks and passive sensing from your wearable and calendar. No manual entry needed — Humo listens to signals you're already generating.",
      screenshot: "/screenshots/tools-pinned.png",
      alt: "Humo Tools — pinned daily tasks and protocols for circadian rhythm, cognitive shutdown, and boundaries",
      numColor: "text-accent-teal",
      dotBg: "bg-accent-teal/15",
      glow: "bg-accent-teal/10",
    },
    {
      num: "02",
      title: "Detect early",
      desc: "Humo tracks 7 life domains — energy, rhythm, confidence, mind space, and more — to spot imbalance months before you'd notice it yourself.",
      screenshot: "/screenshots/insights.png",
      alt: "Humo Insights — Humo Score 79 showing balanced state with domain scores and burnout progression radar",
      numColor: "text-accent-purple",
      dotBg: "bg-accent-purple/15",
      glow: "bg-accent-purple/10",
    },
    {
      num: "03",
      title: "Act with precision",
      desc: "Evidence-informed tools and protocols — from caffeine audits to exposure reps — delivered as small, time-bound actions that fit between meetings.",
      screenshot: "/screenshots/tools-protocols.png",
      alt: "Humo Protocols — Movement Snacks, Protein-First Meal Pattern, Elite Practice Block with scheduling",
      numColor: "text-accent-amber",
      dotBg: "bg-accent-amber/15",
      glow: "bg-accent-amber/10",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-surface to-[#e4f0ec] py-20 md:py-28">
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

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              <div className="relative mx-auto w-full max-w-[200px]">
                <div className={`absolute -inset-3 rounded-[2rem] ${step.glow} blur-xl`} aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-border/50 bg-white shadow-lg">
                  <Image
                    src={step.screenshot}
                    alt={step.alt}
                    width={200}
                    height={400}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-center gap-2">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full ${step.dotBg}`}>
                    <span className={`text-xs font-bold ${step.numColor}`}>{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
