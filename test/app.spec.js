const request = require("supertest");
const app = require("../src/app");

describe("Server", () => {
  it("Deve responder na raiz", () => {
    return request(app)
      .get("/")
      .then((res) => {
        console.log(res.body);
        expect(res.status).toBe(200);
      });
  });
});
