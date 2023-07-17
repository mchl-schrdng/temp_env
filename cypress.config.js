// cypress.config.js

module.exports = {
  integrationFolder: "cypress/integration",
  testFiles: "**/*_spec.js",
  env: {
    CYPRESS_BASE_URL: process.env.CYPRESS_BASE_URL,
  },
}
