const Waterline = require('waterline')


module.exports = Waterline.Collection.extend({
	identity: 'user',
	connection: 'default',
	attributes: {
        status: {
            type: 'string',
            enum: ['pending', 'approved'],
            defaultTo: 'pending'
        },
		firstName: 'string',
		lastName: 'string',
        language: 'string',
        adress: {
            city: 'string',
            country: 'string'
        },
        phone: {
            countryCode: 'string',
            number: 'string',
            unique: 'true'
        },
        email: {
            type: 'string',
            unique: 'true'
        },
        password: 'string'
	}
})
