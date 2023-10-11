describe("template spec", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit("/playground");
    cy.get("#email").type("badin@badin.rs");
    cy.get("#password").type("badin777!!");
    cy.get(".login-form-button").click();
  });
  it.only("Scroll to button", () => {
    cy.contains(".checklist-group-item", "Other").click();
    cy.contains(".list-item-name", "Scroll to element").click();
    cy.get(".component-wrapper").should("not.have.class", "list-enter-to");
    cy.get(".checklist-dropdown")
      .scrollIntoView({ offset: { top: -350, left: 0 } })
      .should("be.visible");
    cy.get("#scroll-to-element-button").realHover({
      scrollBehavior: false,
    });
    cy.get(".bottom.tooltip-text")
      .should("be.visible")
      .and("have.text", "Scroll to element");
    cy.get("#scroll-to-element-button").click();
    cy.get("h4").should("contain.text", "Scrolled element");
    cy.get("[class*=back-to-element]").realHover({
      scrollBehavior: false,
      pointer: 'mouse'
    });
    cy.get(".top.tooltip-text")
      .should("be.visible")
      .and("have.text", "Go back to start");
  });

  it.only("Hover a button", () => {
    cy.contains(".checklist-group-item", "Buttons").click();
    cy.contains(".list-item-name", "Mouse hover button").click();
    cy.get(".component-wrapper").should("not.have.class", "list-enter-active");
    cy.get(".mouse-hover-button-wrapper")
      .realHover({ scrollBehavior: false, pointer: "mouse" })
      .should("have.attr", "data-hover", "true");
    cy.get("#qa-mouse-hover h5").should("be.visible");
  });
});
