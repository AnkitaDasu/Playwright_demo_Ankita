const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginpage");
const Homepage = require("../pages/homepage");
test("Logout application with POM", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  const log = new LoginPage(page);
  await log.loginToApplication();
  const home = new Homepage(page);
  await home.verifymanage;
  await home.logoutfromApplication();
  await log.verifySignIn();
});
