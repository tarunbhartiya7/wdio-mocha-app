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

  it.only("should validate web tables", async () => {
    await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await $("th:first-child").click()
    await browser.pause(2000)
    const list = await $$("tr td:first-child")
    const veggies = await list.map(async item => await item.getText())
    console.log("veggies: ", veggies)
    const copy =  veggies.slice()
    veggies.sort()
    expect(veggies).toEqual(copy)
  });
});
