const Joi = require('joi');

module.exports = Joi.object({
	fName: Joi.string(),
	lName: Joi.string(),
	school: Joi.string().valid('IUT Saint Malo', 'Ecole infirmiere', 'Institut du design', 'IMTS', 'ENSM', 'BTS')
});
