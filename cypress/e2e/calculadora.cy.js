describe('Calculadora de Cadenas', () => {
    beforeEach(() => {
      cy.visit('/'); // cambiado de index.html a /
    });
  
    it('debería retornar 0 para una cadena vacía', () => {
      cy.get('#cadena').clear();
      cy.get('#calcular-form').submit();
      cy.get('#resultado-div').should('contain', 'Suma de numeros de la cadena: 0');
    });

    it('debería retornar el mismo número para una entrada de un solo número', () => {
        cy.get('#cadena').clear().type('4');
        cy.get('#calcular-form').submit();
        cy.get('#resultado-div').should('contain', 'Suma de numeros de la cadena: 4');
    });

    it('debería sumar dos números separados por coma', () => {
    cy.get('#cadena').clear().type('4,4');
    cy.get('#calcular-form').submit();
    cy.get('#resultado-div').should('contain', 'Suma de numeros de la cadena: 8');
    });
  });