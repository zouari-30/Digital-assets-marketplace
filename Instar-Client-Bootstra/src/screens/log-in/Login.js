import React , {useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./login.css"
import icons from '../../Constants/icons'
import axios from 'axios'

function Login (){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('') ;
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');
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
                passwordError.innerHTML = res.data.errors.password ;
            } else {
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
        <Navbar/>
        <form action='' className='form2' onSubmit={handleLogin} id="form">
                <p className='style11'>Log to your account</p> <br/>
                <button type="submit" className='bttt1'>
                    <span className='button-icons'>
                            <img src={icons.fb} height ="18" width="9.33" />
                    </span>
                    <span>Log in with Facebook</span>
                </button> <br/> <br/>
                <button type="submit" className='bttt2'>
                    <span className='button-icons1'>
                        <img src={icons.google} height ="25" width="26" />
                    </span>
                    <span>Log in with Google</span>
                </button> <br/> <br/>
                <button type="submit" className='bttt3'>
                    <span className='button-icons1'>
                        <img src={icons.apple} height ="18" width="14.77" />
                    </span>
                    <span>Log in with Apple</span>
                </button> <br/> <br/>
                <div className="divider">OR</div> 
                <div className='new' id="new">
                    <label htmlFor="email/mobilephone">Email/Mobile*</label> <br/>
                    <input 
                    type="email" 
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
                <p className="st1">New to instar ?   <a className ="st2" href=''>sign up</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login ;