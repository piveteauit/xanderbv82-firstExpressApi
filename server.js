const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;
app.get("/", function (req, res) {
  res.send("Hello World");
});

const users = [];

// CORS
app.use(cors());

// PARSING
app.use(express.json()); // Parsing application/json

app.post("/profile", function (req, res) {
  // req = http request, res = http response
  const body = req.body;

  users.push(body);

  res.json(users);
});

app.listen(PORT, () => {
  console.log("Example app listening on port %s!", PORT);
});
