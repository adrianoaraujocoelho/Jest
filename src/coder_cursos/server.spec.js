const supertest = require("supertest");

const request = supertest("viacep.com.br/ws/01001000/json/");

describe("Server", () => {
  it("Deve resposnder na porta 3001", () => {
    //acessar a url http://www.google.com.br
    return request.get("/").then((res) => {
      console.log(res.body);
      expect(res.status).toBe(200);
      // verificar que a resposta foi 200
    });
  });
});
