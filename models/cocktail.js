// Cocktail model
const config = require("../config/config");
const axios = require("axios");

// Function to fetch display cocktail
async function getAllCocktail() {
  try {
    let reqUrl = config.cocktailAPI.all + "a";
    const response = await axios.get(reqUrl);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching cocktail:", error);
    return null;
  }
}

// Function to fetch alcohol type
async function getAllAlcoholType() {
  try {
    let reqUrl = config.cocktailAPI.listAlcoholicFilters;
    const response = await axios.get(reqUrl);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching alcohol type:", error);
    return null;
  }
}

// Function to fetch cocktails by alcohol type
async function getCocktailsByAlcoholType(alcoholType) {
  try {
    let reqUrl = config.cocktailAPI.filterByAlcoholic + alcoholType;
    const response = await axios.get(reqUrl);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching cocktails by alcohol type:", error);
    return null;
  }
}

module.exports = {
  getAllCocktail,
  getAllAlcoholType,
  getCocktailsByAlcoholType,
};
