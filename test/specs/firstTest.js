describe("Ecommerce application", () => {
  it("should give error for invalidate credentials on login page", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(browser).toHaveTitle(
      "LoginPage Practise | Rahul Shetty Academy"
    );
    await expect(browser).toHaveTitle(expect.stringContaining("LoginPage"));
    await expect(await $(".termsText")).toHaveText(
      "I Agree to the terms and conditions"
    );
    await expect(await $(".termsText")).toHaveText(
      expect.stringContaining("I Agree to the ")
    );

    // console.log("**** page title *******: ", await browser.getTitle());

    await $("#username").setValue("rahulshettyacademy");
    // await browser.pause(2000);
    await $("[name='username']").setValue("learning");
    // await browser.pause(2000);
    await $("#password").setValue("password");
    await $("#signInBtn").click();
    // await browser.pause(4000);
    // const elem = await $(".alert-danger");
    // await elem.waitUntil(
    //   async function () {
    //     return (await this.getText()) === "Incorrect username/password.";
    //   },
    //   {
    //     timeout: 10000,
    //   }
    // );
    await browser.waitUntil(
      async () =>
        (await $(".alert-danger").getText()) === "Incorrect username/password."
    );
  });

  it("should successfully login with valid credentials", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    await $("#password").setValue("learning");
    await $("#signInBtn").click();
    await $(".btn-primary").waitForExist();
    await expect(browser).toHaveUrl(
      expect.stringContaining("angularpractice/shop")
    );
    await expect(browser).toHaveTitle("ProtoCommerce");
  });
});
