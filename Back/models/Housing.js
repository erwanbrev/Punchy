const Schema = new mongoose.Schema(
	{
		localisation: {
			type: String,
			required: true
		},
		surface: {
			type: Number,
			required: true,
			min: 0
		},
		available: {
			type: Date,
			required: true
		},
		rent: {
			type: Number,
			min: 0,
			required: true
		},
		furnished: {
			type: Boolean,
			required: true
		},
		type: {
			type: String,
			enum: {
				values: ['Maison', 'Studio', 'T1bis', 'T2', 'T3', 'Autre'],
				message: '(VALUE) is not allowed'
			},
			required: true
		},
		bedroomNumber: {
			type: Number,
			required: true,
			min: 0
		},
		bathroomNumber: {
			type: Number,
			required: true,
			min: 0
		},
		garden: {
			type: Boolean,
			required: true
		},
		terrace: {
			type: Boolean,
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
		validated: {
			type: Boolean,
			required: true,
			default: false
		},
		owner: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Housing = mongoose.model('Housing', Schema);

module.exports = Housing;
