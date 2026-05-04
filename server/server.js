const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ Import JSON data
const data = require("./restruants.json");

// Middleware (optional for future POST requests)
app.use(express.json());


// ✅ Root Route (for testing server)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


// ✅ Get all restaurants
app.get("/api/restaurants", (req, res) => {
  res.json(data);
});


// ✅ Get single restaurant by ID (extra feature)
app.get("/api/restaurants/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const restaurant = data.restaurants.find(r => r.id === id);

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found" });
  }

  res.json(restaurant);
});


// ✅ Filter by cuisine (extra feature)
app.get("/api/cuisine/:type", (req, res) => {
  const type = req.params.type.toLowerCase();

  const filtered = data.restaurants.filter(r =>
    r.cuisines.some(c => c.toLowerCase().includes(type))
  );

  res.json(filtered);
});


// ✅ Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});