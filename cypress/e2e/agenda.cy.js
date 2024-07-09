/// <reference types="cypress" />

describe("Testes exercicio EBAC - Cypress", () => {
    beforeEach(() => {
      cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    it("Incluir novo contato", () => {
      cy.get("input[type=text]").type("Bruno");
      cy.get("input[type=email]").type("bruno@teste.com");
      cy.get("input[type=tel]").type("11970591222");
      cy.get(".adicionar").click()
    });
  
    it("Deve editar contato", () => {
      cy.get("button[class=edit]").first().click();
      cy.get("input[type=text]").clear().type("Contato Alterado");
      cy.get("input[type=email]").clear().type("editado@teste.com");
      cy.get("input[type=tel]").clear().type("11959545858");
      cy.get(".alterar").click()
    });

    it("Deve remover contato", () => {
        cy.get("button[class=delete]").first().click();
      });
  });
  