import express, { Express, response } from "express";

const app: Express = express();

/**
 *  GET -> get informations
 *  POST -> post informations
 *  PUT -> update informations
 *  PATCH ->  update one piece of specific information
 *  DELETE -> delete informations
 *
 */

app.get("/courses", (req, res) => {
  return res.json(["Course 1", "Course 2", "Course 3"]);
});

app.post("/courses", (req, res) => {
  return res.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

app.put("/courses/:id", (req, res) => {
  return res.json(["Course 10", "Course 2", "Course 3"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Course 10", "Course 2", "Course 3"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Course 1", "Course 2"]);
});

app.listen(3333);
