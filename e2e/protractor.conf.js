// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const reporter = require("cucumber-html-reporter");
const exec = require("shelljs.exec");

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["./src/features/**/*.feature"],
  cucumberOpts: {
    require: ["./src/steps/**/*.steps.ts"],
    tags: ["@FE"],
    format: `json:${__dirname}/coverage/results.json`,
  },
  capabilities: {
    directConnect: false,
    // browserName: "chrome",
    // chromeOptions: {
    //   args: [
    //     "--headless",
    //     "--disable-gpu",
    //     "--window-size=800x600",
    //     "--no-sandbox",
    //     "--disable-extensions",
    //     "--disable-dev-shm-usage",
    //   ],
    // },

    browserName: "firefox",
    "moz:firefoxOptions": {
      args: ["--headless"],
    },
  },
  restartBrowserBetweenTests: true,
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.e2e.json"),
    });
  },
  beforeLaunch() {
    exec(`mkdir -p ${__dirname}/coverage && rm -rf ${__dirname}/coverage/*`);
  },
  onCleanUp() {
    console.log("Completed! Generating the test result report /e2e/coverage/");
    const options = {
      theme: "bootstrap",
      jsonFile: `${__dirname}/coverage/results.json`,
      output: `${__dirname}/coverage/index.html`,
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      ignoreBadJsonFile: true,
      launchReport: true,
    };
    reporter.generate(options);
  },
};
