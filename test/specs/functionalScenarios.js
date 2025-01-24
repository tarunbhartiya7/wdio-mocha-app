describe("functional testing", () => {
  it("should scroll and mouse over correctly", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    $("#mousehover").scrollIntoView();
    $("#mousehover").moveTo();
    const link = await $("=Top");
    link.click();
    await expect(browser).toHaveUrl(
      "https://rahulshettyacademy.com/AutomationPractice/#top"
    );
  });
});
