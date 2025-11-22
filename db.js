const mongoose = require("mongoose");
const Schema = mongoose.Schema;
console.log("connected to db ")
mongoose.connect("");
// or const { Schema } = require("mongoose")
const ObjectId = mongoose.Types.ObjectId;

//Schema for Users
const User = new Schema({
    firstName : String ,
    lastName : String ,
    email : String ,//{type : String , unique : true} ,
    password : String
});

//Schema for admin
const Admin = new Schema({
    firstName : String ,
    lastName : String ,
    email : {type : String , unique : true} ,
    password : String
});

//Schema for courses
const Courses = new Schema({
    title : String ,
    description : String ,
    price : Number ,
    imgUrl : String,
    creatorId : ObjectId
});

//Schema for purchases 
const Purchases = new Schema({
    creatorId : ObjectId ,
    userId : ObjectId ,
})

const UserModel = mongoose.model("users" , User);
const AdminModel = mongoose.model("creators" , Admin);
const CoursesModel = mongoose.model("courses" , Courses);
const PurchasesModel = mongoose.model("purchases" , Purchases);

module.exports = ({
UserModel:UserModel,
AdminModel :AdminModel,
CoursesModel : CoursesModel, 
PurchasesModel :PurchasesModel,
mongoose
})