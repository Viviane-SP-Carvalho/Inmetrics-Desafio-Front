When('e clico no produto', () => {
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click();
  })
  
  When('clico no botão de ADD TO CART', () => {
    cy.get('.fixedBtn > .roboto-medium').click();
  })
  
  Then('verá o produto {} no carrinho', (produto) => {
    cy.get('#shoppingCartLink').click();
    cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').then((elemento) => {  
      expect(elemento.text()).to.include(produto.toUpperCase());
    });
  })