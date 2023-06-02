const CartModel = require("../Models/cart.model");
const ObjectId = require("mongoose").Types.ObjectId ;

//when the customer click on the add to basket that this function works 
//if someone clicks the button 2 times ? 
module.exports.addToCart = async(req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID UNKOWN : ' + req.params.id); 
    else {   
    CartModel.findByIdAndUpdate(
        req.params.id ,
        {$addToSet: {items : req.body.product} ,
        $inc : {totalQty : req.body.product.quantity , totalPrice:req.body.product.price}
        },
        {new:true , upsert : true , setDefaultsOnInsert : true },
        (err,docs) => {
            if (!err) return res.send(docs) ;
            else return res.status(500).send({message : err}); 
        }
    )
    }
}
//         
module.exports.createCart = async (req,res) => {
    const newCart = new CartModel ({
        userId : req.params.id
    })
    try {
        const cart = await newCart.save()
        return res.status(201).json(cart);
    } catch (err) {
        return res.status(400).send(err);
    } 
}

module.exports.getCart = async (req,res) => {
    const cart = await CartModel .find({userId : req.params.id})
    res.status(200).json(cart)
}
//delete an object from the list 
module.exports.deleteFromCart = async (req,res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send('ID Unkown : '+ req.params.id );
    }
    else {
    CartModel.findByIdAndUpdate(
            req.params.id ,
            {$pull: { items : req.body.product},
            $inc : {totalQty : -req.body.product.quantity , totalPrice:-req.body.product.price}
             },
            {new:true , upsert : true , setDefaultsOnInsert : true },
            (err,docs) => {
                if (!err) return res.send(docs) ;
                else return res.status(500).send({message : err}); 
            }
        ) 
    }
}

//delete cart after logging out the page 
module.exports.deleteCart = async (req,res) => {
        if (!ObjectId.isValid(req.params.id))
            return res.status(400).send('ID UNKOWN : ' + req.params.id);
        CartModel.findByIdAndRemove(req.params.id, (err,docs) => {
            if (!err) res.send(docs);
            else console.log("Delete error : " + err)
        })    
}
