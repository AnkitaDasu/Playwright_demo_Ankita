const { test, expect } = require("@playwright/test");
test("Verify KeyBoard Events", async ({ page }) => {
  await page.goto("https://www.google.com/");
  //   await page.locator("textarea[name='q']").type("gmail");
  //   await page.waitForTimeout(3000);
  //For multiple commands
  //   await page.keyboard.press("Control+A");
  //   await page.keyboard.press("Backspace");
  //For single command
  //await page.keyboard.press("Enter");
  await page.locator("textarea[name='q']").focus();
  await page.keyboard.type("Facebook!");
  await page.keyboard.press("ArrowLeft");
  await page.keyboard.down("Shift");
  for (let i = 0; i < 6; i++) {
    await page.keyboard.press("ArrowLeft");
  }
  await page.keyboard.up("Shift");
  await page.keyboard.press("Backspace");

  await page.waitForTimeout(3000);
});
