const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { createToken } = require('../utils/jwtFunctions');

// Signup Route
router.post('/api/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, userName, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      userName,
      password: encryptedPassword
    });

    const createdUser = await newUser.save();
    const token = createToken({ id: createdUser._id, email: createdUser.email });

    res.status(201).json({ message: 'User created successfully.', token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
});


