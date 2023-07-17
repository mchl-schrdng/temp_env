const { defineConfig } = require('cypress')

module.exports = defineConfig({
  testingType: 'e2e',
  baseUrl: process.env.CYPRESS_BASE_URL,
  integrationFolder: "cypress/integration",
  testFiles: "**/*_spec.js"
})
