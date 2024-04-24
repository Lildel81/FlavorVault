const mongoose = require('mongoose');
const Joi = require('joi');

const recipeSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true
    },

    Ingredients:{
        type:[String],
        required: true
    },

    Instructions:{
        type:[String],
        required: true
    },
    Image:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }


});

const Recipe = mongoose.model('Recipe', recipeSchema);

const validateRecipe = (recipe) => {
    const schema = Joi.object({
        Title: Joi.string().required(),
        Ingredients: Joi.string().required(),
        Instructions: Joi.string().required(),
        Image: Joi.string().required(),
        url: Joi.string().required()
    });
    
    const validationResult = schema.validate(recipe);
    if(validationResult.error){
        throw new Error(validationResult.error.details[0].message);
    }
    return validationResult.value;
}

module.exports.Recipe = Recipe;
module.exports.validate = validateRecipe;