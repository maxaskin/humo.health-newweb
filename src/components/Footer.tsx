import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Image
              src="/logo.png"
              alt="Humo"
              width={100}
              height={30}
              className="h-7 w-auto"
            />
            <p className="text-xs text-muted-light">
              Your Way Out of Burnout
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://humo.health/assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Self-Check
            </a>
            <a
              href="https://humo.health/wayoutofburnout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Articles
            </a>
            <a
              href="https://humo.health/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="https://www.humo.health/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs leading-relaxed text-muted-light text-center sm:text-left">
            This is not a substitute for clinical care — it&apos;s a step toward
            understanding yourself. Humo.health &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 rounded border border-border px-2.5 py-1">
              <svg className="h-3 w-3 text-muted-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-[10px] font-medium uppercase tracking-wide text-muted-light">HIPAA</span>
            </div>
            <div className="flex items-center gap-1.5 rounded border border-border px-2.5 py-1">
              <svg className="h-3 w-3 text-muted-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="text-[10px] font-medium uppercase tracking-wide text-muted-light">GDPR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
