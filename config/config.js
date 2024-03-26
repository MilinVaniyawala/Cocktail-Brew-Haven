// Cocktail API From: https://www.thecocktaildb.com/api.php
// .env file contains variable for cocktail
// COCKTAIL_API=www.thecocktaildb.com/api/json/v1/1

// Configuration file
module.exports = {
  cocktailAPI: {
    all: process.env.COCKTAIL_API + "search.php?f=",
    lookupById: process.env.COCKTAIL_API + "lookup.php?i=",
    filterByAlcoholic: process.env.COCKTAIL_API + "filter.php?a=",
    listAlcoholicFilters: process.env.COCKTAIL_API + "list.php?a=list",
  },
  mapsAPI: {
    findPlaceNearBy: process.env.GOOGLE_API + "textsearch/json?",
  },
};
