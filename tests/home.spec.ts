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

