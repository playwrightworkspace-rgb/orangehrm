import {
    Browser,
    BrowserContextOptions,
    LaunchOptions,
    chromium,
    firefox,
    webkit
} from '@playwright/test';

import ConfigManager from '../config/ConfigManager';
import ScenarioContext from './ScenarioContext';

export default class BrowserFactory {

    public static async initialize(): Promise<ScenarioContext> {

        const scenarioContext = new ScenarioContext();

        const launchOptions: LaunchOptions = {

            headless: ConfigManager.isHeadless(),

            slowMo: ConfigManager.getSlowMo()

        };

        let browser: Browser;

        switch (ConfigManager.getBrowser().toLowerCase()) {

            case "chromium":

                browser = await chromium.launch(launchOptions);

                break;

            case "firefox":

                browser = await firefox.launch(launchOptions);

                break;

            case "webkit":

                browser = await webkit.launch(launchOptions);

                break;

            default:

                throw new Error(
                    `Unsupported Browser : ${ConfigManager.getBrowser()}`
                );

        }

        scenarioContext.browser = browser;

        const contextOptions: BrowserContextOptions = {

            viewport: {

                width: ConfigManager.getViewportWidth(),

                height: ConfigManager.getViewportHeight()

            },

            ignoreHTTPSErrors: true,

            acceptDownloads: true,
            recordVideo: { 
                dir: "videos", 
                size: { width: 1280, height: 720 } 
            }

        };

        scenarioContext.context =
            await browser.newContext(contextOptions);

        scenarioContext.context.setDefaultTimeout(
            ConfigManager.getActionTimeout()
        );

        scenarioContext.context.setDefaultNavigationTimeout(
            ConfigManager.getNavigationTimeout()
        );

        scenarioContext.page =
            await scenarioContext.context.newPage();

        return scenarioContext;

    }

}