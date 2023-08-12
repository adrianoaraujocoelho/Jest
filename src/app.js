const app = require("express")();

app.get("/", (request, response) => {
  response.status(200).send({ server: "Servidor rodando!!" });
});

module.exports = app;
