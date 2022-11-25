const fun = require("./day_02.js");

//suite of test

describe(" Suit Tests exercise day 2", () => {
  //scenarios
  it("should return convertAdd ", () => {
    //Arrange (Preparar o teste) Mock
    const arr = ["1", "3", "5", "100"];
    novo_x = [];
    var i = 0;
    var start = 0;
    arr.forEach((element) => {
      novo_x.push(parseInt(element));
      resultExpected = start += novo_x[i];
      i++;
    });

    //ACT (Rodar o teste)
    const resultReceived = fun.convertAdd(arr);
    //Assert (Verificar as asserções)
    expect(resultReceived).toBe(resultExpected);
  });
});
