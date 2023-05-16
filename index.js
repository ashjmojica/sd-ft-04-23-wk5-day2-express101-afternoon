const express = require("express");
const app = express();
app.use(express.json());


// Create an empty array to store restaurant data
const restaurants = [{ name: "Uchi", style: "Asian", price: "$$$$" }];

// Routes go here
// Route to add a new restaurant
app.post("/restaurants", (req, res) => {
  const newRestaurant = { name: "McDonalds", style: "American", price: "$" };
  restaurants.push(newRestaurant);
  res.send(newRestaurant);
});

// Route to update an existing restaurant
app.put('/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;
  const updatedRestaurant = req.body;
  
  const restaurant = restaurants.find(restaurant => restaurant.id === restaurantId);

  if (!restaurant) {
    res.status(404).json({ message: "Restaurant not found" });
  } else {
    // Update the restaurant
    Object.assign(restaurant, updatedRestaurant);
    res.json({ message: "Restaurant updated successfully" });
  }
});

// Route to delete a restaurant
app.post('/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;

  const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === restaurantId);

  if (restaurantIndex === -1) {
    res.status(404).json({ message: "Restaurant not found" });
  } else {
    // Remove the restaurant from the array
    restaurants.splice(restaurantIndex, 1);
    res.json({ message: "Restaurant deleted successfully" });
  }
});


// Route to get all restaurants
app.get('/restaurants', (req, res) => {
  res.json(restaurants);
});


// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
