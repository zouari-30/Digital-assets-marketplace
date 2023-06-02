import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import productReducer from "./product.reducer";
import cartReducer from "./cart.reducer";
import usersReducer from "./users.reducer"

export default combineReducers ({
    userReducer ,
    productReducer,
    cartReducer,
    usersReducer
})