Feature: Incluir produto
    O intuito desse teste é fazer login no site.
    Scenario Outline: Incluir produto

    Given que eu visito a página inicial
    When clicar no botão de lupa no lado superior direito e escrever <produto>
    And e clico no produto
    And clico no botão de ADD TO CART
    Then verá o produto <produto> no carrinho

    Examples:
    | produto |
    | Tablet  |