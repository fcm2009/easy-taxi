const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const util = require('../../util').jwt
const models = require('../../models')


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
        models.User.findOne({
            email: email,
            password: password
        })
        .then(user => done(null, user))
        .catch(err => done(err))
    }
))

passport.use(new JWTStrategy({
        secretOrKey: process.env.KEY,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
    }, (userId, done) => models.User.findById(userId)
                            .then(user => done(null, user))
                            .catch(done)
))


module.exports = passport
