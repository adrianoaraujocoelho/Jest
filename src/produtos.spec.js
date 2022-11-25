const product = require("./protudos.js");

//suite of test
describe("Product Suit Tests", () => {
  //scenarios
  it("should be sum correct", () => {
    // Arrange (Preparar o teste) Mock
    const baseTaxMock = 19.9;
    const complementTax = 30;
    const resultExpected = 49.9;

    //Act (Rodar o teste)
    const resultReceived = product.calcTaxs(complementTax, baseTaxMock);

    //Assert (Verificar as asserções)
    expect(resultReceived).toBe(resultExpected);
  });
  //scenarios
  it("should be min tax", () => {
    // Arrange (Preparar o teste) Mock
    const baseTaxMock = 19.9;
    const complementTax = -20;
    const resultExpected = 0;

    //Act (Rodar o teste)
    const resultReceived = product.calcTaxs(complementTax, baseTaxMock);

    //Assert (Verificar as asserções)
    expect(resultReceived).toBeGreaterThan(resultExpected);
  });
});
