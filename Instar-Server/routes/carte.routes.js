const router = require('express').Router();
const cartController = require("../controllers/cart.controller");


router.post ("/user/cart/createcart/:id",cartController.createCart);
router.get("/user/cart/getcart/:id",cartController.getCart);
router.put("/user/cart/addtocart/:id",cartController.addToCart);
// router.get("/user/getCartItems", cartController.getFromCart);
router.put("/user/cart/deleteItem/:id",cartController.deleteFromCart);
router.delete("/user/cart/deletecart/:id",cartController.deleteCart)

module.exports = router ;