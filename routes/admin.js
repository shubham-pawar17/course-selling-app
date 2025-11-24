const { Router } = require ("express");
const adminRouter = Router();
const {  AdminModel, CoursesModel } = require("../db");
const { JWT_ADMIN_SECRET } = require("../config");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require("../middlewares/admin");

adminRouter.post("/signup" , async function( req , res){
    try {
            const { email, password, firstName, lastName } = req.body;
    
            const hashedPassword = await bcrypt.hash(password, 10);
    
            await AdminModel.create({
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

adminRouter.post("/signin" , async function( req , res){
    try {
            const { email, password } = req.body;
    
            const admin = await AdminModel.findOne({ email });
            if (!admin) {
                return res.status(403).json({ message: "admin  not found" });
            }
    
            const passwordMatch = await bcrypt.compare(password, admin.password);
            if (!passwordMatch) {
                return res.status(403).json({ message: "Incorrect password" });
            }
    
            const token = jwt.sign(
                { id: admin._id.toString() },
                JWT_ADMIN_SECRET,
                { expiresIn: "7d" }
            )
    
            res.json({
                token: token,
                message: "You are signed in successfully",
            });
    
        } catch (e) {
            res.status(500).json({ message: "Server error" });
        }
});

adminRouter.post("/course" , async function( req , res){
    const adminId = req.creatorId ;

    const { title, description, imagrUrl, price} = req.body;

    const course = await CoursesModel.create({
        title : title ,
        description : description ,
        imgUrl : imagrUrl ,
        price : price,
        creatorId : adminId
    })
    res.json({
        message : "Course created",
        courseId :  course._id
    })
});

adminRouter.put("/course" , adminMiddleware ,  async function( req , res){
    const adminId = req.creatorId ;

    const { title, description, imagrUrl, price} = req.body;

    const course = await CoursesModel.updateOne({
        _id : courseId ,
        creatorId : adminId 
    },
    {
        title : title ,
        description : description ,
        imgUrl : imagrUrl ,
        price : price,
        creatorId : adminId
    })
    res.json({
        message : "Course updated !",
        courseId :  course._id
    })
});

adminRouter.get("/course/bulk" , adminMiddleware , async function( req , res){
    const adminId = req.creatorId ; 

    const courses = await CoursesModel.find({
        creatorId : adminId 
    });

    res.json({
        message : "this is your all courses",
        courses
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