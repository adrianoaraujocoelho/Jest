const info = require("./day_03");

//suite of tests

describe("Day 3 register check", () => {
  it("a function called register_check that checks how many students are in school", () => {
    //Arrange (Preparar o teste), variaveis, mocks,spies
    register = {
      Michael: "yes",
      John: "no",
      Peter: "yes",
      Mary: "yes",
    };

    resultExpected = 3;

    //Act (Rodar o teste)
    resultReceived = info.register_check(register);

    //Assert(Verificar as asserções)
    expect(resultReceived).toBe(resultExpected);
    expect(resultReceived).toEqual(3);
  });
});
