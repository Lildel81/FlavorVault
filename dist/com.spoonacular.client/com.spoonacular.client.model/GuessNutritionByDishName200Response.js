"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GuessNutritionByDishName200ResponseCalories = _interopRequireDefault(require("./GuessNutritionByDishName200ResponseCalories"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The GuessNutritionByDishName200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200Response
 * @version 1.1
 */
var GuessNutritionByDishName200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GuessNutritionByDishName200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200Response
   * @param calories {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} 
   * @param carbs {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} 
   * @param fat {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} 
   * @param protein {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} 
   * @param recipesUsed {Number} 
   */
  function GuessNutritionByDishName200Response(calories, carbs, fat, protein, recipesUsed) {
    _classCallCheck(this, GuessNutritionByDishName200Response);
    GuessNutritionByDishName200Response.initialize(this, calories, carbs, fat, protein, recipesUsed);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GuessNutritionByDishName200Response, null, [{
    key: "initialize",
    value: function initialize(obj, calories, carbs, fat, protein, recipesUsed) {
      obj['calories'] = calories;
      obj['carbs'] = carbs;
      obj['fat'] = fat;
      obj['protein'] = protein;
      obj['recipesUsed'] = recipesUsed;
    }

    /**
     * Constructs a <code>GuessNutritionByDishName200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200Response} The populated <code>GuessNutritionByDishName200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GuessNutritionByDishName200Response();
        if (data.hasOwnProperty('calories')) {
          obj['calories'] = _GuessNutritionByDishName200ResponseCalories["default"].constructFromObject(data['calories']);
        }
        if (data.hasOwnProperty('carbs')) {
          obj['carbs'] = _GuessNutritionByDishName200ResponseCalories["default"].constructFromObject(data['carbs']);
        }
        if (data.hasOwnProperty('fat')) {
          obj['fat'] = _GuessNutritionByDishName200ResponseCalories["default"].constructFromObject(data['fat']);
        }
        if (data.hasOwnProperty('protein')) {
          obj['protein'] = _GuessNutritionByDishName200ResponseCalories["default"].constructFromObject(data['protein']);
        }
        if (data.hasOwnProperty('recipesUsed')) {
          obj['recipesUsed'] = _ApiClient["default"].convertToType(data['recipesUsed'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GuessNutritionByDishName200Response;
}();
/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} calories
 */
GuessNutritionByDishName200Response.prototype['calories'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} carbs
 */
GuessNutritionByDishName200Response.prototype['carbs'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} fat
 */
GuessNutritionByDishName200Response.prototype['fat'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GuessNutritionByDishName200ResponseCalories} protein
 */
GuessNutritionByDishName200Response.prototype['protein'] = undefined;

/**
 * @member {Number} recipesUsed
 */
GuessNutritionByDishName200Response.prototype['recipesUsed'] = undefined;
var _default = exports["default"] = GuessNutritionByDishName200Response;