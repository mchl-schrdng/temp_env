const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: Cypress.env('CYPRESS_BASE_URL'),
    specPattern: "cypress/integration/**/*_spec.js",
    supportFile: false
  },
})
