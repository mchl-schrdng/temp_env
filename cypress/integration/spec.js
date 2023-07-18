// cypress/integration/streamlit_app.spec.js

describe('My First Test', () => {
  it('Visits the app', () => {
    cy.visit('https://streamlit-app-pr-66-iyxvyhs26a-uc.a.run.app');

    cy.contains('My first app'); // assert that the page contains this title
  })
});
