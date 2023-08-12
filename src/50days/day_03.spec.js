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

  it("Your task is to write a code which will return a tuple of all names in the list that have only small letters", () => {
    //Arrange (Preparar o teste), variaveis, mocks,spies
    names = ["kerry", "dickson", "John", "Mary", "carol", "Rose", "adam"];

    resultExpected = ["adam", "carol", "dickson", "kerry"];

    //Act (Rodar o teste)
    resultReceived = info.lowerCaseNames(names);

    //Assert(Verificar as asserções)
    expect(resultReceived).toEqual(resultExpected);
  });
});
