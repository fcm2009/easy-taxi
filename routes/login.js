const router = require('express').Router()
const models = require('../models')
const passport = require('passport')
const util = require('../util').jwt
const jwt = require('jsonwebtoken')


router.post('/login', passport.authenticate('local', { session: false }), (req, res, next) => {
    req.response = util.sign(req.user.id, process.env.KEY, {})
    return next()
})


module.exports = router
