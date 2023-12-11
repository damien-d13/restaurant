const restaurantsController = require("../controllers/restaurant.controller.js"); // Modifié l'import du contrôleur

module.exports = (app) => {


  // Create a new Restaurant
  app.post("/restaurants", restaurantsController.create); 

  // Retrieve all restaurants
  app.get("/restaurants", restaurantsController.findAll); 

  // Retrieve a single Restaurant with id
  app.get("/restaurants/:id", restaurantsController.findOne); 

  // Update a Restaurant with id
  app.put("/restaurants/:id", restaurantsController.update); 

  // Delete a Restaurant with id
  app.delete("/restaurants/:id", restaurantsController.delete); 

  // Delete all restaurants
  app.delete("/restaurants", restaurantsController.deleteAll); 
};
