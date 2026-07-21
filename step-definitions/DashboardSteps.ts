import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import CustomWorld from "../support/CustomWorld";
import DashboardPage from "../pages/DashboardPage";

Then(
    "User should be navigated to Dashboard page",
    async function (this: CustomWorld) {

        const dashboardPage =
            new DashboardPage(this.scenarioContext);

        expect(
            await dashboardPage.getDashboardHeader()
        ).toBe("Dashboard");
        await this.scenarioContext.page.waitForLoadState("domcontentloaded");

    }
);