const router = require('express').Router();
const _ = require('lodash');

const Carpooling = require('./../models/Carpooling');

const authorize = require('./../middlewares/authorize');

router.get('/', async (req, res) => {
	const carpoolings = await Carpooling.find();
	const response = [];
	carpoolings.forEach(
		({ startLocalisation, endLocalisation, date, startTime, endTime, repeat, peopleNumber, price, driver, event, smoker, carType, carColor }) => {
			response.push({
				startLocalisation,
				endLocalisation,
				date,
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
			date: req.body.date,
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
					'date',
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

module.exports = router;
