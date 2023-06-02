const UserModel = require("../Models/user.model") ;
const ObjectId = require("mongoose").Types.ObjectId ;

//render tout les informations des utilisateurs 
module.exports.getAllusers = async (req , res) => {
    //si .select() seulement donc on va avoir tous les utilisateurs s
    //si -password donc les utilisateur sauf leurs passwords 
    const users = await UserModel .find().select("");
    res.status(200).json(users)
}
//cette fonction permet de retourner les information du personne en passant son id comme parametre 
//dans l'URL ainsi 
module.exports.userInfo = async (req,res) =>{
    //si jamais l'Id n'existe pas ou il est incorrecte on doit 
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('Id Unkown : ' + req.params.id)
    
    UserModel.findById(req.params.id , (err,docs) =>{
        if (!err) res.send(docs);
        else console.log('Id Unkown : '+ err);
    }) .select ("-password") 
}

//cette fonction accède a la base de donnée pour changer les donner de l'utilisateur 
//selon son Id passé en paramètre 
//on remarque que la valeur bio en realité ne figure pas dans le table de user 
//donc ça va etre mise a jour et ajouter dans la base 
module.exports.updateUser = async (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('Id Unkown : ' + req.params.id)
    try {
          UserModel.findByIdAndUpdate(
            req.params.id, //filter of the query
            {name : req.body.name}, //the updates to the data base 
            {new : true , upsert:true , setDefaultsOnInsert:true,returnOriginal : false},
            (err,docs) => {
                if(!err) return res.send(docs) ;
                if (err) return res.status(500).send ({message : err})
            }
        )
    } catch (err) {
        return res.status(500).json({message : err})
    }
}

module.exports.deleteUser = async (req,res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send('ID Unkown : '+ req.params.id );
    }
    try{
        await UserModel.remove({_id : req.params.id}).exec() ;
        res.status(200).json({message:"successfully deleted"})
    }catch (err){
        return res.status(500).json({message : err})
    }
}
