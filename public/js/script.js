window.onload = pageReady;

function pageReady() {
  let data = document.getElementById("alcoholSelect");
  const currentPageUrl = window.location.href; // get current page url
  const index = currentPageUrl.indexOf("cocktail/"); // find index from the url

  const dataAfterCocktail = decodeURIComponent(
    currentPageUrl.substring(index + "cocktail/".length)
  ); // get string without any speical character

  if (data !== null) {
    // If url have alcohol type then set value to dropdown
    if (!dataAfterCocktail.includes("cocktail")) {
      document.getElementById("alcoholSelect").value = dataAfterCocktail;
    }
    // JavaScript code for handling dropdown change event
    data.addEventListener("change", () => {
      var selectedAlcohol = data.value;
      window.location.href = "/cocktail/" + selectedAlcohol;
    });
  }
}
