const { defineConfig } = require("cypress");

module.exports = defineConfig({
  isMobile: true,
  viewportWidth: 390,
  viewportHeight: 844,

  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://automationexercise.com",
    specPattern: "./cypress/e2e/Shopstore/**/*.spec.js",
  },
});
