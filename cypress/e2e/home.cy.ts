describe("Select Component", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1500);
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

    cy.wait(1500);

    categorySelectBtn.should("contain", "Design");
  });

  it("select level on filter", () => {
    const levelSelectBtn = cy.get("button[data-cy='level']");
    levelSelectBtn.click();

    cy.get("button").contains("Intermediário").click();

    cy.wait(1500);

    levelSelectBtn.should("contain", "Intermediário");
  });
});
