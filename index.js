const express = require("express");
const app = express();
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const { UserModel , AdminModel , CoursesModel,PurchasesModel } = require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
app.use(express.json());   

app.use("/user"  , userRouter);
app.use("/course"  , courseRouter);
app.use("/admin"  , adminRouter);

 async function main(){
    await mongoose.connect("mongodb+srv://shubham:wNowKTyAm8E6EKbN@cluster0.vxy54d3.mongodb.net/udemy");
    app.listen(3000);
}

main()