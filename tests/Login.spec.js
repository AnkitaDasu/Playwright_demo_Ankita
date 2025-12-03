const { test, expect } = require("@playwright/test");
const testdata = JSON.parse(JSON.stringify(require("../tests/TestData.json")));

test.describe("Data driven login test", function () {
  for (const data of testdata) {
    test.describe(`Login with users ${data.id}`, function () {
      test("Test login to application", async ({ page }) => {
        await page.goto("https://freelance-learn-automation.vercel.app/login");
        await page.locator("//input[@id='email1']").fill(data.username);
        await page.locator("//input[@id='password1']").fill(data.Name);
        await page.waitForTimeout(3000);
      });
    });
  }
});

test("working with signup test data", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.locator("//input[@id='name']").fill(cred.Name);
  await page.locator("//input[@id='email']").fill(cred.Email);
  await page.locator("//input[@id='password']").fill(cred.Password);
  await page.locator("#interests");
  await page.getByLabel(cred.Interests[0]).check();
  //   await page.locator("#gender");
  //   await page.getByLabel(cred.Gender[0]).click();
  await page.waitForSelector("#state");
  await page.locator("#state").selectOption({ label: cred.State[0] });
  await page.waitForTimeout(5000);
  await page.waitForSelector("#hobbies");
  await page.locator("#hobbies").selectOption({ label: cred.Hobbies[0] });
  await page.waitForTimeout(5000);
});
