import { Locator } from '@playwright/test';

import BasePage from './BasePage';
import ScenarioContext from '../factory/ScenarioContext';

export default class DashboardPage extends BasePage {

    //====================================================
    // Locators
    //====================================================

    private readonly lblDashboardHeader: Locator =
        this.page.locator("h6.oxd-topbar-header-breadcrumb-module");

    //====================================================
    // Constructor
    //====================================================

    constructor(scenarioContext: ScenarioContext) {
        super(scenarioContext);
    }

    //====================================================
    // Verification Methods
    //====================================================

    public async getDashboardHeader(): Promise<string> {

        return await this.getText(this.lblDashboardHeader);

    }

    public async isDashboardDisplayed(): Promise<boolean> {

        return await this.isVisible(this.lblDashboardHeader);

    }

}