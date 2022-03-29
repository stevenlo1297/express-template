import "reflect-metadata";
import { createConnection, getMongoRepository } from "typeorm";
import { User } from "./entity/User";

const connection = createConnection().catch((error) => console.log(error));
const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("./assets"));

app.get("/", (req, res) => {
  //res.send('Hello World!')
  return {};
});

app.get("/get-test", async (_req, res) => {
  try {
    console.log(_req.query);
    const test_string = "get-test request string";
    return res.send(test_string);
  } catch (e) {
    throw e;
  }
});

connection.then(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
