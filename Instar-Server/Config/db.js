const mongoose = require("mongoose") ;
require('dotenv').config ({path : './config.env'})
const URL = process.env.ATLAS_URI ;

mongoose
.connect (URL, 
  {
    useNewUrlParser : true ,
    useUnifiedTopology : true ,
    autoIndex : true ,
  }
)
.then (() => console.log("Connected to mongoodb"))
.catch ((err) => console.log("failed to connect to mongoo db",err));
