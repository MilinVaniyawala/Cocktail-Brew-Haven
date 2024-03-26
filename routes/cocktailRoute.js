// Routes for cocktails
const express = require("express");
const router = express.Router();
const cocktailModel = require("../models/cocktail");

// Route to display all cocktail
router.get("/", async (request, response) => {
  try {
    const cocktailData = await cocktailModel.getAllCocktail();
    const alcoholTypeData = await cocktailModel.getAllAlcoholType();
    response.render("cocktail/index", { cocktailData, alcoholTypeData });
  } catch (error) {
    response.status(500).render("error", { message: "Internal server error" });
  }
});

// Route to display all cocktail by alcohol type
router.get("/:alcochol", async (request, response) => {
  try {
    const alcocholType = request.params;
    const cocktailData = await cocktailModel.getCocktailsByAlcoholType(
      alcocholType.alcochol
    );
    const alcoholTypeData = await cocktailModel.getAllAlcoholType();
    response.render("cocktail/index", { cocktailData, alcoholTypeData });
  } catch (error) {
    response.status(500).render("error", { message: "Internal server error" });
  }
});

// Route to display cocktail by ID
router.get("/cocktaildetail/:id", async (request, response) => {
  try {
    const cocktailID = request.params;
    const cocktailDetail = await cocktailModel.getCocktailById(cocktailID.id);
    response.render("cocktail/cocktaildetail", { cocktailDetail });
  } catch (error) {
    response.status(500).render("error", { message: "Internal server error" });
  }
});

// Route to display all stores where ingredient available
router.get("/stores/:ingredient", async (request, response) => {
  try {
    const ingredientName = request.params;
    const nearByStores = await cocktailModel.getNearByStore(
      ingredientName.ingredient
    );
    response.render("cocktail/stores", { nearByStores, ingredientName });
  } catch (error) {
    response.status(500).render("error", { message: "Internal server error" });
  }
});

module.exports = router;
