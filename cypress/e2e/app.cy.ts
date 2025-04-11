describe("Test user flow for searching and filtering courses", () => {
  it("should be able to change category filter and see screen contents change", () => {
    cy.visit("/");

    cy.get('select[name="categories"]').should("exist");
    cy.get('select[name="categories"]').should("have.value", "");

    cy.get('select[name="categories"]').select("design");
    cy.get('select[name="categories"]').should("have.value", "design");
    cy.get("strong")
      .contains("Categoria: ")
      .next("span")
      .each((element) => cy.wrap(element).should("have.text", "Design"));
    cy.url().should("contain", "?category=design");

    cy.get('select[name="categories"]').select("produto");
    cy.get('select[name="categories"]').should("have.value", "produto");

    cy.get("strong")
      .contains("Categoria: ")
      .next("span")
      .each((element) => cy.wrap(element).should("have.text", "Produto"));
    cy.url().should("contain", "?category=produto");
  });

  it("should be able to search for a course using text", () => {
    cy.visit("/");
    cy.get('[role="searchbox"]').should("exist");

    cy.contains("h2", /ux design fundamentals/i).should("exist");
    cy.contains("h2", /react avançado/i).should("exist");

    cy.get('[role="searchbox"]').type("react avançado");
    cy.get("#home-form").submit();
    cy.contains("h2", /ux design fundamentals/i).should("not.exist");
    cy.contains("h2", /react avançado/i).should("exist");
    cy.url().should("contain", `?search=${encodeURI("react+avançado")}`);
  });

  it("should render page using query from url", () => {
    cy.visit("/?search=react&category=desenvolvimento&level=avancado");
    cy.get('select[name="categories"]').should("have.value", "desenvolvimento");
    cy.get('select[name="level"]').should("have.value", "avancado");
    cy.contains("h2", /react avançado/i).should("exist");
  });
});

describe("Test user flow for viewing a course page", () => {
  it("should be able to enter on a course page", () => {
    cy.visit("/");

    cy.contains("h2", /react avançado/i).click();
    cy.contains("h1", /react avançado/i);
    cy.url().should("contain", "courses/2");

    cy.contains(/1 Pessoa já se matriculou para este curso/).should("exist");
    cy.get("button").click();
    cy.get("button").should("be.disabled");
    cy.wait(5000);
    cy.get("button").should("be.enabled");
    cy.contains(/2 Pessoas já se matricularam para este curso/).should("exist");
  });
});
