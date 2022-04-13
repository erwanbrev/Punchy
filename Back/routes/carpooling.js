const router = require('express').Router();
const _ = require('lodash');

const Carpooling = require('./../models/Carpooling');
const User = require('./../models/User');

const authorize = require('./../middlewares/authorize');

router.get('/', async (req, res) => {
	const carpoolings = await Carpooling.find({ endTime: { $gte: Date.now() } });
	const response = [];
	carpoolings.forEach(
		({ _id, startLocalisation, endLocalisation, startTime, endTime, repeat, peopleNumber, price, driver, event, smoker, carType, carColor }) => {
			response.push({
				id: _id,
				startLocalisation,
				endLocalisation,
				startTime,
				endTime,
				repeat,
				peopleNumber,
				price,
				driver,
				event,
				smoker,
				carType,
				carColor
			});
		}
	);

	return res.status(200).send(response);
});
router.post('/', authorize, async (req, res) => {
	const schema = require('../schemas/carpooling');
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	try {
		const carpooling = new Carpooling({
			startLocalisation: req.body.startLocalisation,
			endLocalisation: req.body.endLocalisation,
			startTime: req.body.startTime,
			endTime: req.body.endTime,
			repeat: req.body.repeat,
			peopleNumber: req.body.peopleNumber,
			price: req.body.price,
			driver: req.user._id.toString(),
			event: req.body.event,
			smoker: req.body.smoker,
			carType: req.body.carType,
			carColor: req.body.carColor
		});

		const carpoolingData = await carpooling.save();

		return res
			.status(201)
			.send(
				_.pick(carpoolingData, [
					'startLocalisation',
					'endLocalisation',
					'startTime',
					'endTime',
					'repeat',
					'peopleNumber',
					'price',
					'driver',
					'event',
					'smoker',
					'carType',
					'carColor'
				])
			);
	} catch (err) {
		console.log(err.message);
		return res.status(500).send(err.message);
	}
});

router.get('/:id/participate', authorize, async (req, res) => {
	const carpooling = await Carpooling.findOneAndUpdate(
		{ id: { $eq: req.params.id }, driver: { $ne: req.user._id.toString() }, $expr: { $lt: [{ $size: '$participants' }, '$peopleNumber'] } },
		{ $addToSet: { participants: req.user._id.toString() } },
		{ new: true }
	);

	if (!carpooling) {
		return res.status(404).send('Carpooling not found, already full or you are the driver');
	}
	await User.findOneAndUpdate(req.user, { $addToSet: { 'history.carpooling': carpooling._id } });

	return res.status(201).send(carpooling);
});

module.exports = router;
