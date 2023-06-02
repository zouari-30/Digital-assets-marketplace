import React , {Component} from 'react';
import './Navbar1.css'
import {MenuItems} from '../Navbar/MenuItems' ; 
import icons from '../../Constants/icons' ;
import image from '../../Constants/image'
import { useSelector } from 'react-redux';

const Navbar1 = () => {
    const userData = useSelector((state) => state.userReducer)
        return (
            <nav className ="navbar">
                <h1>Instar</h1>
                <ul className="menu">
                    {MenuItems.map((item , index) => {
                        return (
                            <li key={index}>
                                <a className="links-nav"  href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    } )}
                </ul>
                <button className="Acbutton">share your work</button>
                <div> 
                    <span className="icon1" >
                        <img src={icons.search}/>
                    </span>
                    <span className="icon" >
                        <img src={icons.basket}/>
                    </span>
                    <span className="icon" >
                        <img src={icons.notification}/>
                    </span>
                    <span className="icon">
                        <img src={userData.picture }                    
                         style={{
                        height:"30px" ,
                        width : "30px",
                        'border-radius': "50%",
                        // border: "10px solid #FEDE00"
                    }} />
                    </span>
                </div>
            </nav>   
        )
    }
 

export default Navbar1;