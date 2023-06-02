import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

//product 
//get product will return axios.get  
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_id ="GAT_Product_id";
export const LIKE_PRODUCT = "LIKE_PRODUCT";
export const UNLIKE_PRODUCT = "UNLIKE_PRODUCT";

export const getProducts = (num) => {
    return (dispatch) => {
        return axios 
            .get (`${process.env.REACT_APP_API_URL}api/product/`) 
            .then ((res) => 
            {const array = res.data.slice(0,num)
            dispatch({type:GET_PRODUCT , payload : array})})
            .catch((err) => console.log(err))
    }
}

export const getProductsbyid = (test) => {
    return (dispatch) => {
        return   axios
        .get (`${process.env.REACT_APP_API_URL }api/product/${test}`)
        .then ((res) => dispatch({type:GET_PRODUCT_id , payload : res.data}))
        .catch((err) => console.log(err))
        
    }
    
}

export const likeProduct = (productId,userId) => {
    return (dispatch) => {
        return axios.patch(`${process.env.REACT_APP_API_URL }api/product/like-product/` + productId,{id : userId})
        .then (dispatch({type:LIKE_PRODUCT , payload:{productId,userId}}))
        .catch ((err) => console.log(err))
    }
} 

export const unlikeProduct = (productId,userId) => {
    return (dispatch) => {
        return axios ({
            method :'patch',
            url : `${process.env.REACT_APP_API_URL }api/product/unlike-product/` + productId,
            data : {id : userId}
        }).then ( dispatch({type:UNLIKE_PRODUCT ,payload:{productId,userId}}))
        .catch ((err) => console.log(err))
    }
} 