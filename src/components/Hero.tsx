import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-alt to-white pt-24 pb-8 md:pt-32 md:pb-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-primary)_0%,transparent_50%)] opacity-[0.12]" aria-hidden />
      <div className="absolute top-20 right-[10%] h-64 w-64 rounded-full bg-accent-teal/10 blur-3xl animate-pulse-soft" aria-hidden="true" />
      <div className="absolute bottom-10 left-[5%] h-48 w-48 rounded-full bg-accent-purple/10 blur-3xl animate-pulse-soft [animation-delay:2s]" aria-hidden="true" />
      <div className="absolute top-1/2 right-[30%] h-32 w-32 rounded-full bg-accent-amber/8 blur-2xl animate-float-slow" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 relative">
        <div className="max-w-xl">
          <p className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/15 to-accent-teal/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark uppercase">
            iOS App — Waitlist Open
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
            Your early-warning radar for burnout.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
            Most tools track your tasks. Humo protects your health while you
            achieve them — catching burnout months earlier and guiding you back,
            day by day.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Spots risk ~3 months before you'd notice",
              "Evidence-based 2-minute daily tools",
              "Your data never leaves your phone",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-[15px]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <WaitlistForm variant="hero" />
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-[280px]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-accent-teal/10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-white shadow-2xl">
              <Image
                src="/screenshots/insights.png"
                alt="Humo Insights — Humo Score 79 with domain tracking for Life Rhythm, Mind Space, Confidence, and Energy Flow"
                width={280}
                height={560}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
