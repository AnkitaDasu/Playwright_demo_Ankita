const { test, expect } = require("@playwright/test");

test("Verify Application Title", async function ({ page }) {
  await page.goto("https://www.google.com/");
  const url = await page.url();
  console.log("The Url is:" + url);
  const title = await page.title();
  console.log("The Title is:" + title);
  await expect(page).toHaveTitle("Google");
});
//edit config file: code playwright.config.js
//Run Playwright test: npx playwight test
//Open Playwright report: npx playwright show-report
//Generate config and setup: npx playwright init
// npx playwright test Test/Login_Orange.spec.js --headed
