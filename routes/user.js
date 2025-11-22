const { Router } = require("express");
const userRouter = Router();
const { UserModel } = require("../db");
const bcrypt = require('bcrypt');

userRouter.post("/signup" , async function( req , res){
            const email  = req.body.email;
            const password = req.body.password;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;

            const hashedPassword = await bcrypt.hash(password , 10);

             await UserModel.create({
                email, 
                password,
                firstName,
                lastName
             })

    res.json({
        message : "You are signup"
    })
})

userRouter.post("/signin" , async function( req , res){
    try{
    const email = req.body.eamil;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email,
    });

    const passwordMatch = await bcrypt.compare(password , user.password);

    if(user && passwordMatch ){
        const token = JsonWebTokenError.sign({
            id: user._id.toString()
        }, JWT_SECRET);
    }

    res.json({
        token : token
    })
}catch(e){
    res.status(500).json({ message: "Server error"});
}
});

userRouter.get("/purchases" , function( req , res){
    res.json({
        message : "Your courses"
    })
})

module.exports = ({
    userRouter : userRouter
})