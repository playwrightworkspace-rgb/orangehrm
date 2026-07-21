import { IWorldOptions, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";

import ScenarioContext from "../factory/ScenarioContext";

export default class CustomWorld extends World {

    public scenarioContext!: ScenarioContext;

    constructor(options: IWorldOptions) {
        super(options);
    }

    public get page(): Page {
        return this.scenarioContext.page;
    }

    public get browser(): Browser {
        return this.scenarioContext.browser;
    }

    public get context(): BrowserContext {
        return this.scenarioContext.context;
    }
}