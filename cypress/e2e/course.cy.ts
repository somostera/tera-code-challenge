import coursesData from "../../data/courses.json";

const loadingTime = 1500;
const course = coursesData.courses.find((course) => course.id === 1) as Course;

describe("Course page tests", () => {
  beforeEach(() => {
    cy.visit("/course/1");
  });

  it("render course", () => {
    cy.contains(course.title).should("be.visible");
    cy.contains(course.category).should("be.visible");
  });

  it("should test category filter dropdown", () => {
    const enrollSelectBtn = cy.get("button[data-cy='enroll']");
    enrollSelectBtn.click();

    cy.wait(loadingTime);

    cy.get("h2")
      .contains("Matrícula realizada com sucesso!")
      .should("be.visible");
  });
});
