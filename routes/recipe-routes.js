const express = require('express');
const {getAllRecipes, getAddRecipeView, addRecipe, getResult, getUpdateRecipeView, updateRecipe, getDeleteRecipeView, deleteRecipe} = require('../controllers/recipeController');


const router = express.Router();


router.get('/', getAllRecipes);
router.get('/addRecipe', getAddRecipeView);
router.post('/addCustomer', addRecipe);
router.get('/searchRecipe', getResult);
router.get('/updateRecipe/:id', getUpdateRecipeView);
router.post('/updateRecipe/:id', updateRecipe);
router.get('/deleteRecipe/:id', getDeleteRecipeView);
router.post('/deleteRecipe/:id', deleteRecipe);







module.exports = {
    routes: router
}