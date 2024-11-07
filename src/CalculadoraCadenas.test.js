import calculadoraDeCadena from "./CalculadoraCadenas.js";

describe("Calcular cadena", () => {
  it("Debe de devolver 0 con una cadena vacía", () => {
    expect(calculadoraDeCadena("")).toEqual(0);
  });
  it("Debe devolver el número cuando la cadena contiene un solo número", () => {
    expect(calculadoraDeCadena("4")).toEqual(4);
  });
  it("Debe devolver la suma de dos números separados por coma", () => {
    expect(calculadoraDeCadena("4,4")).toEqual(8);
  });
  it("Debe devolver la suma de varios números", () => {
    expect(calculadoraDeCadena("4,3,2,1")).toEqual(10);
  });
  it("Debe soportar delimitadores personalizados", () => {
    expect(calculadoraDeCadena("8-12-4")).toEqual(24);
  });
});