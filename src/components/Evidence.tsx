import Image from "next/image";

export default function Evidence() {
  const stats = [
    { value: "83%", label: "of visitors join the waitlist", color: "text-primary", bar: "bg-primary/40" },
    { value: "~3 mo", label: "earlier burnout detection (simulated)", color: "text-accent-teal", bar: "bg-accent-teal/40" },
    { value: "2x", label: "faster recovery in modeled scenarios", color: "text-accent-purple", bar: "bg-accent-purple/40" },
    { value: "~30", label: "limited beta seats remaining", color: "text-accent-amber", bar: "bg-accent-amber/40" },
  ];

  return (
    <section id="evidence" className="bg-gradient-to-b from-surface via-surface to-[#e8f0ec] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary-dark uppercase">
            Evidence-Based
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Not another wellness app.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Humo is built on established burnout research, behavioral science,
            and attachment theory — enriched with multi-domain scoring that goes
            deeper than generic stress trackers.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-2xl border border-border/80 bg-white p-6 text-center shadow-sm"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${s.bar}`} />
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="mt-2 text-sm text-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Why it&apos;s different
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Multi-domain scores across 7 life areas — not a single stress number",
                "Attachment and burnout metrics derived from clinical research models",
                "Passive data from wearables and calendar — no journaling fatigue",
                "Trials and clinical collaborations in preparation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[260px] overflow-hidden rounded-[1.75rem] border border-border/50 bg-white shadow-xl">
              <Image
                src="/screenshots/attachment.png"
                alt="Attachment Snapshot — deep psychological metrics tracking anxiety, avoidance, and relational patterns"
                width={260}
                height={520}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
