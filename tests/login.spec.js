/* eslint-disable no-undef */
import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test.describe("Login", () => {
  test("User can log in with valid credentials", async ({ page }) => {
    await page.goto("/login");

    await page.fill('input[name="email"]', process.env.LOGIN_EMAIL);
    await page.fill('input[name="password"]', process.env.LOGIN_PASSWORD);
    await page.click('button[type="submit"]');

    // await expect(page).toHaveURL("");
    await expect(page.locator("text=Logout")).toBeVisible();
  });

  test("User sees error with invalid credentials", async ({ page }) => {
    await page.fill('input[name="password"]', "wrongpass");

    await page.fill('input[name="email"]', "invalid@example.com");
    await page.fill('input[name="password"]', "wrongpass");
    ("text=Please enter a noroff.no or stud.noroff.no email address.");

    await expect(
      page.locator(
        "text=Please enter a noroff.no or stud.noroff.no email address.",
      ),
    ).toBeVisible();
  });
});
