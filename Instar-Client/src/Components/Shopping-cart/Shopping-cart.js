import { createReducer } from "@reduxjs/toolkit";
import React, { useEffect, useState ,useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ReactDOM } from "react";
import { deleteFromCart } from "../../Actions/cart.actions";
import Layout from "./Layout";
const Shoppingcart = (props) => {
    const dispatch = useDispatch()
    let shoppinglist = [
        //the title should be at maximum 12 caractere 
        {
            "id" : "1",
        "picture" : 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            "title":"web-design",
            "price" : "10"
        },
        {
            "id" : "2",
            "picture" : "",
            "title":"mobile-desig",
            "price" : "20"
        },
        {
            "id" : "3",
            "picture" : "",
            "title":"sketch design",
            "price" : "30"
        },
        {
            "id" : "4",
            "picture" : "",
            "title":"sketch design",
            "price" : "30"
        },
        {
            "id" : "5",
            "picture" : "",
            "title":"sketch design",
            "price" : "30"
        }
    ];
    const cart = useSelector ((state) => state.cartReducer)
    let [list,setList] = useState([])
    let [test,setTest] = useState()
    useEffect (() => {
        if (!isEmpty(cart[0])){
           setList(cart[0].items)
           setTest(cart[0]._id)
            ;}
   },[cart[0],list] )
    function isEmpty(value){
        return (value == null || value === '');
    }
    function calculate (){
        let x =0;
        list.map((item) => {
            x+=parseInt(item.price)}
            )
            return x;
            
    }
    
    function handleClick (event,product)  {
            if (window.confirm('Are you sure you want to delete this item ?') == true){
                dispatch(deleteFromCart(test,product));
                window.location.reload();
             }
            else {
            alert("hello")}
      }
    

    

    return (
        <>
            <div class="card"  style={{"width" :  "350px"}}>
            
                {!isEmpty(list) && list.map((item) => {
                    return (
                        <> 
                        
                        <Layout item={item} handleClick={event => handleClick(event , item)} /> 
                        <div>
                            <hr/>
                        </div>

                        </>     
                    )
                })

                }
                <div>Total : {calculate()}  DNT</div>
                <div>
                    
                </div>
            </div>
        </>
    )
}
export default Shoppingcart;