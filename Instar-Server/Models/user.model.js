const mongoose = require ('mongoose') ;
const {isEmail} = require ('validator');
const bcrypt = require ('bcrypt') ;  

const userSchema = new mongoose.Schema (
    {
        name : {
            type : String ,
            required : true ,
            minLength : 3,
            maxLength : 55,
            unique : true ,
        } ,
        email : {
            type : String ,
            required : true ,
            validate : [isEmail], 
            lowercase : true ,
            unique : true,
        } ,
        password : {
            type : String ,
            required : true ,
            max : 1024 ,
            minLength : 8,
            unique : true,
        },
        picture : {
            type : String,
            default : "./uploads/profile/random.jpg"
        },
        likes : {
            type : [String]
        }

    }
)
//bcrypt the user password when he want to signup and register
userSchema.pre("save" , async function(next){
    const hash = await bcrypt.genSalt() ;
    this.password = await bcrypt.hash(this.password,hash);
    next()
})
//login function for the server 
userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email});
    //if he found a one user 
    if (user){
        const auth = await bcrypt.compare(password,user.password) ;
        //if password matches the user password 
        if (auth){
            return user;
        }
        throw  new Error ("incorrect password");
    }
    throw  new Error ("incorrect Email");
} ;

//create the user's table in Instar-project Data base 
const UserModel = mongoose.model('user',userSchema) ;

module.exports = UserModel ;