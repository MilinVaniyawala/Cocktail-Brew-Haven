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

// Route to display all cocktail
router.get("/:alcochol", async (request, response) => {
  const alcocholType = request.params;
  console.log(alcocholType);
  try {
  } catch (error) {
    response.status(500).render("error", { message: "Internal server error" });
  }
  // try {
  //   const cocktailData = await cocktailModel.getAllCocktail();
  //   const alcoholTypeData = await cocktailModel.getAllAlcoholType();
  //   response.render("cocktail/index", { cocktailData, alcoholTypeData });
  // } catch (error) {
  //   response.status(500).render("error", { message: "Internal server error" });
  // }
});

module.exports = router;
