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
        Title: req.body.Title,
        Ingredients: req.body.Ingredients,
        Instructions: req.body.Instructions

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
  const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=2e5cc10d3d884d7d8d0536b8ad31d4ed&addRecipeInformation=true&number=1&query="+q, requestOptions);
  const result = await response.json();
  return result;
    
}catch (error) {
    console.error(error);
    return null;
}
}
const getResult = async (req, res) =>{
    const q = req.query.searchRecipe; 
    result = await findRecipe(q);
   
    str_res = JSON.stringify(result);
    
  
    try {
      const parsedData = JSON.parse(str_res);

      
      const recipeID = parsedData.results[0].id;
      const Image = parsedData.results[0].image;
      const URL = parsedData.results[0].sourceUrl;            
      const sendTitle = parsedData.results[0].title;

      
      
      
      
        const ings = await getIngs(res, recipeID); 
        
        const inst = await getIns(res, recipeID); 
        let i = 0;
        let ingredientsString = ings[1];
        let instructionString = inst[i];
        for(i = 1; i < ings.length; i++){
          ingredientsString = ingredientsString + "<br>" + ings[i];

        }
        for (i = 1; i < inst.length; i++){
          instructionString = instructionString + " " + inst[i];

        }
        console.log(ingredientsString);
        const dataToSend = {
          Image: parsedData.results[0].image,
          Title: parsedData.results[0].title,
          URL: parsedData.results[0].sourceUrl,
          Summary: parsedData.results[0].summary,
          Ingredients: ingredientsString,
          Instructions: instructionString
          }

          res.render('displayRecipe', { dataToSend: dataToSend, recipeData: { Title: sendTitle } });

       
       
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
              "/ingredientWidget.json?apiKey=2e5cc10d3d884d7d8d0536b8ad31d4ed&instructionsRequired=true&addRecipeInstructions=true",
            requestOptions
          );
          const ingredients = await response.json();
          
      
          return ingredients;
        } catch (error) {
          console.error(error);
          return null;
        }
      }

const getIngs = async (res, recipeID) => {
        console.log ('getIngs is running')
        res = await getIngredients(recipeID);
        
        str_res = JSON.stringify(res);
        let ings = [];
        let amounts = [];
        let unit = [];
        let ingreds = [];
        try {
          const parsedData = JSON.parse(str_res);
          i = 0;
          while (parsedData.ingredients[i + 1] != null) {
            ings[i] = parsedData.ingredients[i].name;
            amounts[i] = parsedData.ingredients[i].amount.us.value;
            unit[i] = parsedData.ingredients[i].amount.us.unit;
            i++;
          }
          ings[i] = parsedData.ingredients[i].name;
          amounts[i] = parsedData.ingredients[i].amount.us.value;
          unit[i] = parsedData.ingredients[i].amount.us.unit;
          

          for(i = 0; i < ings.length; i++){
            ingreds[i] = amounts[i] + " " + unit[i] + " " + ings[i];
          }
          console.log(ingreds);
          return ingreds;
          
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
}

    


const getInstructions = async (id) => {
   
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/" +
          id +
          "/analyzedInstructions?apiKey=2e5cc10d3d884d7d8d0536b8ad31d4ed",
        requestOptions
      );
      const instruct = await response.json();
      
      return instruct;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

const getIns = async (res, recipeID) => {
    
    res = await getInstructions(recipeID);
    
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
      return inst;
      
      
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
    //console.log(inst);
}

module.exports = {
    getAllRecipes,
    getAddRecipeView,
    addRecipe,
    findRecipe,
    getResult
    
    
    
    
    
}

