const Waterline = require('waterline')
const sailsMongoAdapter = require('sails-mongo')
const user = require('./user')


const waterline = new Waterline()
const config = {
	adapters: {
		'mongo': sailsMongoAdapter
	},
	connections: {
		default: {
			adapter: 'mongo'
		}
	}
}


waterline.loadCollection(user)


module.exports = { waterline: waterline, config: config }
