const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://streamlit-app-pr-66-iyxvyhs26a-uc.a.run.app',
    specPattern: "cypress/integration/**/*spec.js",
    supportFile: false
  },
})
