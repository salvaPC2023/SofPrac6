describe('Calculadora de Cadenas', () => {
    beforeEach(() => {
      cy.visit('/'); // cambiado de index.html a /
    });
  
    it('debería retornar 0 para una cadena vacía', () => {
      cy.get('#cadena').clear();
      cy.get('#calcular-form').submit();
      cy.get('#resultado-div').should('contain', 'Suma de numeros de la cadena: 0');
    });
  });