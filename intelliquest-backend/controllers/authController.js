const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/api/signup", async (req, res) => {
    try {
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);
        const createdUser = await User.create({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, userName: req.body.userName, password: encryptedPassword });

        if (!createdUser) {
            throw Error("User not created successfully.");
        }
        const { password, ...userWithoutPassword } = createdUser.toJSON();
        res.status(201).json({ message: "User created successfully.", userWithoutPassword });
    } catch (error) {
        console.log({error});
        res.status(500).json(error);
    }
});

module.exports = router;