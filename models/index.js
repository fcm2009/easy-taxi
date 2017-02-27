const fs = require('fs')
const mongoose = require('mongoose')
const user = require('./user')

module.exports = {
    User: mongoose.model('User', user)
}
