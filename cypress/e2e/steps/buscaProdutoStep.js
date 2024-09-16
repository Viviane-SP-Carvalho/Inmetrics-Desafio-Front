Given('que eu visito a página inicial', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
});

When('clicar no botão de lupa no lado superior direito e escrever {}',(produto) => {
    cy.get('#mobileSearch > .roboto-medium', { timeout: 10000 }).should('be.visible').click();
    cy.get('#mobileSearch > .roboto-medium').type(produto);
    cy.get('#mobileSearch > .roboto-medium').type('{enter}'); 
});

Then('verá uma lista de produtos top resultados com o nome {}', (produto) =>{
    cy.get(':nth-child(1) > :nth-child(4) > .productName').then((elemento) => {
        expect(elemento.text()).to.include(produto);
    });
})