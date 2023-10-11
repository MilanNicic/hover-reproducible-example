const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qaplayground.b4din.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
