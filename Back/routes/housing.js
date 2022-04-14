const router = require('express').Router();
const _ = require('lodash');
const mongoose = require('mongoose');

const Housing = require('./../models/Housing');

const authorize = require('./../middlewares/authorize');

const { sendMailHousing } = require('./../nodemailer/mail');

router.get('/', async (req, res) => {
	const housings = await Housing.find({ validated: true });
	const response = [];
	housings.forEach(({ description, localisation, surface, type, available, rent, furnished, bedroomNumber, bathroomNumber, garden, terrace }) => {
		response.push({
			description,
			localisation,
			surface,
			type,
			available,
			rent,
			furnished,
			bedroomNumber,
			bathroomNumber,
			garden,
			terrace
		});
	});

	return res.status(200).send({ error: false, response });
});

router.post('/', authorize, async (req, res) => {
	const schema = require('../schemas/housing');
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send({ error: false, message: error.details[0].message });
	}

	try {
		const housing = new Housing({
			localisation: req.body.localisation,
			surface: req.body.surface,
			available: req.body.available,
			rent: req.body.rent,
			furnished: req.body.furnished,
			type: req.body.type,
			bedroomNumber: req.body.bedroomNumber,
			bathroomNumber: req.body.bathroomNumber,
			garden: req.body.garden,
			terrace: req.body.terrace,
			pictures: req.body.pictures,
			description: req.body.description,
			owner: req.user._id
		});

		const housingData = await housing.save();

		await sendMailHousing(housingData);

		return res.status(201).send({
			error: false,
			housing: _.pick(housingData, [
				'localisation',
				'surface',
				'available',
				'rent',
				'furnished',
				'type',
				'bedroomNumber',
				'bathroomNumber',
				'garden',
				'terrace',
				'pictures',
				'description'
			])
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).send({ error: true, message: err.message });
	}
});

router.get('/confirmed', async (req, res) => {
	const housing = await Housing.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.query.id) }, { validated: true });
	return res.status(201).send({ message: 'Publier avec succès', content: housing });
});

module.exports = router;
