const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { createToken } = require('../utils/jwtFunctions');

// Signup controller
const signup = async (req, res) => {
  try {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const createdUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      userName: req.body.userName,
      password: encryptedPassword,
    });

    if (!createdUser) {
      throw new Error('User not created successfully.');
    }

    const { password, ...userWithoutPassword } = createdUser.toJSON();
    const token = createToken(userWithoutPassword);

    res.status(201).json({ message: 'User created successfully.', token });
  } catch (error) {
    console.log({ error });
    res.status(500).json(error);
  }
};

// Login controller
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    const { password, ...userWithoutPassword } = user.toJSON();
    const token = createToken(userWithoutPassword);

    res.json({ message: 'Login successful.', token });
  } catch (error) {
    console.log({ error });
    res.status(500).json(error);
  }
};

module.exports = { signup, login };

