describe('Courses Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render filter dropdowns', () => {
    cy.get('select').should('have.length', 2);
    cy.contains('Todas as categorias');
    cy.contains('Todos os níveis');
  });

  it('should filter by category and display only Design courses', () => {
    cy.get('select').first().select('Design');
    cy.wait(1000);

    cy.get('[data-cy=course-card]').should('have.length.greaterThan', 0);
    cy.get('[data-cy=course-category]').each(($category) => {
      cy.wrap($category).invoke('text').should('eq', 'Design');
    });
  });

  it('should filter by level and display only Iniciante courses', () => {
    cy.get('select').eq(1).select('iniciante');
    cy.wait(1000);

    cy.get('[data-cy=course-card]').should('have.length.greaterThan', 0);
    cy.get('[data-cy=course-level]').each(($level) => {
      cy.wrap($level).invoke('text').should('match', /iniciante/i);
    });
  });

  it('should filter by category and level together', () => {
    cy.get('select').first().select('Dados');
    cy.get('select').eq(1).select('intermediario');
    cy.wait(1000);

    cy.get('[data-cy=course-card]').should('have.length.greaterThan', 0);

    cy.get('[data-cy=course-category]').each(($category) => {
      cy.wrap($category).invoke('text').should('eq', 'Dados');
    });

    cy.get('[data-cy=course-level]').each(($level) => {
      cy.wrap($level).invoke('text').should('match', /intermediario/i);
    });
  });

  it('should show message when no courses match the selected filters', () => {
    cy.get('select').first().select('Design');
    cy.get('select').eq(1).select('Avançado');
    cy.wait(1000);
  
    cy.get('[data-cy=course-card]').should('have.length', 0);
    cy.contains('Nenhum curso encontrado').should('be.visible');
  });

  it('should render course card with all required information', () => {
    cy.get('[data-cy=course-card]').first().within(() => {
      cy.get('[data-cy=course-title]').should('not.be.empty');
      cy.get('[data-cy=course-short_description]').should('not.be.empty');
      cy.get('[data-cy=course-category]').should('not.be.empty');
      cy.get('[data-cy=course-level]').should('not.be.empty');
    });
  });

  it('should allow user to go back to courses list from course details page', () => {
    cy.get('[data-cy=course-card]').first().click();
    cy.url().should('include', '/courses/');
  
    cy.get('[data-cy=back-to-home]').click();
  
    cy.url().should('not.include', '/courses/');
    cy.get('[data-cy=course-card]').should('exist');
  });

  it('should have a valid course ID in the URL when navigating to details', () => {
    cy.get('[data-cy=course-card]').first().click();
  
    cy.url().should('match', /\/courses\/\w+/);
  });

  it('should reset filters on page reload', () => {
    cy.get('select').first().select('Design');
    cy.get('select').eq(1).select('iniciante');
    cy.wait(1000);
  
    cy.reload();
  
    cy.get('select').first().should('have.value', '');
    cy.get('select').eq(1).should('have.value', '');
  });

  it('should have clickable course titles leading to the course page', () => {
    cy.get('[data-cy=course-title]').first().click();
    cy.url().should('include', '/courses/');
  });
});
