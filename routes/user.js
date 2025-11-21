const { Router } = require("express");
const userRouter = Router();
const { UserModel , AdminModel , CoursesModel,PurchasesModel } = require("../db");

userRouter.post("/signup" , function( req , res){
    res.json({
        message : "You are signup"
    })
})

userRouter.post("/signin" , function( req , res){
    res.json({
        message : "You are signin"
    })
})

userRouter.get("/purchases" , function( req , res){
    res.json({
        message : "Your courses"
    })
})

module.exports = ({
    userRouter : userRouter
})