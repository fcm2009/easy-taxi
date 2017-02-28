const Schema = require('mongoose').Schema


const userSchema = Schema({
	status: {
		type: String,
		enum: ['pending', 'approved'],
		default: 'pending'
	},
	firstName: String,
	lastName: String,
	language: String,
	address: {
		city: String,
		country: String
	},
	phone: {
		type: {
			countryCode: String,
			number: String
		},
		unique: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

userSchema.path('phone').validate(phone => phone.countryCode != null && phone.number != null)


module.exports = userSchema
