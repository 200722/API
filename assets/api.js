const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");

searchBtn.addEventListener("click", getMealList);

// Deze functie word async angeroepen bij een zoek opdracht
// async: zorgt dat de data verschijnt zonder te hoeven wachten van de andere functie
// await: Geeft pas response als de Fetch klaar is.
async function getMealList() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i"
    );
    const data = await response.json();
  } catch (e) {
    console.log("There was a problem of  fetching data ");
  }
}
// Deze functie aanroep toent alle producten zonder zoek opdracht

getMealList();

function getMealList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  // var x = document.getElementById("myImg");
  // await x;

  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
                      <div class = "meal-item" data-id = "${meal.idMeal}">
                          <div class = "meal-img">
                              <img src = "${meal.strMealThumb}" alt = "food">
                          </div>
                          <div class = "meal-name">
                              <h3>${meal.strMeal}</h3>
                            
                          </div>
                      </div>
                  `;
        });
      } else {
        html = "Sorry, we didn't find any meal!";
      }
      mealList.innerHTML = html;
    });
}
