const express = require('express');
const {getAllRecipes, getAddRecipeView, addRecipe, getResult, getUpdateRecipeView, updateRecipe, getDeleteRecipeView, deleteRecipe, getMainPageView, getMealPlanView} = require('../controllers/recipeController');


const router = express.Router();


router.get('/', getMainPageView);
router.get('/recipelist', getAllRecipes);
router.get('/addRecipe', getAddRecipeView);
router.post('/addCustomer', addRecipe);
router.get('/searchRecipe', getResult);
router.get('/updateRecipe/:id', getUpdateRecipeView);
router.post('/updateRecipe/:id', updateRecipe);
router.get('/deleteRecipe/:id', getDeleteRecipeView);
router.post('/deleteRecipe/:id', deleteRecipe);
router.get('/mealPlan', getMealPlanView);







module.exports = {
    routes: router
}