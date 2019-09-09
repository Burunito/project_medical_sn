const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/user');

passport.serializeUser( async (user, done) => {
	done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});

passport.use(new LocalStrategy({
	usernameField: username,
	passwordField: password,
	passReqToCallback: true
}, async (req, username, email, password, done) => {
	const user = new User();
	user.email = email;
	user.password = password;
	await user.save();
	done(null, user);
}));