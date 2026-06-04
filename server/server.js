const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const data = require("./restruants.json");

app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/api/restaurants", (req, res) => {
  res.json(data);
});

// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});