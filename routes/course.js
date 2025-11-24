const { Router } = require("express");
const courseRouter = Router();
const {  CoursesModel,PurchasesModel, UserModel } = require("../db");
const { userMiddleware  } = require("../middlewares/user");

courseRouter.post("/purchase", userMiddleware , async function( req , res){
    const userId = req.body.userId;
    const courseId = req.body.courseId;

    // here you should you check that user had actually paid for course
    await PurchasesModel.create({
        userId,
        courseId
    })
    res.json({
        message : "You purchase a course"
    })
});

courseRouter.get("/preview" , async function( req , res){

    const courses = await CoursesModel.find({});
    res.json({
        messsage : "Courses you can buy",
        courses
    })
});

courseRouter.get("/purchases" , userMiddleware , async function( req , res){
    const userId =req.userId;

    const purchases = await PurchasesModel.find({
        userId
    })

    const courseData = await CoursesModel.find({
            _id :{$in : purchases.map(x => x.courseId)}
    })

    res.json({
        message : "courses you bought",
        courseData
    })
})
module.exports = ({
    courseRouter : courseRouter
})