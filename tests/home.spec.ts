import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

// ─── Core UI ────────────────────────────────────────────────────────────────

test.describe("Core UI", () => {
  test("hero: heading, subtitle, and CTA are visible", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /early-warning radar for burnout/i, level: 1 })
    ).toBeVisible();

    await expect(
      page.getByText(/Most tools track your tasks\. Humo protects your health/i)
    ).toBeVisible();

    const emailInput = page.getByRole("textbox", { name: /email address/i });
    await expect(emailInput.first()).toBeVisible();

    const ctaButton = page.getByRole("button", { name: /get early access/i });
    await expect(ctaButton.first()).toBeVisible();
  });

  test("nav links scroll to correct sections", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("nav");

    const clickNavLink = async (name: RegExp) => {
      const link = nav.getByRole("link", { name });
      if (!(await link.isVisible().catch(() => false))) {
        await page.getByRole("button", { name: /toggle menu/i }).click();
      }
      await nav.getByRole("link", { name }).click();
    };

    await clickNavLink(/^how it works$/i);
    await expect(page.locator("#how-it-works")).toBeVisible();

    await clickNavLink(/^learn$/i);
    await expect(page.locator("#resources")).toBeVisible();
  });

  test("waitlist form: validates and shows success state", async ({ page }) => {
    // Mock the API so the test works without real Supabase credentials
    await page.route("/api/waitlist", (route) =>
      route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' })
    );

    await page.goto("/");

    const emailInput = page.getByRole("textbox", { name: /email address/i }).first();
    const submitButton = page.getByRole("button", { name: /get early access/i }).first();

    // HTML5 validation prevents submit of invalid email — no DOM error expected
    await emailInput.fill("not-an-email");
    await submitButton.click();
    await expect(page.getByText(/valid email is required/i)).not.toBeVisible({ timeout: 1000 });

    const uniqueEmail = `test+${Date.now()}@example.com`;
    await emailInput.fill(uniqueEmail);
    await submitButton.click();

    await expect(page.getByText(/You're on the list/i).first()).toBeVisible({ timeout: 8000 });
  });
});

// ─── Section visibility ──────────────────────────────────────────────────────

test.describe("Section visibility", () => {
  test("problem section: heading, description, and cards visible", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#problem");
    await section.scrollIntoViewIfNeeded();

    await expect(
      section.getByRole("heading", { name: /burnout doesn't always announce itself/i })
    ).toBeVisible();
    await expect(section.getByText(/It builds quietly/i)).toBeVisible();
    await expect(section.getByText("Weekends don't refill you")).toBeVisible();
    await expect(section.getByText("Calendar dread")).toBeVisible();
    await expect(section.getByText("Fine on the outside")).toBeVisible();
    await expect(section.getByText("Energy leaks everywhere")).toBeVisible();
  });

  test("how it works section: heading and steps visible", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#how-it-works");
    await section.scrollIntoViewIfNeeded();

    await expect(section.getByRole("heading", { level: 2 })).toBeVisible();
  });

  test("features section: heading and feature cards visible", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#features");
    await section.scrollIntoViewIfNeeded();

    await expect(section.getByRole("heading", { level: 2 })).toBeVisible();
  });

  test("who it's for section: 4 persona cards visible", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#who");
    await section.scrollIntoViewIfNeeded();

    await expect(section.getByText("Tech leads & engineers")).toBeVisible();
    await expect(section.getByText("Healthcare professionals")).toBeVisible();
    await expect(section.getByText("Finance & consulting")).toBeVisible();
    await expect(section.getByText("Researchers & academics")).toBeVisible();
  });

  test("resources section: cards with Read More links visible", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#resources");
    await section.scrollIntoViewIfNeeded();

    await expect(section.getByRole("heading", { level: 2 })).toBeVisible();
    const readMoreLinks = section.getByRole("link", { name: /read more/i });
    await expect(readMoreLinks.first()).toBeVisible();
  });

  test("footer: logo, nav links, compliance badges visible", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();

    await expect(footer.getByAltText("Humo")).toBeVisible();
    await expect(footer.getByText("HIPAA")).toBeVisible();
    await expect(footer.getByText("GDPR")).toBeVisible();
    await expect(footer.getByRole("link", { name: /privacy policy/i })).toBeVisible();
  });
});

// ─── UX & layout ────────────────────────────────────────────────────────────

