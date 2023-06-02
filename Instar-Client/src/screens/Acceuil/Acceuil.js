import React , {useEffect,useState,useRef} from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import './acceuil.css';
import TextField from "@mui/material/TextField";
import data from "../../design.json" ;
import Tag from "./Tag" ;
import Thread from '../../Components/Thread'
import Buttons from './Buttons'
import product from "../../picture.json"
import Advanced from './Advancedfilter';
import { useDispatch } from 'react-redux/es/exports';
import {createCart} from  "../../Actions/cart.actions"
import Footer from '../../Components/Footer/Footer';

const data2 = [
    {"id":"1","name":"amine"},{"id":"2","name":"marwoucha"},{"id":"3","name":"mouhib"}
]
function Acceuil (){
    //const [cart,setCart] = useState(null)
    const [search,setSearch] = useState(null)
    // console.log(search)
    const productdata = useSelector((state) => state.productReducer)
    const userData = useSelector((state) => state.userReducer);
    const cart = useSelector((state) => state.cartReducer)
    
    //the designItems are data that contains   
    const designItems = [...new Set(data.design.map((Val) => Val.category))];

    // Define itema and setItem in every details 
    const [item,setItem] = useState([]);
    const [item1,setItem1] = useState([]);
    //filterItem is a function that filter data based on the value that is passed from the button 
    //we return a list of item 
    const filterItem = (design,data) => {
        const newItem = data.filter((newVal) => {
            return newVal.category === design
        });

        setItem(newItem);
    }
    
    const filterItemsearch = ( search,data) => {
        const newItem = data.filter ((newVal) => { 
            return newVal.owner_Name == search
        });
        setItem1(newItem)
    }
    function isEmpty(value){
        return (value == null || value === '');
      }
    

    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light bg-white navbar-custom sticky-top" >
                <a class="navbar-brand" href="#">Instar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
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
                        <button class="btn btn-danger" type="submit" 
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href=`/create`;
                        }}
                        >
                            Share your work
                        </button>
                    <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search this blog"
                     onChange={(e) => setSearch(e.target.value)}
                     value = {search}
                    />
                    <div class="input-group-append">
                        
                        <button class="btn btn-secondary" type="button" onClick ={(e) =>
                            {filterItemsearch(search,productdata,e) ;setSearch(null)} }>
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
                    
                    <button class="bouton" 
                    onClick={(e) => {
                        e.preventDefault(); 
                        window.location.href=`/client`;
                    }}
                    >
                        <img src={userData.picture} alt="" style={{
                        height:"30px" ,
                        width : "30px",
                        'border-radius': "50%",
                        // border: "10px solid #FEDE00"
                    }} />
                    </button>
                    
                </form>
            </nav>
            <div className="main"> <br/><br/>
                <div className="inside-main">
                <p className="st">Here we provide you with every aspect </p> 
                <p className="st">of design needed</p> <br/>
                </div>
                <form className='inside-main2'>   
                    <label for="default-search"
                     class=" text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-0 pointer-events-none">
                            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                         </div>
                    <input type="search" id="default-search" 
                    class=" block p-4 pl-10 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 
                    dark:focus:border-green-500" 
                    placeholder="" required />
        <button type="submit" class=" text-white absolute right-2.5 bottom-2.5 bg-green-700 
        hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300
        font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
               
            </div>

            <div className="second">
                <br/>
                <div className='d1'>To make your experience easier</div>
                <div className='d2'>here are some things that you may be interested in</div>    
                    <div className="up">
                        <span>
                            <Buttons designItems={designItems} filterItem={filterItem } productdata={productdata}/>
                        </span> 
                    </div>    
                    <div>
                        <span>
                        <Advanced/>
                        </span>
                    </div>

 
                </div>
                <div className='Non'>
                    <Thread item={item} item1={item1}/>
                </div>
                <Footer/>
        </div>
    )
}

export default Acceuil ;