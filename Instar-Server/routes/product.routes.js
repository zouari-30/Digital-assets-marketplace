const router = require('express').Router();
const productController = require("../controllers/product.controller");
const multer = require ('multer')
const upload = multer()
const ProductModel =  require ('../Models/product.model');

router.get('/',productController.readProduct);
router.get('/:id',productController.readProductbyid);
router.post('/',productController.createProduct);
router.put ('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct) ;
router.patch ('/like-product/:id',productController.likeProduct);
router.patch ('/unlike-product/:id',productController.unlikeProduct);

const Storage =multer.diskStorage({
    destination:"../Instar-Client/public/uploads/products",
    filename: (req,file,cb) => {
      cb(null, file.originalname);
    },
 });

 const uploadPicture = multer({
   storage:Storage,
 }).single('file')

// router.post ("/upload",upload.single('file'),uploadController.uploadProfile)
router.post("/upload-product",(req,res) => uploadPicture(req,res,(err) =>{
    if (err) {
      console.log(err);
    }
    else {
        const fileName= req.file.originalname;
    try {
        ProductModel.findByIdAndUpdate(
            req.body._id,
            {picture : "./uploads/products/" + fileName},
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
const Storage1 =multer.diskStorage({
      destination:"../Instar-Client/public/uploads/products",
      filename: (req,file,cb) => {
        cb(null, file.originalname);
      },
   });
  
  const uploadPictures = multer({
     storage:Storage1,
   }).single('file')

  // router.post ("/upload",upload.single('file'),uploadController.uploadProfile)
  router.post("/upload-products/:id",(req,res) => uploadPictures(req,res,(err) =>{
      if (err) {
        console.log(err);
      }
      else {
          const fileName= req.file.originalname;
          console.log(req.params.id)
          url = "./uploads/products/" + fileName 
      try {
          ProductModel.findByIdAndUpdate(
              req.params.id,
              {$addToSet: {productpictures : url} },
              {new:true , upsert : true , setDefaultsOnInsert : true },
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

module.exports = router ;