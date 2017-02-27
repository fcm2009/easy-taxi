const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy


passport.use(new LocalStrategy(
    (email, password, done) => {
        return done(null, true)
    }
))
