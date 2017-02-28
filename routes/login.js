const router = require('express').Router()
const models = require('../models')
const passport = require('passport')
const util = require('../util').jwt


router.post('/login', passport.authenticate('local', { session: false }), (req, res, next) => {
    req.response = util.sign({userId: req.user.id, iat: Date.now()}, process.env.KEY, {})
    return next()
})


module.exports = router
