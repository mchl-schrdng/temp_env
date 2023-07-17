const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    integrationFolder: "cypress/integration",
    specPattern: "cypress/integration/**/*_spec.js"
  },
})
