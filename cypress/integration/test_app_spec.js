// cypress/integration/streamlit_app.spec.js

describe('My First Test', () => {
  it('Visits the app', () => {
    cy.visit(Cypress.env('CYPRESS_BASE_URL'));

    cy.contains('My first app') // assert that the page contains this title

    cy.contains('Click me').click()  // find a button with the label "Click me" and click it
    cy.contains('Check me').click()  // find a checkbox with the label "Check me" and click it

    // find an input with the placeholder "Input some text" and type 'Streamlit is awesome' into it
    cy.get('input').type('Streamlit is awesome')

    // find the select box, select 'Email' and assert that the page contains "You selected Email"
    cy.get('select').select('Email')
    cy.contains('You selected Email')
  })
})
