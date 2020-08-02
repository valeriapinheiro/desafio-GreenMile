  /// <reference types="cypress"/>

describe('long click', () => {
    before(() => {
      cy.visit('./src/index.html')
    })

    it('O tamanho do componente deve ser 90px 90px', () =>{
      //tamanho antes do click
      cy.get('.square').should('have.css', 'width', '90px')
      cy.get('.square').should('have.css', 'height', '90px')
    });
     
    it('Realizar um long click  no componente e expandir seu tamanho', () => {
      cy.get('.square').trigger('mousedown')

    })

    it('O tamanho do componente deve ser 225px 225px após o long click', () =>{
     //tamanho após o click
      cy.get('.square').should('have.css', 'width', '225px')
      cy.get('.square').should('have.css', 'height', '225px')
    });
     
})

  