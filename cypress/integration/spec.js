// cypress/integration/streamlit_app.spec.js

describe('My First Test', () => {
  it('Visits the app', () => {
    const baseUrl = Cypress.env('CYPRESS_BASE_URL'); // Extract the base URL from Cypress.env('CYPRESS_BASE_URL')
    const trimmedUrl = baseUrl.split('a.run.app')[0] + 'a.run.app'; // Remove everything after 'a.run.app'

    cy.visit(trimmedUrl);

    cy.contains('My first app'); // assert that the page contains this title
  })
});
