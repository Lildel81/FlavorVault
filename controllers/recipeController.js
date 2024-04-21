const {Recipe, validate} = require('../models/recipe');
const express = require('express');






const app = express();


const getAllRecipes = async (req, res, next) => {
    const list = await Recipe.find().exec();

    res.render('recipelist', {
        recipes: list
    });
}

const getAddRecipeView = (req, res, next) => {
    res.render('addRecipe');
}

const addRecipe = async (req, res, next) => {
    const {error} = validate(req.body);
    if(error) return res.status(422).send(error.details[0].message);
    let recipe = await new Recipe({
        recipeName: req.body.recipeName,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions

    })
    recipe = await recipe.save();
    res.redirect('/');
}




let fetch;

import('node-fetch')
    .then((module) =>{
        fetch = module.default;

    });
    

const  findRecipe = async (q) => {

const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  try{
  const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=e7ec260d55134d24ae88a19b2ae182a2&number=1&query="+q, requestOptions);
  const result = await response.json();
  return result;
    
}catch (error) {
    console.error(error);
    return null;
}
}
const getResult = async (req, res) =>{
    const q = req.query.searchRecipe; // gets the value of the search bar. change 'search' to whatever the ID is for your search bar.
    result = await findRecipe(q, 1);
    //console.log(res); // prints the results on the console. left in for testing. Uncomment to use.
    str_res = JSON.stringify(result);
    //console.log(str_res);//prints the conversion to string to the console. Left in for testing, uncomment to use.
  
    try {
      const parsedData = JSON.parse(str_res);
      const recipeID = parsedData.results[0].id;
      const dataToSend = {
      Image: parsedData.results[0].image,
      Title: parsedData.results[0].title,
      }
      const sendTitle = parsedData.results[0].title;
      console.log(dataToSend.Title);
      
      res.render('displayRecipe', { dataToSend: dataToSend, recipeData: { Title: sendTitle } });
      getIngs(recipeID);
      getIns(recipeID);
    } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }

const getIngredients = async (id) => {
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

const getIngs = async (recipeID) => {
        console.log ('getIngs is running')
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
}

const getInstructions = async (id, n) => {
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

const getIns = async (recipeID) => {
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
}

module.exports = {
    getAllRecipes,
    getAddRecipeView,
    addRecipe,
    findRecipe,
    getResult
    
    
    
    
    
}

/*fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=e7ec260d55134d24ae88a19b2ae182a2&number=1&query="+q, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));*/