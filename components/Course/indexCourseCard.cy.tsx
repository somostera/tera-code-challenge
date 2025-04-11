import CourseCard from "@/components/Course/Card";

const mockCourse = {
  id: 123,
  title: "Curso de Teste",
  short_description: "Aprenda como testar componentes com Cypress.",
  category: "Desenvolvimento",
  level: "iniciante",
  duration_hours: 10,
  image_url: "https://media.istockphoto.com/id/1356364268/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-keyboard-screens-show-coding.webp?a=1&b=1&s=612x612&w=0&k=20&c=rLOBLfP2c6SKAXPAoZZndGm0OhF6QT-t3a_kQvzIePU=",
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
