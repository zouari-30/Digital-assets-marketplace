import { GET_CART } from "../Actions/cart.actions";
import { ADD_CART } from "../Actions/cart.actions";
import { DELETE_FOM_CART } from "../Actions/cart.actions";
const initialState = {};
export default function cartReducer(state=initialState , action) {
    switch (action.type) {
        case GET_CART : 
            return action.payload 
        case ADD_CART :
            return action.payload  
        case DELETE_FOM_CART:
            return action.payload      
        default :
            return state;
    }
}