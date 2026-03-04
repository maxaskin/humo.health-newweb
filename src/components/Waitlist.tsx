import WaitlistForm from "./WaitlistForm";

export default function Waitlist() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-gradient-to-b from-white via-surface to-surface-alt py-20 md:py-28"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Join the iOS beta waitlist.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Get early access to Humo when it launches. You&apos;ll receive
          progress updates, the option to join clinical studies, and a head start
          on understanding your burnout risk.
        </p>

        <div className="mt-10">
          <WaitlistForm variant="footer" />
        </div>

        <div className="mt-8">
          <a
            href="https://humo.health/assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary-dark hover:decoration-primary"
          >
            Or take the free 5-minute Burnout Self-Check →
          </a>
        </div>
      </div>
    </section>
  );
}
