const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "./reports",
  reportPath: "./reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "148",
    },
    device: "My local system",
    platform: {
      name: "windows",
      version: "11.0",
    },
  },
  customData: {
    title: "SauceDemo Project",
    data: [
      { label: "Project", value: "saucedemo" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" }
     
    ],
  },
});
