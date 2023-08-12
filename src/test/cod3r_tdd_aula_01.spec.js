describe("Devo conhecer as principais assertivas do jest", () => {
  it("Trabalhando com numeros", () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
  });

  it("Trabalhando com objetos", () => {
    const aluno = { name: "Adriano", age: 37 };

    expect(aluno).toHaveProperty("name");
    expect(aluno).toHaveProperty("name", "Adriano");
    expect(aluno.name).toBe("Adriano");

    const aluno2 = { name: "Adriano", age: 37 };
    expect(aluno).toStrictEqual(aluno2);
    expect(aluno).toEqual(aluno2);
    expect(aluno).toBe(aluno);
  });
});
