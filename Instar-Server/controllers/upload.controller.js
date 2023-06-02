const UserModel =  require ('../Models/user.model');
const fs = require ("fs")
const {promisify, getSystemErrorMap} = require('util');
const pipeline = promisify(require('stream').pipeline);
const {uploadError} = require('../utils/errors.utils');
var mime = require('mime-types');
const { Console } = require('console');

module.exports.uploadProfile = async (req,res) => {
    // try {
    //     if (
    //         req.file.mimetype !== "image/jpg" &&
    //         req.file.mimetype  !== "image/png" &&
    //         req.file.mimetype  !== "image/jpeg"
    //     )
    //         throw Error("invalid file")
    //     if (req.file.size > 5000000) throw Error ("max size");
    // }catch (err){
    //     const errors = uploadError(err)
    //     return res.status(201).json({errors});
    // }
    //we get the file name from the body request
   const fileName = req.body.name + ".jpg"
   
    await pipeline (
        req.file.buffer.toString(),
        fs.createWriteStream(`${__dirname}/../Client/public/uploads/profile/${fileName}`)
    )
    //find the user Model that has the name and find his Id and update 
    try {
        UserModel.findByIdAndUpdate(
            req.body.Id,
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

//how to upload product picture te exists yet in the folder of product creation 

