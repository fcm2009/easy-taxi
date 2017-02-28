const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const util = require('../../util').jwt
const models = require('../../models')
const bcrypt = require('bcrypt')


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => bcrypt.hash(password, 10)
        .then(hash => models.User.findOne({ email: email })
            .then(user => bcrypt.compare(password, user.password)
                            .then(result => done(null, result ? user : result))
                            .catch(done)
                        )
            .catch(done)
        )
        .catch(done)
))

passport.use(new JWTStrategy({
        secretOrKey: process.env.KEY,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
    }, (claim, done) => models.User.findById(claim.userId)
                            .then(user => done(null, user))
                            .catch(done)
))


module.exports = passport
