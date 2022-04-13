const router = require('express').Router();
const _ = require('lodash');

const Carpooling = require('./../models/Carpooling');
const User = require('./../models/User');
const CarNote = require('./../models/CarNote');

const authorize = require('./../middlewares/authorize');

router.get('/', async (req, res) => {
	const carpoolings = await Carpooling.find({ endTime: { $gte: Date.now() } }).populate('driver');
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
				driver: {
					fName: driver.fName,
					notation: driver.notationCar,
					profilePicture: driver.profilePicture
				},
				event,
				smoker,
				carType,
				carColor
			});
		}
	);

	console.log(response);
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
					'_id',
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

router.get('/:id', async (req, res) => {
	const carpooling = await Carpooling.findById(req.params.id).populate('driver');
	if (!carpooling) {
		return res.status(404).send('Carpooling not found');
	}

	const response = {
		id: carpooling._id,
		startLocalisation: carpooling.startLocalisation,
		endLocalisation: carpooling.endLocalisation,
		startTime: carpooling.startTime,
		endTime: carpooling.endTime,
		repeat: carpooling.repeat,
		peopleNumber: carpooling.peopleNumber,
		price: carpooling.price,
		driver: {
			fName: carpooling.driver.fName,
			notation: carpooling.driver.notationCar,
			profilePicture: carpooling.driver.profilePicture
		},
		event: carpooling.event,
		smoker: carpooling.smoker,
		carType: carpooling.carType,
		carColor: carpooling.carColor
	};

	return res.status(200).send(response);
});

router.get('/:id/participate', authorize, async (req, res) => {
	const carpooling = await Carpooling.findOneAndUpdate(
		{ _id: { $eq: req.params.id.toString() }, driver: { $ne: req.user._id.toString() }, $expr: { $lt: [{ $size: '$participants' }, '$peopleNumber'] } },
		{ $addToSet: { participants: req.user._id.toString() } },
		{ new: true }
	);

	if (!carpooling) {
		return res.status(404).send('Carpooling not found, already full or you are the driver');
	}
	await User.findOneAndUpdate(req.user, { $addToSet: { 'history.carpooling': carpooling._id } });

	return res.status(201).send(carpooling);
});

router.get('/:id/:note', authorize, async (req, res) => {
	const carpooling = await Carpooling.findOne({ _id: { $eq: req.params.id }, endTime: { $gt: Date.now() } });

	if (!carpooling) {
		return res.status(404).send('Carpooling not found or not finished');
	}

	if (!carpooling.participants.includes(req.user._id.toString())) {
		return res.status(403).send('You are not participating in this carpooling');
	}

	const carNote = await CarNote.findOne({ carpooling: carpooling._id, user: req.user._id.toString() });

	if (carNote) {
		return res.status(403).send('You already have a note for this carpooling');
	}

	const note = new CarNote({
		transport: carpooling._id,
		user: req.user._id,
		note: req.params.note
	});

	const noteData = await note.save();

	return res.status(201).send(_.pick(noteData, ['note', 'transport', 'user']));
});

module.exports = router;
