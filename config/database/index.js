const mongoose = require('mongoose')
const bluebird = require('bluebird')

mongoose.Promise = bluebird
mongoose.connect('mongodb://localhost/test')


module.exports = mongoose
