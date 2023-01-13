// Teste de unidade ou usecase
function liquidificadorSucoDeManga(fruta, acucar) {
  if (fruta === "manga" && acucar === "acucarcristal") {
    return { suco: "suco de manga" };
  }

  return "verificar ingredientes";
}

//suite of test
describe("Product Suit Tests", () => {
  //scenarios

  it("simple of with create one test", () => {
    //Arrange (Preparar o teste), variaveis, Mocks, spies
    const fruta = "manga";
    const acucar = "acucarcristal";
    const resultExpected = { suco: "suco de manga" };

    //act (Rodar o teste)
    const resultReceived = liquidificadorSucoDeManga(fruta, acucar);

    //expect(resultReceived).toBe(resultExpected);
    expect(resultReceived).toEqual(resultExpected);
  });
});
