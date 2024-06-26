"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _IngredientSearch200ResponseResultsInner = _interopRequireDefault(require("./IngredientSearch200ResponseResultsInner"));
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
 * The IngredientSearch200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/IngredientSearch200Response
 * @version 1.1
 */
var IngredientSearch200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IngredientSearch200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/IngredientSearch200Response
   * @param results {Array.<module:com.spoonacular.client/com.spoonacular.client.model/IngredientSearch200ResponseResultsInner>} 
   * @param offset {Number} 
   * @param number {Number} 
   * @param totalResults {Number} 
   */
  function IngredientSearch200Response(results, offset, number, totalResults) {
    _classCallCheck(this, IngredientSearch200Response);
    IngredientSearch200Response.initialize(this, results, offset, number, totalResults);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(IngredientSearch200Response, null, [{
    key: "initialize",
    value: function initialize(obj, results, offset, number, totalResults) {
      obj['results'] = results;
      obj['offset'] = offset;
      obj['number'] = number;
      obj['totalResults'] = totalResults;
    }

    /**
     * Constructs a <code>IngredientSearch200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/IngredientSearch200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/IngredientSearch200Response} The populated <code>IngredientSearch200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IngredientSearch200Response();
        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_IngredientSearch200ResponseResultsInner["default"]]);
        }
        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }
        if (data.hasOwnProperty('totalResults')) {
          obj['totalResults'] = _ApiClient["default"].convertToType(data['totalResults'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return IngredientSearch200Response;
}();
/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/IngredientSearch200ResponseResultsInner>} results
 */
IngredientSearch200Response.prototype['results'] = undefined;

/**
 * @member {Number} offset
 */
IngredientSearch200Response.prototype['offset'] = undefined;

/**
 * @member {Number} number
 */
IngredientSearch200Response.prototype['number'] = undefined;

/**
 * @member {Number} totalResults
 */
IngredientSearch200Response.prototype['totalResults'] = undefined;
var _default = exports["default"] = IngredientSearch200Response;