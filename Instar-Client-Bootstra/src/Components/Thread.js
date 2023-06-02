import React , {useEffect , useState} from "react";
import {useDispatch , useSelector} from 'react-redux'
import { getProducts } from "../Actions/product.actions";

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle,
     MDBCardText, MDBRow, MDBCol,MDBCardGroup ,MDBCardFooter ,MDBCardHeader, MDBBtn} from 'mdb-react-ui-kit';
import SingleProduct from "./Product/SingleProduct";
import {Grid} from '@mui/material' ;
import {Col } from 'react-bootstrap'
//use effect works when the value of loadProduct become different 
const Thread = () => {
    const [loadProduct , setLoadProduct] = useState(true);
    const products = useSelector ((state) => state.productReducer)
    const dispatch = useDispatch()
    useEffect ( () => {
        if (loadProduct) {
            dispatch(getProducts()) ;
            setLoadProduct(false)
        }
    } , [loadProduct,dispatch])
    function isEmpty(value){
        return (value == null || value === '');
      }
    return ( 
        <div className="thread-container">
                {!isEmpty(products[0]) && products.map((product) => {
                    return (
                            <SingleProduct product={product} key={product._id}/>
                    )
                })

                }
            
        </div>   

    

        )
}
export default Thread;