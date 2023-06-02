import { createContext, useContext, useEffect, useReducer } from "react";
import commerce from "../lib/commerce";
const CartStateContext = createContext()
const CartDispatchContext =  createContext()
const SET_CART = "SET_CART"
const initialState = {
    total_items :0,
    total_unique_items :0,
    line_items : []
}
const reducer = (state,action) => {
    switch(action.type) {
        case SET_CART :
            return {...state,...action.payload}
        default :
            throw new Error ()    
    }
}
export const CartProvider = ({children}) => {
    useEffect (()=> {
        getCart();
    },[]);
    const [state,dispatch] = useReducer (reducer,initialState)
    const setCart = (payload) =>  dispatch ({type:SET_CART,payload})
    const getCart = async () => {
        try {
            const cart = await commerce.cart.retrieve()
            // console.log(cart)
           setCart(cart)
        } catch (err) {
            console.log(err)
        }
    };
 
return (
    <CartDispatchContext.Provider value={{ setCart }}>
        <CartStateContext.Provider value={state}>
             {children} 
        </CartStateContext.Provider>
    </CartDispatchContext.Provider>
);}


export const useCartState =  () => useContext(CartStateContext)
export const useCartDispatch =  () => useContext(CartDispatchContext)