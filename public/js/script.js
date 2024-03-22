window.onload = pageReady;

function pageReady() {
  // JavaScript code for handling dropdown change event

  let data = document.getElementById("alcoholSelect");
  data.addEventListener("change", () => {
    var selectedAlcohol = data.value;
    window.location.href = "/cocktail/" + selectedAlcohol;
  });
}
