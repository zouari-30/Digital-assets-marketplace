import React , {useState,useEffect} from 'react'

import "./login.css"
import icons from '../../Constants/icons'
import axios from 'axios'
import { useDispatch } from 'react-redux/es/exports';
import {createCart} from  "../../Actions/cart.actions"

function Login (){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('') ;
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');
    const dispatch = useDispatch() 
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}api/user/login`,
            // withCredentials : true ,
           {
                "email" : email,
                "password" : password,
             } , {withCredentials : true}
        ) 
        .then((res) => {
            
            if (res.data.errors) { 
                emailError.innerHTML = res.data.errors.email;
                password.innerHTML = res.data.errors.password ;
            } else {
                axios.post (`${process.env.REACT_APP_API_URL}api/cart//user/cart/createcart/${res.data.user}`)
                 window.location = '/'   
            }

        }
    )
        .catch( (err) => {
            console.log(err)
        }
        )
    }
    return (
        <div className='body2'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent nav-customer" >
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
                        <button type="button" class="btn btn-dark" style={{margin:"10px"}} 
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href=`/login`;
                        }}
                        >
                            Login
                        </button>
                        <button type="button" class="btn btn-light" style={{margin:"10px"}}
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href=`/signup`;
                        }}
                        >
                            signup</button>
                </form>
            </nav>
        <form action='' className='form2' onSubmit={handleLogin} id="form">
                <p className='style11'>Log to your account</p> <br/>
                <button type="submit" class="btn btn-light">
                    <span className='button-icons'>
                            <img src={icons.fb} height ="18" width="9.33" />
                    </span>
                    <span>Log in with Facebook</span>
                </button> <br/> <br/>
                <button type="submit" class="btn btn-light">
                    <span className='button-icons'>
                        <img src={icons.google}  />
                    </span>
                    <span>Log in with Google</span>
                </button> <br/> <br/>
                <button type="submit" class="btn btn-light">
                    <span className='button-icons'>
                        <img src={icons.apple}  />
                    </span>
                    <span>Log in with Apple</span>
                </button> <br/> <br/>
                <div className="divider">OR</div> 
                <div className='new' id="new">
                    <label htmlFor="email/mobilephone">Email/Mobile*</label> <br/>
                    <input 
                    class="form-control"
                    type="text" 
                    id="email" 
                    placeholder="Email or mobile number" 
                    onChange={(e) => setEmail(e.target.value)}
                    value = {email}
                    />
                    <p className="email-error"></p>
                </div> 
                <div className='new'> 
                    <label htmlFor="password">Password</label> <br/>
                    <input 
                    class="form-control"
                    type="password"
                    id="password" 
                    placeholder="************"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    /> 
                    <div className="password-error"></div> 
                </div> 
                <br/>
                <button type="submit" className='button'>
                    Log in
                </button>
                <div className="new">
                <p className="st1">
                    By continuing you agree the Instar terms of use  
                </p>
                <a  className ="st2" href="">Forget Password ?</a> 
                <p className="st1">New to instar ?   <a className ="st2" href='/signup'>sign up</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login ;