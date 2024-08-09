const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Access environment variables
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not defined");
}
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h'; // default to 1 hour if not specified

// Signup Route
router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, userName, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      userName,
      password: hashedPassword
    });

    await newUser.save();

    // Include user's name and username in the token
    const token = jwt.sign(
      { id: newUser._id, userName: newUser.userName, firstName: newUser.firstName, lastName: newUser.lastName },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION }
    );

    res.status(201).json({ token });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT with additional user information
    const token = jwt.sign(
      { id: user._id, userName: user.userName, firstName: user.firstName, lastName: user.lastName },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION || '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const updatedFields = { firstName, lastName, email };

  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    updatedFields.password = hashedPassword;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, updatedFields, { new: true }).select('-password');
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating profile:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

