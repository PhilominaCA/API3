//function to get recipies from API
async function getRecipies(category) {
    document.getElementById("recipDisp").innerHTML = "";
    try {
        //to fetch the dish list based on category
        const apiData = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const recipeList = await apiData.json();

        //recipie header
        var categDisp = document.createElement("h2");
        document.getElementById("recipDisp").appendChild(categDisp);
        categDisp.innerHTML = category + " Recipies";


        //to fetch the recipe of dish
        for (let i = 0; i < (recipeList.meals).length; i++) {
            const recipiedetail = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeList.meals[i].strMeal}`);
            const recipeDetJson = await recipiedetail.json();
            //each recipe display div
            var divClass = document.createElement("div");
            divClass.id = "recipDiv";
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

            //limited to 6 recipies if there are more.
            if (i == 5)
                break;
        }
    }
    //exception handle 
    catch (ex) {
        console.log(ex);
        document.getElementById("recipDisp").innerHTML = `<h3>Sorry! Can't fetch the recipies right now..</h3>`;
    }
}
