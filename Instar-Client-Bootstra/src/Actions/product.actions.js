import axios from "axios";

//product 
//get product will return axios.get  
export const GET_PRODUCT = "GET_PRODUCT";
export const getProducts = () => {
    return (dispatch) => {
        return axios 
            .get (`${process.env.REACT_APP_API_URL}api/product/`) 
            .then ((res) => {dispatch({type:GET_PRODUCT , payload : res.data})})
            .catch((err) => console.log(err))
    }
}