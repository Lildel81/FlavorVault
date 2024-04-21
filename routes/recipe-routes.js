const express = require('express');
const {getAllRecipes, getAddRecipeView, addRecipe, findRecipe, getResult} = require('../controllers/recipeController');


const router = express.Router();


router.get('/', getAllRecipes);
router.get('/addRecipe', getAddRecipeView);
router.post('/addCustomer', addRecipe);
router.get('/searchRecipe', getResult);







module.exports = {
    routes: router
}