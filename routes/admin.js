const { Router } = require ("express");
const adminRouter = Router();
const {  AdminModel } = require("../db");

adminRouter.post("/signup" , function( req , res){
    res.json({
        message : "You are signup"
    })
})
adminRouter.post("/signin" , function( req , res){
    res.json({
        message : "You are signin"
    })
})
adminRouter.post("/course" , function( req , res){
    res.json({
        message : "Course Uploaded"
    })
})
adminRouter.put("/course" , function( req , res){
    res.json({
        message : "make chnage in course"
    })
})
adminRouter.get("/course/bulk" , function( req , res){
    res.json({
        message : "this is your all courses"
    })
})
adminRouter.delete("/course" , function( req , res){
    res.json({
        message : "your course is deleted"
    })
})

module.exports = ({
    adminRouter : adminRouter
})