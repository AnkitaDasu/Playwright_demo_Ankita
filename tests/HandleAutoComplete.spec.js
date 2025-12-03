const { test, expect } = require("@playwright/test");
test("Verify AutoSuggestion Events", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator("textarea[name='q']").fill("Facebook");
  await page.waitForSelector("//li[@role='presentation']");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
});
//const { test, expect } = require("@playwright/test");
test.only("Verify AutoSuggestion Events via keyboard", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator("textarea[name='q']").fill("Facebook");
  await page.waitForSelector("//li[@role='presentation']");
  const elements = await page.$$("//li[@role='presentation']");

  //Applying for loop
  for (let i = 0; i < elements.length; i++) {
    const text = await elements[i].textContent();
    if (text.includes("login")) {
      await elements[i].click();
      await page.waitForTimeout(3000);
      break;
    }
    await page.waitForTimeout(3000);
  }
});
