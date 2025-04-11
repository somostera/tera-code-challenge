describe('Course Detail Page', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-cy=course-card]').first().click();
      cy.url().should('include', '/courses/');
    });
  
    it('should display course title, category, level, description and modules', () => {
      cy.get('h1').should('exist').and('not.be.empty');
      cy.contains('Categoria:').should('exist');
      cy.contains('Nível:').should('exist');
      cy.get('p').should('exist').and('not.be.empty');
      cy.get('ul > li').should('have.length.greaterThan', 0);
    });
  
    it('should allow navigating back to the previous page', () => {
      cy.go('back');
      cy.url().should('eq', Cypress.config().baseUrl + '/');
      cy.get('[data-cy=course-card]').should('exist');
    });

    it('should allow enrolling in the course', () => {
      cy.get('[data-cy=enrol-button]')
        .should('exist')
        .and('be.visible')
        .click();
  
      cy.on('window:alert', (text) => {
        expect(text).to.contain('Matrícula realizada com sucesso!');
      });
    });
  });
  