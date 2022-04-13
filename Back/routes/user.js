const router = require('express').Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
const axios = require('axios');
const sharp = require('sharp');

const User = require('./../models/User');

const authorize = require('./../middlewares/authorize');

// Create an account
router.post('/signup', async (req, res) => {
	const schema = require('../schemas/userSignup');
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	try {
		const users = await User.find({ email: req.body.email });
		if (users.length > 0) {
			return res.status(409).send('Email already exists');
		}

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(req.body.password, salt);

		if (!req.body.profil) {
			const {
				data: { drinks }
			} = await axios('https://www.thecocktaildb.com/api/json/v1/1/random.php');

			const { data } = await axios(drinks[0].strDrinkThumb, {
				responseType: 'arraybuffer'
			});

			const bufferImage = await sharp(data).webp({ quality: 20, alphaQuality: 1 }).resize(200, 200).toBuffer();
			req.body.profilePicture = 'data:image/png;base64, ' + bufferImage.toString('base64');
		} else {
			const buffer = Buffer.from(req.body.profil.split(',')[1], 'base64');
			const bufferImage = await sharp(buffer).webp({ quality: 20, alphaQuality: 1 }).resize(200, 200).toBuffer();
			req.body.profilePicture = 'data:image/png;base64, ' + bufferImage.toString('base64');
		}

		const user = new User({
			fName: req.body.fName,
			lName: req.body.lName,
			email: req.body.email,
			school: req.body.school,
			profilePicture: req.body.profilePicture,
			role: req.body.role,
			friends: req.body.friends,
			notationCar: req.body.notationCar,
			phone: req.body.phone,
			password: hash,
			history: {}
		});

		const userData = await user.save();
		const token = userData.generateAuthToken();
		return res.status(201).send(token);
	} catch (err) {
		console.log(err.message);
		return res.status(500).send(err.message);
	}
});

router.get('/search', authorize, async (req, res) => {
	const schema = require('../schemas/searchFriend');
	const { error } = schema.validate(req.query);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	const users = (await User.find(req.query)).filter(user => user._id.toString() !== req.user._id);
	const response = [];

	const usersWithNote = [];
	users.forEach(user => {
		const obj = JSON.parse(JSON.stringify(user));
		obj.note = user.notationCar.reduce((prev, current) => prev + current, 0) / user.notationCar.length;
		usersWithNote.push(obj);
	});

	const usersSort = usersWithNote.sort((a, b) => b.note - a.note);

	usersSort.forEach(({ fName, lName, school, profilePicture, _id, notationCar, note }) => {
		response.push({ fName, lName, school, profilePicture, _id: _id.toString(), notationCar, note });
	});

	return res.status(200).send(response);
});

router.get('/addFriend', authorize, async (req, res) => {
	const schema = require('../schemas/addFriend');
	const { error } = schema.validate(req.query);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	const user = await User.findOneAndUpdate(req.user, { $addToSet: { friends: req.query.id } }, { new: true });
	return res.status(201).send(user);
});

router.get('/me', authorize, async (req, res) => {
	try {
		const user = await User.findOne(req.user);
		if (!user) {
			return res.status(404).send('No user found');
		}

		return res.status(200).send(_.pick(user, ['fName', 'lName', 'school', 'friends', 'notationCar', 'phone', 'profilePicture', 'history']));
	} catch (err) {
		console.log(err.message);
		return res.status(500).send(err.message);
	}
});

module.exports = router;
