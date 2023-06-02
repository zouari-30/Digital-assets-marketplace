const mongoose = require("mongoose")

const CartSchema =  new mongoose.Schema (
    {
        userId : {
            type : String  
        },
        items : {
           type : [Object],
        }, 
        totalQty : {
            type : Number ,
            default : 0
        },
        totalPrice : {
            type : Number,
            default : 0
        }
    }
);
const CartModel = mongoose.model('Cart',CartSchema);
module.exports = CartModel ;