/*const Joi = require('joi');


module.exports = () => {
    Joi.objectId = require('joi-oid')(Joi);
}*/

const Joi = require('joi');
const joiObjectId = require('joi-oid');


module.exports = () => {
    Joi.objectId = joiObjectId;

}