//vérifier la signature du jeton jwt et récupère les informations du token .
const jwt = require('jsonwebtoken');
const userModel = require ('../Models/user.model');
module.exports.checkUser = (req,res,next) => {
    const token = req.cookies.jwt1;
    console.log(req.cookies);
    if (token){
        jwt.verify(token,process.env.TOKEN_SECRET, async (err,decodedToken) => {
            if (err) {
                res.locals.user = null;
                res.cookie("jwt1",'',{maxAge:1});
                next();
            } else {
                let user = await userModel.findById(decodedToken.id);
                res.locals.user = user ;
                console.log(res.locals.user );
                next();
            }
        })
    } else {
        res.locals.user = null ;
        next();
    }
} 

module.exports.requireAuth = (req,res,next) => {
    const token = req.cookies.jwt1;
    if (token){
        jwt.verify(token,process.env.TOKEN_SECRET,async (err , decodedToken) => {
            if (err){
                console.log(err)
            } else {
                console.log(decodedToken.id);
                next();
            }
        })
    } else {
        console.log("hello No Token");
    }
}