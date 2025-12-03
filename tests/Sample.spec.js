const { test, expect } = require("@playwright/test");

test("My First Test", async function ({ page }) {
  expect(12).toBe(12);
});
test.skip("My Second Test", async function ({ page }) {
  expect(100).toBe(101);
});
test("My Third Test", async function ({ page }) {
  expect(13).toBe(13);
});
test("My Fourth Test", async function ({ page }) {
  expect("Ankita Das").toContain("Das");
  expect(true).toBeTruthy();
});
test("My Fifth Test", async function ({ page }) {
  expect(false).toBeFalsy();
});
test("My Sixth Test", async function ({ page }) {
  expect("Ms.Ankita Das".includes("Ms.")).toBeTruthy();
});
