describe("UI Controls", () => {
  it("should check correct radio buttons when cancel is clicked on modal", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    await $("#password").setValue("learning");
    await $$(".radiotextsty")[1].click();
    // await browser.pause(2000);
    // await $("#myModal.show").waitForExist();
    await $(".modal-body").waitForDisplayed();
    await $("#cancelBtn").click();
    await expect(await $("input[value='admin']")).toBeChecked();
    await expect(await $("input[value='user']")).not.toBeChecked();
    // await $("input[value='admin']").toBeChecked();
    // await expect(await $("#myModal.show")).toBeTruthy();
    // await $$(".radiotextsty")[0].isSelected();
    // const adminBtn = await $$(".radiotextsty")[0];
    // await expect(adminBtn).toBeSelected();
    // await browser.pause(2000);
    // await expect(await $(".modal-body")).toBeDisplayed();
  });

  it("should check correct radio buttons when okay is clicked on modal", async () => {
    const adminBtn = await $("input[value='admin']");
    const userBtn = await $("input[value='user']");

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    await $("#password").setValue("learning");
    userBtn.click();
    await $(".modal-body").waitForDisplayed();
    await $("#okayBtn").click();
    await expect(userBtn).toBeChecked();
    await expect(adminBtn).not.toBeChecked();
  });

  it.only("should select correct dropdown value", async () => {
    const dropdown = await $("select");

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await dropdown.selectByAttribute("value", "teach");
    await expect(dropdown).toHaveValue("teach");

    await dropdown.selectByVisibleText("Consultant");
    await expect(dropdown).toHaveValue("consult");
  });
});
