"use client";

import { useState, FormEvent } from "react";

interface Props {
  variant?: "hero" | "footer";
}

export default function WaitlistForm({ variant = "hero" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-xl border border-primary/20 bg-primary/5 p-4 ${
          variant === "footer" ? "text-center" : ""
        }`}
      >
        <p className="font-semibold text-primary">You&apos;re on the list!</p>
        <p className="mt-1 text-sm text-muted">
          We&apos;ll notify you when the iOS app is ready.
        </p>
      </div>
    );
  }

  const isFooter = variant === "footer";

  return (
    <form onSubmit={handleSubmit} className={isFooter ? "mx-auto max-w-md" : ""}>
      <div
        className={`flex gap-3 ${
          isFooter ? "flex-col sm:flex-row" : "flex-col sm:flex-row"
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          className={`flex-1 rounded-full border border-border bg-white px-5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-light focus:border-primary focus:ring-2 focus:ring-primary/20 ${
            isFooter ? "text-center sm:text-left" : ""
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : "Get Early Access"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
      <p
        className={`mt-3 text-xs text-muted-light ${
          isFooter ? "text-center" : ""
        }`}
      >
        Takes 10 seconds. No spam. We respect your privacy.
      </p>
    </form>
  );
}
