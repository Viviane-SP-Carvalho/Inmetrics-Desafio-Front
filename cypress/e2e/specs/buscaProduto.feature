Feature: Buscar um produto
    O intuito desse teste é fazer uma busca de um produto no site
    Scenario Outline: Buscar por produto existente
       Given que eu visito a página inicial
       When clicar no botão de lupa no lado superior direito e escrever <produto>
       Then verá uma lista de produtos top resultados com o nome <produto>

        Examples:
            | produto   |
            | Tablet    |
            | Laptop    |
            | Mouse     |