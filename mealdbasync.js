const searchFoods = async () => {
    const searchFild = document.getElementById("search-input");
    const searchText = searchFild.value;
    console.log(searchText);
    // clear data 
    searchFild.value = '';
    // empty searchText 
    if (searchText == '') {
        const emptySearch = document.getElementById("emptySearch");
        emptySearch.textContent = '';
        const div = document.createElement('div');
        div.classList.add("card");
        div.innerHTML = `
        <div class="card-body">
            <p>please wrtite something ..Then search</p>
        </div>
        `;
        emptySearch.appendChild(div);

    }
    else {
        // load data 
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals);

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displaySearchResult(data.meals))
    }

}

const displaySearchResult = (meals) => {
    // console.log(meals);
    const searchContainer = document.getElementById("col");

    // clear previous result 
    searchContainer.textContent = '';

    // no result found code 
    if (meals.length == 0) {

        const noResultFound = document.getElementById("noResultFound");

        noResultFound.textContent = '';

        const div = document.createElement('div');
        div.classList.add("card");
        div.innerHTML = `
        <div class="card-body">
            <p> No result found</p>
        </div>
        
        `;
        noResultFound.appendChild(div);
    }

    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p>${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>

        `;
        searchContainer.appendChild(div);
    })

}

const loadMealDetail = async mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetail(data.meals[0]);
    }
    catch (error) {
        console.log(error);
    }

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = (meal) => {
    // console.log(meal);

    const mealDetail = document.getElementById("meals-details");
    mealDetail.textContent = '';

    const div = document.createElement('div');
    div.classList.add("card");

    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;

    mealDetail.appendChild(div);




}