const router = require('express').Router()
const models = require('../models')
const passport = require('passport')
const bcrypt = require('bcrypt')


router.param('userId', (req, res, next, userId) => {
    req.response = models.User.findById(userId)
    return next()
})

router.get('/user/:userId', (req, res, next) => {
    return next()
})

router.post('/user', (req, res, next) => {
    if(req.body.password) {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                req.body.password = hash
                req.response = models.User.create(req.body)
                return next()
            })
            .catch(next)
    } else {
        req.response = models.User.create(req.body)
        return next()
    }
})

router.put('/user/:userId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    if(req.body.password) {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                req.body.password = hash
                req.response = models.User.update(req.body)
                return next()
            })
            .catch(next)
    } else {
        req.response = models.User.update(req.body)
        return next()
    }
})

router.delete('/user/:userId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    req.response.remove()
    return next()
})


module.exports = router
