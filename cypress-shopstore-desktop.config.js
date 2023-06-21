const { defineConfig } = require("cypress");

module.exports = defineConfig({
  isMobile: false,
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://automationexercise.com",
    specPattern: "./cypress/e2e/Shopstore/**/*.spec.js",
  },
});
