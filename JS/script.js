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
        /*<div class="media position-relative">
          <img src="..." class="mr-3" alt="...">
          <div class="media-body">
            <h5 class="mt-0">Media with stretched link</h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <a href="#" class="stretched-link">Go somewhere</a>
          </div>
        </div>*/
        //  var calDate = new Date(calJson.holidays[i].date);
        //if (parseInt(calDate.getMonth()) == parseInt(selectMonth) - 1) {
        //  dateObj[calJson.holidays[i].date] = [];
        //}
    }
}