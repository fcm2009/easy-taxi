const jwt = require('jsonwebtoken')
const bluebird = require('bluebird')

const key = process.env.KEY


module.exports = {
    jwt: {
        sign: bluebird.promisify(jwt.sign),
        verify: bluebird.promisify(jwt.verify)
    }
}
