const UserModel =  require ('../Models/user.model');
const router = require('express').Router();
const authController = require("../controllers/auth.controller")
const userController = require("../controllers/user.controller")
const uploadController = require ("../controllers/upload.controller")
const multer = require("multer")
const upload = multer();
//la requete post pour donner les informations 
router.post ("/signup" , authController.signUp)
router.post ("/login",authController.signIn)
router.get ("/logout",authController.logOut)
//user's display block
router.get("/",userController.getAllusers);
router.get("/:id",userController.userInfo);

router.put("/:id",userController.updateUser);
router.delete("/:id", userController.deleteUser);

//we will post on /upload 
const Storage =multer.diskStorage({
    destination:"../Instar-Client/public/uploads/profile",
    filename: (req,file,cb) => {
      cb(null, file.originalname);
    },
 });

 const uploadProfile = multer({
   storage:Storage,
 }).single('file')

// router.post ("/upload",upload.single('file'),uploadController.uploadProfile)
router.post("/upload",(req,res) => uploadProfile(req,res,(err) =>{
    if (err) {
      console.log(err);
    }
    else {
        const fileName= req.body.name;
    try {
        UserModel.findByIdAndUpdate(
            req.body.userId,
            {picture : "./uploads/profile/" + fileName},
            {new:true , upsert : true , setDefaultsOnInsert : true},
            (err,docs) => {
                if (!err) return res.send(docs) ;
                else return res.status(500).send({message : err}); 
            }
        )
    } catch (err) {
        return res.status(500).send({message: err})
    }
      }

    }))

module.exports = router;