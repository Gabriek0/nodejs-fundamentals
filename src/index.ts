import express, { Express, response } from "express";

const app: Express = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.listen(3333);
