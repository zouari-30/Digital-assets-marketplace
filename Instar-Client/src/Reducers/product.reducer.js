import { GET_PRODUCT } from "../Actions/product.actions";
import { GET_PRODUCT_id } from "../Actions/product.actions";
import { LIKE_PRODUCT } from "../Actions/product.actions";
import { UNLIKE_PRODUCT } from "../Actions/product.actions";
const initialState = {} ;

export default function productReducer (state= initialState, action) {
    switch (action.type) {
        case GET_PRODUCT :
            return action.payload ;
        case GET_PRODUCT_id :
            return action.payload ; 
        case LIKE_PRODUCT:
            return state.map ((product) => {
                if (product._id === action.payload.productId) {
                    return {
                        ... product,
                        likers : [action.payload.userId, ...product.likers]
                    }
                }
                return product;
            })
        case UNLIKE_PRODUCT:
                return state.map ((product) => {
                    if (product._id === action.payload.productId) {
                        return {
                            ... product,
                            likers : product.likers.filter((id) => id != action.payload.userId)
                        }
                    }
                    return product;
                })    
        default :
        return state     
    }
}