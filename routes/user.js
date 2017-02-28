const router = require('express').Router()
const models = require('../models')
const passport = require('passport')


router.param('userId', (req, res, next, userId) => {
    req.response = models.User.findById(userId)
    return next()
})

router.get('/user/:userId', (req, res, next) => {
    return next()
})

router.post('/user', (req, res, next) => {
    req.response = models.User.create(req.body)
    return next()
})

router.put('/user/:userId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    req.response.update(req.body)
    return next()
})

router.delete('/user/:userId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    req.response.remove()
    return next()
})


module.exports = router
