const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User'); // Import your User model
const bcrypt = require("bcryptjs");

// Configure the local strategy
passport.use(new LocalStrategy(
  {
    usernameField: 'email', // Define the username field as email
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'User not found.' });
      }
      const isAuthenticated = await bcrypt.compare(password,user.password);
      if (!isAuthenticated) {
        return done(null, false, { message: 'Email or password not found.' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;