const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
	{
		transport: {
			type: mongoose.Types.ObjectId,
			ref: 'Carpooling',
			required: true
		},
		user: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: true
		},
		note: {
			type: Number,
			required: true,
			min: 0,
			max: 5
		}
	},
	{
		timestamps: true
	}
);

const CarNote = mongoose.model('CarNote', Schema);

module.exports = CarNote;
