import { Given, When } from "@cucumber/cucumber";
import CustomWorld from "../support/CustomWorld";
import LoginPage from "../pages/LoginPage";

Given("User launches OrangeHRM application", async function (this: CustomWorld) {

    const loginPage = new LoginPage(this.scenarioContext);

    await loginPage.open();
});

When("User enters username {string}", async function (this: CustomWorld, username: string) {

    const loginPage = new LoginPage(this.scenarioContext);

    await loginPage.enterUsername(username);
});

When("User enters password {string}", async function (this: CustomWorld, password: string) {

    const loginPage = new LoginPage(this.scenarioContext);

    await loginPage.enterPassword(password);
});

When("User clicks on Login button", async function (this: CustomWorld) {

    const loginPage = new LoginPage(this.scenarioContext);

    await loginPage.clickLogin();
});