import { test, expect } from "@playwright/test";

test("Navigate to venue details page", async ({ page }) => {
  await page.goto("/");

  await page.waitForSelector("#venue-container"); // Adjust class if needed

  const firstVenue = page.locator("#venue-container a").first();

  await firstVenue.click();

  await expect(page.locator("h1")).toContainText("Venue details");
});
