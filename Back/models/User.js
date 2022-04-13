const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const HistorySchema = mongoose.Schema(
	{
		carpooling: [
			{
				type: mongoose.Schema.Types.ObjectId,
				required: false
			}
		],
		event: [
			{
				type: mongoose.Schema.Types.ObjectId,
				required: false
			}
		],
		housing: [
			{
				type: mongoose.Schema.Types.ObjectId,
				required: false
			}
		]
	},
	{ _id: false }
);

const Schema = new mongoose.Schema(
	{
		fName: {
			type: String,
			required: true
		},
		lName: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			validate: {
				validator: v => {
					return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
				},
				message: props => `${props.value} is not a valid email!`
			}
		},
		paypalEmail: {
			type: String,
			required: false,
			validate: {
				validator: v => {
					return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
				},
				message: props => `${props.value} is not a valid email!`
			}
		},
		password: {
			type: String,
			minlength: 8,
			required: true
		},
		school: {
			type: String,
			enum: {
				values: ['IUT Saint Malo', 'Ecole infirmiere', 'Institut du design', 'IMTS', 'ENSM', 'BTS'],
				message: '(VALUE) is not allowed'
			},
			required: false
		},
		profilePicture: {
			type: String,
			required: false
		},
		role: {
			type: String,
			required: true,
			default: 'USER',
			enum: {
				values: ['USER', 'ADMIN'],
				message: '(VALUE) is not allowed'
			}
		},
		friends: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'User',
				required: false
			}
		],
		notationCar: [
			{
				type: Number,
				min: 0,
				max: 5,
				required: false
			}
		],
		phone: {
			type: String,
			required: true
		},
		block: {
			type: Boolean,
			default: false,
			required: true
		},
		history: {
			type: HistorySchema,
			required: true
		}
	},
	{
		timestamps: true
	}
);

Schema.methods.generateAuthToken = function () {
	return jwt.sign({ _id: this._id, block: this.block }, process.env.PRIVATE_KEY, { expiresIn: '7d' });
};

const User = mongoose.model('User', Schema);

module.exports = User;
