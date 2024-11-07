import calculadoraDeCadena from "./CalculadoraCadenas.js";

describe("Calcular cadena", () => {
  it("Debe de devolver 0 con una cadena vacía", () => {
    expect(calculadoraDeCadena("")).toEqual(0);
  });
});