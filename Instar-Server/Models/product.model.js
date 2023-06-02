const mongoose = require ('mongoose')
const ProductSchema = new mongoose.Schema ( 
    {
        productId :{
            type:String,
            required:true
        },
        picture : {
            type:String,
            default : "./uploads/products/random.jpg"
        },
        productpictures :{
            type : [String],
               
        },
        likers : {
            type: [String] ,
            required : true ,
        },
        owner_Name : {
            type:String ,
        },
        category : {
            type : String ,
        }
        //add the date of the product added date is with date type
        //add a tag to the product the tag product is a string 
        //add color choice to the product  color is with a state 
        //add the made with application , the type is with string 
    }
)

const ProductModel = mongoose.model('Product',ProductSchema);
module.exports = ProductModel;