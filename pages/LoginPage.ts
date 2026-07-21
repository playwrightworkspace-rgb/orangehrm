import { Locator } from '@playwright/test';

import BasePage from './BasePage';
import ScenarioContext from '../factory/ScenarioContext';
import ConfigManager from "../config/ConfigManager";

export default class LoginPage extends BasePage {

    //====================================================
    // Locators
    //====================================================

    private readonly txtUsername: Locator =
        this.locator("input[name='username']");

    private readonly txtPassword: Locator =
        this.locator("input[name='password']");

    private readonly btnLogin: Locator =
        this.locator("button[type='submit']");

    private readonly lnkForgotPassword: Locator =
        this.page.getByText("Forgot your password?");

    private readonly imgCompanyLogo: Locator =
        this.locator("img[alt='company-branding']");

    private readonly lblInvalidCredentials: Locator =
        this.locator(".oxd-alert-content-text");

    //====================================================
    // Constructor
    //====================================================

    constructor(scenarioContext: ScenarioContext) {

        super(scenarioContext);

    }

    //====================================================
    // Navigation
    //====================================================

    public async open(): Promise<void> {

        await this.openApplication();

    }

    //====================================================
    // Business Methods
    //====================================================

    public async login(
        username: string,
        password: string
    ): Promise<void> {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLogin();

    }

    public async enterUsername(
        username: string
    ): Promise<void> {

        await this.fill(this.txtUsername, username);

    }

    public async enterPassword(
        password: string
    ): Promise<void> {

        await this.fill(this.txtPassword, password);

    }

    public async clickLogin(): Promise<void> {

        await this.click(this.btnLogin);

    }

    public async clickForgotPassword(): Promise<void> {

        await this.click(this.lnkForgotPassword);

    }

    //====================================================
    // Verification
    //====================================================

    public async isDisplayed(): Promise<boolean> {

        return await this.isVisible(this.btnLogin);

    }

    public async isCompanyLogoDisplayed(): Promise<boolean> {

        return await this.isVisible(this.imgCompanyLogo);

    }

    public async getInvalidCredentialsMessage(): Promise<string> {

        return await this.getText(this.lblInvalidCredentials);

    }

}