import {
    BeforeAll,
    AfterAll,
    Before,
    After,
    ITestCaseHookParameter,
    setWorldConstructor,
    setDefaultTimeout
} from "@cucumber/cucumber";

import BrowserFactory from "../factory/BrowserFactory";
import CustomWorld from "../support/CustomWorld";
import { TestStepResultStatus } from "@cucumber/messages";

setWorldConstructor(CustomWorld);

// Increase Cucumber step timeout
setDefaultTimeout(60 * 1000);

/**
 * Executes once before the entire test suite.
 */
BeforeAll(async function () {

    console.log("========================================");
    console.log("Execution Started");
    console.log("========================================");

});

/**
 * Executes before every scenario.
 */
Before(async function (
    this: CustomWorld,
    scenario: ITestCaseHookParameter
) {

    console.log(`Starting Scenario : ${scenario.pickle.name}`);

    this.scenarioContext =
        await BrowserFactory.initialize();
    
    await this.context.tracing.start({
        screenshots: true,
        snapshots: true,
        sources: true
    });
});

/**
 * Executes after every scenario.
 */
After(async function (
    this: CustomWorld,
    scenario: ITestCaseHookParameter
) {
    
    try {

        const status = scenario.result?.status;

        console.log("Inside After Hook");

        if (scenario.result?.status === TestStepResultStatus.PASSED) {

            console.log("Scenario Failed");

            const screenshot = await this.page.screenshot({
                fullPage: true
            });
            console.log("Screenshot Taken");
            await this.attach(screenshot, "image/png");
            console.log("Screenshot Attached");

            const video = this.page.video();
            if (video) {
                const videoPath = await video.path();
                const fs = await import("fs");
                if (fs.existsSync(videoPath)) {
                    fs.unlinkSync(videoPath);
                }
            }

             // Safe Trace Name
            const traceName = scenario.pickle.name
                .replace(/\s+/g, "_")
                .replace(/[<>:"/\\|?*]/g, "");

            // Save Trace
            await this.context.tracing.stop({
                path: `traces/${traceName}.zip`
            });
        }

    }
    finally {
        if (this.scenarioContext) {
            await this.scenarioContext.close();
        }
        console.log(`Finished Scenario : ${scenario.pickle.name}`);
    }

});

/**
 * Executes once after the entire test suite.
 */
AfterAll(async function () {

    console.log("========================================");
    console.log("Execution Finished");
    console.log("========================================");

});