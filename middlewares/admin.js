const { JWT_USER_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function adminMiddleware(req , res , next){
    const token = req.body.token;
    const decoded = jwt.verify(token , JWT_USER_SECRET);

    if(decoded){
        req.creatorId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message : "You are not signed in "
        })
    }
}

module.exports = {
    adminMiddleware : adminMiddleware
}