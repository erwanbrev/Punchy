const Joi = require('joi');

module.exports = Joi.object({
	transport: Joi.string().required(),
	user: Joi.string().required(),
	note: Joi.number().min(0).max(5).required()
});
