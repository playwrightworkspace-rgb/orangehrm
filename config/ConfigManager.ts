import * as dotenv from 'dotenv';

dotenv.config();

export default class ConfigManager {

    //===========================================
    // Environment
    //===========================================

    static getEnvironment(): string {
        return process.env.ENV || 'QA';
    }

    //===========================================
    // Application
    //===========================================

    static getBaseUrl(): string {
        return process.env.BASE_URL || '';
    }

    static getUsername(): string {
        return process.env.USERNAME || '';
    }

    static getPassword(): string {
        return process.env.PASSWORD || '';
    }

    //===========================================
    // Browser
    //===========================================

    static getBrowser(): string {
        return process.env.BROWSER || 'chromium';
    }

    static isHeadless(): boolean {
        return process.env.HEADLESS === 'true';
    }

    static getSlowMo(): number {
        return Number(process.env.SLOWMO) || 0;
    }

    static getViewportWidth(): number {
        return Number(process.env.VIEWPORT_WIDTH) || 1920;
    }

    static getViewportHeight(): number {
        return Number(process.env.VIEWPORT_HEIGHT) || 1080;
    }

    //===========================================
    // Timeouts
    //===========================================

    static getActionTimeout(): number {
        return Number(process.env.ACTION_TIMEOUT) || 15000;
    }

    static getNavigationTimeout(): number {
        return Number(process.env.NAVIGATION_TIMEOUT) || 30000;
    }

    static getExpectTimeout(): number {
        return Number(process.env.EXPECT_TIMEOUT) || 10000;
    }

    static getTestTimeout(): number {
        return Number(process.env.TEST_TIMEOUT) || 60000;
    }

    //===========================================
    // Execution
    //===========================================

    static getRetries(): number {
        return Number(process.env.RETRIES) || 0;
    }

    static getWorkers(): number {
        return Number(process.env.WORKERS) || 1;
    }

    static isParallelExecution(): boolean {
        return process.env.PARALLEL === 'true';
    }

    //===========================================
    // Artifacts
    //===========================================

    static getScreenshotOption(): string {
        return process.env.SCREENSHOT || 'only-on-failure';
    }

    static getVideoOption(): string {
        return process.env.VIDEO || 'retain-on-failure';
    }

    static getTraceOption(): string {
        return process.env.TRACE || 'retain-on-failure';
    }

    static getReportOpenOption(): string {
        return process.env.REPORT_OPEN || 'never';
    }

}