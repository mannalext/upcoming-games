describe('upcoming-games', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  describe('Page load', () => {
    it('is true', () => {
      cy.get('div').should('include.html', 'upcoming games');
    });
  });
});
