const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
    },
    baseUrl: "https://automationexercise.com",
    specPattern: "./cypress/e2e/Shopstore/**/*.spec.js",
  },
});
