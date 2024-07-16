const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", //terrible
  password: "pass",
  database: "injection",
  multipleStatements: true, //terrible
  ssl: false, //terrible
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.get("/", (req, res) => {
  res.send("Welcome to the SQL Injection Demo");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/vulnerable-users", (req, res) => {
  const username = req.query.username;
  const query = `SELECT * FROM users WHERE username = '${username}'`; // vulnerable concatenation of a string, terrible
  //const query = "SELECT * FROM users WHERE username = '" + username + "'"; // even worse, please don't
  console.log(query);
  connection.query(query, (error, results) => {
    if (error) {
      //throw error
      console.error("Database query error:", error); // Log detailed error on the server
      return res.status(500).json(`An error occurred: ${error.message}`); // Send detailed error message to client, you should NOT do this
    }
    res.json(results);
  });
});

app.get("/users", (req, res) => {
  const username = req.query.username;
  const query = `SELECT * FROM users WHERE username = ?`;

  console.log("Executing query:", query, "with value", username);

  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error("Database query error:", error); // Log detailed error on the server
      return res
        .status(500)
        .json({ error: `An error occurred: ${error.message}` }); // Send detailed error message to client, you should not
    }
    console.log(results);
    return res.json(results);
  });
});
