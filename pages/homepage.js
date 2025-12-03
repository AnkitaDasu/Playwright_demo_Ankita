const test = require("node:test");
const { expect } = require("@playwright/test");
class Homepage {
  constructor(page) {
    this.page = page;
    this.manage = "//span[normalize-space()='Manage']";
    this.menue = "//img[@alt='menu']";
    this.logoutbutton = "//button[text()='Sign out']";
  }

  async verifymanage() {
    await expect(this.page.locator(this.manage).toBeVisible());
  }

  async logoutfromApplication() {
    await this.page.click(this.menue);
    await this.page.click(this.logoutbutton);
  }
}
module.exports = Homepage;
