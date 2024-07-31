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

router.post("/api/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email});

        if (!user) {
            res.status(400).json({message: "User not found."})
        }

        const isAuthenticated = bcrypt.compare(password,user.password);

        if (!isAuthenticated) {
            res.status(401).json({message: "Email or Password not found."});
        }

        

    } catch (error) {
        console.log({error});
        res.status(500).json(error);
    }
})

module.exports = router;