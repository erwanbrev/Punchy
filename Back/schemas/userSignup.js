const Joi = require('joi');

module.exports = Joi.object({
	fName: Joi.string().required(),
	lName: Joi.string().required(),
	email: Joi.string()
		.required()
		.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
	password: Joi.string().required().min(8),
	school: Joi.string().valid('IUT Saint Malo', 'Ecole infirmiere', 'Institut du design', 'IMTS', 'ENSM', 'BTS'),
	profilePicture: Joi.string(),
	phone: Joi.string()
		.pattern(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
		.required(),
	profil: Joi.string()
});
