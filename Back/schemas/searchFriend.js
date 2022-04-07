const Joi = require('joi');

module.exports = Joi.object({
	fName: Joi.string(),
	lName: Joi.string(),
	school: Joi.string()
});
