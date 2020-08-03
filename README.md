## Desafio 

Criar um miniprojeto de automação de testes que execute o evento de long click em um componente web, e consiga validar se o tamanho em escala foi alterado para 225 x 225 pixels.
- Problema identificado: Durante a elaboração dos teste com o cypress, não foi possível identificar algum comando no cypress para acionar o evento  de long click  realizado pela biblioteca sugerida.
- Solução: Como o desafio é realizar a validação do tamanho do componente após um long click, foi realizado a implementação do evento sem a utilização da biblioteca hammer.js

## Executando o projeto

Para executar o projeto, é necessário um ambiente com node (npm) e ter instalado o Cypress na pasta do projeto. 

Com o ambiente preparado, o comando desse ser executado:

` $ npm run cypress:open`

Dessa forma o Cypress será iniciado. 
Para executar o teste clique no arquivo: long_click_spec.js  e os testes serão iniciados no navegador.

## Funcionamento dos Testes
No arquivo long_click_spec.js estão especificados os casos de testes. Foram utilizados os seguintes métodos do Cypress:
get()  - para obter o elemento
should () -  para realizar as *assertions*
trigger () - acionar um evento
Os testes estão organizados em 3 grupos ( *it* ), dentro de um *describe()*

Primeiro bloco valida o tamanho inicial do componente (90px 90px)
```javascript
cy.get('.square').should('have.css', 'width', '90px')
cy.get('.square').should('have.css', 'height', '90px')
```
No segundo bloco é acionado o long click 
```javascript
cy.get('.square').trigger('mousedown')
```
E por último é validado o tamanho do componente após o long click (225px 225px)
```javascript
cy.get('.square').should('have.css', 'width', '225px')
cy.get('.square').should('have.css', 'height', '225px')
```
Ao final os testes devem ser aceitos.
