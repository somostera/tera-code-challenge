import coursesData from "../../data/courses.json";

const loadingTime = 1500;

describe("Home page tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(loadingTime);
  });

  it("render filters", () => {
    cy.contains("CATEGORIA").should("exist");
    cy.contains("DIFICULDADE").should("exist");
  });

  it("should test category filter dropdown", () => {
    const categorySelectBtn = cy.get("button[data-cy='category']");

    categorySelectBtn.click();
    cy.get("button").contains("Design").should("be.visible");

    cy.get("body").click(0, 0);
    cy.get("button").contains("Design").should("not.exist");
  });

  it("should test level filter dropdown", () => {
    const levelSelectBtn = cy.get("button[data-cy='level']");

    levelSelectBtn.click();
    cy.get("button").contains("Avançado").should("be.visible");

    cy.get("body").click(0, 0);
    cy.get("button").contains("Avançado").should("not.exist");
  });

  it("select category on filter", () => {
    const categorySelectBtn = cy.get("button[data-cy='category']");
    categorySelectBtn.click();

    cy.get("button").contains("Design").click();

    cy.wait(loadingTime);

    categorySelectBtn.should("contain", "Design");
  });

  it("select level on filter", () => {
    const levelSelectBtn = cy.get("button[data-cy='level']");
    levelSelectBtn.click();

    cy.get("button").contains("Intermediário").click();

    cy.wait(loadingTime);

    levelSelectBtn.should("contain", "Intermediário");
  });

  it("render all courses", () => {
    coursesData.courses.forEach((course) => {
      cy.get("h3").contains(course.title).should("be.visible");
    });
  });

  it("render filtered courses", () => {
    const categorySelectBtn = cy.get("button[data-cy='category']");
    categorySelectBtn.click();

    cy.get("button").contains("Design").click();

    cy.wait(loadingTime);

    categorySelectBtn.should("contain", "Design");

    coursesData.courses
      .filter((course) => course.category === "Design")
      .forEach((course) => {
        cy.get("h3").contains(course.title).should("be.visible");
        cy.get("h3").contains("Dados").should("not.exist");
      });
  });
});
