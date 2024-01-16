const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ data: "Hello world" });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
