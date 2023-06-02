const UserModel = require("../Models/user.model") ;
const jwt = require ('jsonwebtoken');
const { signUpErrors, signInErrors } = require("../utils/errors.utils");

const maxAge =  3*24*60*60*1000;
const createToken = (id) => {
    return jwt.sign ({id},process.env.TOKEN_SECRET,{expiresIn:maxAge})
};

module.exports.signUp = async (req , res) => {
    console.log(req.body);
    const {name , email , password} = req.body ;
    try {

        const user = await UserModel.create({name,email,password});
        res.status(201).json({ user : user._id}) ;
    }
    catch(err) {
        // const errors = signUpErrors(err)
        res.status(200).send(err);
    }
} 

module.exports.signIn = async(req, res) => {
    const {email , password} = req.body;
    try {
        const user = await UserModel.login(email,password);
        const token = createToken(user._id);
        res.cookie('jwt1',token,{httpOnly : true,maxAge});
        res.status(200).json({user : user._id  });
        //based on id we create a token 

        //we give a cookie for the user and its parameters 
        //res.coohie(name,value,options) value can be a data of any type 

    } catch (err) {
        const errors = signInErrors(err);
        res.status(400).json({errors}); 
    }
}
module.exports.logOut = async (req,res) => {
    res.cookie('jwt1' , '' , {maxAge:1});
    res.redirect('/');
}