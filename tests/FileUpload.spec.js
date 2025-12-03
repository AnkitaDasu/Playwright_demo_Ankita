const { test, expect } = require("@playwright/test");
test("Verify file upload", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page
    .locator("#file-upload")
    .setInputFiles("./tests/Upload/AnkitaDas_Resume_ProductManager.pdf");
  await page.waitForTimeout(3000);
  await page.locator("#file-submit").click();
  await page.waitForTimeout(3000);
  expect(await page.locator("//h3")).toHaveText("File Uploaded!");
  await page.waitForTimeout(3000);
});
