const router = require('express').Router();
const _ = require('lodash');
const mongoose = require('mongoose');

const Event = require('./../models/Event');
const User = require('../models/User');

const authorize = require('./../middlewares/authorize');

const { sendMailEvent } = require('./../nodemailer/mail');

router.get('/', async (req, res) => {
	const events = await Event.find({ validated: true, endDate: { $gte: Date.now() } });
	const response = [];
	events.forEach(({ _id, category, title, description, localisation, price, startDate, endDate, pictures }) => {
		response.push({
			id: _id,
			category,
			title,
			description,
			localisation,
			price,
			startDate,
			endDate,
			pictures
		});
	});

	return res.status(200).send({ error: false, response });
});

router.get('/popular', async (req, res) => {
	const events = await Event.aggregate([
		{
			$match: {
				$expr: {
					$and: [{ $eq: ['$validated', true] }, { $gte: ['$endDate', Date.now()] }]
				}
			}
		},
		{
			$lookup: {
				from: 'users',
				localField: 'participants',
				foreignField: '_id',
				as: 'users'
			}
		},
		{ $unwind: '$participants' },
		{
			$group: {
				_id: '$_id',
				category: { $first: '$category' },
				title: { $first: '$title' },
				pictures: { $first: '$pictures' },
				description: { $first: '$description' },
				localisation: { $first: '$localisation' },
				price: { $first: '$price' },
				startDate: { $first: '$startDate' },
				endDate: { $first: '$endDate' },
				participants: { $push: '$participants' },
				users: { $first: '$users' },
				size: { $sum: 1 }
			}
		},
		{ $sort: { size: 1 } }
	]);

	const response = [];
	events.forEach(({ _id, category, title, description, localisation, price, startDate, endDate, pictures, users }) => {
		const user = [];
		users.forEach(({ _id, fName, lName, profilePicture }) => {
			user.push({ _id, fName, lName, profilePicture });
		});
		response.push({
			id: _id,
			category,
			title,
			description,
			localisation,
			price,
			startDate,
			endDate,
			pictures,
			users: user
		});
	});

	return res.status(200).send({ error: false, response });
});

router.post('/', authorize, async (req, res) => {
	const schema = require('../schemas/event');
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send({ error: true, message: error.details[0].message });
	}

	try {
		const event = new Event({
			category: req.body.category,
			title: req.body.title,
			pictures: req.body.pictures,
			description: req.body.description,
			localisation: req.body.localisation,
			price: req.body.price,
			startDate: req.body.startDate,
			endDate: req.body.endDate
		});

		const eventData = await event.save();

		await sendMailEvent(eventData);

		return res.status(201).send({
			error: false,
			event: _.pick(eventData, ['category', 'title', 'pictures', 'description', 'localisation', 'price', 'startDate', 'endDate'])
		});
	} catch (err) {
		console.log(err.message);
		return res.status(500).send({ error: true, message: err.message });
	}
});

router.get('/confirmed', async (req, res) => {
	const event = await Event.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.query.id) }, { validated: true }, { new: true });
	return res.status(201).send({ message: 'Publier avec succès', content: event });
});

router.get('/:id/participate', authorize, async (req, res) => {
	const event = await Event.findOneAndUpdate(
		{ _id: { $eq: req.params.id.toString() }, validated: true },
		{ $addToSet: { participants: req.user._id.toString() } },
		{ new: true }
	);

	if (!event) {
		return res.status(404).send({ error: true, message: 'Event not found' });
	}
	await User.findOneAndUpdate(req.user, { $addToSet: { 'history.event': event._id } });

	return res.status(201).send({ error: false, event });
});

module.exports = router;
