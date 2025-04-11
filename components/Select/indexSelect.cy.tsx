import React from "react";
import CustomSelect from ".";


const options = [
  { value: "option-1", label: "Opção 1" },
  { value: "option-2", label: "Opção 2" },
  { value: "option-3", label: "Opção 3" },
];

describe("CustomSelect Component", () => {
  beforeEach(() => {
    cy.mount(<Wrapper />);
  });

  it("should show placeholder initially", () => {
    cy.contains("Selecione...").should("exist");
  });

  it("should open options on click", () => {
    cy.get("button").click();
    cy.contains("Opção 1").should("be.visible");
    cy.contains("Opção 2").should("be.visible");
    cy.contains("Opção 3").should("be.visible");
  });

  it("should select an option", () => {
    cy.get("button").click();
    cy.contains("Opção 2").click();
    cy.contains("Opção 2").should("exist");
  });

  it("should close options when clicking outside", () => {
    cy.get("button").click();
    cy.contains("Opção 1").should("be.visible");

    cy.get("body").click(0, 0); // click fora
    cy.contains("Opção 1").should("not.exist");
  });
});

function Wrapper() {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <CustomSelect
        value={value}
        onChange={setValue}
        options={options}
        placeholder="Selecione..."
      />
      <div>Fora do select</div>
    </div>
  );
}
