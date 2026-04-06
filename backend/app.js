const express = require("express");
const app = express();

app.use(express.json());

let users = [{ id: 1, name: "Alice" }];

// Health check
app.get("/", (req, res) => {
  res.send("DevOps Microservice Running 🚀");
});

// Get users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add user
app.post("/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(user);
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
