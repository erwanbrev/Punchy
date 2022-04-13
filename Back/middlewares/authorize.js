const jwt = require('jsonwebtoken');

const authorize = (req, res, next) => {
	const bearerHeader = req.headers.authorization;
	if (bearerHeader) {
		req.token = bearerHeader.split(' ')[1];
		try {
			req.user = jwt.verify(req.token, process.env.PRIVATE_KEY);
			if (req.user.block) {
				return res.status(403).send('Your account is blocked');
			}
		} catch (e) {
			return res.sendStatus(401);
		}
		next();
	} else {
		return res.sendStatus(403);
	}
};

module.exports = authorize;
