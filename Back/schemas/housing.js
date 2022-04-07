const Joi = require('joi');

module.exports = Joi.object({
	localisation: Joi.string().required(),
	surface: Joi.number().required().min(0),
	available: Joi.date().required(),
	rent: Joi.number().required().min(0),
	furnished: Joi.boolean().required(),
	type: Joi.string().valid('Maison', 'Studio', 'T1bis', 'T2', 'T3', 'Autre').required(),
	bedroomNumber: Joi.number().required().min(0),
	bathroomNumber: Joi.number().required().min(0),
	garden: Joi.boolean().required(),
	terrace: Joi.boolean().required(),
	pictures: Joi.array().items(Joi.string()),
	description: Joi.string().required(),
	user: Joi.string().required()
});
