// cypress/integration/streamlit_app.spec.js

describe('My First Test', () => {
  it('Visits the app', () => {
    cy.visit(Cypress.env('CYPRESS_BASE_URL'));

    cy.contains('My first app'); // assert that the page contains this title
  })
});
