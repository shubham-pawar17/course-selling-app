const { Router } = require("express");
const userRouter = Router();
const { UserModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");

userRouter.post("/signup", async function (req, res) {
    try {
        const { email, password, firstName, lastName } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });

        res.json({ message: "You are signed up" });
    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
});

userRouter.post("/signin", async function (req, res) {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(403).json({ message: "Incorrect password" });
        }

        const token = jwt.sign(
            { id: user._id.toString() },
            JWT_USER_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message: "You are signed in successfully",
            token: token
        });

    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
});

userRouter.get("/purchases", function (req, res) {
    res.json({ message: "Your courses" });
});

module.exports = {
    userRouter,
};
