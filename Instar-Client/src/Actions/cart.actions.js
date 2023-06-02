import axios from "axios";

export const GET_CART = "CREATE_CART";
export const ADD_CART = "ADD_CREATE"
export const DELETE_FOM_CART = "DELETE_FROM_CART"
export const getCart = (test) => {
    //get cart will make setting the cart from the beginning , if empty or not 
    return (dispatch) => {
        return axios.get (`${process.env.REACT_APP_API_URL}api/cart/user/cart/getcart/${test}`)
        .then((res) => {
            //the common type gived to the reducer 
            dispatch({type:GET_CART , payload : res.data}) ;
        })
        .catch ((err) => console.log(err));
    };
};

export const addToCart = (test,product) => {
    return (dispatch) => {
        return axios.put(`${process.env.REACT_APP_API_URL}api/cart/user/cart/addtocart/${test}`,{product})
        .then ((res) => dispatch({type:ADD_CART,payload:res.data}))
        .catch((err)=> console.log(err))
    }
}
export const deleteFromCart = (test,product) => {
    return (dispatch) => {
        return axios.put(`${process.env.REACT_APP_API_URL}api/cart/user/cart/deleteItem/${test}`,{product})
        .then ((res) => dispatch({type:DELETE_FOM_CART,payload:res.data}))
        .catch((err)=> console.log(err))
    }
}