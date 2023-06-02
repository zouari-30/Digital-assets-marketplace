const ProductModel = require("../Models/product.model");
const UserModel = require("../Models/product.model");
const ObjectId = require("mongoose").Types.ObjectId ;
const fs = require ("fs")
const {promisify, getSystemErrorMap} = require('util');
const pipeline = promisify(require('stream').pipeline);
const {uploadError} = require('../utils/errors.utils');
var mime = require('mime-types')
module.exports.readProduct = (req,res) => {
    ProductModel.find((err,docs) => {
        if (!err) res.send((docs))
        else console.log ('error to get data :' + err)
    })
}
module.exports.readProductbyid = async (req,res) =>{
    //si jamais l'Id n'existe pas ou il est incorrecte on doit 
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('Id Unkown : ' + req.params.id)
    
    ProductModel.findById(req.params.id , (err,docs) =>{
        if (!err)  res.send(docs);
        else console.log('Id Unkown : '+ err);
    }) 
}

module.exports.createProduct = async (req,res) => {
    const newProduct = new ProductModel ({
        productId : req.body.productId,
        picture :  "./uploads/products/undefine.jpg",
        likers : [],
        productpictures : [],
        owner_Name : req.body.owner_Name
    })
    try {
        const product = await newProduct.save()
        return res.status(201).json(product);
    } catch (err) {
        return res.status(400).send(err);
    } 
}

module.exports.updateProduct = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID UNKOWN : ' + req.params.id); 
    
    ProductModel.findByIdAndUpdate(
        req.params.id,
        {new:true},
        (err,docs) => {
            if (!err) res.send(docs);
            else console.log("update error :" + err);
        }
    )    
    
}
module.exports.deleteProduct = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID UNKOWN : ' + req.params.id);
    ProductModel.findByIdAndRemove(req.params.id, (err,docs) => {
        if (!err) res.send(docs);
        else console.log("Delete error : " + err)
    })    
}

module.exports.likeProduct = async (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID UNKOWN : ' + req.params.id);
    try{
       await ProductModel.findByIdAndUpdate( 
            req.params.id ,  //parameter that are passed with URL 
            { $addToSet : {likers: req.body.id}} , //Id is the req.body
            { new : true} , 
            (err,docs) => {
                if (err)  res.status(400).send(err)
            });
            //we find the user that have the req.body.id and add likers  
        await UserModel.findByIdAndUpdate (
            req.body.id ,
            {$addToSet : {likes : req.params.id}},
            {new:true},
            (err,docs) => {
                if (!err) res.send(docs)
                else return res.status(400).send(err)
            }
        )    
    } catch(err) {res.status(400).send(err);}
}
module.exports.unlikeProduct = async (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID UNKOWN : ' + req.params.id);
    try{
        await ProductModel.findByIdAndUpdate( 
             req.params.id ,  //parameter that are passed with URL 
             { $pull : {likers: req.body.id}} , //Id is the req.body
             { new : true} , 
             (err,docs) => {
                if (err) return res.status(400).send(err);
             });
             //we find the user that have the req.body.id and add likers  
         await UserModel.findByIdAndUpdate (
             req.body.id ,
             {$pull : {likes : req.params.id}},
             {new:true},
             (err,docs) => {
                 if (!err) res.send(docs)
                 else return res.status(400).send(err)
             }
         )    
     } catch(err) {res.status(400).send(err);}
    
}