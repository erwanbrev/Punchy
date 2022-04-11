const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
	{
		category: {
			type: String,
			enum: {
				values: ['Culturel', 'Divertissement', 'Festif', 'Sportif', 'Autre'],
				message: '(VALUE) is not allowed'
			},
			required: true
		},
		title: {
			type: String,
			required: true
		},
		pictures: [
			{
				type: String,
				required: true
			}
		],
		description: {
			type: String,
			required: true
		},
		localisation: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: false,
			default: 0,
			min: 0
		},
		startDate: {
			type: Date,
			required: true
		},
		endDate: {
			type: Date,
			required: false
		},
		participants: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'User',
				required: false
			}
		],
		validated: {
			type: Boolean,
			required: true,
			default: false
		}
	},
	{
		timestamps: true
	}
);

const Event = mongoose.model('Event', Schema);

module.exports = Event;
