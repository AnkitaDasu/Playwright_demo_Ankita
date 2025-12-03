const { test, expect } = require("@playwright/test");
test("Verify Alert Messages", async ({ page }) => {
  await page.goto("https://the-internet.hackerearth.com/javascript_alerts");

  page.on("dialog", async (d) => {
    expect(d.type()).toContain("alert");
    expect(d.message()).toContain("I am a JS Alert");
    await d.accept();
  });
  await page.locator("//button [text()='Click for JS Alert'] ").click();
  await page.waitForTimeout(3000);
});
test("Verify confirm message", async ({ page }) => {
  await page.goto("https://the-internet.hackerearth.com/javascript_alerts");

  page.on("dialog", async (dW) => {
    expect(dW.type()).toContain("confirm");
    expect(dW.message()).toContain("I am a JS Confirm");
    // await dW.accept();
    await dW.dismiss();
  });
  await page.locator("//button [text()='Click for JS Confirm'] ").click();
  await page.waitForTimeout(3000);
});
test("Verify Prompt message", async ({ page }) => {
  await page.goto("https://the-internet.hackerearth.com/javascript_alerts");

  page.on("dialog", async (dW1) => {
    expect(dW1.type()).toContain("prompt");
    expect(dW1.message()).toContain("I am a JS prompt");
    //await dW.accept();

    await dW1.accept("Ankita");
  });
  await page.locator("//button [text()='Click for JS Prompt'] ").click();
  await page.waitForTimeout(3000);
});
