import Navbar from '@/components/Navbar';
import { CoursesProvider } from '@/context/SearchContext';


describe('<Navbar />', () => {
  it('renders and interacts correctly', () => {
    cy.mount(
      <CoursesProvider>
        <Navbar />
      </CoursesProvider>
    );

    cy.get('[data-cy=back-to-home]')
      .should('contain.text', 'Plataforma de Cursos')
      .and('have.attr', 'href', '/');

    cy.get('input[placeholder="Buscar curso por nome..."]')
      .should('exist')
      .type('JavaScript')
      .should('have.value', 'JavaScript');
  });
});