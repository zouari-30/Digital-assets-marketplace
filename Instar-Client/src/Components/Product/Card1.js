import axios from 'axios'
import ReactDOM from 'react-dom/client';
import React, { useEffect , useState , useCallback } from 'react'
import { useSelector } from 'react-redux/es/exports'
import LikeButton from './LikeButton'
import "./card1.css"

const style ={
    "height":"30px" ,
    "width" : "30px",
    "border-radius": "50%",
    "margin-right":"10px"
}
const style1={
    "margin-right" :"20px"
}

const Card1 = ({product , usersData}) => {

    const cart = useSelector((state) => state.cartReducer)

    function addToCart () {
        axios.put(`${process.env.REACT_APP_API_URL}api/cart/user/cart/addtocart/${cart[0]._id}`,{product})
        window.location.reload()
    }

    return(
    <div class="card" style={{"width" :  "15rem"}}>
            <div class="image-container">
                <div class="first">
    			    <div class="d-flex justify-content-between align-items-center">

                    <button type="button" class="btn btn-link" onClick={addToCart}>
                        <span class="wishlist"><i class="bi bi-plus-circle"></i> </span>
                    </button>
                    <button type="button" class="btn btn-link">
                        <span class="wishlist"> <i class="fa fa-heart-o" style={{"color":"red"}}></i></span>
                    </button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button type="button" class="btn btn-link" 
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href=`/description/${product._id}`;
                        }}>
                        <span class="wishlist"> <i class="bi bi-stickies"></i></span>
                        </button>
    			    </div>
                </div>
                    <img src={product.picture} class="card-img-top" alt="..."/>  
                  
            </div>    
        <div class="card-body">
            <div class="card-body-container">
            <img src={usersData.map((user) =>{if (user._id === product.productId) return user.picture}).join('')}
             style={style}/>
            <h6 style={style1}>{usersData.map((user) =>{if (user._id === product.productId) return user.name}).join('')}</h6>
            <LikeButton product={product} /> <span> {product.likers.length}</span>
            </div>
        </div>
    </div>
    )
}

export default Card1 ;
