const Joi = require('joi');

module.exports = Joi.object({
	email: Joi.string()
		.required()
		.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
	password: Joi.string().required().min(8)
});
