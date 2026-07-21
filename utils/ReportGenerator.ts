import report from "multiple-cucumber-html-reporter";

export default class ReportGenerator {

    public static generate(): void {

        report.generate({

            jsonDir: "reports",

            reportPath: "reports",

            pageTitle: "HRM Automation Report",

            reportName: "OrangeHRM Automation Execution Report",

            displayDuration: true,

            metadata: {

                browser: {
                    name: process.env.BROWSER || "chromium",
                    version: "Latest"
                },

                device: "Local Machine",

                platform: {
                    name: process.platform,
                    version: process.version
                }

            },

            customData: {

                title: "Execution Information",

                data: [

                    {
                        label: "Project",
                        value: "OrangeHRM Automation"
                    },

                    {
                        label: "Framework",
                        value: "Playwright + Cucumber + TypeScript"
                    },

                    {
                        label: "Executed On",
                        value: new Date().toLocaleString()
                    }

                ]

            }

        });

    }

}