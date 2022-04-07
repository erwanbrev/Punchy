const Joi = require('joi');

module.exports = Joi.object({
	category: Joi.string().valid('Culturel', 'Divertissement', 'Festif', 'Sportif', 'Autre').required(),
	title: Joi.string().required(),
	pictures: Joi.array().items(Joi.string()).required(),
	description: Joi.string().required(),
	localisation: Joi.string().required(),
	price: Joi.number().default(0).min(0),
	startDate: Joi.date().required(),
	endDate: Joi.date().greater(Joi.ref('startDate'))
});
