const { test, expect } = require("@playwright/test");
test("Valid login", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await page.getByPlaceholder("Enter Email").type("admin@email.com");
  await page.getByPlaceholder("Enter Password").type("admin@123");
  await page.getByRole("button", { name: "Sign in" }).click();
  // await page.locator("//button[@type='submit']").click();
  await page.locator("//span[text()='Manage']").hover({ force: true });
  //await page.locator("//span[normalize-space()='Manage']").hover();
  await page.getByRole("link", { name: "Manage Courses" }).click();
  // await page.locator("//a[normalize-space()='Manage Cources']").click();
});
