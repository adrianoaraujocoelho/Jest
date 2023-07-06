const { only_floats, word_index } = require("./day_04.js");

describe("only_floats", () => {
  test("retorna 0 quando nenhum número float é passado", () => {
    expect(only_floats(1, 2)).toBe(0);
    expect(only_floats(3, 4)).toBe(0);
    expect(only_floats(5, 6)).toBe(0);
  });

  test("retorna a quantidade correta de números float passados", () => {
    expect(only_floats(1.5, 2)).toBe(1);
    expect(only_floats(3, 4.2)).toBe(1);
    expect(only_floats(5.5, 6.7)).toBe(2);
  });
});

describe("word_index", () => {
  test("retorna 0 quando todas as palavras têm o mesmo comprimento", () => {
    const words = ["banana", "apple", "orange"];
    expect(word_index(words)).toBe(0);
  });

  test("retorna o índice correto da palavra com maior comprimento", () => {
    const words = ["cat", "elephant", "dog", "lion"];
    expect(word_index(words)).toBe(1);
  });
});
