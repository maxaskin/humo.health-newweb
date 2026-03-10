export default function Problem() {
  const signs = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Weekends don't refill you",
      desc: "You crash instead of resting. Monday arrives and nothing has recovered.",
      iconBg: "bg-accent-amber/15 text-accent-amber",
      border: "border-t-accent-amber",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      title: "Calendar dread",
      desc: "You flinch at notifications. Every meeting feels like something taken, not given.",
      iconBg: "bg-accent-rose/15 text-accent-rose",
      border: "border-t-accent-rose",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      ),
      title: "Fine on the outside",
      desc: "You perform well, say 'I'm fine,' but something quiet has shifted underneath.",
      iconBg: "bg-accent-purple/15 text-accent-purple",
      border: "border-t-accent-purple",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Energy leaks everywhere",
      desc: "Brain fog, irritability, broken sleep — your body is keeping score even if your mind won't.",
      iconBg: "bg-accent-sky/15 text-accent-sky",
      border: "border-t-accent-sky",
    },
  ];

  return (
    <section id="problem" className="bg-gradient-to-b from-white to-surface/50 py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Burnout doesn&apos;t always announce itself.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            It builds quietly — through fatigue, restlessness, sleep that
            doesn&apos;t help, and tension that won&apos;t let go. By the time
            you recognize it, you&apos;re already months in.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signs.map((sign) => (
            <div
              key={sign.title}
              className={`rounded-2xl border border-border/80 border-t-2 ${sign.border} bg-white p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md hover:bg-surface/50`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${sign.iconBg}`}>
                {sign.icon}
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-foreground">
                {sign.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {sign.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            See how Humo can help
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