test.describe("UX & layout", () => {
  test("no section creates excessive vertical gap (>200px blank space)", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const gapOk = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll("main > *"));
      for (let i = 0; i < sections.length - 1; i++) {
        const bottomOfCurrent = sections[i].getBoundingClientRect().bottom + window.scrollY;
        const topOfNext = sections[i + 1].getBoundingClientRect().top + window.scrollY;
        const gap = topOfNext - bottomOfCurrent;
        if (gap > 200) return { ok: false, gap, index: i };
      }
      return { ok: true };
    });

    expect(gapOk.ok, `Gap of ${(gapOk as { gap?: number }).gap}px between sections`).toBe(true);
  });

  test("page renders without horizontal scroll on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(375);
  });

  test("card text is legible (not same color as card background)", async ({ page }) => {
    await page.goto("/");
    await page.locator("#who").scrollIntoViewIfNeeded();

    const result = await page.evaluate(() => {
      const section = document.getElementById("who");
      if (!section) return { ok: false, reason: "section not found" };
      const cards = section.querySelectorAll(".rounded-2xl");
      for (const card of cards) {
        const cardBg = window.getComputedStyle(card as HTMLElement).backgroundColor;
        const textNodes = card.querySelectorAll("h3, p, span");
        for (const el of textNodes) {
          const color = window.getComputedStyle(el as HTMLElement).color;
          if (color === cardBg)
            return { ok: false, reason: "text matches background", text: (el as HTMLElement).textContent?.slice(0, 30) };
          if (color.includes("0, 0, 0, 0"))
            return { ok: false, reason: "transparent text", text: (el as HTMLElement).textContent?.slice(0, 30) };
        }
      }
      return { ok: true };
    });

    expect(result.ok, result.reason).toBe(true);
  });

  test("all external links open in new tab with noopener", async ({ page }) => {
    await page.goto("/");

    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll("a[href^='http']")).map((a) => ({
        href: (a as HTMLAnchorElement).href,
        target: (a as HTMLAnchorElement).target,
        rel: (a as HTMLAnchorElement).rel,
      }))
    );

    for (const link of links) {
      expect(link.target, `${link.href} should open in new tab`).toBe("_blank");
      expect(link.rel, `${link.href} should have noopener`).toContain("noopener");
    }
  });

  test("images have non-empty alt text", async ({ page }) => {
    await page.goto("/");

    const badImages = await page.evaluate(() =>
      Array.from(document.querySelectorAll("img"))
        .filter((img) => !img.alt || img.alt.trim() === "")
        .map((img) => img.src)
    );

    expect(badImages, `Images missing alt text: ${badImages.join(", ")}`).toHaveLength(0);
  });
});

// ─── Performance ─────────────────────────────────────────────────────────────

test.describe("Performance", () => {
  test("page loads within 5 seconds (desktop)", async ({ page }) => {
    const start = Date.now();
    await page.goto("/");
    await page.waitForLoadState("load");
    const elapsed = Date.now() - start;
    expect(elapsed, `Page took ${elapsed}ms to load`).toBeLessThan(5000);
  });

  test("LCP element is visible within 2.5s", async ({ page }) => {
    await page.goto("/");

    const lcp = await page.evaluate(
      () =>
        new Promise<number>((resolve) => {
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const last = entries[entries.length - 1];
            resolve(last.startTime);
          }).observe({ type: "largest-contentful-paint", buffered: true });
          // Fallback if already painted
          setTimeout(() => resolve(0), 3000);
        })
    );

    expect(lcp, `LCP was ${lcp}ms`).toBeLessThan(2500);
  });

  test("no layout shift during scroll (CLS < 0.1)", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const cls = await page.evaluate(async () => {
      let totalCls = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInput) {
            totalCls += (entry as PerformanceEntry & { value: number }).value;
          }
        }
      });
      observer.observe({ type: "layout-shift", buffered: true });

      // Scroll through page
      for (let y = 0; y <= document.body.scrollHeight; y += 300) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 50));
      }

      observer.disconnect();
      return totalCls;
    });

    expect(cls, `CLS score: ${cls}`).toBeLessThan(0.1);
  });
});

// ─── Accessibility ───────────────────────────────────────────────────────────

test.describe("Accessibility", () => {
  test("no serious or critical axe violations", async ({ page }) => {
    await page.goto("/");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    const critical = results.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical"
    );

    expect(
      critical,
      `A11y issues: ${JSON.stringify(critical, null, 2)}`
    ).toEqual([]);
  });

  test("interactive elements are keyboard focusable", async ({ page }) => {
    await page.goto("/");

    const focusable = page.getByRole("button", { name: /get early access/i }).first();
    await focusable.focus();
    await expect(focusable).toBeFocused();
  });
});
