import calculadoraDeCadena from "./CalculadoraCadenas.js";

describe("Calcular cadena", () => {
  it("Debe de devolver 0 con una cadena vacía", () => {
    expect(calculadoraDeCadena("")).toEqual(0);
  });
  it("Debe devolver el número cuando la cadena contiene un solo número", () => {
    expect(calculadoraDeCadena("4")).toEqual(4);
  });
});