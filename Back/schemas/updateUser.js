const Joi = require('joi');

module.exports = Joi.object({
	paypalEmail: Joi.string()
		.required()
		.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
});
