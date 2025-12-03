const { test, expect } = require("@playwright/test");
test("Select Values from drop down", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.locator("#state").selectOption({ label: "Goa" }); // 1st priority
  await page.waitForTimeout(1000);
  await page.locator("#state").selectOption({ value: "Assam" }); //2nd Priority
  await page.waitForTimeout(1000);
  await page.locator("#state").selectOption({ index: 2 }); // 3rd Priority
  await page.waitForTimeout(1000);
  /* const value = await page.locator("#state").textContent();
  console.log("All drop down values" + value);
  await expect(value.includes("Ankita")).toBeTruthy();
  */
  //How to run a loop in playwright
  const stateDropdown = page.locator("#state");
  const allOptions = await stateDropdown.locator("option").all();

  let ddstatus = false;

  for (const option of allOptions) {
    const text = await option.textContent();

    console.log("Values from dropdown: " + text);
    if (text.includes("Rajasthan")) {
      ddstatus = true;
      break;
    }
  }
  await expect(ddstatus).toBeTruthy();
  await page.locator("#hobbies").selectOption(["Playing", "Swimming"]);
  await page.waitForTimeout(3000);
});
/*commands
npx playwright test sample --headed
npx playwright test -g  "My First File" --headed      to run specific test
npx playwright test sample.spec.js --headed --project="Chromium"
*/
