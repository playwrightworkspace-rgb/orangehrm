import {
    APIRequestContext,
    Browser,
    BrowserContext,
    Page
} from '@playwright/test';

export default class ScenarioContext {

    private _browser!: Browser;

    private _context!: BrowserContext;

    private _page!: Page;

    //=========================================
    // Browser
    //=========================================

    public get browser(): Browser {
        return this._browser;
    }

    public set browser(value: Browser) {
        this._browser = value;
    }

    //=========================================
    // Browser Context
    //=========================================

    public get context(): BrowserContext {
        return this._context;
    }

    public set context(value: BrowserContext) {
        this._context = value;
    }

    //=========================================
    // Page
    //=========================================

    public get page(): Page {
        return this._page;
    }

    public set page(value: Page) {
        this._page = value;
    }

    //=========================================
    // Cleanup
    //=========================================

    public async close(): Promise<void> {

        await this._page.close();

        await this._context.close();

        await this._browser.close();

    }

}