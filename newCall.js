let res;
// the first call, q is the query, n is the number of recipe's you want returned.
//Currently, the number of recipe's is fixed in the call to 1. Instructions to change that are below.
async function makeApiCall(q, n) {
  let info;

  //document.getElementById('output').innerText = ("works")
  //This is left in for testing purposes to make sure the
  // function is getting called uncomment the line.

  //Don't change this part
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    //This is the call to the API. Currently there is a static 1 in the number of queries that will be displayed. To change that modify
    //The code to this:
   

    const response = await fetch( //the apiKey portion is apiKey=e7ec260d55134d24ae88a19b2ae182a2. Leave the apiKey= in there and change the key number.
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=e7ec260d55134d24ae88a19b2ae182a2&number=1&query=" +
        q,
      requestOptions
    );
    const result = await response.json();
    //console.log(result);
    //this is left in for testing purposes. Uncomment to see the results in the console.

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function makeApiCall(q, n) {
  //document.getElementById('output').innerText = ("works")
  //This is left in for testing purposes to make sure the
  // function is getting called uncomment the line.

  //
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    //This is the call to the API. Currently there is a static 1 in the number of queries that will be displayed. To change that modify
    //The code to this:
    //const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=e7ec260d55134d24ae88a19b2ae182a2&number=${n}&query="+q, requestOptions)

    const response = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=e7ec260d55134d24ae88a19b2ae182a2&number=1&query=" +
        q,
      requestOptions
    );
    const result = await response.json();
    //console.log(result);
    //this is left in for testing purposes. Uncomment to see the results in the console.

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

//Function to call the upper fuction and get the results.
async function getResult() {
  let q = document.getElementById("search").value; // gets the value of the search bar. change 'search' to whatever the ID is for your search bar.
  res = await makeApiCall(q, 1);
  //console.log(res); // prints the results on the console. left in for testing. Uncomment to use.
  str_res = JSON.stringify(res);
  //console.log(str_res);//prints the conversion to string to the console. Left in for testing, uncomment to use.

  try {
    const parsedData = JSON.parse(str_res);
    const imageUrl = parsedData.results[0].image;
    const recipeName = parsedData.results[0].title;
    const recipeID = parsedData.results[0].id;
    console.log(recipeID);
    //console.log("check point");
    //console.log(recipeName);
    //console.log(imageUrl); // prints the URL of the image to the console. left in for testing, uncomment to use.

    document.getElementById("recipeImage").src = imageUrl; //displays the image to 'recipeImage' in the HTML.
    // to use this in your HTML the syntax looks like this. <img id="recipeImage"></img>
    //Change "recipeImage" to whatever ID you are using.

    document.getElementById("recipeName").innerText = recipeName; //replace "recipeName" with whatever element will display the name

    getIngs(recipeID);
    getIns(recipeID);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}

async function getIngredients(id, n) {
  //Don't change this part
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/" +
        id +
        "/ingredientWidget.json?apiKey=e7ec260d55134d24ae88a19b2ae182a2&instructionsRequired=true&addRecipeInstructions=true",
      requestOptions
    );
    const ingredients = await response.json();
    //console.log(ingredients);
    //this is left in for testing purposes. Uncomment to see the results in the console.

    return ingredients;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getIngs(recipeID) {
  let q = document.getElementById("search").value; // gets the value of the search bar. change 'search' to whatever the ID is for your search bar.
  res = await getIngredients(recipeID);
  //console.log(res); // prints the results on the console. left in for testing. Uncomment to use.
  str_res = JSON.stringify(res);
  let ings = [];

  try {
    const parsedData = JSON.parse(str_res);
    i = 0;
    while (parsedData.ingredients[i + 1] != null) {
      ings[i] = parsedData.ingredients[i].name;

      i++;
    }
    ings[i] = parsedData.ingredients[i].name;
    console.log(ings);
    //console.log("check point");
    //console.log(recipeName);
    //console.log(imageUrl); // prints the URL of the image to the console. left in for testing, uncomment to use.
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  let ul = document.createElement("ul");
  ings.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  document.getElementById("ingredients").appendChild(ul); //replace ingredients with the element that will be displaying the ingredients.
}

async function getInstructions(id, n) {
  //Don't change this part
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/" +
        id +
        "/analyzedInstructions?apiKey=e7ec260d55134d24ae88a19b2ae182a2",
      requestOptions
    );
    const instruct = await response.json();
    //console.log(instruct);
    //this is left in for testing purposes. Uncomment to see the results in the console.
    //console.log(result);
    return instruct;
  } catch (error) {
    console.error(error);
    return null;
  }
}
async function getIns(recipeID) {
  //let q = document.getElementById('search').value; // gets the value of the search bar. change 'search' to whatever the ID is for your search bar.
  res = await getInstructions(recipeID);
  //console.log(res); // prints the results on the console. left in for testing. Uncomment to use.
  str_res = JSON.stringify(res);
  let inst = [];

  try {
    const parsedData = JSON.parse(str_res);
    inst[0] = parsedData[0].steps[0];
    console.log(inst);
    let i = 0;
    while (parsedData[0].steps[i+1] != null){
      inst[i] = parsedData[0].steps[i].step;
      i++;
    }
    inst[i] = parsedData[0].steps[i].step;
    
    //document.getElementById("inst").innerHTML = inst;
    
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  console.log(inst);
  let ul = document.createElement("ul");
    inst.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    document.getElementById("inst").appendChild(ul); //replace "inst" which the element that will be displaying the instructions.
}
