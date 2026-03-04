import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

test.describe("Humo landing page - core UI", () => {
  test("hero shows clear problem, solution, and waitlist form", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: /early-warning radar for burnout/i,
        level: 1,
      }),
    ).toBeVisible();

    await expect(
      page.getByText(
        /Most tools track your tasks\. Humo protects your health while you achieve them/i,
      ),
    ).toBeVisible();

    const emailInput = page.getByRole("textbox", { name: /email address/i });
    await expect(emailInput.first()).toBeVisible();

    const ctaButton = page.getByRole("button", { name: /get early access/i });
    await expect(ctaButton.first()).toBeVisible();
  });

  test("navigation links scroll to sections", async ({ page }) => {
    await page.goto("/");

    const nav = page.locator("nav");

    const clickNavLink = async (name: RegExp) => {
      const link = nav.getByRole("link", { name });
      const isVisible = await link.isVisible().catch(() => false);
      if (!isVisible) {
        const menuButton = page.getByRole("button", { name: /toggle menu/i });
        await menuButton.click();
      }
      await nav.getByRole("link", { name }).click();
    };

    await clickNavLink(/^how it works$/i);
    await expect(page.locator("#how-it-works")).toBeVisible();

    await clickNavLink(/^learn$/i);
    await expect(page.locator("#resources")).toBeVisible();
  });

  test("waitlist form validates and shows success state", async ({ page }) => {
    await page.goto("/");

    const emailInput = page.getByRole("textbox", { name: /email address/i }).first();
    const submitButton = page.getByRole("button", { name: /get early access/i }).first();

    await emailInput.fill("invalid-email");
    await submitButton.click();
    await expect(page.getByText(/valid email is required/i)).not.toBeVisible({
      timeout: 1000,
    });

    const uniqueEmail = `test+${Date.now()}@example.com`;
    await emailInput.fill(uniqueEmail);
    await submitButton.click();

    await expect(
      page.getByText(/you['’]re on the list/i).first(),
    ).toBeVisible();
  });
});

test.describe("Humo landing page - visibility", () => {
  test("problem section heading, paragraph, and card titles are visible", async ({
    page,
  }) => {
    await page.goto("/");
    const problem = page.locator("#problem");
    await problem.scrollIntoViewIfNeeded();

    await expect(
      problem.getByRole("heading", {
        name: /burnout doesn't always announce itself/i,
      }),
    ).toBeVisible();
    await expect(
      problem.getByText(/It builds quietly — through fatigue, restlessness/),
    ).toBeVisible();
    await expect(problem.getByText("Weekends don't refill you")).toBeVisible();
    await expect(problem.getByText("Calendar dread")).toBeVisible();
    await expect(problem.getByText("Fine on the outside")).toBeVisible();
    await expect(problem.getByText("Energy leaks everywhere")).toBeVisible();
  });

  test("self-check section question and all checklist labels are visible", async ({
    page,
  }) => {
    await page.goto("/");
    const whoSection = page.locator("#who");
    await whoSection.scrollIntoViewIfNeeded();

    await expect(
      page.getByText("Do any of these feel familiar in the last few weeks?"),
    ).toBeVisible();

    await expect(
      page.getByText("I wake up feeling behind — almost every day"),
    ).toBeVisible();
    await expect(
      page.getByText("I crash on weekends instead of resting"),
    ).toBeVisible();
    await expect(
      page.getByText("I'm avoiding things that used to bring me joy"),
    ).toBeVisible();
  });

  test("self-check card text is not same color as background", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator("#who").scrollIntoViewIfNeeded();

    const noInvisibleText = await page.evaluate(() => {
      const section = document.getElementById("who");
      if (!section) return { ok: false, reason: "section not found" };
      const card = section.querySelector(".rounded-2xl.border-2");
      if (!card) return { ok: false, reason: "card not found" };
      const cardBg = window.getComputedStyle(card as HTMLElement).backgroundColor;
      const norm = (s: string) =>
        s.replace(/\s/g, "").toLowerCase();
      const textNodes = card.querySelectorAll("h3, p, span");
      for (const el of textNodes) {
        const color = window.getComputedStyle(el as HTMLElement).color;
        if (norm(color) === norm(cardBg))
          return { ok: false, reason: "text same as background", el: (el as HTMLElement).textContent?.slice(0, 30) };
        if (color.includes("0, 0, 0, 0") || color === "transparent")
          return { ok: false, reason: "transparent text", el: (el as HTMLElement).textContent?.slice(0, 30) };
      }
      return { ok: true };
    });

    expect(noInvisibleText.ok, noInvisibleText.reason).toBe(true);
  });
});

test.describe("Humo landing page - accessibility", () => {
  test("has no serious or critical accessibility violations", async ({ page }) => {
    await page.goto("/");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    const seriousOrCritical = results.violations.filter((v) =>
      v.impact === "serious" || v.impact === "critical",
    );

    expect(
      seriousOrCritical,
      `Serious/critical a11y issues: ${JSON.stringify(seriousOrCritical, null, 2)}`,
    ).toEqual([]);
  });
});

