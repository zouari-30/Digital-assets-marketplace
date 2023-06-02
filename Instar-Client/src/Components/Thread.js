import React , {useEffect , useState} from "react";
import {useDispatch , useSelector} from 'react-redux'
import { getProducts } from "../Actions/product.actions";
import Card1 from "./Product/Card1.js";
import Card2 from "./Product/Card2.js"
//use effect works when the value of loadProduct become different 
const Thread = (props) => {
    let filterdata =props.item;
    let filterdatasearch = props.item1;
    const products = useSelector ((state) => state.productReducer)
    const usersData= useSelector((state) => state.usersReducer)
    const [loadProduct , setLoadProduct] = useState(true);
    const [count,setCount] = useState(16)
    
    const dispatch = useDispatch()
    const LoadMore = () => {
        setLoadProduct(true)
    }
    useEffect ( () => {
        if (loadProduct) {
            dispatch(getProducts(count)) ;
            setLoadProduct(false)
            setCount(count+8)
        }
        document.getElementById("mybtn").addEventListener("click" , LoadMore)
    } , [loadProduct,dispatch])
    function isEmpty(value){
        return (value == null || value === '');
      }
    return ( 
        <div className="container px-4 text-center">
            <div className="row">
                {!isEmpty(products[0]) && isEmpty(filterdata[0]) && isEmpty(filterdatasearch[0]) && products.map((product)   => {
                    return (
                        <div class="col-md-3" style={{"margin-bottom" : "35px"}}>
                            <Card1 product={product} key={product._id} usersData={usersData}/> 
                        </div>     
                    )
                }) }

                {!isEmpty(filterdata[0]) && isEmpty(filterdatasearch[0]) && filterdata.map((product)   => {
                    return (
                        <div class="col-md-3" style={{"margin-bottom" : "35px"}}>
                            <Card2 product={product} key={product._id} usersData={usersData}/> 
                        </div>     
                    )
                })
                }
                {!isEmpty(filterdatasearch[0]) && isEmpty(filterdata[0]) && filterdatasearch.map((product)   => {
                    return (
                        <div class="col-md-3" style={{"margin-bottom" : "35px"}}>
                            <Card2 product={product} key={product._id} usersData={usersData}/> 
                        </div>     
                    )
                })
                }

             </div>   
             <button id="mybtn" class="btn btn-dark"> See more </button>
             <hr/>
        </div>   
        )
}
export default Thread;