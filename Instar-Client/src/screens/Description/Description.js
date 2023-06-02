import React ,{useEffect, useState , useContext } from "react"
import axios from "axios";
import { useSelector } from 'react-redux';
import './description.css'
import Scroll from './Scroll'
import {useParams} from 'react-router-dom'
import { getProductsbyid } from "../../Actions/product.actions";
import { useDispatch } from 'react-redux/es/exports';
import {UidContext} from "../../Components/AppContext";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import useForceUpdate from 'use-force-update';
import { addToCart } from "../../Actions/cart.actions";
import Popup from 'reactjs-popup';
import { element } from "prop-types";
const Description = () => {
    //const forceUpdate = useForceUpdate();
    const dispatch = useDispatch()
    const product = useSelector ((state) => state.productReducer)
    const [clicked,setClicked] = useState(false)
    const cart = useSelector((state) => state.cartReducer)
    function addCart () {
        dispatch(addToCart(cart[0]._id,product))
        setClicked(true)
        window.location.reload()
    }
    //when l'utilisateur render the page the state of the product should be maintained at true 
    //if the user has already clicked it 
//    function isFound (array , test) {
//         array.some( element => {
//             if (element._id === test.id) {
//               return true;
//             }
//             return false;}
//         )}
        let test = useParams("id")
    useEffect (() => {
         if (!isEmpty(cart[0])){
            cart[0].items.map(element => {
                if (element._id === test.id) {
                    setClicked(true)
                }
            }) ;}
    },[cart[0],test,product,clicked] )

    function isEmpty(value){
        return (value == null || value === '');
      }

   
   //get the product by id to show the different element of the product
   useEffect ( () => {
         dispatch(getProductsbyid(test.id))  } , [dispatch]
 )


    const userData = useSelector((state) => state.userReducer); 
    let [num, setNum]= useState(0);
    let handleChange = (e)=>{
        setNum(e.target.value);
       }
    let incNum =()=>{
        if(num<10)
        {
        setNum(Number(num)+1);
        }
      };
    let decNum = () => {
        if(num>0)
        {
         setNum(num - 1);
        }
     }


    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-custom" >
                <a class="navbar-brand" href="#">Instar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Design</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Template</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                    </ul>
                </div>
                <form class="form-inline">
                        <button class="btn btn-danger" type="submit">
                            Share your work
                        </button>
                    <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search this blog"/>
                    <div class="input-group-append">
                        
                        <button class="btn btn-secondary" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                    </div>
                    {!isEmpty(cart[0]) &&
                    <button class="bouton1" data-count={cart[0].totalQty} onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href="/shopping";
                        }}>
                        <i class="bi bi-cart"></i>
                    </button>}
                    <button class="bouton">
                        <i class="bi bi-bell"></i>
                    </button>
                    
                    <button class="bouton">
                        <img src={userData.picture} alt="" style={{
                        height:"30px" ,
                        width : "30px",
                        'border-radius': "50%",
                        // border: "10px solid #FEDE00"
                    }} />
                    </button>
                    
                </form>
            </nav>
            <div>
                <div class="card" style={{"width" :  "50rem" ,"height" :"32rem"  }}>
                    <div class="image-container">
                        <Scroll products={product} />
                    </div>
                    <div class="card-body">
                        <span>{product.description}</span>
                        <span></span>
                        <div>{product.price} DNT</div>
                        <div>
                        <button class="btn btn-secondary"> Buy</button>
                         {!isEmpty(cart[0]) && !clicked && <button class="btn btn-danger" onClick={addCart}>
                            Add to basket
                        </button>}
                        {clicked && <p>This Item Was added to your shopping cart</p>}
                        
                        </div>
                        {/* <div className="col-xl-2">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                </div>
                                <input type="text" class="form-control" value={num} onChange={handleChange}/>
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>    
            </div>
        </div>
    )
}
export default Description;