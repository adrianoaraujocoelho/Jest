const express = require("express");
const app = express();
const port = 3002;

app.get("/", (response) => {
  response.status(200).send();
});

app.listen(port, () => {
  console, log("app listening na porta 3003");
});
