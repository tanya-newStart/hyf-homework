import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

app.get("/add/:a/:b", (req, res) => {
  console.log(req);
  const sum = Number(req.params.a) + Number(req.params.b);
  res.send("The sum is " + sum.toString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
