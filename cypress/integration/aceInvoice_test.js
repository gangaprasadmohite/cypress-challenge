describe("AceInvoice Test", () => {
  it("Creates new project", () => {
    cy.visit("https://www.aceinvoice.com/");
    cy.contains("Sign up for FREE").click();
    cy.get('input[placeholder="Email Address"]').type(
      "gangaprasadmohite-march-20-2021-2900@example.com"
    );
    cy.contains("Get Started").click();
    cy.get('input[name="password"]').type("welcome1234!");
    cy.contains("Continue").click();
    cy.get('input[name="user[first_name]"]').type("Oliver");
    cy.get('input[name="user[last_name]"]').type("Smith");
    cy.get("select").select("(GMT+05:30) New Delhi");
    cy.contains("DD/MM/YYYY").click();
    cy.get('input[name="user[terms_of_service_accepted]"]').check({
      force: true,
    });
    cy.get('input[name="user[marketing_notification]"]').check({
      force: true,
    });
    cy.contains("Continue").click();
    cy.get('input[name="name"]').type("gangaprasadmohite Private Limited");
    cy.contains("Continue").click();
    cy.contains("Skip this step").click();
    cy.get("html").should("contain", "Congratulations, you're all set!");
    cy.contains("Continue").click();
    cy.get("html").should("contain", "Verification email sent to");
    cy.contains("Clients").click();
    cy.contains("Add a new client").click();
    cy.get('input[name="client[name]"]').type("Trix Inc");
    cy.contains("Submit").click();
    cy.get("html").should("contain", "Add New Project");
    cy.get('input[name="projectName"]').type("Trix Web Development");
    cy.get("select[name='billingMethod']").select("Hourly project rate");
    cy.get("input[name='projectLevelRate']").type("{selectall}20");
    cy.contains("Submit").click({ force: true });
    cy.get("html").should("contain", "Trix Web Development");
    cy.get("html").should("contain", "Hourly Project Rate");
    cy.get("html").should("contain", "No rounding");
    cy.get("html").should("contain", "Oliver Smith");
  });
});
