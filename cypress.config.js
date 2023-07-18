const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/integration/**/*_spec.js",
    supportFile: false
  },
})
