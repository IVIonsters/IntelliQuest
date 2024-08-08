const router = require('express').Router();
const User = require("../models/User");
const passport = require("../config/passport");
const bcrypt = require("bcryptjs");
const { createToken, verifyToken } = require("../utils/jwtFunctions");

router.post("/api/signup", async (req, res) => {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);
        const createdUser = await User.create({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, userName: req.body.userName, password: encryptedPassword });

        if (!createdUser) {
            throw Error("User not created successfully.");
        }

        const { password, ...userWithoutPassword } = createdUser.toJSON();

        const token = createToken(userWithoutPassword);

        res.status(201).json({ message: "User created successfully.", token });

    } catch (error) {
        console.log({ error });
        res.status(500).json(error);
    }
});

router.post('/api/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) return next(err);

        if (!user) return res.status(401).json({ message: "User not found." });

        const { password, ...userWithoutPassword } = user.toJSON();

        const token = createToken(userWithoutPassword);

        return res.json({ token });
    })(req, res, next);
});

module.exports = router;
