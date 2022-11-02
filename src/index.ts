import express, { Express } from "express";

const app: Express = express();

// Middlewares
app.use(express.json());

/**
 *  GET -> get informations
 *  POST -> post informations
 *  PUT -> update informations
 *  PATCH ->  update one piece of specific information
 *  DELETE -> delete informations
 */

/**
 * Parameter Types:
 *
 * Route Params => Identify a resource (edit, delete and search);
 * Query Patams => Pagination / Filter;
 * Body Params => The objects to insertion and change (JSON);
 */

app.get("/courses", (req, res) => {
  const query = req.query;
  console.log(query);

  return res.json(["Course 1", "Course 2", "Course 3"]);
});

app.post("/courses", (req, res) => {
  const body = req.body;
  console.log(body);

  return res.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  return res.json(["Course 10", "Course 2", "Course 3"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Course 10", "Course 2", "Course 3"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Course 1", "Course 2"]);
});

app.listen(3333);
