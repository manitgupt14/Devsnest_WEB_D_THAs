const User = require('../models/user');
const {SECRET_KEY} = require('../config/index')
const {Strategy,ExtractJwt} = require('passport-jwt')

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
};

module.exports = passport => {
    passport.use(
        new Strategy(opts, async (payload, done)=>{
            await User.findById(payload.user_id).then(user => {
                if(user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => {
                return done(null, false);
            })
        })
    )
}