const displayFoods = foods => {
    const mealsDiv = document.getElementById('meals');
    mealsDiv.innerHTML = ' ';
    foods.forEach(meal => {
        const mealInfo = `<div class="meal" id="${meal.idMeal}" onclick="mealDetail('${meal.idMeal}')">
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        </div>
        `
        mealsDiv.innerHTML += mealInfo;

    });

}

function calledBy() {
    const name = document.getElementById('searchItem').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(response => response.json())
        .then(data => {
            displayFoods(data.meals);
        });
}

const displayElement = meal => {
    const mealsDiv = document.getElementById('mealElement');
    mealsDiv.innerHTML = ' ';

    const mealInfo = `<div class="meal mx-auto">
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <ul type="square"><h4>Ingredients </h4>
        <li>${meal.strMeasure1} ${meal.strIngredient1}</li>
        <li>${meal.strMeasure2} ${meal.strIngredient2}</li>
        <li>${meal.strMeasure3} ${meal.strIngredient3}</li>
        <li>${meal.strMeasure4} ${meal.strIngredient4}</li>
        <li>${meal.strMeasure5} ${meal.strIngredient5}</li>
        <li>${meal.strMeasure6} ${meal.strIngredient6}</li>
        <li>${meal.strMeasure7} ${meal.strIngredient7}</li>
        </ul>
        </div>
        `
    mealsDiv.innerHTML += mealInfo;

}

const mealDetail = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
     
            displayElement(data.meals[0]);
        })
}