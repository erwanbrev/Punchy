const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('./../models/User');

// Login
router.post('/signin', async (req, res) => {
	const schema = require('../schemas/userSignin');
	const { error } = schema.validate(req.body);
	if (error) {
		return res.status(400).send({ error: true, message: error.details[0].message });
	}

	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(404).send({ error: true, message: 'No account found' });
		}

		if (!(await bcrypt.compare(req.body.password, user.password))) {
			return res.status(401).send({ error: true, message: 'Wrong password' });
		}

		const token = user.generateAuthToken();
		return res.status(200).send({ error: false, token });
	} catch (err) {
		console.log(err.message);
		return res.status(500).send({ error: true, message: err.message });
	}
});

module.exports = router;
