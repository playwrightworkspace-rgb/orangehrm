import { Locator, Page, Browser, BrowserContext } from '@playwright/test';
import ScenarioContext from '../factory/ScenarioContext';
import ConfigManager from "../config/ConfigManager";

export default abstract class BasePage {

    protected readonly scenarioContext: ScenarioContext;

    protected constructor(scenarioContext: ScenarioContext) {
        this.scenarioContext = scenarioContext;
    }

    //====================================================
    // Playwright Objects
    //====================================================

    protected get page(): Page {
        return this.scenarioContext.page;
    }

    protected locator(selector: string): Locator {
        return this.page.locator(selector);
    }

    protected get browser(): Browser {
        return this.scenarioContext.browser;
    }

    protected get context(): BrowserContext {
        return this.scenarioContext.context;
    }

    //====================================================
    // Navigation
    //====================================================

    protected async openApplication(): Promise<void> {
        await this.page.goto(ConfigManager.getBaseUrl());
    }

    protected async getTitle(): Promise<string> {
        return await this.page.title();
    }

    protected getCurrentUrl(): string {
        return this.page.url();
    }

    protected async refresh(): Promise<void> {
        await this.page.reload();
    }

    protected async goBack(): Promise<void> {
        await this.page.goBack();
    }

    protected async goForward(): Promise<void> {
        await this.page.goForward();
    }

    //====================================================
    // Actions
    //====================================================

    protected async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    protected async fill(locator: Locator, value: string): Promise<void> {
        await locator.fill(value);
    }

    protected async clear(locator: Locator): Promise<void> {
        await locator.clear();
    }

    protected async type(locator: Locator, value: string): Promise<void> {
        await locator.pressSequentially(value);
    }

    protected async press(locator: Locator, key: string): Promise<void> {
        await locator.press(key);
    }

    protected async hover(locator: Locator): Promise<void> {
        await locator.hover();
    }

    protected async doubleClick(locator: Locator): Promise<void> {
        await locator.dblclick();
    }

    protected async rightClick(locator: Locator): Promise<void> {
        await locator.click({ button: 'right' });
    }

    //====================================================
    // Checkbox
    //====================================================

    protected async check(locator: Locator): Promise<void> {
        await locator.check();
    }

    protected async uncheck(locator: Locator): Promise<void> {
        await locator.uncheck();
    }

    //====================================================
    // Dropdown
    //====================================================

    protected async selectByLabel(locator: Locator, label: string): Promise<void> {
        await locator.selectOption({ label });
    }

    protected async selectByValue(locator: Locator, value: string): Promise<void> {
        await locator.selectOption(value);
    }

    protected async selectByIndex(locator: Locator, index: number): Promise<void> {
        await locator.selectOption({ index });
    }

    //====================================================
    // Mouse
    //====================================================

    protected async dragAndDrop(source: Locator, target: Locator): Promise<void> {
        await source.dragTo(target);
    }

    //====================================================
    // Text
    //====================================================

    protected async getText(locator: Locator): Promise<string> {
        return (await locator.textContent()) ?? "";
    }

    protected async getInputValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    protected async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
        return await locator.getAttribute(attribute);
    }

    //====================================================
    // State
    //====================================================

    protected async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    protected async isHidden(locator: Locator): Promise<boolean> {
        return await locator.isHidden();
    }

    protected async isEnabled(locator: Locator): Promise<boolean> {
        return await locator.isEnabled();
    }

    protected async isDisabled(locator: Locator): Promise<boolean> {
        return await locator.isDisabled();
    }

    protected async isChecked(locator: Locator): Promise<boolean> {
        return await locator.isChecked();
    }

    //====================================================
    // Waits
    //====================================================

    protected async waitForVisible(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
    }

    protected async waitForHidden(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'hidden' });
    }

    protected async waitForLoad(): Promise<void> {
        await this.page.waitForLoadState();
    }

    //====================================================
    // Scroll
    //====================================================

    protected async scrollIntoView(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
    }

    //====================================================
    // Upload
    //====================================================

    protected async uploadFile(locator: Locator, filePath: string): Promise<void> {
        await locator.setInputFiles(filePath);
    }

    //====================================================
    // Screenshot
    //====================================================

    protected async takeScreenshot(path: string): Promise<void> {
        await this.page.screenshot({
            path,
            fullPage: true
        });
    }
}