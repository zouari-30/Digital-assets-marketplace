const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: "./Config/config.env" });
require ('./Config/db') ;
const bodyParser = require ("body-parser")
const cookieParser = require ("cookie-parser")
const port = process.env.PORT || 5000;
const userRoutes = require ('./routes/user.routes')
//link to product routes 
const productRoutes = require ('./routes/product.routes')
const cartRoutes = require('./routes/carte.routes')
const {checkUser , requireAuth} = require ('./middleware/auth.middleware')
app.use(cors());
app.use(express.json());


//cors with node js and javascript 
const corsOptions = {
  origin:process.env.CLIENT_URL ,
  withCredentials:true ,
  'allowedHeaders' : ['sessionId','Content-Type'],

  'exposedHeaders' : ['sessionId'],
  'methods' : 'GET,HEAD,PUT,PATCH,POST,DELEATE',
  'preflightContinue': false
} 

app.use(cors(corsOptions))

//traiter data transiter du point A au point B 
app.use(bodyParser.json()) ;
app.use (bodyParser.urlencoded({extended:true})) ;
app.use(cookieParser());

//jwt 
app.get('*',checkUser);
app.get("/jwtid",requireAuth , (req,res) => {
  res.status(200).send(res.locals.user._id)
})
//routes 
  app.use ('/api/user' , userRoutes)
  app.use ('/api/product',productRoutes)
  app.use ('/api/cart',cartRoutes)
//server 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});