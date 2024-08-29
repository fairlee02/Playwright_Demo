const { test, expect } = require("@playwright/test");

import LoginPage from "../pages/loginPage";

test.beforeEach(async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
});

test("login to application with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const userName = process.env.USER_NAME;
    const userPassword = process.env.USER_PASSWORD;

    await loginPage.loginToApplication(userName, userPassword);

    await expect(page.locator(".cartBtn")).toBeVisible();

    await page.pause(); //pause the run
});

test("login to application with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const userName = process.env.USER_NAME;
    const userPassword = "randomPassword";

    await loginPage.loginToApplication(userName, userPassword);

    await expect(page.locator(".errorMessage")).toContainText(
        "Email and Password Doesn't match"
    );

    await page.pause(); //pause the run
});
