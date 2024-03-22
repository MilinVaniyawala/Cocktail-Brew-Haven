// Cocktail API From: https://www.thecocktaildb.com/api.php
// .env file contains variable for cocktail
// COCKTAIL_API=www.thecocktaildb.com/api/json/v1/1

// Configuration file
module.exports = {
  cocktailAPI: {
    /*Used*/ all: process.env.COCKTAIL_API + "search.php?f=",
    lookupById: process.env.COCKTAIL_API + "lookup.php?i=",
    searchByName: process.env.COCKTAIL_API + "search.php?s=",
    filterByAlcoholic: process.env.COCKTAIL_API + "filter.php?a=",
    filterByCategory: process.env.COCKTAIL_API + "filter.php?c=",
    filterByGlass: process.env.COCKTAIL_API + "filter.php?g=",
    listCategories: process.env.COCKTAIL_API + "list.php?c=list",
    listGlasses: process.env.COCKTAIL_API + "list.php?g=list",
    listIngredients: process.env.COCKTAIL_API + "list.php?i=list",
    /*Used*/ listAlcoholicFilters: process.env.COCKTAIL_API + "list.php?a=list",
  },
};
