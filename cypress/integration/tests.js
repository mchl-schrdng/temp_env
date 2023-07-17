describe('Hello App Test', () => {
    it('finds the input field', () => {
      cy.visit("${{ steps.deploy.outputs.url }}")
      cy.get('.stTextInput').should('exist')
    })
  
    it('greets the user correctly', () => {
      cy.visit("${{ steps.deploy.outputs.url }}")
      cy.get('.stTextInput input').type('John Doe{enter}')
      cy.contains('Hello, John Doe!')
    })
  })  