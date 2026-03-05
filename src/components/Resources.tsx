const articles = [
  {
    tag: "SUSTAIN",
    title: "What Real Burnout May Feel Like?",
    summary:
      "Burnout doesn't always announce itself with exhaustion or collapse. Sometimes, it starts with a quiet sense that something's off — even when life looks balanced on the surface.",
    href: "https://humo.health/wayoutofburnout/what-real-burnout-may-feel-like",
  },
  {
    tag: "RECOGNIZE",
    title: "Burnout Isn't Just Stress — It's a Slow Collapse",
    summary:
      "It builds quietly — through fatigue, restlessness, sleep that doesn't help, and tension that won't let go. Learn how burnout unfolds across your body and mind.",
    href: "https://humo.health/wayoutofburnout/burnout-isn-t-just-stress-its-a-slow-collapse",
  },
  {
    tag: "RESTORE",
    title: "Burnout Recovery Isn't Linear",
    summary:
      "Some days, it might even feel like you're slipping backward. Explore why setbacks are a natural part of healing — and what to do when it feels worse before better.",
    href: "https://humo.health/wayoutofburnout/burnout-recovery-isnt-linear-and-what-to-do-when-it-feels-worse-before-better",
  },
];

const tagMeta: Record<string, { badge: string; hover: string }> = {
  SUSTAIN: { badge: "bg-emerald-100 text-emerald-800", hover: "hover:border-emerald-300" },
  RECOGNIZE: { badge: "bg-amber-100 text-amber-800", hover: "hover:border-amber-300" },
  RESTORE: { badge: "bg-sky-100 text-sky-800", hover: "hover:border-sky-300" },
};

export default function Resources() {
  return (
    <section id="resources" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-primary-dark uppercase">
            Your Way Out of Burnout
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Start understanding what you&apos;re going through.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <a
              key={a.title}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-2xl border border-border/80 bg-white p-6 shadow-sm transition-all ${tagMeta[a.tag].hover} hover:shadow-md`}
            >
              <span
                className={`inline-block self-start rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase ${tagMeta[a.tag].badge}`}
              >
                {a.tag}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {a.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read More
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
