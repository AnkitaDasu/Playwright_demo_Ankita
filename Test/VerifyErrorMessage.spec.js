const { test, expect } = require("@playwright/test");
//test.use({ viewport: { width: 1912, height: 954 } });
test("Valid login to OrangeHRM", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    { timeout: 60000, waitUntil: "load" }
  );
  console.log(await page.viewportSize().width);
  console.log(await page.viewportSize().width);
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin1234");
  await page.locator("//button[@type='submit']").click();
  const Error = await page
    .locator("//p[contains(@class,'alert-content-text')]")
    .textContent();
  console.log("Error message is:" + Error);
  expect(Error.includes("Invalid")).toBeTruthy();
  expect(Error === "Invalid credentials").toBeTruthy();
});
