const Module = require("module");
const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.header = "//h2[text()='Sign In']";
    this.page = page;
    this.username = "#email1";
    this.password = "#password1";
    this.loginbutton = "//button[text()='Sign in']";
  }
  async loginToApplication() {
    await this.page.fill(this.username, "admin@email.com");
    await this.page.fill(this.password, "admin@123");
    await this.page.click(this.loginbutton);
  }
  async verifySignIn() {
    await expect(this.page.locator(this.header)).toBeVisible();
  }
}
module.exports = LoginPage;
