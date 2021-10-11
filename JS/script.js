async function getRecipies(category) {
    document.getElementById("recipDisp").innerHTML = "";

    const apiData = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const recipeList = await apiData.json();
    var categDisp = document.createElement("h2");
    document.getElementById("recipDisp").appendChild(categDisp);
    categDisp.innerHTML = category + " Recipies";

    for (let i = 0; i < (recipeList.meals).length; i++) {
        const recipiedetail = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeList.meals[i].strMeal}`);
        const recipeDetJson = await recipiedetail.json();
        console.log(recipeDetJson);
        var divClass = document.createElement("div");
        divClass.class = "media position-relative";
        divClass.style.display = "flex";
        var imagee = document.createElement("img");
        imagee.class = "mr-3";
        imagee.id = "recipeImgs"
        divClass.appendChild(imagee);
        imagee.src = recipeDetJson.meals[0].strMealThumb;
        var divRecip = document.createElement("div");
        divRecip.class = "media-body";
        var headRecip = document.createElement("h5");
        headRecip.class = "mt-0";
        headRecip.innerHTML = recipeDetJson.meals[0].strMeal;
        divRecip.appendChild(headRecip);
        var recipPara = document.createElement("p");
        recipPara.innerHTML = recipeDetJson.meals[0].strInstructions;
        divRecip.appendChild(recipPara);
        divClass.appendChild(divRecip);
        document.getElementById("recipDisp").appendChild(divClass);
        if (i == 5)
            break;
    }
}