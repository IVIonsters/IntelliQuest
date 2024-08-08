// routes/api/auth.js

const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const { createToken } = require("../../utils/jwtFunctions");

// Signup endpoint
router.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, userName, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, 10);

        const createdUser = await User.create({
            firstName,
            lastName,
            email,
            userName,
            password: encryptedPassword
        });

        if (!createdUser) {
            throw new Error("User not created successfully.");
        }

        const { password: _, ...userWithoutPassword } = createdUser.toJSON();
        const token = createToken(userWithoutPassword);

        res.status(201).json({ message: "User created successfully.", token });
    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
