import CourseCard from "@/components/Card/Course";

const mockCourse = {
  id: 123,
  title: "Curso de Teste",
  short_description: "Aprenda como testar componentes com Cypress.",
  category: "Desenvolvimento",
  level: "iniciante",
  duration_hours: 10,
  modules: [
    { title: "Introdução ao UX Design", lessons: 4 },
    { title: "Pesquisa com Usuários", lessons: 5 },
    { title: "Prototipagem e Testes", lessons: 6 },
  ],
};

describe("<CourseCard />", () => {
  it("should render course data correctly and navigate on click", () => {
    cy.mount(<CourseCard course={mockCourse} />);

    cy.get("[data-cy=course-card]").should("exist");
    cy.get("[data-cy=course-title]").should("contain.text", mockCourse.title);
    cy.get("[data-cy=course-short_description]").should(
      "contain.text",
      mockCourse.short_description
    );
    cy.get("[data-cy=course-category]").should(
      "contain.text",
      mockCourse.category
    );
    cy.get("[data-cy=course-level]").should("contain.text", mockCourse.level);

    cy.get("[data-cy=course-card]").should(
      "have.attr",
      "href",
      `/courses/${mockCourse.id}`
    );
  });
});
