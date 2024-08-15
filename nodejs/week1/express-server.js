import express from "express";
import router from "./router.js";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/add/:a/:b", (req, res) => {
//   console.log(req);
//   const sum = Number(req.params.a) + Number(req.params.b);
//   res.send("The sum is " + sum.toString());
// });

app.get("/add", (req, res) => {
  // const { num1, num2 } = req.query;
  // console.log(num1, num2);
  let sum = 0;
  console.log(Object.values(req.query));
  const numbers = Object.values(req.query);
  console.log(numbers);
  numbers.forEach((element) => {
    sum += parseInt(element);
  });
  console.log(sum);
  res.status(200).send(sum.toString());
});

// app.use((req, res, next) => {
//   console.log(req.method, req.url, res.statusCode, new Date().toUTCString());
//   next();
// });

app.use("/hello", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
