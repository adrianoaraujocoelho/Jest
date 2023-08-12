const source = require("./day_01.js");

//suite of test

describe("Source Suit Tests", () => {
  //scenarios
  it("should return the square root of the number ", () => {
    //Arrange (Preparar o teste) Mock
    const num = 10;
    const resultExpected = Math.sqrt(num);

    //ACT (Rodar o teste)
    const resultReceived = source.divideOrSquare(num);

    //Assert (Verificar as asserções)
    expect(resultReceived).toBe(resultExpected);
  });

  it("should return the rest the operacion number ", () => {
    //Arrange (Preparar o teste) Mock
    const num = 9;
    const resultExpected = num % 5;

    //ACT (Rodar o teste)
    const resultReceived = source.divideOrSquare(num);

    //Assert (Verificar as asserções)
    expect(resultReceived).toBe(resultExpected);
  });

  it("should return the o long Value ", () => {
    //Arrange (Preparar o teste) Mock
    const frutas = { fruta: "maçã", cor: "verde" };
    const frut = frutas.fruta;
    const cor = frutas.cor;
    const longValue = frut.length > cor.length ? frut : cor;

    //ACT (Rodar o teste)
    const resultReceived = source.longValue(frutas);

    //Assert (Verificar as asserções)
    expect(resultReceived).toBe(longValue);
  });
});
