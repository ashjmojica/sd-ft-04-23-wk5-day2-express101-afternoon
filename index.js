const express = require("express");
const app = express();
app.use(express.json());

// Create an empty array to store restaurant data
const restaurants = [{ name: "Uchi", style: "Asian", price: "$$$$" }];

// Routes go here

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
