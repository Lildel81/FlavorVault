const mongoose = require('mongoose');
const Joi = require('joi');

const recipeSchema = new mongoose.Schema({
    recipeName:{
        type: String,
        required: true,
    },

    ingredients:{
        type:[String],
        required: true
    },

    instructions:{
        type:[String],
        required: true
    }

});

const Recipe = mongoose.model('Recipe', recipeSchema);

const validateRecipe = (recipe) => {
    const schema = Joi.object({
        recipeName: Joi.string().required(),
        ingredients: Joi.string().required(),
        instructions: Joi.string().required()
    });
    
    const validationResult = schema.validate(recipe);
    if(validationResult.error){
        throw new Error(validationResult.error.details[0].message);
    }
    return validationResult.value;
}

module.exports.Recipe = Recipe;
module.exports.validate = validateRecipe;