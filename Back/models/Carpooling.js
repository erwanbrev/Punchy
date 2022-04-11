const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
	{
		startLocalisation: {
			type: String,
			required: true
		},
		endLocalisation: {
			type: String,
			required: true
		},
		startTime: {
			type: Date,
			required: true
		},
		endTime: {
			type: Date,
			required: true
		},
		repeat: {
			type: String,
			required: true,
			default: 'None',
			enum: {
				values: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche', 'None'],
				message: '(VALUE) is not allowed'
			}
		},
		peopleNumber: {
			type: Number,
			required: true,
			min: 1
		},
		price: {
			type: Number,
			required: true,
			min: 0
		},
		driver: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: true
		},
		participants: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'User',
				required: false
			}
		],
		event: {
			type: mongoose.Types.ObjectId,
			ref: 'Event',
			required: false
		},
		smoker: {
			type: Boolean,
			required: true,
			default: false
		},
		carType: {
			type: String,
			required: true
		},
		carColor: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Carpooling = mongoose.model('Carpooling', Schema);

module.exports = Carpooling;
