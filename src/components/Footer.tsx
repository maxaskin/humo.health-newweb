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

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs leading-relaxed text-muted-light">
            This is not a substitute for clinical care — it&apos;s a step toward
            understanding yourself. Humo.health &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
