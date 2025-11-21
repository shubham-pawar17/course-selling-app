const { Router } = require("express");
const courseRouter = Router();
const { UserModel , AdminModel , CoursesModel,PurchasesModel } = require("../db");

courseRouter.post("/purchase" , function( req , res){
    res.json({
        message : "You purchase a course"
    })
})
courseRouter.get("/preveiw" , function( req , res){
    res.json({
        message : "courses you can buy"
    })
})
module.exports = ({
    courseRouter : courseRouter
})